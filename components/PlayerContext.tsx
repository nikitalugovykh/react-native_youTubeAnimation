// @flow
import * as React from 'react';
import { Video } from './videos';


type VideoContextType = {
    video: Video | null,
    setVideo: React.Dispatch<React.SetStateAction<Video | null>>

}
// $FlowFixMe
const PlayerContext = React.createContext<VideoContextType>({} as VideoContextType);

export default PlayerContext;
