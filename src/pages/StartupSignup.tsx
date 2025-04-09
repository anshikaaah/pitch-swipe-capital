
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const StartupSignup = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    companyName: "",
    industry: "",
    description: "",
    foundingYear: "",
    teamSize: "",
    fundingStage: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (step === 1) {
      // Basic validation
      if (!formData.email || !formData.password || !formData.name) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
    }
    
    if (step === 2) {
      // Basic validation for company details
      if (!formData.companyName || !formData.industry || !formData.description) {
        toast({
          title: "Missing information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
    }
    
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "You can now upload your pitch video",
    });
    // Navigate to dashboard or login page
    window.location.href = "/startup-dashboard";
  };

  return (
    <div className="min-h-screen bg-pitch-light flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md border-none shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">Startup Sign Up</CardTitle>
            <CardDescription>
              {step === 1 && "Create your account to get started"}
              {step === 2 && "Tell us about your company"}
              {step === 3 && "Final details before you're ready to pitch"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a secure password"
                      required
                    />
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Startup Name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry">Industry</Label>
                    <Input
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      placeholder="e.g. FinTech, Healthcare, Education"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Brief Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe your startup in a few sentences..."
                      required
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="foundingYear">Founding Year</Label>
                    <Input
                      id="foundingYear"
                      name="foundingYear"
                      type="number"
                      value={formData.foundingYear}
                      onChange={handleChange}
                      placeholder="e.g. 2023"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teamSize">Team Size</Label>
                    <Input
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      placeholder="e.g. 5"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fundingStage">Current Funding Stage</Label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleChange}
                      className="w-full p-2 rounded-md border border-input bg-transparent"
                    >
                      <option value="">Select...</option>
                      <option value="pre-seed">Pre-Seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B</option>
                      <option value="series-c">Series C or Later</option>
                      <option value="bootstrapped">Bootstrapped</option>
                    </select>
                  </div>
                </div>
              )}
            </form>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={prevStep} type="button">Back</Button>
            ) : (
              <Button variant="outline" asChild>
                <Link to="/">Cancel</Link>
              </Button>
            )}
            
            {step < 3 ? (
              <Button onClick={nextStep} type="button" className="bg-pitch-blue hover:bg-pitch-teal">
                Continue
              </Button>
            ) : (
              <Button onClick={handleSubmit} type="submit" className="bg-pitch-blue hover:bg-pitch-teal">
                Complete Sign Up
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
      
      <footer className="py-4 px-6 text-center text-pitch-gray">
        <p>Already have an account? <Link to="/login" className="text-pitch-blue hover:underline">Log in</Link></p>
      </footer>
    </div>
  );
};

export default StartupSignup;
