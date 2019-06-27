import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
         Card, CardItem, Thumbnail
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Story extends Component{

  render(){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return(
      <Col style={styles.titleRound}>
            <Col style={styles.round}>
              <Thumbnail style={{ borderWidth: 2, borderColor:'white' }} source={{uri: uri}}  />
            </Col>
        <Text style={{ fontSize: 13 }}>{this.props.title}</Text>
      </Col>
    )
  }

}

const styles = StyleSheet.create({
  titleRound:{
    backgroundColor: 'white',
    width: 75 ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  round : {
    backgroundColor: 'tomato',
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center' ,
    justifyContent: 'center'
  },

})
