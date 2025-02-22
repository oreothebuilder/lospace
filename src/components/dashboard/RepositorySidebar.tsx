
import { Plus, Hash, Settings, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface RepositorySidebarProps {
  communityId: string;
  selectedRepository: string | null;
  onSelectRepository: (id: string) => void;
}

const RepositorySidebar = ({
  communityId,
  selectedRepository,
  onSelectRepository,
}: RepositorySidebarProps) => {
  const { toast } = useToast();

  const repositories = [
    { id: "1", name: "Physics", type: "lospace" },
    { id: "2", name: "Chemistry", type: "lospace" },
    { id: "3", name: "Mathematics", type: "lospace" },
    { id: "4", name: "Study Resources", type: "repository" },
    { id: "5", name: "Important Links", type: "repository" },
  ];

  const handleCreateLoSpace = () => {
    toast({
      title: "Create LoSpace",
      description: "Create a new study space coming soon!",
    });
  };

  const handleCreateRepository = () => {
    toast({
      title: "Create Repository",
      description: "Create a new repository coming soon!",
    });
  };

  const handleUserSettings = () => {
    toast({
      title: "User Settings",
      description: "User settings panel coming soon!",
    });
  };

  return (
    <div className="w-60 bg-muted/50 flex flex-col h-full border-r border-border">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-lg">Community Name</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2 text-sm font-semibold text-muted-foreground">
            <span className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              LOSPACES
            </span>
            <Button variant="ghost" size="icon" className="h-4 w-4" onClick={handleCreateLoSpace}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          {repositories
            .filter((repo) => repo.type === "lospace")
            .map((repo) => (
              <button
                key={repo.id}
                onClick={() => onSelectRepository(repo.id)}
                className={`w-full px-2 py-1 rounded text-sm flex items-center gap-2 ${
                  selectedRepository === repo.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50"
                }`}
              >
                <Hash className="h-4 w-4" />
                {repo.name}
              </button>
            ))}
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2 text-sm font-semibold text-muted-foreground">
            <span className="flex items-center gap-2">
              <Hash className="h-4 w-4" />
              REPOSITORIES
            </span>
            <Button variant="ghost" size="icon" className="h-4 w-4" onClick={handleCreateRepository}>
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          {repositories
            .filter((repo) => repo.type === "repository")
            .map((repo) => (
              <button
                key={repo.id}
                onClick={() => onSelectRepository(repo.id)}
                className={`w-full px-2 py-1 rounded text-sm flex items-center gap-2 ${
                  selectedRepository === repo.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50"
                }`}
              >
                <Hash className="h-4 w-4" />
                {repo.name}
              </button>
            ))}
        </div>
      </div>
      <div className="p-4 border-t border-border mt-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              🧑
            </div>
            <span className="text-sm font-medium">Username</span>
          </div>
          <Button variant="ghost" size="icon" onClick={handleUserSettings}>
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RepositorySidebar;
