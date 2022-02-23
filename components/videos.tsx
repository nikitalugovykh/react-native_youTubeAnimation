// @flow
/* eslint-disable global-require */
import { AVPlaybackSource } from 'expo-av/build/AV.types';
import moment, { type Moment } from 'moment';
import { ImageSourcePropType } from 'react-native';

export type Video = {
  id: string,
  thumbnail: ImageSourcePropType,
  video: AVPlaybackSource,
  title: string,
  username: string,
  avatar: ImageSourcePropType,
  views: number,
  published: Moment,
};

const videos: Video[] = [
  {
    id: '3',
    thumbnail: require('../assets/thumbnails/3.jpg'),
    video: require('../assets/3.mp4'),
    title: 'Sending Firebase Data Messages to Expo: iOS',
    username: 'Expo',
    avatar: require('../assets/avatars/1.png'),
    views: 189,
    published: moment().subtract(5, 'days'),
  },
  {
    id: '1',
    thumbnail: require('../assets/thumbnails/1.jpg'),
    video: require('../assets/1.mp4'),
    title: 'React Native Image Picker Tutorial',
    username: 'Expo',
    avatar: require('../assets/avatars/1.png'),
    views: 63,
    published: moment().subtract(10, 'days'),
  },
  {
    id: '2',
    thumbnail: require('../assets/thumbnails/2.jpg'),
    video: require('../assets/2.mp4'),
    title: 'PIXI.js in React Native for beginners',
    username: 'Expo',
    avatar: require('../assets/avatars/1.png'),
    views: 216,
    published: moment().subtract(17, 'days'),
  },
  {
    id: '4',
    thumbnail: require('../assets/thumbnails/4.jpg'),
    video: require('../assets/1.mp4'),
    title: 'Permissions in React Native for absolute beginners',
    username: 'Expo',
    avatar: require('../assets/avatars/1.png'),
    views: 273,
    published: moment().subtract(31, 'days'),
  },
];

export default videos;
