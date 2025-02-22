
import { Camera, Mic, Share, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface LoSpaceContentProps {
  communityId: string | null;
  repositoryId: string | null;
}

const LoSpaceContent = ({ communityId, repositoryId }: LoSpaceContentProps) => {
  const { toast } = useToast();
  
  const handleMicToggle = () => {
    toast({
      title: "Microphone",
      description: "Microphone toggle coming soon!",
    });
  };

  const handleCameraToggle = () => {
    toast({
      title: "Camera",
      description: "Camera toggle coming soon!",
    });
  };

  const handleShareScreen = () => {
    toast({
      title: "Share Screen",
      description: "Screen sharing coming soon!",
    });
  };

  const handleShareLoSpace = () => {
    toast({
      title: "Share LoSpace",
      description: "Invitation link copied to clipboard coming soon!",
    });
  };

  const handleShowMembers = () => {
    toast({
      title: "Members",
      description: "Members list coming soon!",
    });
  };

  if (!communityId || !repositoryId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background/50">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Welcome to LoSpace</h3>
          <p className="text-muted-foreground">
            Select a community and repository to start grinding!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-background/50">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div>
          <h2 className="font-semibold">Physics LoSpace</h2>
          <p className="text-sm text-muted-foreground">
            Grinding mechanics problems together
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleShowMembers}>
            <Users className="h-4 w-4 mr-2" />
            12 Members
          </Button>
          <Button variant="outline" size="icon" onClick={handleShareLoSpace}>
            <Share className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex-1 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="aspect-video bg-muted rounded-lg overflow-hidden relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">👤</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 flex items-center justify-between bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-medium">User {i + 1}</span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleMicToggle}>
                  <Mic className="h-3 w-3" />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={handleCameraToggle}>
                  <Camera className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={handleMicToggle}>
          <Mic className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleCameraToggle}>
          <Camera className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleShareScreen}>
          <Share className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default LoSpaceContent;
