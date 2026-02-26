


import { useState, useMemo } from "react";// Use 'react-router-dom' if not using Next.js
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";



// Asset Imports
import project1 from "@/assets/imgs/pic (3).jpeg";
import project2 from "@/assets/imgs/pic (14).jpeg";
import project3 from "@/assets/pump.jpeg";
import project4 from "@/assets/project-farm.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "borehole", label: "Boreholes" },
    { id: "irrigation", label: "Irrigation" },
    { id: "Water capacity testing", label: "Water Testing" },
    { id: "Home solar systems", label: "Solar Systems" },
    { id: "Piped water scheme", label: "Water Schemes" },
    { id: "Civil works", label: "Civil works" },
  ];

  const projects = [
    {
      id: 1,
      category: "borehole",
      title: "Commercial Borehole",
      location: "Bulawayo Industrial",
      image: project1,
      description: "120m deep borehole with submersible pump installation",
    },
    {
      id: 2,
      category: "irrigation",
      title: "Drip Irrigation System",
      location: "Matabeleland Farm",
      image: project2,
      description: "5-hectare drip irrigation for vegetable production",
    },
    {
      id: 3,
      category: "pumps", // Note: Make sure category matches filter ID exactly
      title: "Solar Pump System",
      location: "Rural Community",
      image: project3,
      description: "Solar-powered water pumping for community use",
    },
    {
      id: 4,
      category: "irrigation",
      title: "Center Pivot Installation",
      location: "Commercial Farm",
      image: project4,
      description: "20-hectare center pivot irrigation system",
    },
  ];

  // useMemo prevents unnecessary re-calculations
  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects.slice(0, 4) // Show only first 4 on home/featured section
      : projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding bg-muted/30 border-t border-border/40">
      <div className="container-custom">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              Our Success Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Featured <span className="text-primary">Completed Work</span>
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="group inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-all"
          >
            View Full Portfolio 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-background text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white text-[10px] uppercase font-extrabold tracking-widest border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
                    <MapPin className="w-4 h-4 text-primary" />
                    {project.location}
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-card">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-background/50 rounded-3xl border border-dashed border-border">
            <p className="text-muted-foreground">No featured projects in this category yet.</p>
          </div>
        )}

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/20"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Projects;