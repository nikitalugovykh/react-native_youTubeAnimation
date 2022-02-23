// @flow
import React, { FC } from 'react';
import {
  View, StyleSheet, Text, Image, ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import Icon from './Icon';
import videos, { type Video } from './videos';

type VideoContentProps = {
  video: Video,
};

const VideoContent: FC<VideoContentProps> = ({ video }) => {


  return (
    <ScrollView>
      <View style={styles.content}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.views}>{`${video.views} views`}</Text>
        <View style={styles.icons}>
          <Feather name="thumbs-up" size={24} color="black" />
          <Feather name="thumbs-down" size={24} color="black" />
          <Entypo name="share-alternative" size={24} color="black" />
          <Feather name="arrow-down-circle" size={24} color="black" />
          <Entypo name="list" size={24} color="black" />
        </View>
      </View>
      <View style={styles.upNext}>
        <Text style={styles.upNextTitle}>Up next</Text>
        {
          videos.map(v => (
            <View key={v.id} style={styles.thumbnail}>
              <Image source={v.thumbnail} style={styles.thumbnailImage} />
              <View style={styles.thumbnailContent}>
                <Text numberOfLines={2} style={styles.thumbnailTitle}>{v.title}</Text>
                <Text style={styles.thumbnailUsername}>{v.username}</Text>
              </View>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

// export default class VideoContent extends React.PureComponent<VideoContentProps> {
//   render() {
//     const { video } = this.props;

//   }
// }

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
  },
  views: {
    color: 'gray',
    marginBottom: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upNext: {
    borderTopWidth: 1,
    borderColor: 'lightgray',
    paddingTop: 8,
    padding: 16,
  },
  upNextTitle: {
    fontWeight: 'bold',
    color: 'gray',
  },
  thumbnail: {
    flexDirection: 'row',
    marginTop: 16,
  },
  thumbnailImage: {
    height: 100,
    width: 100,
  },
  thumbnailContent: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    flex: 1,
    flexWrap: 'wrap',
  },
  thumbnailTitle: {
    fontSize: 16,
  },
  thumbnailUsername: {
    color: 'gray',
  },
});


export default VideoContent