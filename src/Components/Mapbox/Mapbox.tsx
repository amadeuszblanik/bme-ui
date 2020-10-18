// @TODO: Refactor it!

import React, {useEffect, useRef, useState} from "react";
import mapboxgl, {Map, Marker} from 'mapbox-gl'
import styled from "styled-components";
import {MapboxComponentProps, MapboxWrapperStyledComponent, MarkerProps} from "./Mapbox.types";
import { BMEText } from "../..";

const StyledMapWrapper = styled.div<MapboxWrapperStyledComponent>`
  position: relative;
  display: block;
  width: ${({ width }) => width ? width : '100%'};
  height: ${({ height }) => height ? height : '500px'};
  border-radius: 5px;
  overflow: hidden;
`

const StyledMap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`

const Mapbox: React.FunctionComponent<MapboxComponentProps> = ({ width, height, apiKey, lat, lng, onCenterChanged, onZoomChanged, markers, mapBoxRef, ...mapOptions }) => {
  const [map, setMap] = useState<Map>();
  const [mapboxMarkers, setMapboxMarkers] = useState<Marker[]>([]);

  const [errorMessage, setErrorMessage] = useState<string>();
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    if (mapBoxRef) {
      mapBoxRef(map);
    }
  }, [map, mapBoxRef]);

  const addMarkers = (markersOptions: MarkerProps[]) => {
    if (!map) {
      return;
    }

    const markerToAdd = markersOptions
      .filter(({ lat, lng }) =>
        !mapboxMarkers
          .map((marker) => marker.getLngLat())
          .some(({ lat: markerLat, lng: markerLng }) => markerLat === lat && markerLng === lng)
      );

    const newMarkers: Marker[] = [...mapboxMarkers];

    markerToAdd.forEach(({ lat, lng }) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([lng, lat]);

      newMarkers.push(marker);
      marker.addTo(map);
    });

    setMapboxMarkers(newMarkers);
  };

  useEffect(() => {
    mapboxgl.accessToken = apiKey
  }, [apiKey])

  useEffect(() => {
    const center = new mapboxgl.LngLat(lng, lat);

    setMap(new mapboxgl.Map({
      container: ref.current,
      center,
      ...mapOptions
    }));
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.on('error', ({ error: { message } }) => {
      setErrorMessage(message);
    });

    map.on('move', () => {
      if (onZoomChanged) {
        onZoomChanged(map.getZoom());
      }

      if (onCenterChanged) {
        const { lat, lng } = map.getCenter();

        onCenterChanged({ lat, lng });
      }
    });
  }, [map]);

  useEffect(() => {
    if (!markers || !map) {
      return;
    }

    addMarkers(markers);
  }, [map, markers])

  return (
    <StyledMapWrapper width={width} height={height}>
      {errorMessage ? <BMEText>{errorMessage}</BMEText> : <StyledMap ref={ref}></StyledMap>}
    </StyledMapWrapper>
  );
}

Mapbox.defaultProps = {
  style: 'mapbox://styles/mapbox/dark-v10',
}

export default Mapbox;
