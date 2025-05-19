
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Monitor, Database, Lock } from "lucide-react";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Code className="h-8 w-8 mb-2" />
            <CardTitle>Web Development</CardTitle>
            <CardDescription>Custom websites and web applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We create responsive, user-friendly websites and web applications tailored to your specific needs. 
              Our expertise spans from simple landing pages to complex enterprise systems.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Monitor className="h-8 w-8 mb-2" />
            <CardTitle>Mobile Development</CardTitle>
            <CardDescription>iOS and Android applications</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our team develops native and cross-platform mobile applications that deliver exceptional user 
              experiences while addressing your business objectives.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Database className="h-8 w-8 mb-2" />
            <CardTitle>Data Analytics</CardTitle>
            <CardDescription>Turn data into actionable insights</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We help you make sense of your data. Our analytics solutions provide valuable insights that 
              can drive business decisions and strategy.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Lock className="h-8 w-8 mb-2" />
            <CardTitle>Cybersecurity</CardTitle>
            <CardDescription>Protect your digital assets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We offer comprehensive security solutions to protect your systems and data from threats. 
              Our approach emphasizes prevention, detection, and response.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
