// @flow
import React, { FC } from 'react';
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native';


import { type Video as VideoModel } from './videos';
import VideoContent from './VideoContent';
import PlayerControls from './PlayerControls';
import { Video } from 'expo-av';

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

const VideoModal: FC<VideoModalProps> = ({ video }) => {

  console.log(video);
  

  return (

    <>
      <View
        style={{
          // height: statusBarHeight,
          // height: 200,
          backgroundColor: 'black',
        }}
      />
      <View
        style={{
          ...shadow,
        }}
      >
        <View style={{ backgroundColor: 'white', width }}>
          <View style={{ ...StyleSheet.absoluteFillObject }}>
            <PlayerControls title={video.title} onPress={() => {}} />
          </View>
          <Video
            source={video.video}
            style={{ width, height: width / 1.78 }}
            resizeMode={Video.RESIZE_MODE_COVER}
            shouldPlay
          />
        </View>
        <View style={{ backgroundColor: 'white', width, height }}>
          <View>
            <VideoContent {...{ video }} />
          </View>
        </View>
      </View>
    </>
  )
}

export default VideoModal
