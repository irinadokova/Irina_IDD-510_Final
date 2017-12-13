function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 40.021406, lng: -75.192779}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 40.021291, lng: -75.192393},
        {lat: 40.023049, lng: -75.187286},
        {lat: 40.020798, lng: -75.187930},
        {lat: 40.020716, lng: -75.195633},
        {lat: 40.016774, lng: -75.192297},
        {lat: 40.025089, lng: -75.202339},
        {lat: 40.026404, lng: -75.189035},
        {lat: 40.017990, lng: -75.185258},
        {lat: 40.024070, lng: -75.183027},
        {lat: 40.016741, lng: -75.199463},
      ]
