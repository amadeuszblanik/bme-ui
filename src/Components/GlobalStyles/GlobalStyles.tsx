import {createGlobalStyle} from "styled-components";
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
  ${reset}

  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
  @import url('https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css');
  
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
