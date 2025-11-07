import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Clock } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Location</h1>
          <p className="text-muted-foreground text-lg">
            Visit our office or find us on the map
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-muted-foreground">
                Government District<br />
                Capital City, ST 12345<br />
                United States
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-muted-foreground">
                Monday - Friday<br />
                9:00 AM - 5:00 PM<br />
                Closed on Federal Holidays
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-medium">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Navigation className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Getting Here</h3>
              <p className="text-muted-foreground">
                Public parking available<br />
                Near Metro Station<br />
                Accessible entrance
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-strong overflow-hidden">
          <CardContent className="p-0">
            <div className="w-full h-[500px] bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1074339953137!2d-77.03687668464817!3d38.89767997957128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Seatech Location Map"
              />
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Directions</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong>By Metro:</strong> Take the Blue or Orange line to Government District Station. Our office is a 5-minute walk from the station exit.
            </p>
            <p>
              <strong>By Car:</strong> Use the main entrance on Capital Boulevard. Visitor parking is available in the adjacent garage. Please bring a valid ID for security clearance.
            </p>
            <p>
              <strong>By Bus:</strong> Multiple bus routes service the area. Check the local transit website for current schedules and routes.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Location;
