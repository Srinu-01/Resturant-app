// src/components/AppDownloadSection.jsx
// Assets used:
// - /public/images/logo.png
// - /public/images/app-couple.png  (transparent PNG preferred)

const AppDownloadSection = () => {
  return (
    <section id="app" className="py-16">
      <div className="container mx-auto px-4">
        {/* Card */}
        <div className="relative grid items-center gap-6 overflow-hidden rounded-3xl border bg-linear-to-br from-[#f7f7f8] to-[#ededed] p-6 md:grid-cols-2 md:p-10">
          {/* LEFT: Couple image */}
          <div className="flex items-end justify-center">
            <img
              src="/Images/appdownload.jpg"
              alt="People using Order.uk app"
              className="max-h-[380px] w-auto object-contain md:max-h-[440px]"
              loading="lazy"
            />
          </div>

          {/* RIGHT: Headline + pill + badges */}
          <div className="text-center md:text-left">
            {/* “Order.uk” + “ing is more” */}
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <img
                src="/Images/logo.png"
                alt="Order.uk"
                className="h-10 w-auto"
                loading="lazy"
              />
              <h2 className="text-3xl font-extrabold leading-tight text-[#0b152b] md:text-4xl">
                ing is more
              </h2>
            </div>

            {/* Dark pill: Personalised & Instant */}
            <div className="mt-4 inline-flex items-center rounded-full bg-[#0b152b] px-6 py-3 text-lg font-semibold text-white md:text-2xl">
              <span className="pr-2 font-extrabold underline decoration-[#ff9f1c] decoration-[6px] underline-offset-[10px] text-[#ff9f1c]">
                Personalised
              </span>
              &nbsp;&amp;&nbsp;Instant
            </div>

            <p className="mt-4 text-sm text-[#3c475f] md:text-base">
              Download the Order.uk app for faster ordering
            </p>

            {/* Official online SVG badges */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a href="#" aria-label="Download on the App Store">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>
              <a href="#" aria-label="Get it on Google Play">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 w-auto transition-transform duration-200 hover:scale-[1.03]"
                  loading="lazy"
                />
              </a>
            </div>
          </div>

          {/* Subtle outline */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
