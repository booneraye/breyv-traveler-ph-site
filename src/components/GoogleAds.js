import React from 'react'
import Helmet from 'react-helmet'

const GoogleAds = () => {
  
  function googleAds(){ 
    return `
       <!-- first ads -->
         <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-2901559959048252"
          data-ad-slot="6826970879"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>` };
  
  return (
    <Helmet>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    </Helmet>
    <div dangerouslySetInnerHTML={{__html: googleAds()}} />
  )
}

export default GoogleAds
