
import { useState, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Startup {
  id: string;
  name: string;
  description: string;
  industry: string;
  location: string;
  videoUrl: string;
  foundingYear: string;
  fundingStage: string;
}

interface SwipeCardProps {
  startup: Startup;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeCard = ({ startup, onSwipeLeft, onSwipeRight }: SwipeCardProps) => {
  const [swipeClass, setSwipeClass] = useState("");
  const startX = useRef(0);
  const currentX = useRef(0);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    currentX.current = e.touches[0].clientX;
    const deltaX = currentX.current - startX.current;
    
    if (Math.abs(deltaX) > 10) {
      if (cardRef.current) {
        cardRef.current.style.transform = `translateX(${deltaX}px) rotate(${deltaX * 0.05}deg)`;
      }
    }
  };

  const handleTouchEnd = () => {
    const deltaX = currentX.current - startX.current;
    
    if (deltaX > 100) {
      // Swipe right
      setSwipeClass("swipe-right");
      setTimeout(() => {
        onSwipeRight();
      }, 300);
    } else if (deltaX < -100) {
      // Swipe left
      setSwipeClass("swipe-left");
      setTimeout(() => {
        onSwipeLeft();
      }, 300);
    } else {
      // Reset position
      if (cardRef.current) {
        cardRef.current.style.transform = "";
      }
    }
  };

  const handleSwipeRight = () => {
    setSwipeClass("swipe-right");
    toast({
      title: "Interested!",
      description: `You matched with ${startup.name}`,
    });
    setTimeout(() => {
      onSwipeRight();
    }, 300);
  };

  const handleSwipeLeft = () => {
    setSwipeClass("swipe-left");
    setTimeout(() => {
      onSwipeLeft();
    }, 300);
  };

  return (
    <div 
      ref={cardRef}
      className={`swipe-card bg-white ${swipeClass}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full flex flex-col">
        <div className="flex-grow">
          <VideoPlayer
            src={startup.videoUrl}
            autoplay={true}
            loop={true}
            muted={false}
          />
        </div>
        
        {/* Startup info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-xl font-bold text-white">{startup.name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-white/90 text-sm">{startup.industry}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
            <span className="text-white/90 text-sm">{startup.location}</span>
          </div>
          
          {showDetails && (
            <div className="mt-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 animate-fade-in">
              <p className="text-white/90 text-sm mb-2">{startup.description}</p>
              <div className="flex items-center gap-3">
                <div>
                  <p className="text-xs text-white/70">Founded</p>
                  <p className="text-sm text-white">{startup.foundingYear}</p>
                </div>
                <div>
                  <p className="text-xs text-white/70">Stage</p>
                  <p className="text-sm text-white">{startup.fundingStage}</p>
                </div>
              </div>
            </div>
          )}
          
          <button 
            className="mt-2 text-sm text-white/80 underline"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide details" : "Show details"}
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-8 z-10">
        <Button
          size="lg"
          variant="outline"
          className="rounded-full w-14 h-14 bg-white border-none shadow-lg"
          onClick={handleSwipeLeft}
        >
          <X className="h-6 w-6 text-destructive" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full w-14 h-14 bg-white border-none shadow-lg"
          onClick={handleSwipeRight}
        >
          <Heart className="h-6 w-6 text-pitch-green" />
        </Button>
      </div>
    </div>
  );
};

export default SwipeCard;
