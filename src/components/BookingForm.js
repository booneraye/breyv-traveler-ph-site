import React from 'react'

const BookingForm = () => {
  
  function bookingForm(){ return {__html: `<div style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); width: 100%; height: 600px">
	<div id="biyaheroes-widget-container">
	    <div id="biyaheroes-widget-brave-traveler-ph-website-0c246ad427714b5190e9b9651b1ec51cbbe656078c47a39e5159a788ecbf3dced973716cba12a16f95900c6694e87c77">
	    </div>
	    <script type="application/javascript" src="https://biz.biyaheroes.com/widget/brave-traveler-ph-website/0c246ad427714b5190e9b9651b1ec51cbbe656078c47a39e5159a788ecbf3dced973716cba12a16f95900c6694e87c77"></script>
    </div>
</div>` }};
  
  return (
    <div dangerouslySetInnerHTML={{__html: bookingForm()}} />
  )
}

export default BookingForm
