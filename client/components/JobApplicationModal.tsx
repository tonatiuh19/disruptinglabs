import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  JobPosting,
  JobApplicationFormData,
  JobApplicationResponse,
} from "@shared/types";
import { Upload, X, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface JobApplicationModalProps {
  job: JobPosting;
  onClose: () => void;
}

export default function JobApplicationModal({
  job,
  onClose,
}: JobApplicationModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    linkedin_url: "",
    github_url: "",
    portfolio_url: "",
    cover_letter: "",
    years_of_experience: "",
    current_location: "",
    available_from: "",
    salary_expectation: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file only.",
          variant: "destructive",
        });
        return;
      }
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Resume must be less than 5MB.",
          variant: "destructive",
        });
        return;
      }
      setResume(file);
    }
  };

  const removeResume = () => {
    setResume(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.first_name || !formData.last_name || !formData.email) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (!resume) {
      toast({
        title: "Resume required",
        description: "Please upload your resume (PDF only).",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append("job_posting_id", job.id.toString());
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("resume", resume);

      // Add optional fields
      if (formData.phone) formDataToSend.append("phone", formData.phone);
      if (formData.linkedin_url)
        formDataToSend.append("linkedin_url", formData.linkedin_url);
      if (formData.github_url)
        formDataToSend.append("github_url", formData.github_url);
      if (formData.portfolio_url)
        formDataToSend.append("portfolio_url", formData.portfolio_url);
      if (formData.cover_letter)
        formDataToSend.append("cover_letter", formData.cover_letter);
      if (formData.years_of_experience)
        formDataToSend.append(
          "years_of_experience",
          formData.years_of_experience,
        );
      if (formData.current_location)
        formDataToSend.append("current_location", formData.current_location);
      if (formData.available_from)
        formDataToSend.append("available_from", formData.available_from);
      if (formData.salary_expectation)
        formDataToSend.append(
          "salary_expectation",
          formData.salary_expectation,
        );

      // Get visitor ID from localStorage if available
      const visitorId = localStorage.getItem("visitor_id");
      if (visitorId) {
        formDataToSend.append("visitor_id", visitorId);
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      });

      const data: JobApplicationResponse = await response.json();

      if (data.success) {
        setSubmitted(true);
        toast({
          title: "Application submitted!",
          description:
            "We've received your application and will be in touch soon.",
        });
      } else {
        throw new Error(data.error || "Failed to submit application");
      }
    } catch (error) {
      console.error("Application submission error:", error);
      toast({
        title: "Submission failed",
        description:
          error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <Card
          className="bg-disrupting-darker border-wine/20 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-white">
              Application Submitted!
            </CardTitle>
            <CardDescription className="text-gray-400">
              Thank you for applying to {job.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300">
              We've received your application and will review it carefully.
              You'll hear from us within 5 business days.
            </p>
            <p className="text-sm text-gray-400">
              A confirmation email has been sent to {formData.email}
            </p>
            <Button
              className="w-full bg-wine hover:bg-wine/90 text-white"
              onClick={onClose}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <Card
        className="bg-disrupting-darker border-wine/20 max-w-3xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl text-white mb-2">
                Apply for Position
              </CardTitle>
              <CardDescription className="text-gray-400">
                {job.title}
              </CardDescription>
            </div>
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
              disabled={submitting}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Personal Information
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <Label htmlFor="first_name" className="text-gray-300">
                    First Name <span className="text-wine">*</span>
                  </Label>
                  <Input
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    required
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="last_name" className="text-gray-300">
                    Last Name <span className="text-wine">*</span>
                  </Label>
                  <Input
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    required
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                <div>
                  <Label htmlFor="email" className="text-gray-300">
                    Email <span className="text-wine">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Professional Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Professional Links
              </h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="linkedin_url" className="text-gray-300">
                    LinkedIn Profile
                  </Label>
                  <Input
                    id="linkedin_url"
                    name="linkedin_url"
                    type="url"
                    placeholder="https://linkedin.com/in/yourprofile"
                    value={formData.linkedin_url}
                    onChange={handleInputChange}
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="github_url" className="text-gray-300">
                    GitHub Profile
                  </Label>
                  <Input
                    id="github_url"
                    name="github_url"
                    type="url"
                    placeholder="https://github.com/yourusername"
                    value={formData.github_url}
                    onChange={handleInputChange}
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="portfolio_url" className="text-gray-300">
                    Portfolio / Website
                  </Label>
                  <Input
                    id="portfolio_url"
                    name="portfolio_url"
                    type="url"
                    placeholder="https://yourportfolio.com"
                    value={formData.portfolio_url}
                    onChange={handleInputChange}
                    className="bg-disrupting-dark border-wine/20 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resume <span className="text-wine">*</span>
              </h3>
              <div className="border-2 border-dashed border-wine/20 rounded-lg p-6 text-center hover:border-wine/40 transition-colors">
                {resume ? (
                  <div className="flex items-center justify-between bg-disrupting-dark p-4 rounded">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-wine/20 rounded">
                        <Upload className="w-5 h-5 text-wine" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-medium">{resume.name}</p>
                        <p className="text-sm text-gray-400">
                          {(resume.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={removeResume}
                      className="text-gray-400 hover:text-wine"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                ) : (
                  <label htmlFor="resume" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="w-10 h-10 text-wine" />
                      <p className="text-white font-medium">
                        Upload your resume
                      </p>
                      <p className="text-sm text-gray-400">PDF only, max 5MB</p>
                    </div>
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Additional Information
              </h3>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label
                      htmlFor="years_of_experience"
                      className="text-gray-300"
                    >
                      Years of Experience
                    </Label>
                    <Input
                      id="years_of_experience"
                      name="years_of_experience"
                      type="number"
                      min="0"
                      value={formData.years_of_experience}
                      onChange={handleInputChange}
                      className="bg-disrupting-dark border-wine/20 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="current_location" className="text-gray-300">
                      Current Location
                    </Label>
                    <Input
                      id="current_location"
                      name="current_location"
                      placeholder="City, Country"
                      value={formData.current_location}
                      onChange={handleInputChange}
                      className="bg-disrupting-dark border-wine/20 text-white"
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="available_from" className="text-gray-300">
                      Available From
                    </Label>
                    <Input
                      id="available_from"
                      name="available_from"
                      type="date"
                      value={formData.available_from}
                      onChange={handleInputChange}
                      className="bg-disrupting-dark border-wine/20 text-white"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="salary_expectation"
                      className="text-gray-300"
                    >
                      Salary Expectation
                    </Label>
                    <Input
                      id="salary_expectation"
                      name="salary_expectation"
                      placeholder="e.g., $80k-$100k"
                      value={formData.salary_expectation}
                      onChange={handleInputChange}
                      className="bg-disrupting-dark border-wine/20 text-white"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="cover_letter" className="text-gray-300">
                    Cover Letter
                  </Label>
                  <Textarea
                    id="cover_letter"
                    name="cover_letter"
                    rows={6}
                    placeholder="Tell us why you're excited about this role and how you use AI tools in your work..."
                    value={formData.cover_letter}
                    onChange={handleInputChange}
                    className="bg-disrupting-dark border-wine/20 text-white resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-wine hover:bg-wine/90 text-white"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={submitting}
                className="border-wine/20 text-wine hover:bg-wine/10"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
