
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";

const InvestorSignup = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    company: "",
    position: "",
    investorType: "",
    investmentFocus: [],
    minimumInvestment: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => {
      const currentFocus = prev.investmentFocus as string[];
      if (currentFocus.includes(value)) {
        return {
          ...prev,
          investmentFocus: currentFocus.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          investmentFocus: [...currentFocus, value],
        };
      }
    });
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
      if (!formData.company || !formData.position || !formData.investorType) {
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
      description: "You can now browse startup pitches",
    });
    // Navigate to dashboard or login page
    window.location.href = "/investor-swipe";
  };

  return (
    <div className="min-h-screen bg-pitch-light flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md border-none shadow-lg">
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">Investor Sign Up</CardTitle>
            <CardDescription>
              {step === 1 && "Create your account to get started"}
              {step === 2 && "Tell us about yourself"}
              {step === 3 && "Investment preferences and criteria"}
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
                    <Label htmlFor="company">Company / Fund</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Firm or Individual"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="position">Position</Label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="e.g. Managing Partner, Angel Investor"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="investorType">Investor Type</Label>
                    <select
                      id="investorType"
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleChange}
                      className="w-full p-2 rounded-md border border-input bg-transparent"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="angel">Angel Investor</option>
                      <option value="vc">Venture Capital</option>
                      <option value="corporate">Corporate Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="accelerator">Accelerator</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Brief Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Share a bit about your investment background..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-base">Investment Focus (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {["FinTech", "HealthTech", "EdTech", "AI/ML", "SaaS", "Consumer", "Enterprise", "Hardware"].map((focus) => (
                        <div key={focus} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`focus-${focus}`} 
                            checked={(formData.investmentFocus as string[]).includes(focus)} 
                            onCheckedChange={() => handleCheckboxChange(focus)}
                          />
                          <label htmlFor={`focus-${focus}`} className="text-sm font-medium leading-none cursor-pointer">
                            {focus}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="minimumInvestment">Minimum Investment ($)</Label>
                    <Input
                      id="minimumInvestment"
                      name="minimumInvestment"
                      type="text"
                      value={formData.minimumInvestment}
                      onChange={handleChange}
                      placeholder="e.g. 50000"
                    />
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

export default InvestorSignup;
