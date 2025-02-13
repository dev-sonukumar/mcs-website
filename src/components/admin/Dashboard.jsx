import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";
import ServicesManager from "@/components/admin/ServicesManager";
import PostsManager from "@/components/admin/PostsManager";
import BlogManager from "@/components/admin/BlogManager";
import FAQManager from "@/components/admin/FAQManager";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("services");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white p-4">
        <Sidebar setActiveSection={setActiveSection} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

        {/* Buttons to Switch Sections (for quick navigation) */}
        <div className="flex gap-4 mb-6">
          <Button onClick={() => setActiveSection("services")}>
            Manage Services
          </Button>
          <Button onClick={() => setActiveSection("posts")}>
            Manage Posts
          </Button>
          <Button onClick={() => setActiveSection("blog")}>Manage Blog</Button>
          <Button onClick={() => setActiveSection("faq")}>Manage FAQ</Button>
        </div>

        <Card>
          <CardContent className="p-6">
            {activeSection === "services" && <ServicesManager />}
            {activeSection === "posts" && <PostsManager />}
            {activeSection === "blog" && <BlogManager />}
            {activeSection === "faq" && <FAQManager />}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
