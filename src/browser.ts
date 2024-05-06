import { ReportHandler } from 'web-vitals';

export const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export const setBrowserTheme = () => {
  const setThemeMode = (isDarkMode: boolean) => {
    var colorScheme = isDarkMode ? 'dark' : 'light';
    document.body.classList.add(colorScheme);
  };

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
    setThemeMode(true);

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => setThemeMode(e.matches));
};
