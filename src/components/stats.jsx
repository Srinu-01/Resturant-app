const stats = [
  { value: "50k+", label: "Orders Delivered" },
  { value: "900+", label: "Restaurants" },
  { value: "120+", label: "Cities Covered" },
  { value: "457+", label: "Partner Deals" },
];

const StatsSection = () => {
  return (
    <section className=" bg-orange-500 from-primary to-accent py-16 rounded-lg mb-20 ml-10 mr-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-5xl font-bold text-primary-foreground">
                {stat.value}
              </div>
              <div className="text-lg font-medium text-primary-foreground/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
