import React, {useState} from "react";
import * as mapboxgl from "mapbox-gl";
import {BMEBox, BMEMapbox, BMEText} from "../../index";
import {MapboxComponentProps, MarkerProps} from "./Mapbox.types";

export default {
  title: "Mapbox"
};

export const Component = ({ lat, lng, zoom, ...mapOptions }: MapboxComponentProps) => {
  const [stateLat, setLat] = useState<number>(lat);
  const [stateLng, setLng] = useState<number>(lng);
  const [stateZoom, setZoom] = useState<number>(zoom);

  const handleZoomChange = (zoom) => setZoom(zoom.toFixed(2));
  const handleCenterChange = ({ lat, lng }) => {
    setLat(lat.toFixed(4));
    setLng(lng.toFixed(4));
  };

  return (
    <BMEBox direction="column" width="full">
      <BMEMapbox
        lat={stateLat}
        lng={stateLng}
        zoom={stateZoom}
        {...mapOptions}
        onZoomChanged={handleZoomChange}
        onCenterChanged={handleCenterChange}
      />
      <BMEBox width="full" padding={{ y: "m", x: "s" }} alignX="center">
        <BMEText align="center">Latitude: {stateLat} — Longitude: {stateLng} —  Zoom: {stateZoom}</BMEText>
      </BMEBox>
    </BMEBox>
  );
}

Component.args = {
  apiKey: 'pk.eyJ1IjoiYmxhbmlrIiwiYSI6ImNrZnptZzV3aTA4bG0ydXFpNXlvZ3FhdGUifQ.2QQqlIGAHu8BFp2gYNU7ig',
  lat: 50.0951976,
  lng: 18.5387021,
  zoom: 10,
  minZoom: 7,
  maxZoom: 15,
  minPitch: 0,
  maxPitch: 60,
  maxBounds: new mapboxgl.LngLatBounds(
    new mapboxgl.LngLat(17.462783, 49.352695),
    new mapboxgl.LngLat(20.554292, 51.236194),
  ),
}

Component.argTypes = {
  markers: {
    control: 'MarkerPropsArray',
  },
  mapBoxRef: {
    control: 'MapBoxRef',
  },

  width: {
    control: 'text',
  },
  height: {
    control: 'text',
  },
  apiKey: {
    control: 'text',
  },
  lng: {
    control: 'number',
  },
  lat: {
    control: 'number',
  },
  zoom: {
    control: 'number',
  },

  style: {
    control: 'text',
  },

  minZoom: {
    control: 'number',
  },
  maxZoom: {
    control: 'number',
  },
  minPitch: {
    control: 'number',
  },
  maxPitch: {
    control: 'number',
  },
  interactive: {
    control: 'boolean',
  },
  bearingSnap: {
    control: 'number',
  },
  pitchWithRotate: {
    control: 'boolean',
  },
  clickTolerance: {
    control: 'number',
  },
  attributionControl: {
    control: 'boolean',
  },
  customAttribution: {
    control: 'text',
  },
  logoPosition: {
    control: 'string',
  },
  failIfMajorPerformanceCaveat: {
    control: 'boolean',
  },
  preserveDrawingBuffer: {
    control: 'boolean',
  },
  antialias: {
    control: 'boolean',
  },
  refreshExpiredTiles: {
    control: 'boolean',
  },
  maxBounds: {
    control: 'LngLatBoundsLike',
  },
  scrollZoom: {
    control: 'boolean',
  },
  boxZoom: {
    control: 'boolean',
  },
  dragRotate: {
    control: 'boolean',
  },
  dragPan: {
    control: 'boolean',
  },
  keyboard: {
    control: 'boolean',
  },
  doubleClickZoom: {
    control: 'boolean',
  },
  touchZoomRotate: {
    control: 'boolean',
  },
  touchPitch: {
    control: 'boolean',
  },
  trackResize: {
    control: 'boolean',
  },
  bearing: {
    control: 'number',
  },
  pitch: {
    control: 'number',
  },
  fitBoundsOptions: {
    control: 'FitBoundsOptions',
  },
  renderWorldCopies: {
    control: 'boolean',
  },
  maxTileCacheSize: {
    control: 'number',
  },
  localIdeographFontFamily: {
    control: 'text',
  },
  transformRequest: {
    control: 'TransformRequestFunction',
  },
  collectResourceTiming: {
    control: 'boolean',
  },
  fadeDuration: {
    control: 'number',
  },
  crossSourceCollisions: {
    control: 'boolean',
  },
  onZoomChanged: {
    control: 'function',
  },
  onCenterChanged: {
    control: 'function',
  },
}

export const Marker = ({...markerOptions}: MarkerProps) => {
  const { lat, lng, zoom, apiKey } = Component.args;

  const [stateLat, setLat] = useState<number>(lat);
  const [stateLng, setLng] = useState<number>(lng);
  const [stateZoom, setZoom] = useState<number>(zoom);

  const handleZoomChange = (zoom) => setZoom(zoom.toFixed(2));
  const handleCenterChange = ({ lat, lng }) => {
    setLat(lat.toFixed(4));
    setLng(lng.toFixed(4));
  };

  return (
    <BMEBox direction="column" width="full">
      <BMEText align="center">Markers as props might be deprecated in the future!</BMEText>
      <BMEMapbox
        apiKey={apiKey}
        lat={stateLat}
        lng={stateLng}
        zoom={stateZoom}
        onZoomChanged={handleZoomChange}
        onCenterChanged={handleCenterChange}
        markers={[markerOptions]}
      />
      <BMEBox width="full" padding={{ y: "m", x: "s" }} alignX="center">
        <BMEText align="center">Latitude: {stateLat} — Longitude: {stateLng} —  Zoom: {stateZoom}</BMEText>
      </BMEBox>
    </BMEBox>
  );
}

Marker.args = {
  lat: 50.0951976,
  lng: 18.5387021,
}

Marker.argTypes = {
  lng: {
    control: 'number',
  },
  lat: {
    control: 'number',
  },
}
