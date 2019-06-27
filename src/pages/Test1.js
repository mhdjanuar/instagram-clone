import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Body, Form, Item, Input, Button,Text,Thumbnail,Card,CardItem,Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { goHome,goScreen } from '../navigation';
import { Navigation } from 'react-native-navigation';

export default class Test1 extends Component {


  render() {

    return (
      <Container style={{ backgroundColor: '#fffcfa' }}>
        
                  <Button block info style={{ marginTop: 15 }} 
                    onPress={()=>goScreen()}>
                        
                  </Button>
            

      </Container>
    );
  }

}
