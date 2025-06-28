export const loadAnalytics = () => {
    if (import.meta.env.MODE !== 'production') {
        console.log('[analytics] Google Analytics NOT loaded — dev mode');
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-1MQLZ5XDW9';
    script.async = true;
    document.head.appendChild(script);

    const inline = document.createElement('script');
    inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1MQLZ5XDW9');
  `;
    document.head.appendChild(inline);
};
