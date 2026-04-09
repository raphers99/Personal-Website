export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-8 px-6">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[12px] text-white/30">
          &copy; 2026 Joseph Raphael
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:jraphael1@tulane.edu"
            className="text-[12px] text-white/30 hover:text-white/60 transition-colors"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/josephraphael04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/30 hover:text-white/60 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
