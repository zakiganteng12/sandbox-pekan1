export default function KontakPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8">
      <div className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold">Kontak Saya</h1>
        <p className="text-lg text-slate-300">
          Jika kamu ingin terhubung dengan saya, silakan kunjungi salah satu
          platform berikut:
        </p>

        <div className="flex justify-center gap-6 text-xl mt-6">
          <a
            href="https://github.com/zakiganteng12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-dzaky-hasyim-7a2807302/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:muhammadzakiplg@gmail.com"
            className="hover:underline hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          Atau kirim email langsung ke: <br />
          <span className="text-white font-medium">
            muhammadzakiplg@gmail.com
          </span>
        </div>
      </div>
    </main>
  );
}
