const PATHS = {
  file: `
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/>
    <path d="M14 3v5h5"/>
  `,

  pen: `
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>
  `,

  grid: `
    <rect x="3" y="3" width="7" height="7"/>
    <rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/>
  `,

  stack: `
    <path d="M12 3 2 8l10 5 10-5z"/>
    <path d="M2 13l10 5 10-5"/>
    <path d="M2 17.5l10 5 10-5"/>
  `,

  check: `
    <path d="M20 6 9 17l-5-5"/>
  `,

  sliders: `
    <path d="M4 21v-7M4 10V3"/>
    <path d="M12 21v-9M12 8V3"/>
    <path d="M20 21v-5M20 12V3"/>
    <path d="M1 14h6M9 8h6M17 16h6"/>
  `,

  chat: `
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  `,

  bolt: `
    <path d="M13 2 3 14h9l-1 8 10-12h-9z"/>
  `,

  truck: `
    <path d="M1 3h15v13H1z"/>
    <path d="M16 8h4l3 3v5h-7z"/>
    <path d="M5.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
    <path d="M18.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  `,
};

export default function Icon({ n }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{
        __html: PATHS[n] || '',
      }}
    />
  );
}
