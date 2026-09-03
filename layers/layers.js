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
var format_PolygoneColdelaVanoise_4 = new ol.format.GeoJSON();
var features_PolygoneColdelaVanoise_4 = format_PolygoneColdelaVanoise_4.readFeatures(json_PolygoneColdelaVanoise_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolygoneColdelaVanoise_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolygoneColdelaVanoise_4.addFeatures(features_PolygoneColdelaVanoise_4);
var lyr_PolygoneColdelaVanoise_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolygoneColdelaVanoise_4, 
                style: style_PolygoneColdelaVanoise_4,
                popuplayertitle: 'Polygone Col de la Vanoise',
                interactive: true,
    title: 'Polygone Col de la Vanoise<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_0.png" /> Périglaciaire<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_1.png" /> Glaciaire<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_2.png" /> Gravitaire<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_3.png" /> Nivale<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_4.png" /> Hydrographie<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_5.png" /> Fluviatile<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_6.png" /> Organogene<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_7.png" /> Lacustre<br />\
    <img src="styles/legend/PolygoneColdelaVanoise_4_8.png" /> Anthropique<br />' });
var format_LineaireColdelaVanoise_5 = new ol.format.GeoJSON();
var features_LineaireColdelaVanoise_5 = format_LineaireColdelaVanoise_5.readFeatures(json_LineaireColdelaVanoise_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaireColdelaVanoise_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaireColdelaVanoise_5.addFeatures(features_LineaireColdelaVanoise_5);
var lyr_LineaireColdelaVanoise_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineaireColdelaVanoise_5, 
                style: style_LineaireColdelaVanoise_5,
                popuplayertitle: 'Lineaire Col de la Vanoise',
                interactive: true,
    title: 'Lineaire Col de la Vanoise<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_0.png" /> Périglaciaire<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_1.png" /> Glaciaire<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_2.png" /> Nivale<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_3.png" /> Gravitaire<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_4.png" /> Hydrographie<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_5.png" /> Fluviatile<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_6.png" /> Structurale<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_7.png" /> Karstique<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_8.png" /> Anthropique<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_9.png" /> Lacustre<br />\
    <img src="styles/legend/LineaireColdelaVanoise_5_10.png" /> <br />' });
var format_Glacierrocheux_6 = new ol.format.GeoJSON();
var features_Glacierrocheux_6 = format_Glacierrocheux_6.readFeatures(json_Glacierrocheux_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Glacierrocheux_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Glacierrocheux_6.addFeatures(features_Glacierrocheux_6);
var lyr_Glacierrocheux_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Glacierrocheux_6, 
                style: style_Glacierrocheux_6,
                popuplayertitle: 'Glacier rocheux',
                interactive: true,
                title: '<img src="styles/legend/Glacierrocheux_6.png" /> Glacier rocheux'
            });
var format_Lignes_93_7 = new ol.format.GeoJSON();
var features_Lignes_93_7 = format_Lignes_93_7.readFeatures(json_Lignes_93_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lignes_93_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignes_93_7.addFeatures(features_Lignes_93_7);
var lyr_Lignes_93_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignes_93_7, 
                style: style_Lignes_93_7,
                popuplayertitle: 'Lignes_93',
                interactive: true,
    title: 'Lignes_93<br />\
    <img src="styles/legend/Lignes_93_7_0.png" /> F<br />\
    <img src="styles/legend/Lignes_93_7_1.png" /> L<br />\
    <img src="styles/legend/Lignes_93_7_2.png" /> T<br />\
    <img src="styles/legend/Lignes_93_7_3.png" /> B<br />\
    <img src="styles/legend/Lignes_93_7_4.png" /> FF<br />\
    <img src="styles/legend/Lignes_93_7_5.png" /> f<br />\
    <img src="styles/legend/Lignes_93_7_6.png" /> Y<br />\
    <img src="styles/legend/Lignes_93_7_7.png" /> <br />' });
var group_Interferogram = new ol.layer.Group({
                                layers: [lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3,],
                                fold: 'open',
                                title: 'Interferogram'});
var group_Satellite = new ol.layer.Group({
                                layers: [lyr_MNTLiDARHDIGN_0,lyr_OpenTopoMap_1,lyr_Photographiesariennes2024_2,],
                                fold: 'open',
                                title: 'Satellite'});

lyr_MNTLiDARHDIGN_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_Photographiesariennes2024_2.setVisible(true);lyr_Pralognan_2026_08_15_Orb_Stack_esd_ifg_deb_flt_TC_3.setVisible(true);lyr_PolygoneColdelaVanoise_4.setVisible(true);lyr_LineaireColdelaVanoise_5.setVisible(true);lyr_Glacierrocheux_6.setVisible(true);lyr_Lignes_93_7.setVisible(true);
var layersList = [group_Satellite,group_Interferogram,lyr_PolygoneColdelaVanoise_4,lyr_LineaireColdelaVanoise_5,lyr_Glacierrocheux_6,lyr_Lignes_93_7];
lyr_PolygoneColdelaVanoise_4.set('fieldAliases', {'ID': 'ID', 'Nature': 'Nature', 'Type de pr': 'Type de pr', 'Orientatio': 'Orientatio', 'layer': 'layer', 'path': 'path', });
lyr_LineaireColdelaVanoise_5.set('fieldAliases', {'ID': 'ID', 'Nature': 'Nature', 'Type de pr': 'Type de pr', 'layer': 'layer', 'path': 'path', 'Rotation': 'Rotation', });
lyr_Glacierrocheux_6.set('fieldAliases', {'id': 'id', 'Activiter': 'Activiter', 'Photos': 'Photos', });
lyr_Lignes_93_7.set('fieldAliases', {'id': 'id', 'Type': 'Type', });
lyr_PolygoneColdelaVanoise_4.set('fieldImages', {'ID': 'Range', 'Nature': 'ValueMap', 'Type de pr': 'ValueRelation', 'Orientatio': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_LineaireColdelaVanoise_5.set('fieldImages', {'ID': 'TextEdit', 'Nature': 'ValueMap', 'Type de pr': 'ValueRelation', 'layer': 'TextEdit', 'path': 'TextEdit', 'Rotation': 'Range', });
lyr_Glacierrocheux_6.set('fieldImages', {'id': 'TextEdit', 'Activiter': 'TextEdit', 'Photos': 'ExternalResource', });
lyr_Lignes_93_7.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', });
lyr_PolygoneColdelaVanoise_4.set('fieldLabels', {'ID': 'no label', 'Nature': 'no label', 'Type de pr': 'no label', 'Orientatio': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_LineaireColdelaVanoise_5.set('fieldLabels', {'ID': 'no label', 'Nature': 'no label', 'Type de pr': 'no label', 'layer': 'no label', 'path': 'no label', 'Rotation': 'no label', });
lyr_Glacierrocheux_6.set('fieldLabels', {'id': 'no label', 'Activiter': 'no label', 'Photos': 'inline label - always visible', });
lyr_Lignes_93_7.set('fieldLabels', {'id': 'no label', 'Type': 'no label', });
lyr_Lignes_93_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});