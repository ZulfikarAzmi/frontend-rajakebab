import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetch:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-b from-orange-50 to-white">
      {/* Judul */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Menu <span className="text-orange-600">Raja Kebab</span>
        </h1>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.ID}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col overflow-hidden"
          >
            {/* Gambar */}
            <div className="relative w-full h-56 overflow-hidden bg-gray-50">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Konten */}
            <div className="p-5 flex flex-col flex-grow">
              {/* Nama & Deskripsi */}
              <h2 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {product.description}
              </p>

              {/* Harga + Stock */}
              <div className="flex items-center justify-between mb-5">
                <p className="text-orange-600 font-bold text-lg">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                <span className="text-xs text-gray-400">
                  Stok: {product.stock}
                </span>
              </div>

              {/* Tombol */}
              <button
                className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-sm font-medium shadow hover:shadow-md"
                onClick={() => alert(`Ditambahkan: ${product.name}`)}
              >
                <ShoppingCart size={16} className="stroke-[2]" />
               Tambahkan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
