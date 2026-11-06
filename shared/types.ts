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

// =============================================
// CAREERS TYPES
// =============================================

export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "internship";
export type ExperienceLevel =
  | "junior"
  | "mid"
  | "senior"
  | "lead"
  | "executive";
export type RemotePolicy = "remote" | "hybrid" | "onsite" | "wfa";
export type ApplicationStatus =
  | "new"
  | "reviewing"
  | "shortlisted"
  | "interview"
  | "rejected"
  | "accepted";

export interface JobPosting {
  id: number;
  slug: string;
  title: string;
  location: string;
  employment_type: EmploymentType;
  experience_level: ExperienceLevel;
  department: string;
  markdown_content: string;
  is_active: boolean;
  featured: boolean;
  positions_available: number;
  salary_range?: string;
  remote_policy: RemotePolicy;
  created_at: string;
  updated_at: string;
  published_at?: string;
  expires_at?: string;
}

export interface JobApplication {
  id: number;
  job_posting_id: number;
  visitor_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  resume_filename: string;
  resume_path: string;
  resume_size?: number;
  cover_letter?: string;
  years_of_experience?: number;
  current_location?: string;
  available_from?: string;
  salary_expectation?: string;
  status: ApplicationStatus;
  notes?: string;
  ip_address?: string;
  user_agent?: string;
  created_at: string;
  updated_at: string;
  reviewed_at?: string;
}

export interface JobApplicationFormData {
  job_posting_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  resume: File;
  cover_letter?: string;
  years_of_experience?: number;
  current_location?: string;
  available_from?: string;
  salary_expectation?: string;
  visitor_id?: number;
}

export interface JobPostingsResponse {
  success: boolean;
  jobs?: JobPosting[];
  job?: JobPosting;
  error?: string;
}

export interface JobApplicationResponse {
  success: boolean;
  application_id?: number;
  message?: string;
  error?: string;
  details?: string;
}
