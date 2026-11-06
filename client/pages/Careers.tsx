import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import FloatingContactButton from "@/components/FloatingContactButton";
import Header from "@/components/Header";
import { JobPosting, JobPostingsResponse } from "@shared/types";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Globe,
  Sparkles,
  Building2,
} from "lucide-react";
import JobApplicationModal from "@/components/JobApplicationModal";
import ReactMarkdown from "react-markdown";

export default function Careers() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/careers");
      const data: JobPostingsResponse = await response.json();
      if (data.success && data.jobs) {
        setJobs(data.jobs);
      }
    } catch (error) {
      console.error("Failed to fetch jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const openJobDetails = (job: JobPosting) => {
    setSelectedJob(job);
  };

  const closeJobDetails = () => {
    setSelectedJob(null);
  };

  const openApplicationModal = (job: JobPosting) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const closeApplicationModal = () => {
    setShowApplicationModal(false);
  };

  const getRemotePolicyLabel = (policy: string) => {
    const labels: Record<string, string> = {
      wfa: "Work From Anywhere",
      remote: "Remote",
      hybrid: "Hybrid",
      onsite: "On-site",
    };
    return labels[policy] || policy;
  };

  const getExperienceLevelLabel = (level: string) => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };

  return (
    <div className="min-h-screen bg-disrupting-dark">
      <Header />
      <FloatingContactButton />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-disrupting-dark via-disrupting-dark to-wine/20">
        <div className="absolute inset-0 bg-grid-slate-100/[0.02] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wine/10 border border-wine/20 text-wine mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Build the Future
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine to-burgundy">
              with AI
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join a team that's revolutionizing how we build software. Work with
            cutting-edge AI tools, ship impactful products, and grow your career
            in a fully remote environment.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-wine mb-2">100%</div>
              <div className="text-gray-400">Remote</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wine mb-2">AI-First</div>
              <div className="text-gray-400">Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-wine mb-2">Global</div>
              <div className="text-gray-400">Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-disrupting-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400">
              Find your next opportunity and make an impact
            </p>
          </div>

          {loading ? (
            <div className="text-center text-gray-400 py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-wine mx-auto mb-4"></div>
              Loading opportunities...
            </div>
          ) : jobs.length === 0 ? (
            <Card className="bg-disrupting-darker border-wine/20 text-center py-20">
              <CardContent>
                <Briefcase className="w-16 h-16 text-wine mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  No Open Positions
                </h3>
                <p className="text-gray-400">
                  We don't have any open positions right now, but we're always
                  looking for talented people. Check back soon or reach out to
                  stay connected!
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="bg-disrupting-darker border-wine/20 hover:border-wine/40 transition-all duration-300 group cursor-pointer"
                  onClick={() => openJobDetails(job)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-3 rounded-lg bg-wine/10 group-hover:bg-wine/20 transition-colors">
                        <Briefcase className="w-6 h-6 text-wine" />
                      </div>
                      {job.featured && (
                        <Badge className="bg-wine/20 text-wine border-wine/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-wine transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {job.department}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Globe className="w-4 h-4" />
                        <span>{getRemotePolicyLabel(job.remote_policy)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="capitalize">
                          {job.employment_type}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>
                          {getExperienceLevelLabel(job.experience_level)} Level
                        </span>
                      </div>

                      <Separator className="bg-wine/10" />

                      <Button
                        className="w-full bg-wine hover:bg-wine/90 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          openApplicationModal(job);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-disrupting-darker to-wine/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Join Us?</h2>
            <p className="text-xl text-gray-400">
              We're building the future of work
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <Globe className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">Work From Anywhere</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                True remote-first culture. Work from anywhere in the world with
                flexible hours.
              </CardContent>
            </Card>

            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">AI-Powered Tools</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Access to premium AI development tools like GitHub Copilot,
                Claude, and more.
              </CardContent>
            </Card>

            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <TrendingUp className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">Career Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Learning budget, mentorship programs, and clear career
                progression paths.
              </CardContent>
            </Card>

            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <Users className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">Amazing Team</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Work with talented people from around the world who are
                passionate about technology.
              </CardContent>
            </Card>

            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <Building2 className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">Modern Stack</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Work with the latest technologies and best practices in software
                development.
              </CardContent>
            </Card>

            <Card className="bg-disrupting-dark border-wine/20">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-wine mb-4" />
                <CardTitle className="text-white">
                  Competitive Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400">
                Great compensation, health insurance, PTO, and home office setup
                support.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Job Details Modal */}
      {selectedJob && !showApplicationModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeJobDetails}
        >
          <div
            className="bg-disrupting-darker border border-wine/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {selectedJob.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-wine/20 text-wine border-wine/30">
                      <MapPin className="w-3 h-3 mr-1" />
                      {selectedJob.location}
                    </Badge>
                    <Badge className="bg-wine/20 text-wine border-wine/30">
                      <Globe className="w-3 h-3 mr-1" />
                      {getRemotePolicyLabel(selectedJob.remote_policy)}
                    </Badge>
                    <Badge className="bg-wine/20 text-wine border-wine/30">
                      <Clock className="w-3 h-3 mr-1" />
                      {selectedJob.employment_type}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={closeJobDetails}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <Separator className="bg-wine/10 mb-6" />

              <div className="prose prose-invert max-w-none mb-8">
                <ReactMarkdown>{selectedJob.markdown_content}</ReactMarkdown>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 bg-wine hover:bg-wine/90 text-white"
                  onClick={() => {
                    closeJobDetails();
                    openApplicationModal(selectedJob);
                  }}
                >
                  Apply for this Position
                </Button>
                <Button
                  variant="outline"
                  onClick={closeJobDetails}
                  className="border-wine/20 text-wine hover:bg-wine/10"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {selectedJob && showApplicationModal && (
        <JobApplicationModal
          job={selectedJob}
          onClose={closeApplicationModal}
        />
      )}
    </div>
  );
}
