mapboxgl.accessToken = 'pk.eyJ1IjoiaWx1aWxsaSIsImEiOiJja3Y5dmpjMW8waDVyMm90Y2dwemZjcDN5In0.HXSp0xmdffLRztYm7dvBlA';


let layerStyles = {
    streets: "mapbox://styles/mapbox/streets-v11",
    outdoors: "mapbox://styles/mapbox/outdoors-v11",
    light: "mapbox://styles/mapbox/light-v10",
    dark: "mapbox://styles/mapbox/dark-v10",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    satelliteStreets: "mapbox://styles/mapbox/satellite-streets-v11",
    navigationDay: "mapbox://styles/mapbox/navigation-day-v1",
    navigationNight: "mapbox://styles/mapbox/navigation-night-v1",  
}   



let getMap = function(props){  
    
   

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        //style: 'mapbox://styles/mapbox/outdoors-v11', // style URL
        style: props, // style URL
        center: [-0.12,51.51], // starting position [lng, lat]
        zoom: 11 // starting zoom
        });




        
        let markers = [
            [-0.127,51.500], //Westminster Abbey
            [-0.187,51.505], //Kensington Palace
            [-0.142,51.502], //Buckingham Palace
            [-0.126,51.520], //The British Museum
            [-0.075,51.510], //Tower of London
            [-0.098,51.514], //St. Paul's Cathedral
            [-0.140,51.502], //Victoria Memorial
            [-0.152,51.503], //Royal Artillery Memorial
            [-0.005,51.483], //Statue of King George II
        ]

        for(let i = 0; i <markers.length; i++){
            //Add marker from array
          addMarker(markers[i]);
        };
        
        // addMarker([-0.12,51.51])
        
        function addMarker(props){
            const marker1 = new mapboxgl.Marker()
            .setLngLat(props)
            .addTo(map);    
        };

        
};
getMap(layerStyles.streets);



let layers = document.getElementById("layers");
layers.addEventListener("change", function(){
    getMap(layerStyles[this.value]);
}, false);













