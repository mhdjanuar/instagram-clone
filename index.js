/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import App from "./App";
import { RegisterScreens } from './src/NavigatorRegister';

RegisterScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.Login'
      }
    },
  });
});
