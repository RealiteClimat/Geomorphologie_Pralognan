var wms_layers = [];


        var lyr_MNTLiDARHDIGN_0 = new ol.layer.Tile({
            'title': 'MNT LiDAR HD IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://geoservices.ign.fr/lidarhd">MNT LiDAR HD IGN</a>',
                url: 'https://data.geopf.fr/tms/1.0.0/IGNF_LIDAR-HD_MNT_ELEVATION.ELEVATIONGRIDCOVERAGE.SHADOW/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_IGNHauteRsolution_2 = new ol.layer.Tile({
            'title': 'IGN Haute Résolution',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&FORMAT=image/jpeg&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}'
            })
        });
var format_Glacierrocheux_3 = new ol.format.GeoJSON();
var features_Glacierrocheux_3 = format_Glacierrocheux_3.readFeatures(json_Glacierrocheux_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glacierrocheux_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glacierrocheux_3.addFeatures(features_Glacierrocheux_3);
var lyr_Glacierrocheux_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Glacierrocheux_3, 
                style: style_Glacierrocheux_3,
                popuplayertitle: 'Glacier rocheux',
                interactive: true,
                title: '<img src="styles/legend/Glacierrocheux_3.png" /> Glacier rocheux'
            });
var format_Lignes_93_4 = new ol.format.GeoJSON();
var features_Lignes_93_4 = format_Lignes_93_4.readFeatures(json_Lignes_93_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_93_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_93_4.addFeatures(features_Lignes_93_4);
var lyr_Lignes_93_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_93_4, 
                style: style_Lignes_93_4,
                popuplayertitle: 'Lignes_93',
                interactive: true,
    title: 'Lignes_93<br />\
    <img src="styles/legend/Lignes_93_4_0.png" /> F<br />\
    <img src="styles/legend/Lignes_93_4_1.png" /> L<br />\
    <img src="styles/legend/Lignes_93_4_2.png" /> T<br />\
    <img src="styles/legend/Lignes_93_4_3.png" /> B<br />\
    <img src="styles/legend/Lignes_93_4_4.png" /> FF<br />\
    <img src="styles/legend/Lignes_93_4_5.png" /> f<br />\
    <img src="styles/legend/Lignes_93_4_6.png" /> <br />' });
var group_Satellite = new ol.layer.Group({
                                layers: [lyr_MNTLiDARHDIGN_0,lyr_OpenTopoMap_1,lyr_IGNHauteRsolution_2,],
                                fold: 'open',
                                title: 'Satellite'});

lyr_MNTLiDARHDIGN_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_IGNHauteRsolution_2.setVisible(true);lyr_Glacierrocheux_3.setVisible(true);lyr_Lignes_93_4.setVisible(true);
var layersList = [group_Satellite,lyr_Glacierrocheux_3,lyr_Lignes_93_4];
lyr_Glacierrocheux_3.set('fieldAliases', {'id': 'id', 'Activiter': 'Activiter', 'Photos': 'Photos', });
lyr_Lignes_93_4.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Glacierrocheux_3.set('fieldImages', {'id': 'TextEdit', 'Activiter': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_Lignes_93_4.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Glacierrocheux_3.set('fieldLabels', {'id': 'no label', 'Activiter': 'no label', 'Photos': 'inline label - always visible', });
lyr_Lignes_93_4.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Lignes_93_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});