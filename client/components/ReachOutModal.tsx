import { useState, useMemo, createContext, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Rocket, MessageCircle, ArrowRight } from "lucide-react";
import { useAppStore } from "@/store";

const ReachOutSchema = Yup.object().shape({
  name: Yup.string().min(2, "Please enter your full name").required("Required"),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  company: Yup.string(),
  message: Yup.string()
    .min(10, "Please tell us a bit more about your project")
    .required("Required"),
});

type ReachOutContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openModal: () => void;
};

const ReachOutContext = createContext<ReachOutContextType | null>(null);

export function useReachOutModal() {
  const ctx = useContext(ReachOutContext);
  if (!ctx)
    throw new Error(
      "useReachOutModal must be used within ReachOutModalProvider",
    );
  return ctx;
}

export function ReachOutModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const value = useMemo(
    () => ({ open, setOpen, openModal: () => setOpen(true) }),
    [open],
  );
  return (
    <ReachOutContext.Provider value={value}>
      {children}
    </ReachOutContext.Provider>
  );
}

export function ReachOutModal() {
  const { open, setOpen } = useReachOutModal();
  const { toast } = useToast();
  const { submitContact, isSubmitting } = useAppStore();

  const initialValues = {
    name: "",
    email: "",
    company: "",
    message: "",
  };

  async function handleSubmit(values: typeof initialValues) {
    try {
      await submitContact({
        name: values.name,
        email: values.email,
        company: values.company,
        message: values.message,
      });

      toast({
        title: "Message sent! 🎉",
        description:
          "We'll reach out within 1 business day to discuss your project.",
      });

      setOpen(false);
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Oops! Something went wrong",
        description:
          "Please try again or email us directly at hello@disruptinglabs.com",
        variant: "destructive" as any,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl sm:rounded-3xl border-0 bg-gradient-to-br from-white via-pink-50/30 to-white p-0 overflow-hidden shadow-2xl [&>button]:hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-wine/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-burgundy/20 to-wine/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-pink-400/10 to-transparent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        <div className="relative">
          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-wine via-pink-500 to-burgundy p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
            <DialogHeader className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <DialogTitle className="text-3xl sm:text-4xl font-black">
                  Let's Build Something Amazing
                </DialogTitle>
              </div>
              <DialogDescription className="text-pink-100 text-base sm:text-lg">
                Transform your vision into reality. We'll respond within 1
                business day!
              </DialogDescription>
            </DialogHeader>
          </div>

          {/* Form Section */}
          <div className="p-8">
            <Formik
              initialValues={initialValues}
              validationSchema={ReachOutSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting: formSubmitting }) => (
                <Form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label className="text-base font-semibold text-disrupting-dark block mb-2">
                        Full name
                      </label>
                      <Field
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        className={`w-full h-12 px-4 border-2 rounded-xl transition-all duration-300 ${
                          errors.name && touched.name
                            ? "border-red-500 focus:border-red-600 bg-red-50"
                            : "border-gray-200 focus:border-wine"
                        }`}
                      />
                      {errors.name && touched.name && (
                        <p className="text-sm font-bold text-red-600 mt-1">
                          ⚠️ {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="text-base font-semibold text-disrupting-dark block mb-2">
                        Email
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className={`w-full h-12 px-4 border-2 rounded-xl transition-all duration-300 ${
                          errors.email && touched.email
                            ? "border-red-500 focus:border-red-600 bg-red-50"
                            : "border-gray-200 focus:border-wine"
                        }`}
                      />
                      {errors.email && touched.email && (
                        <p className="text-sm font-bold text-red-600 mt-1">
                          ⚠️ {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="text-base font-semibold text-disrupting-dark block mb-2">
                      Company
                    </label>
                    <Field
                      name="company"
                      type="text"
                      placeholder="Your Amazing Company"
                      className="w-full h-12 px-4 border-2 border-gray-200 focus:border-wine rounded-xl transition-all duration-300"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="text-base font-semibold text-disrupting-dark block mb-2">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-wine" />
                        Tell us about your project
                      </div>
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows={5}
                      placeholder="What's your vision? Share your goals, challenges, and what success looks like for you..."
                      className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-300 resize-none ${
                        errors.message && touched.message
                          ? "border-red-500 focus:border-red-600 bg-red-50"
                          : "border-gray-200 focus:border-wine"
                      }`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-sm font-bold text-red-600 mt-2 bg-red-50 p-3 rounded-lg border border-red-200">
                        ⚠️ {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Benefits Section */}
                  <div className="bg-gradient-to-r from-wine/5 via-pink-500/5 to-burgundy/5 rounded-2xl p-6 border border-wine/20">
                    <h4 className="text-sm font-bold text-disrupting-dark mb-3 flex items-center gap-2">
                      <Rocket className="h-4 w-4 text-wine" />
                      What you'll get:
                    </h4>
                    <ul className="space-y-2 text-sm text-disrupting-gray">
                      <li className="flex items-start gap-2">
                        <span className="text-wine font-bold">✓</span>
                        <span>Free consultation & project roadmap</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-wine font-bold">✓</span>
                        <span>Honest timeline & transparent pricing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-wine font-bold">✓</span>
                        <span>Expert insights from our innovation team</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
                      className="w-full sm:w-auto border-2 border-gray-300 hover:border-gray-400 rounded-xl h-12 px-8 font-semibold"
                    >
                      Maybe Later
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting || formSubmitting}
                      className="w-full sm:flex-1 bg-gradient-to-r from-wine via-pink-500 to-burgundy hover:from-wine/90 hover:via-pink-400 hover:to-burgundy/90 text-white rounded-xl h-12 font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {isSubmitting || formSubmitting
                          ? "Sending..."
                          : "Start My Project"}
                        {!isSubmitting && !formSubmitting && (
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        )}
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
