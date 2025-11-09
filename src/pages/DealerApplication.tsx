import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  dealerName: z.string().min(3, "Dealer name (M/s) is required"),
  address: z.string().min(10, "Complete address is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Invalid email address"),
  directorName: z.string().min(2, "Director/Proprietor name is required"),
  directorMobile: z.string().min(10, "Valid mobile number is required"),
  directorEmail: z.string().email("Invalid email address"),
  requirements: z.string().min(20, "Please describe your requirements in detail"),
  gstNumber: z.string().min(15, "Valid GST number is required (15 characters)").max(15),
  turnoverYear1: z.string().min(1, "Turnover for year 1 is required"),
  turnoverYear2: z.string().min(1, "Turnover for year 2 is required"),
  turnoverYear3: z.string().min(1, "Turnover for year 3 is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  remarks: z.string().optional(),
});

const DealerApplication = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

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
      requirements: "",
      gstNumber: "",
      turnoverYear1: "",
      turnoverYear2: "",
      turnoverYear3: "",
      contactNumber: "",
      remarks: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Dealer application submitted:", values);
    setSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "We'll review your application and contact you shortly.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto border-0 shadow-strong text-center">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
              <p className="text-muted-foreground mb-8">
                Thank you for your interest in becoming a Seatech dealer. Our team will review your application and contact you within 2-3 business days.
              </p>
              <Button onClick={() => setSubmitted(false)}>Submit Another Application</Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto border-0 shadow-strong">
          <CardHeader className="gradient-hero">
            <CardTitle className="text-3xl">Dealer Application</CardTitle>
            <CardDescription className="text-base">
              Join our network of authorized dealers for bulk purchases and business partnerships
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Company Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b pb-2">Company Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="dealerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dealer Name (M/s)</FormLabel>
                        <FormControl>
                          <Input placeholder="M/s Your Company Name Pvt. Ltd." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Complete address including city, state, and pin code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Mobile</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" {...field} />
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
                            <Input type="email" placeholder="info@company.com" {...field} />
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
                      <FormItem>
                        <FormLabel>GST Number</FormLabel>
                        <FormControl>
                          <Input placeholder="22AAAAA0000A1Z5" maxLength={15} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Director/Proprietor Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b pb-2">Director/Proprietor Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="directorName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Director/Proprietor Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="directorMobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Director Mobile</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+91 98765 43210" {...field} />
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
                            <Input type="email" placeholder="director@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Contact Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+91 98765 43210" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Business Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold border-b pb-2">Business Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="turnoverYear1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Turnover (Last Year)</FormLabel>
                          <FormControl>
                            <Input placeholder="₹ 50,00,000" {...field} />
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
                          <FormLabel>Turnover (2 Years Ago)</FormLabel>
                          <FormControl>
                            <Input placeholder="₹ 45,00,000" {...field} />
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
                          <FormLabel>Turnover (3 Years Ago)</FormLabel>
                          <FormControl>
                            <Input placeholder="₹ 40,00,000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Requirements & Listing</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the products you're interested in dealing with, expected quantities, delivery requirements, etc."
                            className="min-h-[120px]"
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
                            placeholder="Any additional information you'd like to share..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type="submit" className="w-full gradient-primary border-0 shadow-medium hover:shadow-strong transition-smooth" size="lg">
                  Submit Dealer Application
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default DealerApplication;
