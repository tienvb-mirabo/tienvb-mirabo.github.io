window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
    //    {
    //        name: 'place',
    //        src: 'place.png',
    //        location: {
    //            lat: 21.006933,
    //            lng: 105.843174,
    //        }
    //    },
    //    {
    //         name: 'robot',
    //         src: 'robot.jpg',
    //         location: {
    //             lat: 21.006347,
    //             lng: 105.842388,
    //         }
    //     },
    //     {
    //         name: 'dog',
    //         src: 'dog.png',
    //         location: {
    //             lat: 21.006568,
    //             lng: 105.843839,
    //         }
    //     },
    //     {
    //         name: 'tree',
    //         src: 'tree.png',
    //         location: {
    //             lat: 20.997403,
    //             lng: 105.843586,
    //         }
    //     },
       {
            name: 'Magnemite',
            location: {
                lat: 21.009362,  
                lng: 105.857678,
            },
            url: './assets/articuno/scene.gltf',
            scale: '1 1 1',
            rotation: '0 180 0',
            info: 'Magnemite, Lv. 5, HP 10/10',
        },
        {
            name: 'Articuno',
            location: {
                lat: 21.004194, 
                lng: 105.854113,
            },
            url: './assets/articuno/scene.gltf',
            scale: '1 1 1',
            rotation: '0 180 0',
            info: 'Articuno, Lv. 80, HP 100/100',
        },
        {
            name: 'Dragonite',
            location: {
                lat: 21.004434,  
                lng: 105.860555,
            },
            url: './assets/articuno/scene.gltf',
            scale: '1 1 1',
            rotation: '0 180 0',
            info: 'Dragonite, Lv. 99, HP 150/150',
        },
   ];
}

var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    // const div = document.querySelector('.instructions');
    // div.innerText = model.info;
};


function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
    // Image show
    //    let src = place.src
    //    let img = document.createElement('a-image');
    //    img.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    //    img.setAttribute('src', `${src}`);
    //    img.setAttribute('look-at', '[gps-camera]');
    //    img.setAttribute('scale', '25 25 25');
    //    scene.appendChild(img);

    // Entity model show
        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(place, model);

        model.setAttribute('animation-mixer', '');
        model.setAttribute('look-at', '[gps-camera]');

        // document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        //     var entity = document.querySelector('[gps-entity-place]');
        //     modelIndex++;
        //     var newIndex = modelIndex % models.length;
        //     setModel(models[newIndex], entity);
        // });

        scene.appendChild(model);
   });
}