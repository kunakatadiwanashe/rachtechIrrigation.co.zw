import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/Whatsapp";
import project1 from "@/assets/project-borehole.jpg";
import project2 from "@/assets/project-irrigation.jpg";
import project3 from "@/assets/project-pump.jpg";
import project4 from "@/assets/project-farm.jpg";
import { MapPin } from "lucide-react";

const ProjectsPage = () => {
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
      year: "2023",
      client: "Industrial Client",
    },
    {
      id: 2,
      category: "irrigation",
      title: "Drip Irrigation System",
      location: "Matabeleland Farm",
      image: project2,
      description: "5-hectare drip irrigation for vegetable production",
      year: "2023",
      client: "Commercial Farm",
    },
    {
      id: 3,
      category: "pumps",
      title: "Solar Pump System",
      location: "Rural Community",
      image: project3,
      description: "Solar-powered water pumping for community use",
      year: "2022",
      client: "Community Project",
    },
    {
      id: 4,
      category: "irrigation",
      title: "Center Pivot Installation",
      location: "Commercial Farm",
      image: project4,
      description: "20-hectare center pivot irrigation system",
      year: "2022",
      client: "Agricultural Enterprise",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-water-light text-primary font-semibold text-sm mb-6">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Completed{" "}
              <span className="text-gradient-nature">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Explore our comprehensive portfolio of successful water solutions, 
              borehole drilling, and irrigation installations across Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-xl shadow-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
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
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold capitalize">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-background/80 text-foreground text-xs font-semibold mb-2">
                      {project.year}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-primary-foreground">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client: {project.client}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-water">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Start Your Project Today
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Ready to work with Zimbabwe's leading water solutions provider? 
            Contact us for a free consultation and quote.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-background text-primary font-semibold rounded-full hover:shadow-elevated transition-all duration-300"
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProjectsPage;
