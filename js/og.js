
function bufferFeature() {
	// TODO: open a dialog box here so user can select buffer distance.

	var feature = window.theMap.infoWindow.getSelectedFeature();
	console.log(feature.geometry);
}

function filterWells() {
	// TODO: open a dialog box here to multi-select filter options.
	console.log('you clicked filterWells');
}