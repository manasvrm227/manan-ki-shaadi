import { createGlobalStyle } from "styled-components";
import QuenteScript from "../assets/fonts/quente-script/Quente-Script-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Quente Script';
        src: local('Quente Script'), local('QuenteScript'),
        url(${QuenteScript}) format('ttf');
        /* font-weight: 300; */
        font-style: normal;
    }
`;
