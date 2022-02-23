// @flow
import React, { FC, useContext } from 'react';
import {
  View, Image, StyleSheet, Text, TouchableWithoutFeedback,
} from 'react-native';

import PlayerContext from './PlayerContext';
import { type Video } from './videos';

type VideoThumbnailProps = {
  video: Video,
};


const VideoThumbnail: FC<VideoThumbnailProps> = ({ video }) => {


  const { setVideo } = useContext(PlayerContext)


  return (

    <TouchableWithoutFeedback onPress={() => setVideo(video)}>
      <View>
        <Image source={video.thumbnail} style={styles.thumbnail} />
        <View style={styles.description}>
          <Image source={video.avatar} style={styles.avatar} />
          <View>
            <Text style={styles.title}>{video.title}</Text>
            <Text style={styles.subtitle}>
              {`${video.username} • ${video.views} views • ${video.published.fromNow()}`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>



  )

}

const styles = StyleSheet.create({
  thumbnail: {
    width: '100%',
    height: 200,
  },
  description: {
    flexDirection: 'row',
    margin: 16,
    marginBottom: 32,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: 'gray',
  },
})


export default VideoThumbnail
