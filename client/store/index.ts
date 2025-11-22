import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Contact, Visitor, AnalyticsData } from "@shared/types";

// =============================================
// STATE INTERFACES
// =============================================
interface ContactState {
  contacts: Contact[];
  isSubmitting: boolean;
  error: string | null;
  lastSubmittedContact: Contact | null;
}

interface VisitorState {
  currentVisitor: Visitor | null;
  sessionId: string | null;
  visitorId: number | null;
  isTracking: boolean;
}

interface AnalyticsState {
  data: AnalyticsData[];
  isLoading: boolean;
  error: string | null;
}

interface AppState extends ContactState, VisitorState, AnalyticsState {
  // Contact Actions
  submitContact: (data: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) => Promise<any>;
  resetContactError: () => void; // Visitor Actions
  initializeVisitor: (sessionId: string) => Promise<void>;
  trackPageView: (pageUrl: string, pageTitle?: string) => Promise<void>;
  setVisitorId: (id: number) => void;

  // Analytics Actions
  fetchAnalytics: (days?: number) => Promise<void>;
}

// =============================================
// API BASE URL
// =============================================
const API_BASE_URL = "https://garbrix.com/disrupting";

// =============================================
// STORE IMPLEMENTATION
// =============================================
export const useAppStore = create<AppState>()(
  devtools(
    (set, get) => ({
      // Initial State
      contacts: [],
      isSubmitting: false,
      error: null,
      lastSubmittedContact: null,
      currentVisitor: null,
      sessionId: null,
      visitorId: null,
      isTracking: false,
      data: [],
      isLoading: false,

      // =============================================
      // CONTACT ACTIONS
      // =============================================
      submitContact: async (contactData) => {
        set({ isSubmitting: true, error: null });

        try {
          const state = get();
          const visitorId = state.visitorId;

          const response = await fetch(`${API_BASE_URL}/contact_form.php`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...contactData,
              visitor_id: visitorId,
              source: "modal_form",
            }),
          });

          const data = await response.json();

          if (!response.ok || data.error) {
            throw new Error(data.error || "Failed to submit contact form");
          }

          // Update state with new contact
          set({
            isSubmitting: false,
            error: null,
            lastSubmittedContact: data.contact || null,
          });

          return data;
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "An error occurred";
          set({
            isSubmitting: false,
            error: errorMessage,
          });
          console.error("Store submitContact error:", error);
          throw error;
        }
      },

      resetContactError: () => {
        set({ error: null });
      },

      // =============================================
      // VISITOR TRACKING ACTIONS
      // =============================================
      initializeVisitor: async (sessionId) => {
        set({ isTracking: true });

        try {
          // Get device info
          const deviceType = getDeviceType();
          const browser = getBrowser();
          const os = getOS();

          const response = await fetch(`${API_BASE_URL}/visitors.php`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              session_id: sessionId,
              device_type: deviceType,
              browser: browser,
              os: os,
              referrer: document.referrer || undefined,
              landing_page: window.location.href,
            }),
          });

          const data = await response.json();

          if (data.success && data.visitor_id) {
            // Store in session storage
            sessionStorage.setItem("visitor_id", data.visitor_id.toString());
            sessionStorage.setItem("session_id", sessionId);

            set({
              sessionId,
              visitorId: data.visitor_id,
              isTracking: false,
            });
          }
        } catch (error) {
          console.error("Failed to initialize visitor:", error);
          set({ isTracking: false });
        }
      },

      trackPageView: async (pageUrl, pageTitle) => {
        const { visitorId } = get();

        if (!visitorId) {
          console.warn("Cannot track page view: visitor not initialized");
          return;
        }

        try {
          const params = new URLSearchParams({
            action: "pageview",
            visitor_id: visitorId.toString(),
            page_url: pageUrl,
            ...(pageTitle && { page_title: pageTitle }),
          });

          await fetch(`${API_BASE_URL}/visitors.php?${params}`, {
            method: "GET",
          });
        } catch (error) {
          console.error("Failed to track page view:", error);
        }
      },

      setVisitorId: (id) => {
        set({ visitorId: id });
        sessionStorage.setItem("visitor_id", id.toString());
      },

      // =============================================
      // ANALYTICS ACTIONS
      // =============================================
      fetchAnalytics: async (days = 7) => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch(
            `${API_BASE_URL}/visitors.php?action=analytics&days=${days}`,
          );

          if (!response.ok) {
            throw new Error("Failed to fetch analytics");
          }

          const result = await response.json();

          if (result.success) {
            set({
              data: result.analytics || [],
              isLoading: false,
              error: null,
            });
          } else {
            throw new Error(result.error || "Failed to fetch analytics");
          }
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "An error occurred";
          set({
            isLoading: false,
            error: errorMessage,
          });
        }
      },
    }),
    { name: "DisruptingLabsStore" },
  ),
);

// =============================================
// UTILITY FUNCTIONS
// =============================================
function getDeviceType(): string {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua,
    )
  ) {
    return "mobile";
  }
  return "desktop";
}

function getBrowser(): string {
  const ua = navigator.userAgent;
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  if (ua.includes("Edge")) return "Edge";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Unknown";
}

function getOS(): string {
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("iOS") || ua.includes("iPhone") || ua.includes("iPad"))
    return "iOS";
  return "Unknown";
}

// =============================================
// SELECTORS (for easy access to state)
// =============================================
export const selectContactState = (state: AppState) => ({
  contacts: state.contacts,
  isSubmitting: state.isSubmitting,
  error: state.error,
  lastSubmittedContact: state.lastSubmittedContact,
});

export const selectVisitorState = (state: AppState) => ({
  currentVisitor: state.currentVisitor,
  sessionId: state.sessionId,
  visitorId: state.visitorId,
  isTracking: state.isTracking,
});

export const selectAnalyticsState = (state: AppState) => ({
  data: state.data,
  isLoading: state.isLoading,
  error: state.error,
});
