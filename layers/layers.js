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
var lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1_0.png" /> -3,1397<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1_1.png" /> -1,5696<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1_2.png" /> 0,0005<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1_3.png" /> 1,5706<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1_4.png" /> 3,1407<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [662724.438853, 5623242.457817, 797310.251653, 5724731.263866]
        })
    });
var format_Glacierrocheux_2 = new ol.format.GeoJSON();
var features_Glacierrocheux_2 = format_Glacierrocheux_2.readFeatures(json_Glacierrocheux_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glacierrocheux_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glacierrocheux_2.addFeatures(features_Glacierrocheux_2);
var lyr_Glacierrocheux_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Glacierrocheux_2, 
                style: style_Glacierrocheux_2,
                popuplayertitle: 'Glacier rocheux',
                interactive: true,
                title: '<img src="styles/legend/Glacierrocheux_2.png" /> Glacier rocheux'
            });
var format_Lignes_93_3 = new ol.format.GeoJSON();
var features_Lignes_93_3 = format_Lignes_93_3.readFeatures(json_Lignes_93_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_93_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_93_3.addFeatures(features_Lignes_93_3);
var lyr_Lignes_93_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_93_3, 
                style: style_Lignes_93_3,
                popuplayertitle: 'Lignes_93',
                interactive: true,
    title: 'Lignes_93<br />\
    <img src="styles/legend/Lignes_93_3_0.png" /> Front principal<br />\
    <img src="styles/legend/Lignes_93_3_1.png" /> Sillon longitudinal<br />\
    <img src="styles/legend/Lignes_93_3_2.png" /> Sillon transversal<br />\
    <img src="styles/legend/Lignes_93_3_3.png" /> Bourrelet<br />\
    <img src="styles/legend/Lignes_93_3_4.png" /> Front pincipal<br />' });
var group_Interferogram = new ol.layer.Group({
                                layers: [lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1,],
                                fold: 'open',
                                title: 'Interferogram'});
var group_CourbesdeNiveau1m = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Courbes de Niveau 1m'});
var group_Lidar = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lidar'});
var group_Satellite = new ol.layer.Group({
                                layers: [lyr_MNTLiDARHDIGN_0,],
                                fold: 'open',
                                title: 'Satellite'});

lyr_MNTLiDARHDIGN_0.setVisible(true);lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_1.setVisible(true);lyr_Glacierrocheux_2.setVisible(true);lyr_Lignes_93_3.setVisible(true);
var layersList = [group_Satellite,group_Interferogram,lyr_Glacierrocheux_2,lyr_Lignes_93_3];
lyr_Glacierrocheux_2.set('fieldAliases', {'id': 'id', 'Activiter': 'Activiter', 'Photos': 'Photos', });
lyr_Lignes_93_3.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Glacierrocheux_2.set('fieldImages', {'id': 'TextEdit', 'Activiter': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_Lignes_93_3.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Glacierrocheux_2.set('fieldLabels', {'id': 'no label', 'Activiter': 'no label', 'Photos': 'inline label - always visible', });
lyr_Lignes_93_3.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Lignes_93_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});