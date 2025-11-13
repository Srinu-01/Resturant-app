// PartnerSection.jsx — matches your screenshot
// Put images in /public/images/:
//  - /images/partner-chef.jpg
//  - /images/partner-rider.jpg

const Card = ({ img, tag, subtitle, title, ctaHref = "#" }) => (
  <a
    href={ctaHref}
    className="group relative block overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition"
  >
    {/* BG image */}
    <img
      src={img}
      alt={title}
      className="h-[280px] w-full object-cover md:h-[320px]"
      loading="lazy"
    />

    {/* Top-left white tag */}
    <div className="absolute left-6 top-6 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0b152b] shadow">
      {tag}
    </div>

    {/* Dark gradient overlay */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

    {/* Copy + CTA */}
    <div className="absolute inset-x-0 bottom-6 px-6">
      <p className="text-sm font-semibold text-white/80">{subtitle}</p>
      <h3 className="mt-1 text-3xl font-extrabold leading-tight text-white drop-shadow">
        {title}
      </h3>

      <button className="mt-4 rounded-full bg-[#ff9f1c] px-6 py-3 text-sm font-semibold text-[#0b152b] shadow hover:brightness-95 transition">
        Get Started
      </button>
    </div>
  </a>
);

const PartnerSection = () => {
  return (
    <section id="partners" className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            img="/Images/partner2.jpg"
            tag="Earn more with lower fees"
            subtitle="Signup as a business"
            title="Partner with us"
          />
          <Card
            img="/Images/partner1.jpg"
            tag="Avail exclusive perks"
            subtitle="Signup as a rider"
            title="Ride with us"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
