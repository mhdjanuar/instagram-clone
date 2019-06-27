import React,{ Component } from 'react';
import { StyleSheet,AsyncStorage } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text,
         Card, CardItem, Thumbnail,Form,Item,Label,Input
 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';
import { goHome } from '../navigation';
import { Navigation } from 'react-native-navigation';

export default class FormPost extends Component{

    state = {
        id:1,
        photo: '',
        caption: '',
        userPost:[],
        isUpdate: false
    }
    

    async postData(){
        const name = await AsyncStorage.getItem('name');
        
        const res = await axios({
          method: 'post',
          url: 'http://192.168.0.22:5000/api/v1/post',
          data: {
            name: name,
            photo: this.state.photo,
            caption: this.state.caption
          }
        });
    
      }

    async updateData(){
        const res = await axios({
            method: 'patch',
            url: `http://192.168.0.22:5000/api/v1/post/${this.state.id}`,
            data: {
              photo: this.state.photo,
              caption: this.state.caption
            }
          });
    }

    handleEdit = () =>{
        this.setState({
            id:this.props.id,
            caption: this.props.caption,
            photo: this.props.photo,
            isUpdate: true
        })
    }

    handleSave = () =>{
        if(this.state.isUpdate == true){
            this.updateData()
            this.setState({
                isUpdate:false,
                photo: '',
                caption: ''
            })
        }
        else{
            this.postData()
            goHome()
        }
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Photo</Label>
                            <Input 
                                onChangeText={(photo)=>this.setState({photo})} 
                                value={this.state.photo} 
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Caption</Label>
                            <Input 
                                onChangeText={(caption)=>this.setState({caption})} 
                                value={this.state.caption} 
                            />
                        </Item>
                            <Button onPress={this.handleSave} full style={ styles.btnSubmit }>
                                <Text>
                                    submit
                                </Text>
                            </Button>
                            <Button onPress={this.handleEdit} full style={ styles.btnSubmit }>
                                <Text>
                                    Edit
                                </Text>
                            </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    btnSubmit:{
        marginTop:15,
        width:'90%',
        marginLeft:20,
        borderRadius:10
    }
})
