
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Define a type for our waitlist entries
interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  timestamp: string;
}

const Admin = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  // Basic authentication with a simple password
  // In a real app, this would be replaced with proper authentication
  const handleAuthentication = () => {
    // Simple password for demonstration purposes - should be much stronger in production
    if (password === "admin123") {
      setAuthenticated(true);
      loadEntries();
      toast({
        title: "Authenticated",
        description: "Welcome to the admin panel"
      });
    } else {
      toast({
        title: "Authentication failed",
        description: "Incorrect password",
        variant: "destructive"
      });
    }
  };

  const loadEntries = () => {
    // Load entries from localStorage
    const storedEntries = localStorage.getItem('waitlistEntries');
    if (storedEntries) {
      setEntries(JSON.parse(storedEntries));
    }
  };

  const handleDeleteEntry = (id: string) => {
    // Filter out the entry to delete
    const updatedEntries = entries.filter(entry => entry.id !== id);
    // Update state and localStorage
    setEntries(updatedEntries);
    localStorage.setItem('waitlistEntries', JSON.stringify(updatedEntries));
    toast({
      title: "Entry deleted",
      description: "The waitlist entry has been removed"
    });
  };

  const handleExportCSV = () => {
    // Create CSV content
    const headers = ["ID", "Name", "Email", "Timestamp"];
    const csvRows = [
      headers.join(","),
      ...entries.map(entry => 
        [entry.id, entry.name, entry.email, entry.timestamp].join(",")
      )
    ];
    const csvContent = csvRows.join("\n");
    
    // Create download link
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "waitlist_entries.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    toast({
      title: "Export successful",
      description: "The waitlist data has been exported as CSV"
    });
  };

  // Filter entries based on search term
  const filteredEntries = entries.filter(entry => 
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      
      <div className="flex-1 container mx-auto px-4 py-16 pt-24">
        <h1 className="text-3xl font-bold mb-8">Admin Panel - Waitlist Entries</h1>
        
        {!authenticated ? (
          <div className="max-w-md mx-auto p-6 rounded-lg border border-gray-200 shadow-md">
            <h2 className="text-xl font-semibold mb-4">Authentication Required</h2>
            <p className="mb-4 text-sm text-gray-400">
              Please enter the admin password to access the waitlist data.
            </p>
            <div className="space-y-4">
              <Input 
                type="password" 
                placeholder="Admin password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAuthentication()}
              />
              <Button onClick={handleAuthentication} className="w-full">
                Login
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
              <Input
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              <Button onClick={handleExportCSV} variant="outline">
                Export as CSV
              </Button>
            </div>
            
            {filteredEntries.length > 0 ? (
              <div className="overflow-x-auto rounded-lg border">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-800">
                    <tr>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Email</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEntries.map((entry) => (
                      <tr key={entry.id} className="border-b border-gray-700">
                        <td className="px-6 py-4">{entry.name}</td>
                        <td className="px-6 py-4">{entry.email}</td>
                        <td className="px-6 py-4">
                          {new Date(entry.timestamp).toLocaleString()}
                        </td>
                        <td className="px-6 py-4">
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteEntry(entry.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-10 text-gray-400">
                {entries.length === 0 ? "No waitlist entries found." : "No matching entries found."}
              </div>
            )}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Admin;
