/// <reference types="react" />
import * as mapboxgl from "mapbox-gl";
import { MapboxComponentProps, MarkerProps } from "./Mapbox.types";
declare const _default: {
    title: string;
};
export default _default;
export declare const Component: {
    ({ lat, lng, zoom, ...mapOptions }: MapboxComponentProps): JSX.Element;
    args: {
        apiKey: string;
        lat: number;
        lng: number;
        zoom: number;
        minZoom: number;
        maxZoom: number;
        minPitch: number;
        maxPitch: number;
        maxBounds: mapboxgl.LngLatBounds;
    };
    argTypes: {
        markers: {
            control: string;
        };
        mapBoxRef: {
            control: string;
        };
        width: {
            control: string;
        };
        height: {
            control: string;
        };
        apiKey: {
            control: string;
        };
        lng: {
            control: string;
        };
        lat: {
            control: string;
        };
        zoom: {
            control: string;
        };
        style: {
            control: string;
        };
        minZoom: {
            control: string;
        };
        maxZoom: {
            control: string;
        };
        minPitch: {
            control: string;
        };
        maxPitch: {
            control: string;
        };
        interactive: {
            control: string;
        };
        bearingSnap: {
            control: string;
        };
        pitchWithRotate: {
            control: string;
        };
        clickTolerance: {
            control: string;
        };
        attributionControl: {
            control: string;
        };
        customAttribution: {
            control: string;
        };
        logoPosition: {
            control: string;
        };
        failIfMajorPerformanceCaveat: {
            control: string;
        };
        preserveDrawingBuffer: {
            control: string;
        };
        antialias: {
            control: string;
        };
        refreshExpiredTiles: {
            control: string;
        };
        maxBounds: {
            control: string;
        };
        scrollZoom: {
            control: string;
        };
        boxZoom: {
            control: string;
        };
        dragRotate: {
            control: string;
        };
        dragPan: {
            control: string;
        };
        keyboard: {
            control: string;
        };
        doubleClickZoom: {
            control: string;
        };
        touchZoomRotate: {
            control: string;
        };
        touchPitch: {
            control: string;
        };
        trackResize: {
            control: string;
        };
        bearing: {
            control: string;
        };
        pitch: {
            control: string;
        };
        fitBoundsOptions: {
            control: string;
        };
        renderWorldCopies: {
            control: string;
        };
        maxTileCacheSize: {
            control: string;
        };
        localIdeographFontFamily: {
            control: string;
        };
        transformRequest: {
            control: string;
        };
        collectResourceTiming: {
            control: string;
        };
        fadeDuration: {
            control: string;
        };
        crossSourceCollisions: {
            control: string;
        };
        onZoomChanged: {
            control: string;
        };
        onCenterChanged: {
            control: string;
        };
    };
};
export declare const Marker: {
    ({ ...markerOptions }: MarkerProps): JSX.Element;
    args: {
        lat: number;
        lng: number;
    };
    argTypes: {
        lng: {
            control: string;
        };
        lat: {
            control: string;
        };
    };
};
