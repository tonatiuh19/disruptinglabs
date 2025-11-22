import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppStore } from "@/store";

// Generate unique session ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
}

export function useVisitorTracking() {
  const location = useLocation();
  const { initializeVisitor, trackPageView, visitorId, sessionId } =
    useAppStore();

  // Initialize visitor on first load
  useEffect(() => {
    const storedVisitorId = sessionStorage.getItem("visitor_id");
    const storedSessionId = sessionStorage.getItem("session_id");

    if (!storedVisitorId || !storedSessionId) {
      const newSessionId = storedSessionId || generateSessionId();
      initializeVisitor(newSessionId);
    } else {
      // Restore from session storage
      useAppStore.setState({
        visitorId: parseInt(storedVisitorId, 10),
        sessionId: storedSessionId,
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (visitorId) {
      trackPageView(window.location.href, document.title);
    }
  }, [location, visitorId, trackPageView]);
}
