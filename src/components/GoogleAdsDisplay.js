import React from 'react';
import AdSense from 'react-adsense';

const GoogleAdsDisplay = () => (
    <AdSense.Google
        client='ca-pub-2901559959048252'
        slot='6826970879'
        style={{ display: 'block', height: '50%', width: '300px', margin: '0 auto', paddingBottom: '2%'}}
        format='auto'
        responsive='true'
    />
);

export default GoogleAdsDisplay;
