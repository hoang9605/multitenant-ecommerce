import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Giới thiệu | NEU Commerce",
  description: "Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ phát triển của chúng tôi.",
};

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Giới thiệu về <span className="text-blue-600">NEU Commerce</span>
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Nơi mang đến trải nghiệm mua sắm trực tuyến tiện lợi, an toàn và cá nhân hóa cho mọi người dùng.
        </p>
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white shadow-md rounded-2xl p-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            💡 Ý tưởng & Sứ mệnh
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chúng tôi mong muốn xây dựng một nền tảng thương mại điện tử hiện đại, giúp người bán dễ dàng tiếp cận khách hàng, 
            đồng thời mang lại cho người mua trải nghiệm nhanh chóng và đáng tin cậy.
            <br />
            <br />
            Sứ mệnh của chúng tôi là{" "}
            <span className="font-semibold text-blue-600">
              kết nối mọi người thông qua công nghệ
            </span>
            {" "}– tạo nên một hệ sinh thái thương mại công bằng, minh bạch và hiệu quả.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Team working together"
          width={500}
          height={350}
          className="rounded-xl shadow-sm"
        />
      </section>

      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">👨‍💻 Đội ngũ phát triển</h3>
          <p className="text-gray-600">
            Gồm những sinh viên đam mê công nghệ, luôn tìm cách tối ưu hóa trải nghiệm người dùng và áp dụng các công nghệ mới nhất.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🌍 Tầm nhìn</h3>
          <p className="text-gray-600">
            Trở thành nền tảng thương mại điện tử đa người dùng (multi-tenant) tiên phong trong lĩnh vực kinh doanh trực tuyến.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">🤝 Giá trị cốt lõi</h3>
          <p className="text-gray-600">
            Uy tín – Sáng tạo – Kết nối. Chúng tôi tin rằng thành công đến từ niềm tin và sự đổi mới không ngừng.
          </p>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">❤️ Lời cảm ơn</h2>
        <p className="text-gray-600 mb-6">
          Xin cảm ơn tất cả người dùng và cộng đồng đã đồng hành, góp ý và giúp chúng tôi hoàn thiện từng ngày.
          Mọi đóng góp của bạn là nguồn động lực lớn để chúng tôi tiếp tục phát triển.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Quay lại trang chủ
        </Link>
      </section>
    </main>
  );
};

export default Page;
