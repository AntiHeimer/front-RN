/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import PostLocationBackgroundTask from './src/Location/PostLocationBackgroundTask';
import BackgroundFetch from 'react-native-background-fetch';
import {Storage} from './src/Utils/Function/Storage';

// BackgroundFetch.start();

AppRegistry.registerComponent(appName, () => App);
