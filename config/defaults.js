define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "df8bcc10430f48878b01c96e907a1fc3",
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    "title": "TEMPLATE TEST",
    "summary": "",
    "defaultPanel": "layers",
    "enableDialogModal": false,
    "dialogModalContent": "",
    "dialogModalTitle": "",
    "enableSummaryInfo": true,
    "enableLegendPanel": true,
    "enableAboutPanel": true,
    "enableLayersPanel": true,
    "enableHomeButton": true,
    "enableLocateButton": true,
    "enableBasemapToggle": true,
   	"enableBookmarks": true,
    "enableOverviewMap": true,
    "openOverviewMap": false,
    "enableModifiedDate": true,
    "enableMoreInfo": true,
    "defaultBasemap": "topo",
    "nextBasemap": "hybrid",
    "swipeType": "vertical",
    "swipeInvertPlacement": true,
  	"bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e",
    // MK:
    "enableZoomToPanel": true,
    "enableToolsPanel": true,

    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
    //When true the template will query arcgis.com for default settings for helper services, units etc. If you
    "units": null,
    "helperServices": {
        "geometry": {
            "url": null
        },
        "printTask": {
            "url": null
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": null
           }]
    }
});
