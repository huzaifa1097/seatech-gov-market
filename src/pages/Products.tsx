import { useState } from "react";
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

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const categoryNames: Record<string, string> = {
    chairs: "Office Chairs",
    furniture: "Furniture",
    plastic: "Plastic Items",
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {category ? categoryNames[category] : "All Products"}
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse our government-approved product catalog
          </p>
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
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button disabled={!product.inStock} className="gradient-primary border-0">
                    Request Quote
                  </Button>
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
