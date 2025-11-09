import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

const Products = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const [customerType, setCustomerType] = useState<'bulk' | 'retail'>('retail');

  useEffect(() => {
    const storedType = localStorage.getItem('customerType') as 'bulk' | 'retail' | null;
    if (storedType) {
      setCustomerType(storedType);
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "Executive Office Chair",
      category: "chairs",
      price: "$299",
      description: "Premium ergonomic design with lumbar support",
      inStock: true,
    },
    {
      id: 2,
      name: "Conference Table",
      category: "furniture",
      price: "$899",
      description: "Large meeting table for 8-10 people",
      inStock: true,
    },
    {
      id: 3,
      name: "Plastic File Organizer",
      category: "plastic",
      price: "$29",
      description: "Durable desktop organization solution",
      inStock: true,
    },
    {
      id: 4,
      name: "Ergonomic Task Chair",
      category: "chairs",
      price: "$199",
      description: "Adjustable height with breathable mesh",
      inStock: true,
    },
    {
      id: 5,
      name: "Storage Cabinet",
      category: "furniture",
      price: "$449",
      description: "Lockable metal storage with shelves",
      inStock: false,
    },
    {
      id: 6,
      name: "Waste Basket Set",
      category: "plastic",
      price: "$39",
      description: "Recyclable plastic bins for office use",
      inStock: true,
    },
  ];

  let filteredProducts = products;
  
  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category === category);
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter((p) => 
      p.name.toLowerCase().includes(query) || 
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  const categoryNames: Record<string, string> = {
    chairs: "Office Chairs",
    furniture: "Furniture",
    plastic: "Plastic Items",
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : category ? categoryNames[category] : "All Products"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {customerType === 'retail' ? 'Browse and shop individual pieces' : 'Request quotes for bulk orders'}
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => {
              const newType = customerType === 'retail' ? 'bulk' : 'retail';
              setCustomerType(newType);
              localStorage.setItem('customerType', newType);
            }}
            className="shadow-subtle"
          >
            Switch to {customerType === 'retail' ? 'Bulk' : 'Retail'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="border-0 shadow-medium hover:shadow-strong transition-smooth">
              <CardContent className="pt-6">
                <div className="w-full h-48 bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <Package className="h-16 w-16 text-muted-foreground" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <Badge variant={product.inStock ? "default" : "secondary"}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  {customerType === 'retail' ? (
                    <>
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Button disabled={!product.inStock} className="gradient-primary border-0">
                        Add to Cart
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-lg font-semibold text-muted-foreground">Price on Request</span>
                      <Button disabled={!product.inStock} className="gradient-primary border-0">
                        Request Quote
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
