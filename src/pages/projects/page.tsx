
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Icons
import { MapPin, Calendar, ArrowRight } from "lucide-react";

// Asset Imports (Keeping your existing imports)
import project1 from "@/assets/imgs/pic (1).jpeg";
import project2 from "@/assets/imgs/pic (2).jpeg";
import project4 from "@/assets/imgs/pic (10).jpeg";
import project5 from "@/assets/imgs/pic (5).jpeg";
import p1 from "@/assets/1 (1).jpeg";
import p2 from "@/assets/1 (2).jpeg";
import p3 from "@/assets/1 (3).jpeg";
import p4 from "@/assets/1 (4).jpeg";
import p5 from "@/assets/1 (5).jpeg";
import cen from "@/assets/project-farm.jpg";

interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  image: string;
  description: string;
  year: string;
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "borehole", label: "Boreholes" },
    { id: "irrigation", label: "Irrigation" },
    { id: "pumps", label: "Pumps" },
    { id: "Water capacity testing", label: "Water Testing" },
    { id: "Home solar systems", label: "Solar Systems" },
    { id: "Piped water scheme", label: "Water Schemes" },
    { id: "Sanitation & Hygiene Infrastructure", label: "Sanitation" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      category: "borehole",
      title: "Commercial Borehole",
      location: "Bulawayo Industrial",
      image: project1,
      description: "120m deep borehole with submersible pump installation for industrial use.",
      year: "2023",
    },
    {
      id: 2,
      category: "irrigation",
      title: "Drip Irrigation System",
      location: "Matabeleland Farm",
      image: project2,
      description: "5-hectare precision drip irrigation setup for sustainable vegetable production.",
      year: "2023",
    },
    {
      id: 3,
      category: "pumps",
      title: "Solar Pump System",
      location: "Rural Community",
      image: p1,
      description: "Off-grid solar-powered water pumping solution providing reliable community access.",
      year: "2022",
    },
    {
      id: 4,
      category: "irrigation",
      title: "Center Pivot Installation",
      location: "Commercial Farm",
      image: cen,
      description: "High-efficiency 20-hectare center pivot system for large-scale grain farming.",
      year: "2022",
    },
    {
      id: 5,
      category: "irrigation",
      title: "Estate Irrigation",
      location: "Mazowe Valley",
      image: project5,
      description: "Advanced hydration systems tailored for citrus and export crop management.",
      year: "2022",
    },
    {
      id: 6,
      category: "Piped water scheme",
      title: "Urban Water Reticulation",
      location: "Harare North",
      image: p4,
      description: "Full-scale distribution network connecting over 50 households to clean water.",
      year: "2022",
    },
    {
      id: 7,
      category: "Water capacity testing",
      title: "Yield & Purity Analysis",
      location: "Gweru District",
      image: p5,
      description: "Comprehensive 24-hour constant rate discharge test and chemical water analysis.",
      year: "2022",
    },
    {
      id: 9,
      category: "Sanitation & Hygiene Infrastructure",
      title: "Community Wash Station",
      location: "Nkayi Rural",
      image: p3,
      description: "Multi-purpose infrastructure featuring cattle troughs and hygiene stations.",
      year: "2022",
    },
    {
      id: 10,
      category: "Sanitation & Hygiene Infrastructure",
      title: "Public Sanitation Block",
      location: "Beitbridge Outpost",
      image: p2,
      description: "Sustainable sanitation facilities integrated with solar lighting for safety.",
      year: "2022",
    },
  ];

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter, projects]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 via-background to-background">
        <div className="container-custom px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              Proven Results
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
              Our <span className="text-primary">Project</span> Gallery
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of our commitment to sustainable water management and agricultural excellence across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pb-24 px-4">
        <div className="container-custom">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === f.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-[10px] uppercase font-bold tracking-tighter">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center gap-2 text-primary text-xs font-bold mb-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.year}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/60">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      {project.location}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-32 rounded-3xl border-2 border-dashed border-muted">
              <p className="text-muted-foreground italic">No projects found in this category.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      className={currentPage === 1 ? "opacity-20 pointer-events-none" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <PaginationItem key={p}>
                      <PaginationLink
                        onClick={() => setCurrentPage(p)}
                        isActive={currentPage === p}
                        className="cursor-pointer"
                      >
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      className={currentPage === totalPages ? "opacity-20 pointer-events-none" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>
      </section>

      {/* Refined CTA */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container-custom px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready for a similar setup?</h2>
          <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
            Get professional advice on borehole drilling, irrigation, or solar systems for your property.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full transition-transform hover:scale-105 shadow-xl shadow-primary/20"
          >
            Get Expert Quote <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;