import React, {Component} from 'react';
import { ScrollView, Image, StyleSheet,AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text,
         Card, CardItem, Thumbnail
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Post from '../components/Post';
import Story from '../components/Story';
import Icon from 'react-native-vector-icons/Entypo';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';



export default class Profil extends Component{  

  constructor(props){
    super(props)
    Navigation.events ().bindComponent(this);
    this.state = {
      userPost : []
    }
  }

  async componentDidAppear() {
    this.getData()
  }
  
  async getData(){
    const token = await AsyncStorage.getItem('token')
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }

  const rest =  axios.get('http://192.168.0.22:5000/api/v1/posts',config)
    .then((res)=>{
      this.setState({
        userPost : res.data
      })
    })

  }

  handleDelete(id){
    const res =  axios.delete(`http://192.168.0.22:5000/api/v1/post/${id}`).then((res)=>{
      this.getData()
    })
  }


  handleSend = () => {
    alert('this is send')
  }

  render(){
    return(
      <Container>
        <Header style={{ backgroundColor: 'white'}}>
          <Left>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/camera.png')} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'black' }}>Instagram</Title>
          </Body>
          <Right>
            <Button transparent>
              <Image style={styles.iconImg} source={require('../icon/tv.png')} />
            </Button>
            <Button transparent onPress={this.handleSend}>
              <Image style={styles.iconImg} source={require('../icon/paper-plane.png')} />
            </Button>
          </Right>
        </Header>

        <Content>

        <Grid>
          <Row style={styles.story}>

            <Grid>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <Col style={styles.titleRound}>
                      <Col style={styles.round}>
                        <Thumbnail style={{ borderWidth: 2, borderColor:'white', backgroundColor: 'black' }}  />
                        <Icon name="circle-with-plus" style={{ position:'absolute', right:5, bottom:5 }} size={17} color="blue" />
                      </Col>
                  <Text style={{ fontSize: 13 }}>cerita anda</Text>
                </Col>

                <Story title="my story" />
                <Story title="my story" />
                <Story title="my story" />
                <Story title="my story" />
                <Story title="my story" />
                <Story title="my story" />
              </ScrollView>
            </Grid>

          </Row>
        </Grid>

        {this.state.userPost.map((data)=>(
              <Post key={data.id} 
                    id={data.id} 
                    titleName={data.name} 
                    delete={()=>this.handleDelete(data.id)} 
                    parentId={this.props.componentId}
                    name={data.name} 
                    like="1000" 
                    caption={data.caption} 
                    photo={data.photo} />
        ))}

        </Content>

      </Container>

    )
  }
}

const styles = StyleSheet.create({
  iconImg : {
    height: 25,
    width: 25
  },
  story :{
    backgroundColor: '#635DB7',
    height: 100,
    top: 5
  },
  titleRound:{
    backgroundColor: 'white',
    width: 75 ,
    alignItems: 'center',
    justifyContent: 'center'
  },
  round : {
    width: 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center' ,
    justifyContent: 'center'
  },
})
