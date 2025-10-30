import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const UserDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Gagal ambil data produk");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Memuat produk...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Judul */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-thin text-gray-900 mb-4 tracking-wide">
          Semua Produk
        </h1>
        <div className="w-16 h-px bg-gray-300 mx-auto"></div>
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.ID}
            className="group bg-white rounded-none hover:bg-gray-50 transition-all duration-500 flex flex-col h-full border-b border-gray-100 pb-6"
          >
            {/* Gambar */}
            <div className="relative w-full aspect-square overflow-hidden mb-6 bg-gray-50">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Konten */}
            <div className="px-2 flex flex-col flex-grow">
              <div className="mb-4">
                <h2 className="text-lg font-normal text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-auto space-y-4">
                {/* Harga + Stok */}
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <span className="text-xs text-gray-400">
                    Stok: {product.stock}
                  </span>
                </div>

                {/* Tombol Tambah ke Keranjang */}
                <button
                  onClick={() => alert(`Ditambahkan: ${product.name}`)}
                  className="w-full py-2 border border-gray-300 text-gray-700 hover:border-gray-700 hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                >
                  <ShoppingCart size={15} />
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
