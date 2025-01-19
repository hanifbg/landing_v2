module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)", // Menerapkan header untuk semua halaman
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Memungkinkan situs dimuat dalam iframe (WebView)
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-ancestors *;", // Menetapkan kebijakan keamanan konten
          },
        ],
      },
    ];
  },
};
