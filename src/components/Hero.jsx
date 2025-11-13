import React from "react";

const Hero = () => {
  return (
    <section className="py-10 bg-white relative overflow-visible">
      <div className="container mx-auto px-6 relative overflow-visible">
        <div className="relative rounded-[22px] border border-neutral-200 bg-white p-6 md:p-10 overflow-visible z-10">
          <div className="grid items-center gap-10 md:grid-cols-12 relative overflow-visible">
            {/* LEFT TEXT SECTION */}
            <div className="md:col-span-5 z-30">
              <p className="text-sm text-gray-500">
                Order Restaurant food, takeaway and groceries.
              </p>

              <h1 className="mt-3 text-[44px] md:text-[56px] font-extrabold leading-[1.1] text-gray-900">
                Feast Your Senses,
                <br />
                <span className="text-orange-500">Fast and Fresh</span>
              </h1>
            </div>

            {/* RIGHT IMAGE + ORANGE ARC + POPUPS */}
            <div className="md:col-span-7 relative flex justify-end items-center h-[520px] overflow-visible">
              {/* ORANGE ARC */}
              <div className="absolute right-[-38px] top-[7px] w-[550px] h-[550px] bg-orange-500 rounded-tl-[280px] rounded-bl-[280px] z-0"></div>

              {/* RIGHT IMAGE */}
              <img
                src="/Images/girl-right.jpg"
                alt="Girl enjoying noodles"
                className="relative rounded-xl md:right-1 md:top-24 md:-translate-x-[55%] md:w-[330px] md:h-[400px] w-44 h-48 object-cover z-10 shadow-xl"
              />

              {/* POPUPS */}
              <div className="absolute right-1 top-6 w-[300px] rounded-xl bg-white shadow-lg p-4 border border-gray-100 z-20">
                <div className="font-bold text-lg text-[20px] flex items-center gap-1">
                  Order
                  <span className="text-[12px] text-gray-400 ml-auto">now</span>
                </div>
                <p className="text-md font-bold text-gray-600 mt-1">
                  We’ve Received your order! <br />
                  <span className="text-gray-500 text-[12px] font-normal">
                    Awaiting Restaurant acceptance
                  </span>
                </p>
              </div>

              <div className="absolute right-1 top-48 w-[300px] rounded-xl bg-white shadow-lg p-4 border border-gray-100 z-20">
                <div className="font-bold text-lg flex items-center gap-1">
                  Order
                  <span className="text-[10px] text-gray-400 ml-auto">now</span>
                </div>
                <p className="text-md font-bold text-gray-600 mt-1">
                  Order Accepted! ✅ <br />
                  <span className="text-gray-500 text-[12px] font-normal">
                    Your order will be delivered shortly
                  </span>
                </p>
              </div>

              <div className="absolute right bottom-10 w-[300px] rounded-xl bg-white shadow-lg p-4 border border-gray-100 z-20">
                <div className="font-bold text-lg flex items-center gap-1">
                  Order
                  <span className="text-[10px] text-gray-400 ml-auto">now</span>
                </div>
                <p className="text-md font-bold text-gray-600 mt-1">
                  Your rider’s nearby 🎉 <br />
                  <span className="text-gray-500 text-[12px] font-normal">
                    They’re almost there — get ready!
                  </span>
                </p>
              </div>

              {/* Numbers */}
              <div className="absolute right-12 top-10 text-white/70 text-4xl font-extrabold">
                1
              </div>
              <div className="absolute right-12 top-52 text-white/70 text-4xl font-extrabold">
                2
              </div>
              <div className="absolute right-12 bottom-16 text-white/70 text-4xl font-extrabold">
                3
              </div>
            </div>
          </div>

          {/* CENTER IMAGE (user-provided snippet) */}
          <img
            src="/Images/girl-center.png"
            alt="Woman eating pizza"
            className="absolute bottom-0 image1 left-1/2 -translate-x-1/2 translate-y-[0%] w-[400px] max-h-[520px] object-contain z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
