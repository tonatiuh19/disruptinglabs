import { useState, useMemo, createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ReachOutSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Please enter your company"),
  message: z.string().min(10, "Please tell us a bit more about your project")
});

type ReachOutValues = z.infer<typeof ReachOutSchema>;

type ReachOutContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  openModal: () => void;
};

const ReachOutContext = createContext<ReachOutContextType | null>(null);

export function useReachOutModal() {
  const ctx = useContext(ReachOutContext);
  if (!ctx) throw new Error("useReachOutModal must be used within ReachOutModalProvider");
  return ctx;
}

export function ReachOutModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen, openModal: () => setOpen(true) }), [open]);
  return (
    <ReachOutContext.Provider value={value}>{children}</ReachOutContext.Provider>
  );
}

export function ReachOutModal() {
  const { open, setOpen } = useReachOutModal();
  const { toast } = useToast();

  const form = useForm<ReachOutValues>({
    resolver: zodResolver(ReachOutSchema),
    defaultValues: { name: "", email: "", company: "", message: "" }
  });

  async function onSubmit(values: ReachOutValues) {
    try {
      await new Promise((r) => setTimeout(r, 900));
      toast({ title: "Request received", description: "We\'ll reach out shortly to kick things off." });
      form.reset();
      setOpen(false);
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" as any });
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-xl sm:rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Start your project</DialogTitle>
          <DialogDescription>Tell us a bit about you and your project. We\'ll get back within 1 business day.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project details</FormLabel>
                  <FormControl>
                    <Textarea rows={5} placeholder="What are you looking to build or launch?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-gradient-to-r from-disrupting-purple to-disrupting-blue text-white">Submit</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
