function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 24.8999964, lng: 67.083333},
    });
    var marker = new google.maps.Marker({
      position: {lat: 24.8999964, lng: 67.083333}, 
      map: map,
      icon: "images/karachi.png",
      title: 'Karachi, Pakistan',
      animation: google.maps.Animation.DROP,
      draggable: true,
    });
    
    var infoWindow = new google.maps.InfoWindow({
      content: '<div style="width: 200px; height: 150px;">' +
        '<h3>Karachi, Pakistan</h3>' +
        '<p>Karachi, Pakistan: A city known for its night-life.</p>' +
        '<p>It is a great spot for tourists to check it out.</p>' +
        '<p>The Food is authentic street food and a vast muslim population.</p>' +
        '</div>'
    });
    
    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    });
    
  
    var marker = new google.maps.Marker({
      position: {lat: 24.8999964, lng: 67.083333}, 
      map: map,
      title: 'Karachi, Pakistan',
    });
  }
