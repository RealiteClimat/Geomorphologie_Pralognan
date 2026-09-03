var size = 0;
var placement = 'point';
function categories_Lignes_93_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'F':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1.5)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'L':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'T':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'B':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'FF':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'f':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(210,100,184,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1.5)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Y':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(105,241,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1.5)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
default:
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(198,33,113,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(1.5)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Lignes_93_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Type");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Lignes_93_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
