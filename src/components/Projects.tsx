import { useState } from "react";
import project1 from "@/assets/imgs/pic (3).jpeg";
import project2 from "@/assets/imgs/pic (14).jpeg";
import project3 from "@/assets/imgs/pic (10).jpeg";
import project4 from "@/assets/project-farm.jpg";
import { Link } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "borehole", label: "Boreholes" },
    { id: "irrigation", label: "Irrigation" },
    { id: "pumps", label: "Pumps" },
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
      category: "pumps",
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

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-water-light text-primary font-semibold text-sm mb-6">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured{" "}
            <span className="text-gradient-nature">Completed Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore some of our successful projects across Zimbabwe. Each installation 
            represents our commitment to quality and client satisfaction.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-water text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:text-primary border border-border"
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
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover  group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold mb-2 capitalize">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-primary-foreground">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <p className="text-sm text-primary font-medium">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>




      <Link href="/projects"></Link>
    </section>
  );
};

export default Projects;
