import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

const formSchema = z.object({
  dealerName: z.string().trim().min(2, "Dealer name must be at least 2 characters").max(100),
  address: z.string().trim().min(5, "Address must be at least 5 characters").max(500),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
  email: z.string().trim().email("Invalid email address").max(255),
  directorName: z.string().trim().min(2, "Director/Proprietor name must be at least 2 characters").max(100),
  directorMobile: z.string().trim().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
  directorEmail: z.string().trim().email("Invalid email address").max(255),
  gstNumber: z.string().trim().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number format"),
  turnoverYear1: z.string().trim().min(1, "Turnover is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a valid positive number"),
  turnoverYear2: z.string().trim().min(1, "Turnover is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a valid positive number"),
  turnoverYear3: z.string().trim().min(1, "Turnover is required").refine((val) => !isNaN(Number(val)) && Number(val) >= 0, "Must be a valid positive number"),
  productRequirements: z.string().trim().min(10, "Please provide detailed product requirements (at least 10 characters)").max(2000),
  remarks: z.string().trim().max(1000).optional(),
});

const DealerApplication = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dealerName: "",
      address: "",
      mobile: "",
      email: "",
      directorName: "",
      directorMobile: "",
      directorEmail: "",
      gstNumber: "",
      turnoverYear1: "",
      turnoverYear2: "",
      turnoverYear3: "",
      productRequirements: "",
      remarks: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("dealer_applications").insert({
        dealer_name: values.dealerName,
        address: values.address,
        mobile: values.mobile,
        email: values.email,
        director_name: values.directorName,
        director_mobile: values.directorMobile,
        director_email: values.directorEmail,
        gst_number: values.gstNumber,
        turnover_year1: parseFloat(values.turnoverYear1),
        turnover_year2: parseFloat(values.turnoverYear2),
        turnover_year3: parseFloat(values.turnoverYear3),
        product_requirements: values.productRequirements,
        remarks: values.remarks || null,
        status: "pending",
      });

      if (error) throw error;

      toast({
        title: "Application Submitted Successfully!",
        description: "We will review your application and get back to you soon.",
      });
      
      form.reset();
    } catch (error: any) {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Dealer Application Form</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Register as a dealer to access bulk pricing and exclusive benefits
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-medium border-0">
                <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
                
                <FormField
                  control={form.control}
                  name="dealerName"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Dealer Name (M/s)</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Company Address</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter complete address" rows={3} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" {...field} />
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
                        <FormLabel>Company Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="company@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="gstNumber"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel>GST Number</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 22AAAAA0000A1Z5" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium border-0">
                <h2 className="text-2xl font-semibold mb-4">Director/Proprietor Information</h2>
                
                <FormField
                  control={form.control}
                  name="directorName"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Director/Proprietor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="directorMobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Director Mobile</FormLabel>
                        <FormControl>
                          <Input placeholder="10-digit mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="directorEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Director Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="director@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium border-0">
                <h2 className="text-2xl font-semibold mb-4">Financial Information</h2>
                <p className="text-muted-foreground mb-4">Please provide turnover for the last 3 years (in ₹)</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="turnoverYear1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year 1 Turnover</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="turnoverYear2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year 2 Turnover</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="turnoverYear3"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year 3 Turnover</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Enter amount" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-medium border-0">
                <h2 className="text-2xl font-semibold mb-4">Product Requirements</h2>
                
                <FormField
                  control={form.control}
                  name="productRequirements"
                  render={({ field }) => (
                    <FormItem className="mb-4">
                      <FormLabel>Product Listing & Requirements</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="List the products you are interested in and any specific requirements" 
                          rows={5} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="remarks"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Remarks (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any additional information you'd like to share" 
                          rows={3} 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gradient-primary border-0 text-lg py-6" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DealerApplication;
