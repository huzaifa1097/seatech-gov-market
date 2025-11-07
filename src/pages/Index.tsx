import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Package, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroBanner from "@/assets/hero-banner.jpg";
import chairsImg from "@/assets/category-chairs.jpg";
import furnitureImg from "@/assets/category-furniture.jpg";
import plasticImg from "@/assets/category-plastic.jpg";

const Index = () => {
  const categories = [
    {
      name: "Office Chairs",
      image: chairsImg,
      description: "Ergonomic seating solutions",
      link: "/products?category=chairs",
    },
    {
      name: "Furniture",
      image: furnitureImg,
      description: "Complete workspace solutions",
      link: "/products?category=furniture",
    },
    {
      name: "Plastic Items",
      image: plasticImg,
      description: "Durable office accessories",
      link: "/products?category=plastic",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Government Verified",
      description: "All products meet official procurement standards",
    },
    {
      icon: Package,
      title: "Quality Assured",
      description: "Certified suppliers and rigorous quality control",
    },
    {
      icon: TrendingUp,
      title: "Best Value",
      description: "Competitive pricing with transparent processes",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBanner})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in slide-in-from-bottom-4">
              Your Trusted Government{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                E-Marketplace
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-in slide-in-from-bottom-5">
              Quality furniture and office supplies for government institutions. Streamlined procurement, certified suppliers.
            </p>
            <div className="flex flex-wrap gap-4 animate-in slide-in-from-bottom-6">
              <Link to="/products">
                <Button size="lg" className="gradient-primary border-0 shadow-medium hover:shadow-strong transition-smooth">
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/buyer-application">
                <Button size="lg" variant="outline" className="shadow-subtle hover:shadow-medium transition-smooth">
                  Apply as Buyer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Categories</h2>
          <p className="text-muted-foreground text-lg">
            Explore our comprehensive range of government-approved products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} to={category.link} className="group">
              <Card className="overflow-hidden border-0 shadow-medium hover:shadow-strong transition-smooth">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join our network of trusted government buyers and access quality products with seamless procurement.
          </p>
          <Link to="/buyer-application">
            <Button size="lg" className="gradient-primary border-0 shadow-medium hover:shadow-strong transition-smooth">
              Submit Buyer Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
