// Reusable inline SVG icons (stroke = currentColor)

export function Arrow(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function Icon({ name, ...props }) {
  const paths = {
    cube: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></>,
    bars: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M2 12h20M12 3a15 15 0 010 18M12 3a15 15 0 000 18" /></>,
    building: <><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></>,
    star: <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21 8 13.9 2 9.4h7.6z" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></>,
    plus: <path d="M12 3v18M3 12h18" />,
    lines: <path d="M4 7h16M4 12h16M4 17h10" />,
    factory: <path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-5h4v5" />,
    pin: <><path d="M12 21s-7-6-7-11a7 7 0 0114 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.5a16 16 0 006 6l1.1-1.1a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      {paths[name]}
    </svg>
  );
}
