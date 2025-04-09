
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pitch-light">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pitch-navy leading-tight">
                Where <span className="bg-gradient-to-r from-pitch-blue to-pitch-green text-transparent bg-clip-text">Startups</span> Meet <span className="bg-gradient-to-r from-pitch-teal to-pitch-green text-transparent bg-clip-text">Investors</span>
              </h1>
              <p className="text-lg text-pitch-gray">
                PitchSwipe Capital connects innovative startups with investors through 30-second video pitches. Swipe right on the next unicorn.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-pitch-blue hover:bg-pitch-teal text-white" asChild>
                  <Link to="/startup-signup">I'm a Startup</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-pitch-blue text-pitch-blue hover:bg-pitch-blue/10" asChild>
                  <Link to="/investor-signup">I'm an Investor</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <div className="absolute top-0 right-0 w-full max-w-md mx-auto">
                <div className="card-swipe-container">
                  <div className="swipe-card bg-white p-6 rotate-3 shadow-xl z-30">
                    <div className="h-48 bg-gradient-to-br from-pitch-blue/20 to-pitch-teal/20 rounded-lg mb-4"></div>
                    <h3 className="text-xl font-bold">EcoTech Solutions</h3>
                    <p className="text-pitch-gray">Sustainable energy for all businesses</p>
                  </div>
                  <div className="swipe-card bg-white p-6 -rotate-2 shadow-xl z-20 translate-y-4">
                    <div className="h-48 bg-gradient-to-br from-pitch-green/20 to-pitch-blue/20 rounded-lg mb-4"></div>
                    <h3 className="text-xl font-bold">FinTrack AI</h3>
                    <p className="text-pitch-gray">AI-powered financial analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-none shadow-lg">
                <div className="bg-pitch-blue/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-pitch-blue text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Create Your Profile</h3>
                <p className="text-pitch-gray">Sign up as a startup or an investor and complete your profile.</p>
              </Card>
              
              <Card className="p-6 border-none shadow-lg">
                <div className="bg-pitch-teal/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-pitch-teal text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{`Upload Your Pitch`}</h3>
                <p className="text-pitch-gray">Startups upload a 30-second video pitch showcasing their business.</p>
              </Card>
              
              <Card className="p-6 border-none shadow-lg">
                <div className="bg-pitch-green/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-pitch-green text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect & Collaborate</h3>
                <p className="text-pitch-gray">Investors swipe right on promising startups and begin conversations.</p>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 pitch-gradient px-6">
          <div className="container mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Startup Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of startups and investors already using PitchSwipe Capital</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-pitch-blue hover:bg-opacity-90" asChild>
                <Link to="/startup-signup">Get Started as Startup</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/investor-signup">Sign Up as Investor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-pitch-navy text-white py-8 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 PitchSwipe Capital. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-pitch-blue">Terms</a>
              <a href="#" className="hover:text-pitch-blue">Privacy</a>
              <a href="#" className="hover:text-pitch-blue">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
