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
            value: "ALLOW-FROM https://www.instagram.com", // Atur sesuai kebutuhan
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://www.instagram.com",
          },
        ],
      },
    ];
  },
};
