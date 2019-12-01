import React, { Component } from 'react';

class GoogleAds extends Component {

    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="auto"
                data-full-width-responsive="true"
                data-ad-client="ca-pub-2901559959048252"
                data-ad-slot={this.props.slot}>
            </ins>
        );
    }
}

export default GoogleAds;
