// src/components/FAQSection.jsx
import { useState } from "react";
import {
  BellRing,
  Clock3,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const tabs = [
  "Frequent Questions",
  "Who we are?",
  "Partner Program",
  "Help & Support",
];

const leftQuestions = [
  "How does Order.UK work?",
  "What payment methods are accepted?",
  "Can I track my order in real-time?",
  "Are there any special discounts or promotions available?",
  "Is Order.UK available in my area?",
];

const leftAnswers = [
  "Order.UK lets you browse local restaurants, choose items, and checkout online. We'll handle the rest and get it delivered to your address.",
  "We accept major credit/debit cards and popular wallet options. Payment methods vary by region and partner restaurant.",
  "Yes — after placing an order you can view live status updates and estimated delivery time in the app or on the website.",
  "We regularly run promotions and featured discounts. Check the Deals section or subscribe to our newsletter for offers.",
  "Coverage depends on partner restaurants in your city. Enter your postcode at checkout to confirm availability.",
];

const featureCards = [
  {
    icon: BellRing,
    title: "Place an Order!",
    text: "Place order through our website or Mobile app",
  },
  {
    icon: Clock3,
    title: "Track Progress",
    text: "Your can track your order status with delivery time",
  },
  {
    icon: CheckCircle2,
    title: "Get your Order!",
    text: "Receive your order at a lighting fast speed!",
  },
];

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(null);

  const otherTabContent = {
    1: {
      title: "Who we are",
      body: "Order.UK connects people with great local restaurants. We believe in fast delivery, excellent service, and supporting local businesses.",
    },
    2: {
      title: "Partner Program",
      body: "Grow your restaurant with our Partner Program — get promoted to local customers, use analytics to improve orders, and receive dedicated support.",
    },
    3: {
      title: "Help & Support",
      body: "Need help? Visit our Help Center or contact support@order.uk for assistance.",
    },
  };

  return (
    <section className="bg-muted/40 py-16" id="faq">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
          Know more about us!
        </h2>

        {/* Tabs row */}
        <div className="mt-6 inline-flex items-center gap-6 rounded-full border px-3 py-2">
          {tabs.map((t, i) => (
            <button
              key={t}
              onClick={() => setActiveTab(i)}
              className={[
                "rounded-full px-5 py-2 text-sm font-semibold transition",
                i === activeTab
                  ? "bg-primary text-white shadow"
                  : "text-foreground hover:bg-muted",
              ].join(" ")}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main card */}
        <div className="mt-8 rounded-3xl border bg-card p-6 shadow-sm md:p-8">
          {activeTab === 0 ? (
            <>
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Left: questions list (accordion) */}
                <div className="flex flex-col gap-3">
                  {leftQuestions.map((q, i) => {
                    const isOpen = openQuestion === i;
                    return (
                      <div key={q} className="flex flex-col">
                        <button
                          onClick={() => setOpenQuestion(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          className={
                            (isOpen
                              ? "rounded-full bg-primary text-white"
                              : "rounded-full text-foreground hover:bg-muted") +
                            " flex w-full items-center justify-between px-5 py-3 text-sm font-semibold transition"
                          }
                        >
                          <span className={isOpen ? "" : "text-[15px]"}>
                            {q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="ml-3 h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-3 h-4 w-4" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="mt-2 rounded-lg bg-muted/30 p-3 text-sm text-muted-foreground">
                            {leftAnswers[i]}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Right: feature cards */}
                <div className="flex items-center justify-center">
                  <div className="grid max-w-[600px] gap-4 sm:grid-cols-3">
                    {featureCards.map(({ icon: Icon, title, text }) => (
                      <div
                        key={title}
                        className="rounded-xl bg-muted/60 p-4 text-center shadow-sm"
                      >
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-card shadow">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-base font-extrabold">{title}</div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom paragraph */}
              <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted-foreground">
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </>
          ) : (
            <div className="prose mx-auto max-w-3xl text-center">
              <h3 className="text-xl font-extrabold">
                {otherTabContent[activeTab].title}
              </h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {otherTabContent[activeTab].body}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
