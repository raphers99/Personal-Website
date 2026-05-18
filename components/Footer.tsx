export default function Footer() {
  return (
    <footer className="rule-t py-10 px-6 sm:px-10">
      <div className="max-w-container mx-auto grid sm:grid-cols-3 gap-6 font-mono uppercase tracking-widest2 text-[10px] text-ink-faint">
        <p>
          <span className="text-ember mr-2">©</span>
          MMXXVI · Joseph Raphael
        </p>
        <p className="sm:text-center">
          Set in Instrument Serif &amp; Newsreader
        </p>
        <p className="sm:text-right">
          Composed in New Orleans
        </p>
      </div>
    </footer>
  );
}
