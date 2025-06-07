import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    // Check if the script is already present
    if (!document.querySelector('script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8446072153458831";
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    }
    // Push adsbygoogle if available
    if (window.adsbygoogle && Array.isArray(window.adsbygoogle)) {
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
      <ins className="adsbygoogle"
        style={{ display: 'block', width: '100%', maxWidth: 728, height: 90 }}
        data-ad-client="ca-pub-8446072153458831"
        data-ad-slot="1234567890"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSense;

