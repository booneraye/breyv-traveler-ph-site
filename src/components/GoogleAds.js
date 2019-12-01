import React from 'react'

const GoogleAds = () => {
  
  function googleAds(){ 
    return `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
        <div dangerouslySetInnerHTML={{__html: googleAds()}} />
  )
}

export default GoogleAds
