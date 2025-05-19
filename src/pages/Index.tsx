
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to TechHub
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your digital innovation partner. Explore our services and join us in building the future.
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild>
              <Link to="/services">Our Services</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
