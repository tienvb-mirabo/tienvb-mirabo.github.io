window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'place',
           src: 'place.png',
           location: {
               lat: 21.006933,
               lng: 105.843174,
           }
       },
       {
            name: 'robot',
            src: 'robot.jpg',
            location: {
                lat: 21.006347,
                lng: 105.842388,
            }
        },
        {
            name: 'dog',
            src: 'dog.png',
            location: {
                lat: 21.006568,
                lng: 105.843839,
            }
        },
        {
            name: 'tree',
            src: 'tree.png',
            location: {
                lat: 20.997403,
                lng: 105.843586,
            }
        },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let src = place.src

       let img = document.createElement('a-image');
       img.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       img.setAttribute('src', `${src}`);
       img.setAttribute('look-at', '[gps-camera]');
       img.setAttribute('scale', '1 1 1');
    //    img.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
    //    img.setAttribute('rotation', '0 180 0');
    //    img.setAttribute('animation-mixer', '');
       
    //    model.addEventListener('loaded', () => {
    //        window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    //    });

       scene.appendChild(img);
   });
}