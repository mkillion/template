
function bufferFeature() {
	//Open a dialog box here so user can select buffer distance.

	var feature = window.theMap.infoWindow.getSelectedFeature();
	console.log(feature.geometry);
}