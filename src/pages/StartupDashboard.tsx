
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoUploader from "@/components/VideoUploader";
import Navbar from "@/components/Navbar";

const StartupDashboard = () => {
  const [pitchVideoUrl, setPitchVideoUrl] = useState<string | null>(null);
  const [matches, setMatches] = useState([
    { id: 1, name: "Alex Johnson", company: "Venture Partners", status: "pending" },
    { id: 2, name: "Sarah Williams", company: "Growth Capital", status: "connected" },
  ]);
  
  const handleVideoUploaded = (url: string) => {
    setPitchVideoUrl(url);
  };

  return (
    <div className="min-h-screen bg-pitch-light flex flex-col">
      <Navbar />
      
      <main className="container mx-auto py-8 px-4 flex-grow">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Welcome, TechStartup!</h1>
          <p className="text-pitch-gray">Manage your profile and track investor interest</p>
        </div>
        
        <Tabs defaultValue="pitch">
          <TabsList className="mb-6">
            <TabsTrigger value="pitch">Your Pitch</TabsTrigger>
            <TabsTrigger value="matches">Matches</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pitch">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pitch Video</CardTitle>
                  <CardDescription>Upload your 30-second video pitch for investors</CardDescription>
                </CardHeader>
                <CardContent>
                  {pitchVideoUrl ? (
                    <div className="space-y-4">
                      <div className="aspect-video bg-black rounded-md overflow-hidden">
                        <video 
                          src={pitchVideoUrl} 
                          controls 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex justify-end">
                        <Button onClick={() => setPitchVideoUrl(null)}>Replace Video</Button>
                      </div>
                    </div>
                  ) : (
                    <VideoUploader onVideoUploaded={handleVideoUploaded} />
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Pitch Analytics</CardTitle>
                  <CardDescription>See how your pitch is performing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-md shadow-sm border">
                        <p className="text-pitch-gray text-sm">Views</p>
                        <p className="text-2xl font-bold">{pitchVideoUrl ? "12" : "0"}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm border">
                        <p className="text-pitch-gray text-sm">Right Swipes</p>
                        <p className="text-2xl font-bold">{pitchVideoUrl ? "3" : "0"}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm border">
                        <p className="text-pitch-gray text-sm">Completion Rate</p>
                        <p className="text-2xl font-bold">{pitchVideoUrl ? "87%" : "0%"}</p>
                      </div>
                      <div className="bg-white p-4 rounded-md shadow-sm border">
                        <p className="text-pitch-gray text-sm">Avg. View Time</p>
                        <p className="text-2xl font-bold">{pitchVideoUrl ? "24s" : "0s"}</p>
                      </div>
                    </div>
                    
                    {!pitchVideoUrl && (
                      <div className="text-center p-4 bg-pitch-blue/5 rounded-md">
                        <p>Upload your pitch video to start tracking analytics</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="matches">
            <Card>
              <CardHeader>
                <CardTitle>Investor Matches</CardTitle>
                <CardDescription>Connect with investors who swiped right on your pitch</CardDescription>
              </CardHeader>
              <CardContent>
                {matches.length > 0 ? (
                  <div className="space-y-4">
                    {matches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <h3 className="font-medium">{match.name}</h3>
                          <p className="text-sm text-pitch-gray">{match.company}</p>
                        </div>
                        <div>
                          {match.status === "pending" ? (
                            <Button size="sm" className="bg-pitch-blue hover:bg-pitch-teal">
                              Connect
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline">
                              Message
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-pitch-gray">No matches yet. Upload your pitch to get started!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>Manage your company information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-medium text-sm text-pitch-gray">Company Name</h3>
                      <p>TechStartup Inc.</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-pitch-gray">Industry</h3>
                      <p>FinTech</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-pitch-gray">Founded</h3>
                      <p>2023</p>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-pitch-gray">Team Size</h3>
                      <p>5</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm text-pitch-gray">Description</h3>
                    <p className="mt-1">
                      TechStartup is revolutionizing the way people manage their finances through AI-powered insights and automated savings strategies.
                    </p>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button variant="outline">Edit Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="py-4 px-6 text-center text-pitch-gray border-t">
        <p>© 2025 PitchSwipe Capital</p>
      </footer>
    </div>
  );
};

export default StartupDashboard;
