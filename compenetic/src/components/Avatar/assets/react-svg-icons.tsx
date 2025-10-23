const HomeIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path d={'M12 2L1 12h3v9h6v-6h4v6h6v-9h3L12 2z'} />
  </svg>
);

const NotificationIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path
      d={
        'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2z'
      }
    />
  </svg>
);

const CheckIcon = () => (
  <svg xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 24 24'} fill={'currentColor'}>
    <path d={'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z'} />
  </svg>
);

export { HomeIcon, NotificationIcon, CheckIcon };
