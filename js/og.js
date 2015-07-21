
function bufferFeature() {
	console.log('foobar');

	var feature = window.theMap.infoWindow.getSelectedFeature();
	console.log(feature.geometry);
}