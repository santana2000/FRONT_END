require([
    "esri/Map",
    "esri/views/MapView"
], function(Map, MapView){
    var map1 = new Map({
        basemap: "topo"
    });
    var view = new MapView({
        container: "lmap",  // Reference to the scene div created in step 5
        map: map1,  // Reference to the map object created before the scene
        zoom: 7,  // Sets zoom level based on level of detail (LOD)
        center: [112.5, 37.8]  // Sets center point of view using longitude,latitude
    });



    var map2 = new Map({
        basemap: "topo"
    });
    var view = new MapView({
        container: "rmap",  // Reference to the scene div created in step 5
        map: map1,  // Reference to the map object created before the scene
        zoom: 7,  // Sets zoom level based on level of detail (LOD)
        center: [112.5, 37.8]  // Sets center point of view using longitude,latitude
    });




});