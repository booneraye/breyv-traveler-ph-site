import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="fluid"
                data-ad-layout-key="-6h+dd+4d-5u+3c"
                data-ad-client="ca-pub-2901559959048252"
                data-ad-slot={this.props.slot}>
            </ins>
        );
    }
}

export default GoogleAds;
