import React from 'react';
import AdSense from 'react-adsense';

const ads = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>`;

const Adservice = () => (
    <div dangerouslySetInnerHTML={ ads } />
);

const GoogleAdsDisplay = () => (
    <Adservice />
    <AdSense.Google
        client='ca-pub-2901559959048252'
        slot='6826970879'
        style={{ display: 'block'}}
        format='auto'
        responsive='true'
    />
);

export default GoogleAdsDisplay;
