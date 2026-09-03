var size = 0;
var placement = 'point';

var style_LineaireColdelaVanoise_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
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
    
        function rules_LineaireColdelaVanoise_5(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_LineaireColdelaVanoise_5rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,230,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(97,18,195,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.26)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,0,46,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.26)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(218,121,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.26)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule4_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(48,218,242,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule5_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,204,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule6_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: m2px(0.26)}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule7_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,102,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule8_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,182,54,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule9_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,113,141,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
                    else if (exp_LineaireColdelaVanoise_5rule10_eval_expression(context)) {
                      return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,182,111,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
                    }
            else {
                return [];
            }
        }
        var style = rules_LineaireColdelaVanoise_5(feature, value);
        ;

    return style;
};
