import React, { Component } from 'react';
import { Image, StyleSheet, View, FlatList } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text,
         Card, CardItem, Thumbnail, Item, Input
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Icon from 'react-native-vector-icons/Entypo';
import { goHome,goScreen } from '../navigation';
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';

export default class Post extends Component {

  state = {
    visible: false
  }

  // goToScreen = (screenName)=>{
  //   Navigation.push(this.props.componentId,{
  //     component: {
  //       name: screenName
  //     }
  //   })
  // }

  // async handleDelete(id){
  //   const res =  axios.delete(`http://192.168.0.22:5000/api/v1/post/${id}`).then((res)=>{
  //     alert('berhasil')
  //   })
  // }

  // async handleDel(id){
  //   const res =  axios.delete(`http://192.168.0.22:5000/api/v1/post/${id}`).then((res)=>{
  //     goHome()
  //   })
  // }

  render(){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";

    return(
    <View>
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail style={{ backgroundColor:'black' }} source={{uri: uri}} small/>
            <Body>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{this.props.titleName}</Text>
              <Text note >GeekyAnts</Text>
            </Body>
          </Left>
          <Right>

            <Button transparent
              title="Show Dialog"
              onPress={() => {
                this.setState({ visible: true });
              }}
            >
              <Icon name="dots-three-vertical" size={17} color="black" />
            </Button>

          </Right>
        </CardItem>
        <CardItem cardBody>
          <Image source={{uri: this.props.photo}} style={{height: 300, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/heart-outline.png')} />
            </Button>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/bubble-outline.png')} />
            </Button>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/paper-plane.png')} />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/bookmark-outline.png')} />
            </Button>
          </Right>
        </CardItem>
        <Grid style={{ marginLeft:10 }}>
          <Col style={{ height: 20 }}>
            <Text style={{ fontSize: 14,fontWeight: 'bold' }}>{this.props.like} suka</Text>
          </Col>
        </Grid>
        <Grid style={{ marginLeft:10 }}>
          <Row>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{ this.props.name } </Text>
                  <Text style={{ fontSize: 14 }}>{this.props.caption}</Text>
          </Row>
          <Row >
            <Content>
              <Item style={{ borderColor: 'transparent' }}>
                <Thumbnail style={{ backgroundColor:'black', width:30, height:30 }}  />
                <Input style={{ fontSize: 14 }} placeholder='Tambahkan komentar...'/>
              </Item>
            </Content>
          </Row>
        </Grid>
      </Card>

      <Dialog
            visible={this.state.visible}
            onTouchOutside={() => {
              this.setState({ visible: false });
            }}
          >
            <DialogContent style={{ backgroundColor:'white', height: 300, width: 300, justifyContent: 'center' }}>
              <Button full transparent
                onPress={()=>{
                  this.setState({ visible: false })
                  Navigation.push(this.props.parentId, {
                    component: {
                      name: 'navigation.FormPost',
                      passProps: {
                        id: this.props.id,
                        caption: this.props.caption,
                        photo: this.props.photo
                      }
                    }
                  })
                }}
              >
                <Text>
                  Edit
                </Text>
              </Button>
              <Button full transparent
                onPress={()=>{
                  this.setState({ visible: false })
                  this.props.delete()
                }}
              >
                <Text>
                  Delete
                </Text>
              </Button>
            </DialogContent>
          </Dialog>

    </View>
    )
  }
}

const styles = StyleSheet.create({
  iconImg : {
    height: 25,
    width: 25
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
