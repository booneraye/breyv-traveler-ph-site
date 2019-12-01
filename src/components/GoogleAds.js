import React from 'react';
import AdSense from 'react-adsense';

const GoogleAds = () => (
    <AdSense.Google
        client='ca-pub-2901559959048252'
        slot='6826970879'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
    />
);

export default GoogleAds;
