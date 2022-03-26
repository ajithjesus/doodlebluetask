import React from 'react';
import {Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

export default function PageLoader({visible}) {
  return (
    <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
  );
}
