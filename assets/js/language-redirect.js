(() => {
  const preferenceKey = 'site-language-preference';
  const script = document.currentScript;
  const defaultHome = script?.dataset.defaultHome || '/';
  const englishHome = script?.dataset.englishHome || '/en/';

  const readPreference = () => {
    try {
      return localStorage.getItem(preferenceKey);
    } catch {
      return null;
    }
  };

  const writePreference = (language) => {
    try {
      localStorage.setItem(preferenceKey, language);
    } catch {
      // Language selection still works when storage is unavailable.
    }
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('[data-language-choice]');
    if (!link) return;

    writePreference(link.dataset.languageChoice);
  });

  const isCrawler =
    navigator.webdriver ||
    /bot|crawler|spider|crawling|slurp|google-inspectiontool/i.test(navigator.userAgent);
  if (window.location.pathname !== defaultHome) return;
  const preference = readPreference();
  if (isCrawler && !preference) return;

  const browserLanguage = navigator.languages?.[0] || navigator.language || 'en';
  const shouldUseEnglish =
    preference === 'en' || (preference !== 'zh-tw' && !browserLanguage.toLowerCase().startsWith('zh'));

  if (shouldUseEnglish) {
    window.location.replace(`${englishHome}${window.location.search}${window.location.hash}`);
  }
})();
