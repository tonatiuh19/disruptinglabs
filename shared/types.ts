// =============================================
// SHARED TYPES FOR CLIENT AND SERVER
// =============================================

export interface Visitor {
  id: number;
  session_id: string;
  ip_address?: string;
  user_agent?: string;
  device_type?: string;
  browser?: string;
  os?: string;
  country?: string;
  city?: string;
  referrer?: string;
  landing_page?: string;
  created_at: string;
  last_seen_at: string;
}

export interface PageView {
  id: number;
  visitor_id: number;
  page_url: string;
  page_title?: string;
  view_duration?: number;
  created_at: string;
}

export interface Contact {
  id: number;
  visitor_id?: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  status: "new" | "read" | "replied" | "archived";
  source?: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
  updated_at: string;
  replied_at?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  visitor_id?: number;
  source?: string;
}

export interface ContactResponse {
  success: boolean;
  contact_id?: number;
  message?: string;
  error?: string;
  email_status?: string;
}

export interface VisitorTrackingData {
  session_id: string;
  device_type?: string;
  browser?: string;
  os?: string;
  country?: string;
  city?: string;
  referrer?: string;
  landing_page?: string;
}

export interface VisitorResponse {
  success: boolean;
  visitor_id?: number;
  new_visitor?: boolean;
  error?: string;
}

export interface AnalyticsData {
  date: string;
  visitors: number;
  unique_visitors: number;
}

export interface AnalyticsResponse {
  success: boolean;
  analytics?: AnalyticsData[];
  error?: string;
}
