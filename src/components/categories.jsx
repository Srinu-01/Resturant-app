// Matches the provided mock: title + 6 rounded cards with image on top and gray info bar.
const categories = [
  {
    id: 1,
    name: "Burgers & Fast food",
    img: "/Images/category1.jpg",
  },
  { id: 2, name: "Salads", img: "/Images/category2.jpg" },
  {
    id: 3,
    name: "Pasta & Casuals",
    img: "/Images/category3.jpg",
  },
  { id: 4, name: "Pizza", img: "/Images/category4.jpg" },
  {
    id: 5,
    name: "Breakfast",
    count: 4,
    img: "/Images/category5.jpg",
  },
  { id: 6, name: "Soups", img: "/Images/category6.jpg" },
];

const CatCard = ({ c }) => (
  <a
    href="#"
    className="group block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
  >
    <div className="h-44 w-full overflow-hidden">
      <img
        src={c.img}
        alt={c.name}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop";
        }}
      />
    </div>
    <div className="bg-[#F3F4F6] px-4 py-3">
      <div className="text-[15px] font-semibold text-[#0f172a]">{c.name}</div>
      <div className="mt-0.5 text-xs font-medium text-[#f59e0b]"></div>
    </div>
  </a>
);

const CategoriesSection = () => {
  return (
    <section className="py-10" id="categories">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-foreground">
          Order.uk Popular Categories <span className="align-middle">🤩</span>
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => (
            <CatCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
