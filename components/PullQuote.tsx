export function PullQuote() {
  return (
    <div className="mw-glass grid gap-10 rounded-3xl p-8 transition-shadow duration-700 hover:shadow-[0_0_60px_rgba(127,217,180,0.1)] sm:p-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
      <div className="relative mx-auto h-40 w-40 shrink-0 lg:mx-0">
        <span className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-mw-mint transition-all duration-500 group-hover:-left-3 group-hover:-top-3" />
        <span className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-mw-mint" />
        <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-mw-mint" />
        <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-mw-mint" />
        <div className="mw-glass h-full w-full overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/testimonial.svg" alt="Michael Gunawardena" className="h-full w-full object-cover" />
        </div>
      </div>
      <div>
        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" className="text-mw-mint/40">
          <path
            d="M0 24V13.8C0 9.13 1.13 5.53 3.4 3C5.67 0.47 8.53 -0.6 12 0.33L13.6 4.6C11.47 4.6 9.73 5.27 8.4 6.6C7.07 7.93 6.33 9.53 6.2 11.4H12V24H0ZM19.6 24V13.8C19.6 9.13 20.73 5.53 23 3C25.27 0.47 28.13 -0.6 31.6 0.33L33.2 4.6C31.07 4.6 29.33 5.27 28 6.6C26.67 7.93 25.93 9.53 25.8 11.4H31.6V24H19.6Z"
            fill="currentColor"
          />
        </svg>
        <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
          Successful transformation occurs when technology, people, and business strategy work
          together in alignment.
        </p>
        <div className="mt-6">
          <div className="font-semibold text-white">Michael Gunawardena</div>
          <div className="text-sm text-white/50">Chief Executive Officer, Mawkish Technologies</div>
        </div>
      </div>
    </div>
  );
}
