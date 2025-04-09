
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { Upload, Video, Check, AlertCircle } from "lucide-react";

interface VideoUploaderProps {
  onVideoUploaded?: (videoUrl: string) => void;
}

const VideoUploader = ({ onVideoUploaded }: VideoUploaderProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };
  
  const processFile = (file: File) => {
    // Check if it's a video
    if (!file.type.startsWith("video/")) {
      setError("Please upload a valid video file.");
      toast({
        title: "Invalid file type",
        description: "Please upload a valid video file.",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (max 100MB for this example)
    const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
    if (file.size > MAX_FILE_SIZE) {
      setError("Video file is too large. Maximum size is 100MB.");
      toast({
        title: "File too large",
        description: "Video file is too large. Maximum size is 100MB.",
        variant: "destructive",
      });
      return;
    }
    
    // Reset error state
    setError(null);
    
    // Create a preview URL
    const objectUrl = URL.createObjectURL(file);
    setVideoPreviewUrl(objectUrl);
    
    // Simulate upload process
    simulateUpload(file);
  };
  
  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate progress updates
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress > 100) progress = 100;
      setUploadProgress(progress);
      
      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsUploading(false);
          onVideoUploaded?.(videoPreviewUrl || "");
          toast({
            title: "Upload complete",
            description: "Your pitch video has been successfully uploaded!",
          });
        }, 500);
      }
    }, 500);
  };
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  
  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />
      
      {!videoPreviewUrl ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragging 
              ? "border-pitch-blue bg-pitch-blue/5" 
              : "border-gray-300 hover:border-pitch-blue hover:bg-pitch-blue/5"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleButtonClick}
        >
          <div className="flex flex-col items-center justify-center py-10">
            <Upload className="h-12 w-12 text-pitch-gray mb-4" />
            <h3 className="text-lg font-medium mb-1">Upload your 30-second pitch</h3>
            <p className="text-sm text-pitch-gray mb-4">Drag and drop your video file here, or click to browse</p>
            <Button type="button" className="bg-pitch-blue hover:bg-pitch-teal">
              Select Video
            </Button>
            <p className="text-xs text-pitch-gray mt-4">Maximum video length: 30 seconds. Maximum file size: 100MB</p>
          </div>
        </div>
      ) : (
        <div className="border rounded-lg p-6">
          {isUploading ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">Uploading your video...</h3>
                <span className="text-sm font-medium">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
              <p className="text-sm text-pitch-gray">Please don't close this window while your video uploads</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-green-600">
                <Check className="h-5 w-5" />
                <span className="font-medium">Video uploaded successfully!</span>
              </div>
              <div className="aspect-video bg-black rounded-md overflow-hidden">
                <video 
                  src={videoPreviewUrl} 
                  controls 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setVideoPreviewUrl(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = "";
                    }
                  }}
                >
                  Replace Video
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {error && (
        <div className="mt-2 flex items-center gap-2 text-destructive">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{error}</span>
        </div>
      )}
    </div>
  );
};

export default VideoUploader;
