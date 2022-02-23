// @flow
import React, { FC, useEffect, useState } from 'react';
import {
  View, StyleSheet, Dimensions, StatusBar,
} from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { videos } from '.';

import PlayerContext from './PlayerContext';
import VideoModal from './VideoModal';
import { type Video } from './videos';

const { height } = Dimensions.get('window');

type PlayerProviderProps = {
  children: JSX.Element,
};


const PlayerProvider: FC<PlayerProviderProps> = ({children}) => {

  const [video, setVideo] = useState<Video | null>(null)

  const anim = useSharedValue(0)

  useEffect(()=> {
    if (video) {
      anim.value = withTiming(1)
    } 
  }, [video])


  const rStyle = useAnimatedStyle(() => {

    const translateYInterpolate = interpolate(anim.value, 
      [0, 1],
      [height, 0]
      )

    return {
      transform: [{translateY: translateYInterpolate}]
    }
  })
  
  return (
    <PlayerContext.Provider value={{ video, setVideo }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={StyleSheet.absoluteFill}>
          {children}
        </View>
        <Animated.View style = {rStyle}>
          {
            video && <VideoModal video = {video} />
          }
        </Animated.View>
      </View>
    </PlayerContext.Provider>

  )


}

// export default class PlayerProvider extends React.PureComponent<PlayerProviderProps, PlayerProviderState> {
//   state = {
//     video: null,
//   };

//   setVideo = (video: Video | null) => {
//     // this.setState({ video }, this.toggleVideo);
//     this.setState({ video });
//   };

//   render() {
//     const { setVideo } = this;
//     const { children } = this.props;
//     const { video } = this.state;
//     return (
//       <PlayerContext.Provider value={{ video, setVideo }}>
//         <StatusBar barStyle="dark-content" />
//         <View style={styles.container}>
//           <View style={StyleSheet.absoluteFill}>
//             {children}
//           </View>
//           <View>
//             {
//               video && <VideoModal {...{ video }} />
//             }
//           </View>
//         </View>
//       </PlayerContext.Provider>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default PlayerProvider