// MK.

function bufferFeature() {
	// TODO: open a dialog box here so user can select buffer distance.

	var feature = window.theMap.infoWindow.getSelectedFeature();
	console.log(feature.geometry);
}


function filterWells() {
	// TODO: open a dialog box here to multi-select filter options.
	console.log('you clicked filterWells');
}


function labelWells() {
	// TODO: switch labels, look for non-layer-swap solution. client-side labeling?
	console.log('you clicked labelWells');
}


/*function urlZoom(params) {
    var pairs = params.split("&");
    if (pairs.length > 1) {
        var extType = pairs[0].substring(11);
        var extValue = pairs[1].substring(12);

        var find = new FindTask("http://services.kgs.ku.edu/arcgis/rest/services/oilgas/oilgas_wells_single/MapServer");
		var findParams = new FindParameters();
		findParams.returnGeometry = true;
		findParams.contains = false;

        switch (extType) {
            case "well":
                findParams.layerIds = [0];
				findParams.searchFields = ["kid"];
                break;
            case "field":
                findParams.layerIds = [1];
				findParams.searchFields = ["field_kid"];
				fieldsLayer.show();
				dojo.byId('fields').checked = 'checked';
                break;
        }

        // TODO: tie last location to the Home button?
        //lastLocType = extType;
		//lastLocValue = extValue;

        findParams.searchText = extValue;
        find.execute(findParams,zoomToResults);
    }
}*/





