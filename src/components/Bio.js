import React, {Component} from 'react';
import { ScrollView, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
         Card, CardItem, Thumbnail, Tabs, Tab, TabHeading
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Bio extends Component {

  render(){
    return(
          <Row style={{ height: 50 }}>
            <Grid style={{ marginLeft: 10 }}>
              <Row style={{ height: 20 }}>
                <Text style={{ fontSize:13 }}>Hello Worlds</Text>
              </Row>
              <Row style={{ height: 20 }}>
                <Text style={{ fontSize:13, fontWeight:'bold' }}>This is my profil</Text>
              </Row>
            </Grid>
          </Row>
    )
  }

}
