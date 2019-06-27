import React,{ Component } from 'react';
import { Container, Header, Content, Body, Form, Item, Input, Button,Text,Thumbnail,Card,CardItem,Icon} from 'native-base';
import { goHome,goFormPost } from '../navigation';
import { Navigation } from 'react-native-navigation';

export default class Test2 extends Component{

  render(){
    return(
      <Container>
        <Button
        onPress={() => {
          Navigation.push(this.props.componentId, {
            component: {
              name: 'navigation.FormPost',
            }
          });
        }}
        >
          <Text>
            Tes
          </Text>
        </Button>
      </Container>
    )
  }

}