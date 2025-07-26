// app/page.tsx

import Image from "next/image";

export default function HomePage() {
  // Daftar tautan yang akan kita tampilkan
  const links = [
    { name: "GitHub", url: "https://github.com/zakiganteng12" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-dzaky-hasyim-7a2807302/",
    },
    { name: "Coming Soon", url: "" },
  ];

  return (
    // Kita gunakan flexbox untuk membuat semua konten berada di tengah layar
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        {/* Placeholder untuk foto profil */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src="/profile.jpg"
            alt="Foto Profil Dzaky"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold">Muhammad Dzaky Hasyim</h1>
        <p className="mt-2 text-slate-500">
          Frontend Developer | Tech Enthusiast | Tea Lover
        </p>

        {/* Bagian untuk daftar tautan */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-xs mx-auto">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white p-4 rounded-lg font-semibold text-center hover:bg-slate-700 hover:scale-105 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
