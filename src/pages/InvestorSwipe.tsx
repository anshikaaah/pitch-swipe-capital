
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import SwipeCard from "@/components/SwipeCard";
import Navbar from "@/components/Navbar";

// Sample data for demo
const sampleStartups = [
  {
    id: "1",
    name: "EcoTech Solutions",
    description: "Sustainable energy solutions for small businesses and residential properties. Our patented solar technology increases efficiency by 30%.",
    industry: "CleanTech",
    location: "San Francisco, CA",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-a-girl-blowing-a-bubble-gum-at-an-amusement-park-1226-large.mp4", // Sample video
    foundingYear: "2022",
    fundingStage: "Seed",
  },
  {
    id: "2",
    name: "FinTrack AI",
    description: "AI-powered financial management platform that predicts market trends with 87% accuracy and provides automated investment strategies.",
    industry: "FinTech",
    location: "New York, NY",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-changing-lights-1240-large.mp4", // Sample video
    foundingYear: "2021",
    fundingStage: "Pre-seed",
  },
  {
    id: "3",
    name: "HealthSync",
    description: "Remote patient monitoring platform connecting doctors and patients with real-time health data analytics and AI diagnostics.",
    industry: "HealthTech",
    location: "Boston, MA",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4", // Sample video
    foundingYear: "2023",
    fundingStage: "Series A",
  },
];

const InvestorSwipe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matchedStartups, setMatchedStartups] = useState<string[]>([]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const currentStartup = sampleStartups[currentIndex];
  
  const handleSwipeLeft = () => {
    // Skip to next startup
    if (currentIndex < sampleStartups.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Cycle back to the first startup when we reach the end
      setCurrentIndex(0);
    }
  };
  
  const handleSwipeRight = () => {
    // Add to matches and go to next
    setMatchedStartups([...matchedStartups, currentStartup.id]);
    
    if (currentIndex < sampleStartups.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Cycle back to the first startup when we reach the end
      setCurrentIndex(0);
    }
  };
  
  return (
    <div className="min-h-screen bg-pitch-light flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Discover Startups</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          >
            Filters
          </Button>
        </div>
        
        {isFiltersOpen && (
          <div className="container mx-auto px-4 py-2 pb-4 animate-fade-in">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <h3 className="font-medium mb-2">Filter by industry</h3>
              <div className="flex flex-wrap gap-2">
                {["FinTech", "HealthTech", "CleanTech", "EdTech", "AI/ML"].map((industry) => (
                  <Button 
                    key={industry} 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                  >
                    {industry}
                  </Button>
                ))}
              </div>
              
              <h3 className="font-medium mb-2 mt-4">Funding stage</h3>
              <div className="flex flex-wrap gap-2">
                {["Pre-seed", "Seed", "Series A", "Series B+"].map((stage) => (
                  <Button 
                    key={stage} 
                    variant="outline" 
                    size="sm" 
                    className="rounded-full"
                  >
                    {stage}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-grow flex items-center justify-center px-4 py-6">
          <div className="card-swipe-container">
            {currentStartup && (
              <SwipeCard
                startup={currentStartup}
                onSwipeLeft={handleSwipeLeft}
                onSwipeRight={handleSwipeRight}
              />
            )}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-4">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <h2 className="font-medium mb-2">Your Matches ({matchedStartups.length})</h2>
            {matchedStartups.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {matchedStartups.map((id) => {
                  const startup = sampleStartups.find((s) => s.id === id);
                  return startup ? (
                    <div key={id} className="bg-pitch-blue/10 text-pitch-blue rounded-full px-3 py-1 text-sm">
                      {startup.name}
                    </div>
                  ) : null;
                })}
              </div>
            ) : (
              <p className="text-sm text-pitch-gray">Swipe right on startups you're interested in!</p>
            )}
          </div>
        </div>
      </main>
      
      <footer className="py-4 px-6 text-center text-pitch-gray border-t">
        <p>© 2025 PitchSwipe Capital</p>
      </footer>
    </div>
  );
};

export default InvestorSwipe;
