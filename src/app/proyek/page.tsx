export default function ProyekPage() {
  // Contoh daftar proyek (bisa pakai state atau fetch dari API di masa depan)
  const projects = [
    {
      title: "Smart APP",
      description: "Aplikasi PPDB",
      url: "https://github.com/zakiganteng12/SMART_APP",
    },
    {
      title: "Aplikasi ArtGallery",
      description: "Aplikasi gallery graffiti.",
      url: "https://github.com/zakiganteng12/P.PWEB2-ArtGallery",
    },
  ];

  return (
    <main className="min-h-screen container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Proyek Saya</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-all"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-slate-400 mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
