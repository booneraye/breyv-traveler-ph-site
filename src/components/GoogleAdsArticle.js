import React from 'react';
import AdSense from 'react-adsense';

const GoogleAdsArticle = () => (
    <AdSense.Google
        client='ca-pub-2901559959048252'
        slot='2466630440'
        style={{ display:'block', textAlign:'center'}}
        format='fluid'
        layoutKey='in-article'
    />
);

export default GoogleAdsArticle;
