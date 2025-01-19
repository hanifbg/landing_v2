module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)", // Terapkan ke semua rute
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Memungkinkan halaman dimuat dalam iframe (untuk in-app browser)
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src * data: blob: 'unsafe-inline' 'unsafe-eval'; frame-ancestors *;",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Pastikan tidak ada masalah CORS
          },
        ],
      },
    ];
  },
};
