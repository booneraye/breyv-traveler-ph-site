import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-2901559959048252"
            data-ad-slot="6826970879"
            data-ad-format="auto"
            data-full-width-responsive="true">
            </ins>
        );
    }
}

export default GoogleAds;
