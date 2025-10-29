import kebabHero from "../assets/images/kebab-hero.png";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Rasanya Juara,
                  <span className="text-orange-600 block">Pilihan Para Raja.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Kebahagiaan bisa sesederhana menikmati kebab nikmat dari Raja
                  Kebab. Rasa juicy, smoky, dan creamy berpadu sempurna, bikin
                  setiap momen makan jadi lebih seru.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/tentang"
                  className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Tentang Kami
                </Link>
                <Link
                  to="/produk"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center"
                >
                  Lihat Menu
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-200 rounded-full blur-lg opacity-30"></div>
                <img
                  src={kebabHero}
                  alt="Kebab Raja Kebab"
                  className="relative w-80 md:w-96 lg:w-[500px] transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ProductList />
        </div>
      </section>
    </div>
  );
};

export default Homepage;