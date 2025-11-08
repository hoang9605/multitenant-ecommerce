import Link from "next/link";

// Metadata for SEO
export const metadata = {
  title: "Pricing | EduVerse",
  description:
    "Discover EduVerse's flexible pricing plans for our multi-tenant e-commerce platform. Choose the best plan for your business!",
};

// Reusable Section Heading
const SectionHeading = ({ title, highlight }: { title: string; highlight?: string }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
    {title} {highlight && <span className="text-black">{highlight}</span>}
  </h2>
);

// Pricing Card Component
const PricingCard = ({ plan, price, features, popular = false }: { plan: string; price: string; features: string[]; popular?: boolean }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300">
    {popular && (
      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{plan}</h3>
    <p className="text-3xl font-bold text-gray-900 mb-6">{price}</p>
    <ul className="space-y-3 text-gray-600 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Link
      href="/signup"
      className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors w-full text-center"
    >
      Get Started
    </Link>
  </div>
);

const PricingPage = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
    hour12: false,
  }); // Output: "Friday, November 07, 2025, 15:09 GMT+7"

  return (
    <main className="min-h-screen bg-gray-50 pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <SectionHeading title="Pricing" highlight="EduVerse" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Flexible plans designed for your multi-tenant e-commerce needs. Start today and scale with ease. Last updated: {currentDate}.
        </p>
      </section>

      {/* Pricing Plans Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <PricingCard
          plan="Basic"
          price="$0/month"
          features={["1 Storefront", "10 Products", "Basic Analytics", "Email Support"]}
        />
        <PricingCard
          plan="Pro"
          price="$29/month"
          features={["5 Storefronts", "Unlimited Products", "Advanced Analytics", "Priority Support", "Custom Domain"]}
          popular={true}
        />
        <PricingCard
          plan="Enterprise"
          price="Custom"
          features={["Unlimited Storefronts", "Premium Features", "Dedicated Support", "API Access", "Onboarding Assistance"]}
        />
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gray-100 rounded-lg">
        <SectionHeading title="Ready to Scale?" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          Choose a plan that fits your business and join the EduVerse multi-tenant ecosystem today!
        </p>
        <Link
          href="/signup"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default PricingPage;