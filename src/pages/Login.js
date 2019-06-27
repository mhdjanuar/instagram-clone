import React, { Component } from 'react';
import { Image,AsyncStorage } from 'react-native';
import { Container, Header, Content, Body, Form, Item, Input, Button,Text,Thumbnail,Card,CardItem,Icon} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { goHome,goTest2 } from '../navigation';
import { Navigation } from 'react-native-navigation';
import axios from 'axios';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    res : []
  } 

  // componentWillMount(){
  //    AsyncStorage.getItem('token').then((res)=>{
  //      if(res != null){
  //        goHome()
  //      }else{
  //        alert('token not found')
  //      }
  //    })
  // }

  handleLogin = async () => {
     axios.post('http://192.168.0.22:5000/api/v1/login', {
                email: this.state.email,
                password: this.state.password
        })
        .then(function (res) {
          AsyncStorage.setItem('token', res.data.token )  
          AsyncStorage.setItem('name', res.data.user)
          goHome()
        })
        .catch(function (error) {
          console.log(error);
          alert('email and password wrong!!')
        });
        
  }



  render() {
    const uri = "https://fontmeme.com/images/instagram-new-logo.png"

    return (
      <Container style={{ backgroundColor: '#fffcfa' }}>
        <Grid>
        <Image source={{uri: uri}} style={{height: 50, width: null, flex: 1, marginTop: 10}}/>

          <Row style={{ height: 400}}>
            <Grid>
              <Row style={{ backgroundColor: 'white', height: 200 }}>
                <Content>
                <Card transparent>
                    <CardItem>
                      <Content>
                      <Form>
                        <Item regular style={{
                          height: 45
                        }}>
                          <Input placeholder='Phone number, username, or email' 
                                 onChangeText={(email) => this.setState({email})}
                                 value={this.state.email}
                           />
                        </Item>
                        <Item regular style={{
                          height: 45,
                          marginTop: 10
                        }}>
                          <Input placeholder='Password' 
                                onChangeText={(password) => this.setState({password})}
                                value={this.state.password}
                          />
                        </Item>
                      </Form>
                      <Button block info style={{ marginTop: 15 }} onPress={this.handleLogin}>
                        <Text>Log In</Text>
                      </Button>
                      </Content>
                    </CardItem>
                 </Card>
                </Content>
              </Row>

              <Row style={{ backgroundColor: "white"}}>

                <Grid>
                  <Row style={{ height: 20, justifyContent: "center" }}>
                    <Text > ─────────────  OR  ─────────────</Text>
                  </Row>
                  <Row style={{ height: 30, justifyContent: "center", marginTop: 30 }}>
                    <Icon style={{ marginRight: 10 }} name='logo-facebook' />
                    <Text style={{ marginTop: 2 }}>Log in with Facebook</Text>
                  </Row>
                  <Row style={{  height: 20, justifyContent: "center", marginTop: 20 }}>
                    <Text>Forgot password?</Text>
                  </Row>
                </Grid>
              </Row>

            </Grid>
          </Row>


          <Row style={{ backgroundColor: "white", height: 80, justifyContent: "center", marginTop: 20 }}>
            <Text style={{ justifyContent: "center", alignItems: "center" }}>Don't have an account?</Text>
            <Text style={{

            }}>Sign up</Text>
          </Row>
        </Grid>

      </Container>
    );
  }

}
