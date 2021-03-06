import React from 'react';
import { Image, StyleSheet, Dimensions, Alert } from 'react-native';
import{
    StatusBar,
    ScrollView,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;   
  
export class Login extends React.Component {
 constructor(props) {
      super(props)
      this.state = {
          username: 'admin',
          password: '123456'
      }
 }
 componentDidMount(){
    // this._getLogin("Fang")
 }

_getLogin(name = 'test'){
    // this.setState.username = psw
    Alert.alert("Function", this.state.username + " " + this.state.password)
}

 render(){
            return (
                <ScrollView style={{ backgroundColor: "#010001", }}>
                     <StatusBar hidden={true}/>
                    <View style={{ padding: 36, }}>
                        <Image  resizeMode="contain" source={require('../../images/logo.png')} style={{width:width/3,height:height/3}}></Image>
                        <View style={[ styles.row_underline,{ marginBottom:16, }]}>
                            <Icon name="email-outline" style={styles.login_Icon}/>
                            <TextInput placeholder="Email address"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                style={{ color:"#fff",flex:1,fontSize:16, paddingLeft: 12,}}
                                value = {this.state.username}
                                onChangeText = {(username) => {
                                    this.setState({
                                        username: username
                                    })
                                }}
                            />
                        </View>
                        <View style={[ styles.row_underline,{ marginBottom:24, }]}>
                            <Icon name="lock-outline" style={styles.login_Icon}/>
                            <TextInput placeholder="Password"
                                placeholderTextColor="#fff"
                                underlineColorAndroid='transparent'
                                style={{ color:"#fff",flex:1,fontSize:16, paddingLeft: 12,}}
                                secureTextEntry={true}
                                value = {this.state.password}
                                onChangeText = {(password) => {
                                    this.setState({
                                        password: password
                                    })
                                }}
                            />
                        </View>
                        <TouchableOpacity style={{ flex:1, backgroundColor:"#1B70E3", borderRadius: 2 ,paddingLeft: 10,}} onPress={() => this._getLogin()}>
                        <Text style={{ alignSelf: "center",fontSize: 16 , color:"#fff", }} >Login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

            
            );
 }

}

const styles = StyleSheet.create({
    row_underline: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#b6b6b6",
    },
    login_Icon:{
        alignSelf: "center",
        fontSize: 20,
        color: "#DF9808",
    }
  });