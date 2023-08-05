import React from 'react';
import {Svg, Rect, Circle, Line, Text} from 'react-native-svg';

const GallerySVG = () => {
  return (
    <Svg width="200" height="200" viewBox="0 0 200 200" fill="none">
      {/* Gallery Border */}
      <Rect width="200" height="200" rx="8" fill="#E4E4E4" />

      {/* Image placeholders */}
      <Rect x="10" y="10" width="60" height="60" rx="8" fill="#C4C4C4" />
      <Rect x="80" y="10" width="60" height="60" rx="8" fill="#C4C4C4" />
      <Rect x="150" y="10" width="60" height="60" rx="8" fill="#C4C4C4" />
      <Rect x="10" y="80" width="60" height="60" rx="8" fill="#C4C4C4" />
      <Rect x="80" y="80" width="60" height="60" rx="8" fill="#C4C4C4" />
      <Rect x="150" y="80" width="60" height="60" rx="8" fill="#C4C4C4" />

      {/* Camera Icon */}
      <Circle cx="50" cy="150" r="25" fill="#C4C4C4" />
      <Line x1="50" y1="125" x2="50" y2="175" stroke="black" strokeWidth="2" />
      <Line x1="25" y1="150" x2="75" y2="150" stroke="black" strokeWidth="2" />
      <Text x="30" y="140" fontSize="12" fill="black">
        +3
      </Text>
    </Svg>
  );
};

export default GallerySVG;
