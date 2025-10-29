import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // state form
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });
  const [editing, setEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // state untuk produk yang sedang diedit
  const [editingProduct, setEditingProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image_url: "",
  });

  // fetch data produk
  const fetchProducts = () => {
    axios
      .get("http://localhost:8080/api/admin/products", {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response?.data?.error || "Gagal ambil data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // tambah produk
  const handleAddProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/admin/products",
        {
          name: newProduct.name,
          description: newProduct.description,
          price: Number(newProduct.price),
          stock: Number(newProduct.stock),
          image_url: newProduct.image_url,
        },
        { withCredentials: true }
      )
      .then(() => {
        setNewProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          image_url: "",
        });
        setShowModal(false);
        fetchProducts();
      })
      .catch((err) => {
        alert(err.response?.data?.error || "Gagal tambah produk");
      });
  };

  // edit produk
  const handleEditProduct = (id) => {
    axios
      .put(
        `http://localhost:8080/api/admin/products/${id}`,
        {
          name: editingProduct.name,
          description: editingProduct.description,
          price: Number(editingProduct.price),
          stock: Number(editingProduct.stock),
          image_url: editingProduct.image_url,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setEditing(null);
        setEditingProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          image_url: "",
        });
        fetchProducts();
      })
      .catch((err) => {
        alert(err.response?.data?.error || "Gagal edit produk");
      });
  };

  // hapus produk
  const handleDeleteProduct = (id) => {
    if (window.confirm("Yakin hapus produk ini?")) {
      axios
        .delete(`http://localhost:8080/api/admin/products/${id}`, {
          withCredentials: true,
        })
        .then(() => fetchProducts())
        .catch((err) => {
          alert(err.response?.data?.error || "Gagal hapus produk");
        });
    }
  };

  // fungsi untuk memulai edit produk
  const startEditing = (product) => {
    setEditing(product.ID);
    setEditingProduct({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      image_url: product.image_url,
    });
  };

  // fungsi untuk membatalkan edit
  const cancelEditing = () => {
    setEditing(null);
    setEditingProduct({
      name: "",
      description: "",
      price: "",
      stock: "",
      image_url: "",
    });
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-600 bg-red-50 px-4 py-3 rounded-lg border border-red-200">
          Error: {error}
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Manajemen Produk
            </h1>
            <p className="text-gray-600 mt-1">Kelola produk Anda di sini</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Tambah Produk
          </button>
        </div>

        {/* Modal tambah produk */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Tambah Produk Baru
                </h2>
              </div>
              <form onSubmit={handleAddProduct} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Produk
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama produk"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Deskripsi
                  </label>
                  <textarea
                    placeholder="Masukkan deskripsi produk"
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Harga
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 150000 atau -1 untuk tidak tersedia"
                      value={newProduct.price}
                      onChange={(e) => {
                        // Hanya menerima angka dan minus di awal
                        const value = e.target.value;
                        if (value === "" || /^-?\d*$/.test(value)) {
                          setNewProduct({ ...newProduct, price: value });
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    {newProduct.price && !/^-?\d+$/.test(newProduct.price) && (
                      <p className="text-red-500 text-xs mt-1">
                        Harga harus berupa angka
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Stok
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: 10 atau -1 untuk tidak terbatas"
                      value={newProduct.stock}
                      onChange={(e) => {
                        // Hanya menerima angka dan minus di awal
                        const value = e.target.value;
                        if (value === "" || /^-?\d*$/.test(value)) {
                          setNewProduct({ ...newProduct, stock: value });
                        }
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    {newProduct.stock && !/^-?\d+$/.test(newProduct.stock) && (
                      <p className="text-red-500 text-xs mt-1">
                        Stok harus berupa angka
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    URL Gambar
                  </label>
                  <input
                    type="text"
                    placeholder="https://example.com/image.jpg"
                    value={newProduct.image_url}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        image_url: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  >
                    Simpan Produk
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Daftar produk */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-xl shadow-sm p-8 max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-400 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Belum ada produk
              </h3>
              <p className="text-gray-500 mb-4">
                Mulai dengan menambahkan produk pertama Anda
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                Tambah Produk
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.ID}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
              >
                {/* Product Image */}
                <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                  <img
                    src={product.image_url || "/api/placeholder/400/300"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgMTIwSDE4MFYxODBIMTIwVjEyMFoiIGZpbGw9IiNEOEU5RkEiLz4KPHBhdGggZD0iTTIyMCAxMDBIMzAwVjE0MEgyMjBWMTAwWiIgZmlsbD0iI0Q4RTlGQSIvPgo8cGF0aCBkPSJNMTAwIDIwMEgyNjBWMjUwSDEwMFYyMDBaIiBmaWxsPSIjRDhFOUZBIi8+Cjwvc3ZnPgo=";
                    }}
                  />
                </div>

                {/* Product Content */}
                <div className="p-4">
                  {editing === product.ID ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Nama Produk"
                        value={editingProduct.name}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <textarea
                        placeholder="Deskripsi"
                        value={editingProduct.description}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        rows={2}
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="number"
                          placeholder="Harga"
                          value={editingProduct.price}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              price: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="number"
                          placeholder="Stok"
                          value={editingProduct.stock}
                          onChange={(e) =>
                            setEditingProduct({
                              ...editingProduct,
                              stock: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="URL Gambar"
                        value={editingProduct.image_url}
                        onChange={(e) =>
                          setEditingProduct({
                            ...editingProduct,
                            image_url: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleEditProduct(product.ID)}
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                        >
                          Simpan
                        </button>
                        <button
                          onClick={cancelEditing}
                          className="flex-1 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition text-sm font-medium"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description || "Tidak ada deskripsi"}
                      </p>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">
                            Rp {Number(product.price).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            Stok:{" "}
                            <span className="font-medium">{product.stock}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => startEditing(product)}
                          className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition text-sm font-medium border border-blue-200 flex items-center justify-center gap-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.ID)}
                          className="flex-1 bg-red-50 text-red-600 py-2 rounded-lg hover:bg-red-100 transition text-sm font-medium border border-red-200 flex items-center justify-center gap-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          Hapus
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
