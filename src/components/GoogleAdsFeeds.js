import React from 'react';
import AdSense from 'react-adsense';

const GoogleAdsFeeds = () => (
    <AdSense.Google
        client='ca-pub-2901559959048252'
        slot='8492202498'
        style={{ display: 'block', height: '30vh', width: '80%', margin: '0 auto'}}
        format='fluid'
        responsive='true'
        layoutKey='-6h+dd+4d-5u+3c'
    />
);

export default GoogleAdsFeeds;
