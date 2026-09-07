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

    var projection_Photographiesariennes2024_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_Photographiesariennes2024_2 = projection_Photographiesariennes2024_2.getExtent();
    var size_Photographiesariennes2024_2 = ol.extent.getWidth(projectionExtent_Photographiesariennes2024_2) / 256;
    var resolutions_Photographiesariennes2024_2 = new Array(14);
    var matrixIds_Photographiesariennes2024_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Photographiesariennes2024_2[z] = size_Photographiesariennes2024_2 / Math.pow(2, z);
        matrixIds_Photographiesariennes2024_2[z] = z;
    }
    var lyr_Photographiesariennes2024_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetCapabilities&force=update",
                                attributions: ' ',
                                "layer": "ORTHOIMAGERY.ORTHOPHOTOS2024",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/jpeg',
              projection: projection_Photographiesariennes2024_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Photographiesariennes2024_2),
                resolutions: resolutions_Photographiesariennes2024_2,
                matrixIds: matrixIds_Photographiesariennes2024_2
              }),
              style: 'normal',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Photographies aériennes 2024',
                            opacity: 1.0,
                            
                            
                          });
var lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3_0.png" /> -3,1397<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3_1.png" /> -1,5696<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3_2.png" /> 0,0005<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3_3.png" /> 1,5706<br />\
    <img src="styles/legend/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3_4.png" /> 3,1407<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [662724.438853, 5623242.457817, 797310.251653, 5724731.263866]
        })
    });
var format_Glacierrocheux_4 = new ol.format.GeoJSON();
var features_Glacierrocheux_4 = format_Glacierrocheux_4.readFeatures(json_Glacierrocheux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glacierrocheux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glacierrocheux_4.addFeatures(features_Glacierrocheux_4);
var lyr_Glacierrocheux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Glacierrocheux_4, 
                style: style_Glacierrocheux_4,
                popuplayertitle: 'Glacier rocheux',
                interactive: true,
                title: '<img src="styles/legend/Glacierrocheux_4.png" /> Glacier rocheux'
            });
var format_Lignes_93_5 = new ol.format.GeoJSON();
var features_Lignes_93_5 = format_Lignes_93_5.readFeatures(json_Lignes_93_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_93_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_93_5.addFeatures(features_Lignes_93_5);
var lyr_Lignes_93_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_93_5, 
                style: style_Lignes_93_5,
                popuplayertitle: 'Lignes_93',
                interactive: true,
    title: 'Lignes_93<br />\
    <img src="styles/legend/Lignes_93_5_0.png" /> Front principal<br />\
    <img src="styles/legend/Lignes_93_5_1.png" /> Sillon longitudinal<br />\
    <img src="styles/legend/Lignes_93_5_2.png" /> Sillon transversal<br />\
    <img src="styles/legend/Lignes_93_5_3.png" /> Bourrelet<br />\
    <img src="styles/legend/Lignes_93_5_4.png" /> Front pincipal<br />' });
var group_Interferogram = new ol.layer.Group({
                                layers: [lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3,],
                                fold: 'close',
                                title: 'Interferogram'});
var group_Satellite = new ol.layer.Group({
                                layers: [lyr_MNTLiDARHDIGN_0,lyr_OpenTopoMap_1,],
                                fold: 'open',
                                title: 'Satellite'});

lyr_MNTLiDARHDIGN_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Photographiesariennes2024_2.setVisible(true);lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3.setVisible(true);lyr_Glacierrocheux_4.setVisible(true);lyr_Lignes_93_5.setVisible(true);
var layersList = [group_Satellite,lyr_Photographiesariennes2024_2,group_Interferogram,lyr_Glacierrocheux_4,lyr_Lignes_93_5];
lyr_Glacierrocheux_4.set('fieldAliases', {'id': 'id', 'Activiter': 'Activiter', 'Photos': 'Photos', });
lyr_Lignes_93_5.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_Glacierrocheux_4.set('fieldImages', {'id': 'TextEdit', 'Activiter': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_Lignes_93_5.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_Glacierrocheux_4.set('fieldLabels', {'id': 'no label', 'Activiter': 'no label', 'Photos': 'inline label - always visible', });
lyr_Lignes_93_5.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Lignes_93_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});