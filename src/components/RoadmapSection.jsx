const RoadmapSection = () => {
  const milestones = [
    { title: "Q1 2023", description: "Launch of Memecoin", icon: "🚀" },
    { title: "Q2 2023", description: "Community Building", icon: "👥" },
    { title: "Q3 2023", description: "Partnerships", icon: "🤝" },
    { title: "Q4 2023", description: "Expansion", icon: "🌍" },
  ];

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Roadmap</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="p-6 bg-card rounded-lg shadow-md">
              <div className="text-4xl">{milestone.icon}</div>
              <h3 className="mt-4 text-2xl font-semibold">{milestone.title}</h3>
              <p className="mt-2 text-muted-foreground">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;