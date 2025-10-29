import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Kenapa harus
                <span className="text-orange-600 block">RajaKebab?</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Sejak 2025, Raja Kebab menghadirkan keautentikan rasa Middle Eastern 
                dengan jaminan <strong>100% halal</strong> dan standar <strong>higienis tertinggi</strong>. 
                Setiap gigitan adalah komitmen kami terhadap kualitas dan kepercayaan Anda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link
                  to="/produk"
                  className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Lihat Menu
                </Link>
                <Link
                  to="/"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300 text-center"
                >
                  Kembali ke Home
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-200 rounded-full blur-lg opacity-30"></div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1732578509188-55473dd98118?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                  alt="Kebab segar dan higienis dengan cita rasa khas"
                  className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Komitmen Kami untuk Anda
            </h2>
            <p className="text-lg text-gray-600">
              Tiga pilar utama yang menjadikan Raja Kebab pilihan terpercaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Value 1 - Cita Rasa Khas */}
            <div className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cita Rasa Khas</h3>
              <p className="text-gray-600">
                Rempah-rempah pilihan yang diracik khusus menciptakan signature taste 
                yang <strong>unik dan tak terlupakan</strong>, berbeda dari yang lain
              </p>
            </div>

            {/* Value 2 - 100% Halal */}
            <div className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Halal</h3>
              <p className="text-gray-600">
                Semua bahan telah bersertifikat halal MUI dan diproses sesuai 
                <strong> syariat Islam</strong>. Aman dan nyaman untuk semua kalangan
              </p>
            </div>

            {/* Value 3 - Higienis Terjamin */}
            <div className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Higienis Terjamin</h3>
              <p className="text-gray-600">
                Proses pembuatan dengan standar <strong>kebersihan tinggi</strong>, 
                dari pemilihan bahan hingga penyajian untuk kesehatan optimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Proses <span className="text-orange-600">Higienis & Terstandar</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p>
                    <strong>Seleksi Bahan Terbaik</strong> - Hanya bahan segar dengan 
                    sertifikat halal yang kami gunakan, melalui proses inspeksi ketat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p>
                    <strong>Racikan Rempah Khas</strong> - Kombinasi rempah rahasia 
                    yang menciptakan cita rasa autentik Middle Eastern dengan sentuhan modern
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p>
                    <strong>Proses Higienis</strong> - Setiap tahap dimonitor ketat 
                    dengan standar kebersihan tertinggi untuk keamanan konsumen
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <p>
                    <strong>Penyajian Premium</strong> - Disajikan dengan packaging 
                    food-grade yang aman dan menarik, menjaga kesegaran hingga ke tangan Anda
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1719282432114-45fd6c6df642?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Proses pembuatan kebab yang higienis dengan bahan berkualitas"
                className="rounded-2xl shadow-xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Menikmati Kebab Berkualitas?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Rasakan perbedaan kebab dengan <strong>cita rasa khas</strong>, 
              <strong> jaminan halal</strong>, dan <strong>proses higienis</strong> yang membuat setiap gigitan berarti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/produk"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                Pesan Sekarang
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 text-center"
              >
                Kembali ke Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;