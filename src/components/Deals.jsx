import React from "react";

// Put images in public/images/deals/
const deals = [
  {
    id: 1,
    title: "Chef Burgers London",
    discount: "-40%",
    img: "/Images/deal1.jpg",
  },
  {
    id: 2,
    title: "Grand Ai Cafe London",
    discount: "-20%",
    img: "/Images/deal2.jpg",
  },
  {
    id: 3,
    title: "Butterbrot Caf’e London",
    discount: "-17%",
    img: "/Images/deal3.jpg",
  },
];

const HotDealsSection = () => {
  const onError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop";
  };

  return (
    <section className="py-10" id="deals">
      <div className="container mx-auto px-4">
        {/* Heading row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground">
            Up to –40% 🥂 Order.uk exclusive deals
          </h2>
        </div>

        {/* Deals grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {deals.map((d) => (
            <a
              key={d.id}
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-black shadow-md transition hover:shadow-lg"
            >
              {/* image */}
              <img
                src={d.img}
                alt={d.title}
                onError={onError}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* top-left badge */}
              <div className="absolute right-4 top-4 rounded-lg bg-[#0f172a] px-3 py-2 text-xs font-bold text-white/90">
                {d.discount}
              </div>

              {/* gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

              {/* bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[13px] font-semibold text-[#f5b021]">
                  Restaurant
                </div>
                <h3 className="mt-1 text-lg font-extrabold leading-tight text-white drop-shadow">
                  {d.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Deals = HotDealsSection;
export default Deals;
