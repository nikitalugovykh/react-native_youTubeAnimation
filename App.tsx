// @flow
/* eslint-disable global-require */
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Home, PlayerProvider, videos } from './components';

type AppState = {
  ready: boolean,
};

export default class App extends React.PureComponent<{}, AppState> {
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Promise.all(
      videos.map(video => Promise.all([
        //@ts-ignore
        Asset.loadAsync(video.video),
        //@ts-ignore
        Asset.loadAsync(video.avatar),
        //@ts-ignore
        Asset.loadAsync(video.thumbnail),
      ])),
    );
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (
        <AppLoading />
      );
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EBEBEB99' }}>
        <PlayerProvider>
          <Home />
        </PlayerProvider>
      </SafeAreaView>
    );
  }
}
