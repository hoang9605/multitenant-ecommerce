import Image from "next/image";
import Link from "next/link";

// Metadata for SEO
export const metadata = {
  title: "About Us | EduVerse",
  description:
    "Explore the mission, vision, and creative team of EduVerse – a pioneering multi-tenant e-commerce platform.",
};

// Reusable Section Heading
const SectionHeading = ({ title, highlight }: { title: string; highlight?: string }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
    {title} {highlight && <span className="text-black">{highlight}</span>}
  </h2>
);

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <SectionHeading title="About" highlight="EduVerse" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          EduVerse is an advanced multi-tenant platform, delivering secure and flexible shopping and business experiences for all users.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Mission & Vision Text */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mission & Vision</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            EduVerse is committed to building a multi-tenant e-commerce platform that connects sellers and buyers efficiently. Our mission is to{" "}
            <span className="font-semibold text-black">create a transparent and innovative ecosystem</span>, supporting sustainable business growth.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our vision is to become the leading multi-tenant platform, offering flexible solutions for businesses worldwide.
          </p>
        </div>

        {/* Image */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <Image
            src="/about.jpg"
            alt="Team collaborating on e-commerce platform"
            width={500}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Creative Team</h3>
          <p className="text-gray-600 leading-relaxed">
            Our EduVerse team consists of passionate tech experts who innovate to optimize user experiences.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Global Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to lead in the multi-tenant space, supporting businesses across the globe.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Values</h3>
          <p className="text-gray-600 leading-relaxed">
            Integrity, innovation, and connection are the foundations of our value delivery.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gray-100 rounded-lg">
        <SectionHeading title="Explore Now?" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          Join the EduVerse multi-tenant ecosystem and start your journey today!
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
};

export default AboutPage;