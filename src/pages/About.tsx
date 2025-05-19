
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About TechHub</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              At TechHub, our mission is to democratize technology and make it accessible to everyone. 
              We believe that technology should be an enabler, not a barrier, and we work tirelessly to 
              ensure that our solutions are intuitive, user-friendly, and effective.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We envision a world where technology bridges gaps rather than creates them. A world where 
              innovations are not just about advancement but about inclusion. Our vision guides every 
              decision we make and every solution we design.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Integrity in all our dealings</li>
              <li>Commitment to quality and excellence</li>
              <li>Respect for diversity and inclusion</li>
              <li>Continuous learning and improvement</li>
              <li>Service to our community</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our team consists of passionate technologists, designers, and problem-solvers who are 
              dedicated to creating solutions that make a difference. We come from diverse backgrounds 
              but share a common goal: to harness the power of technology for good.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
