
import { useState } from "react";
import CommunitySidebar from "./CommunitySidebar";
import RepositorySidebar from "./RepositorySidebar";
import LoSpaceContent from "./LoSpaceContent";

const DashboardLayout = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [selectedRepository, setSelectedRepository] = useState<string | null>(null);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <CommunitySidebar 
        selectedCommunity={selectedCommunity}
        onSelectCommunity={setSelectedCommunity}
      />
      {selectedCommunity && (
        <RepositorySidebar 
          communityId={selectedCommunity}
          selectedRepository={selectedRepository}
          onSelectRepository={setSelectedRepository}
        />
      )}
      <LoSpaceContent 
        communityId={selectedCommunity}
        repositoryId={selectedRepository}
      />
    </div>
  );
};

export default DashboardLayout;
