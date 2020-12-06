import { Map, FitBoundsOptions, LngLatBoundsLike, PointLike, TransformRequestFunction } from 'mapbox-gl';

type MapboxLogoPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type MarkerAnchor = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface MarkerProps {
    lng: number;
    lat: number;
    anchor?: MarkerAnchor;
    offset?: PointLike;
    color?: string;
    scale?: number;
    draggable?: boolean;
    rotation?: number;
    pitchAlignment?: string;
    rotationAlignment?: string;
}

export interface MapboxWrapperStyledComponent {
    width?: string;
    height?: string;
}

export interface MapboxComponentProps extends MapboxWrapperStyledComponent {
    apiKey: string;
    lat: number;
    lng: number;
    zoom: number;

    markers?: MarkerProps[];
    mapBoxRef?: (map: Map) => void;

    minZoom?: number;
    maxZoom?: number;
    minPitch?: number;
    maxPitch?: number;
    style?: string;
    interactive?: boolean;
    bearingSnap?: number;
    pitchWithRotate?: boolean;
    clickTolerance?: number;
    attributionControl?: boolean;
    customAttribution?: string | string[];
    logoPosition?: MapboxLogoPosition;
    failIfMajorPerformanceCaveat?: boolean;
    preserveDrawingBuffer?: boolean;
    antialias?: boolean;
    refreshExpiredTiles?: boolean;
    maxBounds?: LngLatBoundsLike;
    scrollZoom?: boolean;
    boxZoom?: boolean;
    dragRotate?: boolean;
    dragPan?: boolean;
    keyboard?: boolean;
    doubleClickZoom?: boolean;
    touchZoomRotate?: boolean;
    touchPitch?: boolean;
    trackResize?: boolean;
    bearing?: number;
    pitch?: number;
    fitBoundsOptions?: FitBoundsOptions;
    renderWorldCopies?: boolean;
    maxTileCacheSize?: number;
    localIdeographFontFamily?: string;
    transformRequest?: TransformRequestFunction;
    collectResourceTiming?: boolean;
    fadeDuration?: number;
    crossSourceCollisions?: boolean;

    onZoomChanged?: (zoom: number) => void;
    onCenterChanged?: ({ lat, lng }: { lat: number; lng: number }) => void;
}
