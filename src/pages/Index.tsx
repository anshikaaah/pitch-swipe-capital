
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Building2, ChartBar, LineChart, Globe2, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pitch-light to-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Split Design */}
        <section className="py-16 md:py-24 px-6 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side - Startups */}
            <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-pitch-blue/5 to-pitch-teal/5 border border-pitch-blue/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-pitch-blue" />
                <h2 className="text-2xl font-bold text-pitch-blue">For Startups</h2>
              </div>
              <h3 className="text-xl font-semibold text-pitch-navy">Share Your Vision in 30 Seconds</h3>
              <p className="text-pitch-gray">Upload your pitch video and connect with potential investors who share your vision.</p>
              <Button size="lg" className="bg-pitch-blue hover:bg-pitch-teal text-white" asChild>
                <Link to="/startup-signup">Join as a Startup</Link>
              </Button>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white shadow-sm border border-pitch-blue/10">
                  <ChartBar className="w-6 h-6 text-pitch-blue mb-2" />
                  <p className="text-sm text-pitch-gray">Quick Funding Access</p>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm border border-pitch-blue/10">
                  <Globe2 className="w-6 h-6 text-pitch-teal mb-2" />
                  <p className="text-sm text-pitch-gray">Global Reach</p>
                </div>
              </div>
            </div>

            {/* Right Side - Investors */}
            <div className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-pitch-navy/5 to-pitch-blue/5 border border-pitch-navy/10 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-pitch-navy" />
                <h2 className="text-2xl font-bold text-pitch-navy">For Investors</h2>
              </div>
              <h3 className="text-xl font-semibold text-pitch-navy">Discover the Next Unicorn</h3>
              <p className="text-pitch-gray">Swipe through curated startup pitches and find your next investment opportunity.</p>
              <Button size="lg" variant="outline" className="border-pitch-navy text-pitch-navy hover:bg-pitch-navy/10" asChild>
                <Link to="/investor-signup">Join as an Investor</Link>
              </Button>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white shadow-sm border border-pitch-navy/10">
                  <LineChart className="w-6 h-6 text-pitch-navy mb-2" />
                  <p className="text-sm text-pitch-gray">Smart Filtering</p>
                </div>
                <div className="p-4 rounded-lg bg-white shadow-sm border border-pitch-navy/10">
                  <Zap className="w-6 h-6 text-pitch-green mb-2" />
                  <p className="text-sm text-pitch-gray">Instant Connect</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Startups Section */}
        <section className="py-16 bg-white px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Startups</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-pitch-blue/5 to-pitch-teal/5">
                <div className="h-48 bg-gradient-to-br from-pitch-blue to-pitch-teal rounded-lg mb-4 overflow-hidden">
                  <video 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-watch-with-app-ready-to-start-12791-large.mp4"
                  />
                </div>
                <h3 className="text-xl font-bold">EcoTech Solutions</h3>
                <p className="text-pitch-gray">Revolutionary solar technology increasing efficiency by 30%</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-blue/10 text-pitch-blue">CleanTech</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-green/10 text-pitch-green">Series A</span>
                </div>
              </Card>
              
              <Card className="group p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-pitch-teal/5 to-pitch-green/5">
                <div className="h-48 bg-gradient-to-br from-pitch-teal to-pitch-green rounded-lg mb-4 overflow-hidden">
                  <video 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-woman-scanning-her-cell-phone-to-pay-12790-large.mp4"
                  />
                </div>
                <h3 className="text-xl font-bold">FinTrack AI</h3>
                <p className="text-pitch-gray">AI-powered financial analysis with 87% accuracy</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-blue/10 text-pitch-blue">FinTech</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-teal/10 text-pitch-teal">Seed</span>
                </div>
              </Card>
              
              <Card className="group p-6 border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-pitch-green/5 to-pitch-blue/5">
                <div className="h-48 bg-gradient-to-br from-pitch-green to-pitch-blue rounded-lg mb-4 overflow-hidden">
                  <video 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    src="https://assets.mixkit.co/videos/preview/mixkit-medical-healthcare-computer-interface-display-2216-large.mp4"
                  />
                </div>
                <h3 className="text-xl font-bold">HealthSync</h3>
                <p className="text-pitch-gray">Revolutionary telehealth platform with AI diagnostics</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-blue/10 text-pitch-blue">HealthTech</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-pitch-green/10 text-pitch-green">Series A</span>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section with Split Design */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Startup CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pitch-blue to-pitch-teal p-8 text-white">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Ready to Pitch Your Startup?</h2>
                  <p className="mb-6 text-white/90">Join thousands of innovative startups already using PitchSwipe Capital</p>
                  <Button size="lg" className="bg-white text-pitch-blue hover:bg-white/90" asChild>
                    <Link to="/startup-signup">Get Started as Startup</Link>
                  </Button>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMjEuMTgyJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMjAxRTFGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzIwMUUxRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMTQ0MCA1MTJWLjA2M0g5NTguMzg3Yy0yNC4zNTcgMjc2LjgxLTI0My4xMDEgNDk0LjI5LTUxOS44NzUgNTExLjg4N0gxNDQweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9Ii4yNSIvPjwvc3ZnPg==')] opacity-50"></div>
              </div>
              
              {/* Investor CTA */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pitch-navy to-pitch-blue p-8 text-white">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Looking to Invest?</h2>
                  <p className="mb-6 text-white/90">Access a curated selection of promising startups</p>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link to="/investor-signup">Sign Up as Investor</Link>
                  </Button>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMDAlIiB5MT0iMjEuMTgyJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJhIj48c3RvcCBzdG9wLWNvbG9yPSIjMjAxRTFGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzIwMUUxRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMTQ0MCA1MTJWLjA2M0g5NTguMzg3Yy0yNC4zNTcgMjc2LjgxLTI0My4xMDEgNDk0LjI5LTUxOS44NzUgNTExLjg4N0gxNDQweiIgZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9Ii4yNSIvPjwvc3ZnPg==')] opacity-50"></div>
              </div>
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
