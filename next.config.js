module.exports = {
  async headers() {
    return [
      {
        // Terapkan ke semua rute
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Atur origin spesifik jika perlu, misalnya "https://www.instagram.com"
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization, X-Requested-With",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Atau SAMEORIGIN jika halaman Anda hanya untuk domain yang sama
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *;", // Mengizinkan semua sumber untuk menyematkan halaman
          },
        ],
      },
    ];
  },
};
