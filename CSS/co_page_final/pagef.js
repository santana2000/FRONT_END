
    //34.2302014428,117.1493893862

require([
    "esri/Map",
    "esri/views/MapView",
    "./BaiduMapLayer.js",
    "esri/widgets/Sketch",
    "esri/layers/GraphicsLayer"
], function(Map, MapView,BaiduMapLayer,Sketch,GraphicsLayer){
    //新建BaiduMapLayer
    var BaiduMapLayer = new BaiduMapLayer();
    // var BaiduMapLayer2 = new BaiduMapLayer();

    const layer = new GraphicsLayer();
    // const layer2= new GraphicsLayer();

    var map = new Map({
        layers: [BaiduMapLayer, layer]
    });


    var view1 = new MapView({
        container: "lmap",  // Reference to the scene div created in step 5
        map: map,  // Reference to the map object created before the scene
        zoom: 15,  // Sets zoom level based on level of detail (LOD)
        center: [139.9293,39.6902]  // Sets center point of view using longitude,latitude
    });
    const sketch1 = new Sketch({
        layer: layer,
        view: view1
    });
    view1.ui.add(sketch1, "top-right");

    //---------------------------------------------------------------------------

    // var map2 = new Map({
    //     layers: [BaiduMapLayer, layer]
    // });

    var view2 = new MapView({
        container: "rmap",  // Reference to the scene div created in step 5
        map: map,  // Reference to the map object created before the scene
        zoom: 15,  // Sets zoom level based on level of detail (LOD)
        center: [139.9293,39.6902]  // Sets center point of view using longitude,latitude
    });

    const sketch2 = new Sketch({
        layer: layer,
        view: view2
    });

    view2.ui.add(sketch2, "top-right");
});


