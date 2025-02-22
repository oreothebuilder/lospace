
import { Plus, Hash, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CommunitySidebarProps {
  selectedCommunity: string | null;
  onSelectCommunity: (id: string) => void;
}

const CommunitySidebar = ({ selectedCommunity, onSelectCommunity }: CommunitySidebarProps) => {
  const { toast } = useToast();
  
  const communities = [
    { id: "1", name: "JEE Aspirants", icon: "🎯" },
    { id: "2", name: "Web Developers", icon: "💻" },
    { id: "3", name: "Video Editors", icon: "🎬" },
    { id: "4", name: "GATE Prep", icon: "📚" },
  ];

  const handleCreateCommunity = () => {
    toast({
      title: "Create Community",
      description: "Coming soon: Create your own community!",
    });
  };

  const handleOpenSettings = () => {
    toast({
      title: "Settings",
      description: "Settings panel coming soon!",
    });
  };

  const handleOpenFriends = () => {
    toast({
      title: "Friends",
      description: "Friends list coming soon!",
    });
  };

  return (
    <div className="w-20 bg-muted flex flex-col items-center py-4 border-r border-border">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full mb-4 bg-primary/10 hover:bg-primary/20"
        onClick={handleCreateCommunity}
      >
        <Plus className="h-5 w-5" />
      </Button>
      <div className="space-y-4 flex-1 overflow-y-auto scrollbar-hide">
        {communities.map((community) => (
          <button
            key={community.id}
            onClick={() => onSelectCommunity(community.id)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all hover:rounded-2xl ${
              selectedCommunity === community.id
                ? "bg-primary text-primary-foreground rounded-2xl"
                : "bg-muted-foreground/10 hover:bg-muted-foreground/20"
            }`}
          >
            {community.icon}
          </button>
        ))}
      </div>
      <div className="mt-auto space-y-4">
        <Button variant="ghost" size="icon" className="rounded-full" onClick={handleOpenFriends}>
          <Users className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full" onClick={handleOpenSettings}>
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default CommunitySidebar;
