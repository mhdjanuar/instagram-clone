import {Navigation} from 'react-native-navigation';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import FormPost from './pages/FormPost';

export function RegisterScreens() {
  Navigation.registerComponent(`navigation.Test1`, () => Test1);
  Navigation.registerComponent(`navigation.Test2`, () => Test2);
  Navigation.registerComponent(`navigation.Login`, () => Login);
  Navigation.registerComponent(`navigation.Welcome`, () => Welcome);
  Navigation.registerComponent(`navigation.Profile`, () => Profile);
  Navigation.registerComponent(`navigation.Home`, () => Home);
  Navigation.registerComponent(`navigation.FormPost`, () => FormPost);
}
