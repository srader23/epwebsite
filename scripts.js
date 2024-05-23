
document.addEventListener('DOMContentLoaded', () => {
    // Initialize ArcGIS map
    require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
        const map = new Map({
            basemap: 'streets-navigation-vector'
        });

        const view = new MapView({
            container: "map",
            map: map,
            center: [-118.80500, 34.02700],
            zoom: 13
        });
    });
});
