import { useNavigate } from "react-router-dom";

const BRANDS = [
  {
    id: "mcd",
    name: "McDonald's London",
    logo: "/Images/similar1.jpg",
    bg: "#CF2027",
    path: "/mcdonalds",
    status: "open", // open, closed, opens_soon
  },
  {
    id: "papa",
    name: "Papa Johns",
    logo: "/Images/similar2.jpg",
    bg: "#0D5B2A",
    path: "/papajohns",
    status: "opens_soon",
  },
  {
    id: "kfc",
    name: "KFC West London",
    logo: "/Images/kfc.png",
    bg: "#C9151B",
    path: "/kfc",
    status: "open",
  },
  {
    id: "texas",
    name: "Texas Chicken",
    logo: "/Images/similar3.jpg",
    bg: "#133C7A",
    path: "/texaschicken",
    status: "open",
  },
  {
    id: "bk",
    name: "Burger King",
    logo: "/Images/similar5.png",
    bg: "#F08E28",
    path: "/burgerking",
    status: "opens_soon",
  },
  {
    id: "shaurma",
    name: "Shaurma 1",
    logo: "/Images/similar4.jpg",
    bg: "#E84C2A",
    path: "/shaurma",
    status: "closed",
  },
];

const BrandCard = ({ item }) => {
  const navigate = useNavigate();

  const handleError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/200x120.png?text=Logo";
  };

  const handleClick = () => {
    if (item.status === "open") {
      navigate(item.path);
    } else {
      alert(
        `${item.name} is ${
          item.status === "closed" ? "temporarily closed" : "opening soon"
        }`
      );
    }
  };

  // Badge color based on status
  const badgeColor =
    item.status === "open"
      ? "bg-green-500"
      : item.status === "opens_soon"
      ? "bg-orange-500"
      : "bg-gray-500";

  const badgeText =
    item.status === "open"
      ? "Open"
      : item.status === "opens_soon"
      ? "Opens Soon"
      : "Closed";

  return (
    <div
      className="group relative block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md cursor-pointer"
      onClick={handleClick}
    >
      {/* Badge */}
      <span
        className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-xs font-semibold text-white ${badgeColor}`}
      >
        {badgeText}
      </span>

      <div className="h-48 w-full overflow-hidden">
        <img
          src={item.logo}
          alt={item.name}
          onError={handleError}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div
        className={`py-3 text-center rounded-b-2xl ${
          item.status === "open"
            ? "bg-[#FF9F1C] text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        <h3 className="text-[13px] px-3 font-semibold truncate">{item.name}</h3>
      </div>
    </div>
  );
};

const RestaurantsSection = () => {
  return (
    <section id="restaurants" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-foreground">
          Popular Restaurants
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {BRANDS.map((brand) => (
            <BrandCard key={brand.id} item={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
