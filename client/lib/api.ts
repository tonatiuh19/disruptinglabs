import type {
  ContactFormData,
  ContactResponse,
  VisitorTrackingData,
  VisitorResponse,
  AnalyticsResponse,
} from "@shared/types";

// API Base URL - Using your deployed endpoints
const API_BASE_URL = "https://garbrix.com/disrupting";

// =============================================
// CONTACT API
// =============================================
export async function submitContact(
  data: ContactFormData,
): Promise<ContactResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/contact.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to submit contact form");
    }

    return await response.json();
  } catch (error) {
    console.error("Contact submission error:", error);
    throw error;
  }
}

// =============================================
// VISITOR TRACKING API
// =============================================
export async function trackVisitor(
  data: VisitorTrackingData,
): Promise<VisitorResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/visitors.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to track visitor");
    }

    return await response.json();
  } catch (error) {
    console.error("Visitor tracking error:", error);
    throw error;
  }
}

// =============================================
// PAGE VIEW TRACKING
// =============================================
export async function trackPageView(
  visitorId: number,
  pageUrl: string,
  pageTitle?: string,
): Promise<void> {
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
    console.error("Page view tracking error:", error);
  }
}

// =============================================
// ANALYTICS API
// =============================================
export async function getAnalytics(
  days: number = 7,
): Promise<AnalyticsResponse> {
  try {
    const response = await fetch(
      `${API_BASE_URL}/visitors.php?action=analytics&days=${days}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch analytics");
    }

    return await response.json();
  } catch (error) {
    console.error("Analytics fetch error:", error);
    throw error;
  }
}

// =============================================
// SESSION MANAGEMENT
// =============================================
export function getSessionId(): string {
  let sessionId = sessionStorage.getItem("session_id");

  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    sessionStorage.setItem("session_id", sessionId);
  }

  return sessionId;
}

export function getVisitorId(): number | null {
  const visitorId = sessionStorage.getItem("visitor_id");
  return visitorId ? parseInt(visitorId, 10) : null;
}

export function setVisitorId(id: number): void {
  sessionStorage.setItem("visitor_id", id.toString());
}
