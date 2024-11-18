import React, { useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
	width: "100%",
	height: "400px",
};

const center = {
	lat: 27.70386,
	lng: 85.32238,
};

const InteractiveMap = ({ apiKey }) => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: apiKey,
	});

	const [map, setMap] = useState(null);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<div className="w-full max-w-4xl mx-auto p-4">
			<h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Our Location</h2>
			<div className="rounded-lg overflow-hidden shadow-lg">
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16} onUnmount={onUnmount}>
					<Marker position={center} />
				</GoogleMap>
			</div>
			<p className="mt-4 text-center text-gray-600">Visit us at our Kathmandu office!</p>
		</div>
	) : (
		<div className="w-full h-96 flex items-center justify-center bg-gray-100 rounded-lg">
			<p className="text-xl text-gray-600">Loading Map...</p>
		</div>
	);
};

export default InteractiveMap;
