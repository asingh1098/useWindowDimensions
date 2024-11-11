import React from 'react';
import { useWindowDimensions } from '../hooks/useWindowDimensions';

const WindowDimensionsTestComponent: React.FC = () => {
  const { windowDimensions, isMobileWidth } = useWindowDimensions();

  return (
    <div>
      <p>Width: {windowDimensions.width}</p>
      <p>Height: {windowDimensions.height}</p>
      <p>Is Mobile Width: {isMobileWidth ? "Yes" : "No"}</p>
    </div>
  );
};

export default WindowDimensionsTestComponent;
