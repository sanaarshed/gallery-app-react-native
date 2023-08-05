import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HearIcon = ({width = 45, height = 45, fill}) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}>
        <Path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.25 2 9.5 2 7.02 3.61 5 6 5c1.5 0 3 .63 4 1.66C11 5.63 12.5 5 14 5c2.39 0 4 2.02 4 4.5 0 3.75-3.4 6.86-8.55 10.54L12 21.35z" />
      </Svg>
    </View>
  );
};

export default HearIcon;
