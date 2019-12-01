import React from 'react'

const GoogleAds = () => {
  
  const googleAds = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-6h+dd+4d-5u+3c"
     data-ad-client="ca-pub-2901559959048252"
     data-ad-slot="8492202498"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>` ;
  
  return (
        <div dangerouslySetInnerHTML={{__html: googleAds }} />
  )
}

export default GoogleAds
