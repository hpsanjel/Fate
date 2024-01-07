import React from "react";
import GoogleMapReact from "google-map-react";

function Map() {
	const Marker = ({ text }) => <div style={{ color: "red", fontSize: "20px" }}>{text}</div>;

	return (
		<div style={{ height: "400px", width: "100%" }}>
			<GoogleMapReact defaultCenter={{ lat: 27.703698, lng: 85.3223894 }} defaultZoom={15}>
				<Marker lat={27.703698} lng={85.3223894} text="FATE" />
			</GoogleMapReact>
		</div>
	);
}

export default Map;
