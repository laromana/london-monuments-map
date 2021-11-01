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
        
        let markers =  [
            {
                coordinates: [-0.127,51.500],
                popupContent: {
                    category: "Religious",
                    museum: false,
                    htmlContent: 
                    `<img src="img/westminster-abbey.jpg"><h2>Westminster Abbey</h2><span>About: </span><p>Westminster Abbey, formally titled the Collegiate Church of Saint Peter at Westminster, is a large, mainly Gothic abbey church in the City of Westminster, London, England, just to the west of the Palace of Westminster.</p>`,

                }
            }, //Westminster Abbey
            {
                coordinates: [-0.187,51.505],
                popupContent: {
                    category: "Architecture",
                    museum: false,
                    htmlContent: 
                    `<img src="img/kensington-palace.jpg"><h2>Kensington Palace</h2><span>About: </span><p>Kensington Palace is a royal residence set in Kensington Gardens, in the Royal Borough of Kensington and Chelsea in London, England.</p>`,

                }
            }, //Kensington Palace
            {
                coordinates: [-0.126,51.520],
                popupContent: {
                    category: "Art",
                    museum: true,
                    htmlContent: 
                    `<img src="img/british-musuem.jpg"><h2>The British Museum</h2><span>About: </span><p>The British Museum is a public institution dedicated to human history, art and culture located in the Bloomsbury area of London, England. Its permanent collection of some eight million works is among the largest and most comprehensive in existence, having been widely collected during the era of the British Empire.</p>`,

                }
            }, //The British Museum
            {
                coordinates: [-0.075,51.510],
                popupContent: {
                    category: "Architecture",
                    museum: false,
                    htmlContent: 
                    `<img src="img/tower-of-london.jpg"><h2>Tower of London</h2><span>About: </span><p>The Tower of London, officially Her Majesty's Royal Palace and Fortress of the Tower of London, is a historic castle on the north bank of the River Thames in central London.</p>`,

                }
            }, //Tower of London
            {
                coordinates: [-0.098,51.514],
                popupContent: {
                    category: "Religious",
                    museum: false,
                    htmlContent: 
                    `<img src="img/st-pauls-cathedral.jpg"><h2>St. Paul's Cathedral</h2><span>About: </span><p>St Paul's Cathedral is an Anglican cathedral in London. As the seat of the Bishop of London, the cathedral serves as the mother church of the Diocese of London. It sits on Ludgate Hill at the highest point of the City of London and is a Grade I listed building.</p>`,

                }
            }, //St. Paul's Cathedral
            {
                coordinates: [-0.140,51.502],
                popupContent: {
                    category: "Art",
                    museum: false,
                    htmlContent: 
                    `<img src="img/victoria-memorial.jpg"><h2>The Victoria Memorial</h2><span>About: </span><p>The Victoria Memorial is a monument to Queen Victoria, located at the end of The Mall in London, and designed and executed by the sculptor Thomas Brock. Designed in 1901, it was unveiled on 16 May 1911, though it was not completed until 1924.</p>`,

                }
            }, //The Victoria Memorial
            {
                coordinates: [-0.152,51.503],
                popupContent: {
                    category: "Architecture",
                    museum: false,                    
                    htmlContent: `<img src="img/royal-artillery-memorial.jpg"><h2>Royal Artillery Memorial</h2><span>About: </span><p>The Royal Artillery Memorial is a First World War memorial located on Hyde Park Corner in London, England. Designed by Charles Sargeant Jagger, with architectural work by Lionel Pearson, and unveiled in 1925, the memorial commemorates the 49,076 soldiers from the Royal Artillery killed in the First World War.</p>`,
                }
            }, //Royal Artillery Memorial
            {
                coordinates: [-0.005,51.483],
                popupContent: {
                    category: "Art",
                    museum: false,
                    htmlContent: 
                    `<img src="img/king-george.jpg"><h2>Statue of King George II</h2><span>About: </span><p>George II was King of Great Britain and Ireland, Duke of Brunswick-Lüneburg (Hanover) and a prince-elector of the Holy Roman Empire from 11 June 1727 (O.S.) until his death in 1760. This statue is made of a single piece of marble weighing 11 tons. As was the fashion at the time the king is depicted wearing the military clothes of a Roman Emperor and holding a sceptre and orb.</p>`,

                }
            }, //Statue of King George II
            
        ]
        // let testContent = markers[3].popupContent.htmlContent;
        // console.log(testContent);
        
        //console.log(markers[0].popupContent.htmlContent);
        
        
        

        for(let i = 0; i <markers.length; i++){
            //Add marker from array            
            addMarker(markers[i].coordinates, markers[i].popupContent); 
            // if(markers[i].popupContent.hasOwnProperty("htmlContent") = false){
            //     console.log("I Dont have it");
            // };       
            
        };       
        

        // addMarker([-0.12,51.51])
        
        function addMarker(props, content){               
            
            const marker1 = new mapboxgl.Marker()
            .setLngLat(props)
            .setPopup(
                new mapboxgl.Popup()
            .setHTML(content.htmlContent)
            .setMaxWidth("600px"))
            .addTo(map);  
        };

        

        
};
getMap(layerStyles.streets);



let layers = document.getElementById("layers");
layers.addEventListener("change", function(){
    getMap(layerStyles[this.value]);
}, false);













