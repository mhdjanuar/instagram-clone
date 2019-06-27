import React, {Component} from 'react';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
         Card, CardItem, Thumbnail, Tabs, Tab, TabHeading
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Picstory extends Component{
  render(){
    return(
        <Grid>
            <Row style={{ flexWrap:'wrap' }}>
              <Col style={{ backgroundColor: 'red', height:100, width: '32.5%', marginRight: 2, marginTop: 2 }}>
                <Image style={{height: 100, width: null, flex: 1}} source={require('../icon/myfoto.png')} />
              </Col>
              <Col style={{ backgroundColor: 'red', height:100, width: '32.5%', marginRight: 2, marginTop: 2 }}>
                <Image style={{height: 100, width: null, flex: 1}} source={require('../icon/myfoto.png')} />
              </Col>
              <Col style={{ backgroundColor: 'red', height:100, width: '32.5%', marginRight: 2, marginTop: 2 }}>
                <Image style={{height: 100, width: null, flex: 1}} source={require('../icon/myfoto.png')} />
              </Col>
              <Col style={{ backgroundColor: 'red', height:100, width: '32.5%', marginRight: 2, marginTop: 2 }}>
                <Image style={{height: 100, width: null, flex: 1}} source={require('../icon/myfoto.png')} />
              </Col>
            </Row>
        </Grid>
    )
  }
}
