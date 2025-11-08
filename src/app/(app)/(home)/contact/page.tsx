import Image from "next/image";
import Link from "next/link";

// Metadata for SEO
export const metadata = {
  title: "Contact Us | EduVerse",
  description:
    "Get in touch with EduVerse for quick support. We're ready to partner with your business on our multi-tenant platform.",
};

// Reusable Section Heading
const SectionHeading = ({ title, highlight }: { title: string; highlight?: string }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
    {title} {highlight && <span className="text-black">{highlight}</span>}
  </h2>
);

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <SectionHeading title="Contact" highlight="EduVerse" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We&apos;re here to support you—whether you&apos;re a seller, buyer, or partner—on our advanced multi-tenant platform. Contact us now!
        </p>
      </section>

      {/* Contact Form & Info Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Support / Partnership / Other"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-black"
                placeholder="Describe your issue or request..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-black transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Email: <a href="mailto:support@eduverse.com" className="text-black hover:underline">support@eduverse.com</a></p>
            </div>
            <div>
              <p className="text-gray-600">Hotline: <a href="tel:+842812345678" className="text-black hover:underline">+84 28 1234 5678</a></p>
            </div>
            <div>
              <p className="text-gray-600">Address: National Economics University, 307 Giaiphong Road, Hanoi</p>
            </div>
            <div>
              <p className="text-gray-600">Follow us:</p>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-black"><span className="text-xl">𝕏</span></a>
                <a href="#" className="text-gray-600 hover:text-black"><span className="text-xl">fb</span></a>
                <a href="#" className="text-gray-600 hover:text-black"><span className="text-xl">in</span></a>
              </div>
            </div>
          </div>
          <Image
            src="/contact-illustration.png"
            alt="EduVerse support"
            width={500}
            height={300}
            className="rounded-lg mt-6"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center bg-gray-100 rounded-lg">
        <SectionHeading title="Ready to Collaborate?" />
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed">
          Become part of the EduVerse multi-tenant ecosystem. Start today!
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

export default ContactPage;