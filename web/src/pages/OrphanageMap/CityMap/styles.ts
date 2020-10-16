import styled from 'styled-components';
import { Popup } from 'react-leaflet';

import { MapPopupProps } from './types';

export const mapStyles = {
  width: '100%',
  height: '100%',
};

export const MapPopup = styled(Popup)<MapPopupProps>`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .leaflet-popup-content {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 40px;
      height: 40px;

      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: 17.2868px 27.6589px 41.4884 rgba(23, 142, 166, 0.16);

      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;
