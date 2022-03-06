import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity  } from 'react-native';
import {auth} from '../firebase-config'
import 'firebase/firestore';


export default class LoginScreen extends Component {
   myDeger = "deneme";

  constructor(props) {
    super(props)

    console.log("Merhaba")
    this.state={
      userName:"",
      password:""
    }
  }

  styles=StyleSheet.create({
    txtInput : {
      borderWidth:1.5,
      backgroundColor:'white',
      borderColor:'#2f4f4f',
      height:30,
      padding:5,
      margin:10,
    },
    buttonContainer: {
      flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
    },
    imgArea: {
      paddingTop:"50%"
    }
  });

  loginHandler = () => {

    auth.signInWithEmailAndPassword(this.state.userName, this.state.password).then((uc)=>{
      if(uc.user) {
        this.route.navigaiton.navigate("MainScreen")
      }
      else {
        console.log("Kullanıcı bulunamadı")
      }
    }).catch(error =>{
      console.log(error)
    })

    
  }

  registerHandler = () => {
    auth
    .createUserWithEmailAndPassword(this.state.userName, this.state.password).then((uc) => {
      if(uc.user) {
        //Geçiş Yap
        this.props.navigaiton.navigate("MainScreen")
      }
      else {
        console.log("Kullanıcı Yaratılamadı")
      }
    }).catch(error => {
      console.log(error)
    })
    

    auth.signOut().then(()=>{}).catch(error=>{})
  }

  render() {
    
    return (
      <View>
      <View style={this.styles.imgArea}>

      </View>
        <TextInput 
        style={this.styles.txtInput} 
        value={this.state.userName}
        onChangeText={(text) => {
          this.setState({
            userName:text
          })
        }}
        >
        </TextInput>
        <TextInput 
        style={this.styles.txtInput}
        value={this.state.password}
        onChangeText= { (text) => {
          this.setState({
            password:text
          })
        }
        }
        >
        </TextInput>
        <View style={this.styles.buttonContainer}>
          <TouchableOpacity onPress={this.loginHandler}>
            <Text>Giriş</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.registerHandler}>
            <Text>Kayıt</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}