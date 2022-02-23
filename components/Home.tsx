// @flow
import React, { FC } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
// import { Constants } from 'expo';

import VideoThumbnail from './VideoThumbnail';
import videos from './videos';

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  return ( 
    <ScrollView style={styles.container}>
        {
          videos.map(video => (
            <VideoThumbnail key={video.id} {...{ video }} />
          ))
        }
      </ScrollView>
   )
}



// eslint-disable-next-line react/prefer-stateless-function
// export default class Home extends React.PureComponent<HomeProps> {
//   render() {
//     return (
//       // <ScrollView style={styles.container}>
//       //   {
//       //     videos.map(video => (
//       //       <VideoThumbnail key={video.id} {...{ video }} />
//       //     ))
//       //   }
//       // </ScrollView>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    // marginTop: 20,
  },
});

export default Home
