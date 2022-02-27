// @flow
import React, { FC } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';


import { type Video as VideoModel } from './videos';
import VideoContent from './VideoContent';
import PlayerControls from './PlayerControls';
import { Video } from 'expo-av';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
// const { statusBarHeight } = Constants;
const shadow: ViewStyle = {
  alignItems: 'center',
  elevation: 1,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.18,
  shadowRadius: 2,
};

type VideoModalProps = {
  video: VideoModel,
};
type Context = {
  y: number
}

const VideoModal: FC<VideoModalProps> = ({ video }) => {

  console.log(video);

  const translateY = useSharedValue(0);
  const offset = useSharedValue(0);

  const gestureEventHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, Context>({
    onStart:(_, context) => {
      context.y = translateY.value
      // console.log('context.y', context.y);
      
    },
    onActive: (ev, context) => {
      translateY.value = ev.translationY + context.y
      
    },
    onEnd: (ev) => {
      console.log('////',ev.translationY);
      console.log('//height//',height  * 0.6);
      
      if (ev.translationY <= height  * 0.3) {
        translateY.value = withTiming(0)

      } else {
        translateY.value = withTiming(height - 3 * 64)
      }
    }
  })

  const rStyle = useAnimatedStyle(()=> {
    return {
      transform: [{translateY: translateY.value}]
    }
  })

  return (

    <>
      <View
        style={{
          // height: statusBarHeight,
          // height: 200,
          backgroundColor: 'black',
        }}
      />
      <PanGestureHandler onGestureEvent = {gestureEventHandler}>

        <Animated.View
          style={[{
            ...shadow,

          }, rStyle]}
        >
          <View style={{ backgroundColor: 'white', width }}>
            <View style={{ ...StyleSheet.absoluteFillObject }}>
              <PlayerControls title={video.title} onPress={() => { }} />
            </View>
            <Video
              source={video.video}
              style={{ width, height: width /1.78 }}
              resizeMode={Video.RESIZE_MODE_COVER}
              shouldPlay
            />
          </View>
          <View style={{ backgroundColor: 'white', width, height }}>
            <View>
              <VideoContent {...{ video }} />
            </View>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </>
  )
}

export default VideoModal
