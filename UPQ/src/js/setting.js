
//google map api
function initMap() {
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 49.833, lng: 24.009 },
        zoom: 16,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: [
            {
            'featureType': 'poi.business',
            'stylers': [{'visibility': 'off'}]
          },
          
        ]
    });
}
