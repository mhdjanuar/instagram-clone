import { Navigation } from 'react-native-navigation';

export const goHome = () => Navigation.setRoot({
  root: {
      bottomTabs: {
      children: [{
        stack: {
          children: [{
            component: {
              name: 'navigation.Home',
              passProps: {
                text: 'This is tab 1'
              }
            }
          }],
          options: {
            bottomTab: {
              text: '',
              icon: require('./icon/home-outline.png'),
              testID: 'FIRST_TAB_BAR_BUTTON'
            },
            topBar:{
              drawBehind: true,
              visible: false
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.Test2',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: '',
              icon: require('./icon/magnify.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.FormPost',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: '',
              icon: require('./icon/plus-square-outline.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.Profile',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: '',
              icon: require('./icon/heart-outline.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      },
      {
        component: {
          name: 'navigation.Profile',
          passProps: {
            text: 'This is tab 2'
          },
          options: {
            bottomTab: {
              text: '',
              icon: require('./icon/person-outline.png'),
              testID: 'SECOND_TAB_BAR_BUTTON'
            }
          }
        }
      }
    ],
    options: {
      bottomTabs: {
        animate: false,
        titleDisplayMode: 'alwaysHide'
      }
    }
    }
  }
})

export const goScreen = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'navigation.FormPost',
          }
        }
    ],
    }
  }
})

