/** First focusable control pattern: jump past annotation bar + nav to main. */
export default function ExampleSkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-[-10000px] top-0 z-[200010] h-px w-px overflow-hidden whitespace-nowrap focus:fixed focus:left-4 focus:top-14 focus:z-[200010] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
    >
      Skip to main content
    </a>
  );
}
