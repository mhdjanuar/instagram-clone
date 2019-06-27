import React, {Component} from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text,
         Card, CardItem, Thumbnail, Tabs, Tab, TabHeading
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Post from '../components/Post';
import Story from '../components/Story';
import Biodata from '../components/Bio';
import Pic from '../components/Picstory';


export default class Profile extends Component{

  render(){
    return(
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Grid>
            <Row style={{ alignItems: 'center' }}>
              <Text style={{ fontSize:17, fontWeight:'bold' }}>mhd_januar17 </Text>
              <Icon name='chevron-down' size={10} color="black" />
            </Row>
          </Grid>
          <Right>
            <Button transparent>
              <Image style={{ width:25, height:25 }} source={require('../icon/time-back.png')} />
            </Button>
            <Button transparent>
              <Icon name='bars' size={25} />
            </Button>
          </Right>
        </Header>

        <Content>

          <Grid>
            <Row style={{ height: 120, top:10 }}>
              <Grid>
                <Col style={styles.profilImg}>
                  <Thumbnail style={ styles.tumbProfil } large />
                </Col>

                <Col>
                  <Grid>
                      <Row style={{ backgroundColor: 'white', height: 70}}>
                          <Left style={{ alignItems:'center' }}>
                            <Text>3.959</Text>
                            <Text note style={{ fontSize: 12 }}>Postingan</Text>
                          </Left>
                          <Body style={{ alignItems:'center' }}>
                            <Text>3.959</Text>
                            <Text note style={{ fontSize: 12 }}>Pengikut</Text>
                          </Body>
                          <Right style={{ alignItems:'center' }}>
                            <Text>3.959</Text>
                            <Text note style={{ fontSize: 12 }}>Mengikuti</Text>
                          </Right>
                      </Row>

                      <Button style={styles.btnEdit} transparent dark full >
                        <Text>Edit Profil</Text>
                      </Button>
                  </Grid>
                 </Col>
              </Grid>
            </Row>

            <Biodata />

             <Row style={{ height: 100}}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Story title="story" />
                <Story title="story" />
                <Story title="story" />
                <Story title="story" />
                <Story title="story" />
              </ScrollView>
            </Row>

          </Grid>

          <Grid>

                  <Tabs transparent >
                    <Tab
                        heading={ <TabHeading style={{ backgroundColor: 'white' }}>
                        <Icon name="th" size={25} color="black" />
                    </TabHeading>}>
                      <Pic />
                    </Tab>

                    <Tab
                        heading={ <TabHeading style={{ backgroundColor: 'white' }}>
                        <Icon name="desktop" size={25} color="black" />
                    </TabHeading>}>
                      <Post />
                    </Tab>

                    <Tab
                        heading={ <TabHeading style={{ backgroundColor: 'white' }}>
                        <Icon name="address-book-o" size={25} color="black" />
                    </TabHeading>}>

                    </Tab>
                  </Tabs>

          </Grid>

        </Content>

      </Container>

    )
  }
}

const styles = StyleSheet.create({
  profilImg: {
    backgroundColor: 'white',
    width: '35%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  tumbProfil: {
    backgroundColor: 'black',
    width: 90,
    height: 90,
    borderRadius: 50
  },
  btnEdit: {
    marginRight: 10,
    height: 30,
    borderRadius:5,
    borderColor: 'black',
    borderWidth: 1
  }
})
