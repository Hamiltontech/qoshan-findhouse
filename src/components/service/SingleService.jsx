import React, { useEffect } from 'react';

const TaggboxWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.taggbox.com/embed-lite.min.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="taggbox" style={{ width: '100%', height: '100%' }} data-widget-id="134002" data-tags="false"></div>
  );
};

export default TaggboxWidget;
