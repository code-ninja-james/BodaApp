import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Platform
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="your@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={this.props.email}
          onChangeText={email => this.props.handleChange("email", email)}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          placeholder="Password"
          value={this.props.password}
          onChangeText={pw => this.props.handleChange("password", pw)}
        />
        <TouchableOpacity
          onPress={this.props.handleSignIn}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.props.handleSignUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
input :{
    height:40,
    padding:10,
    backgroundColor:"#FFF",
    color:"black",
    marginBottom:10
},
button:{
backgroundColor:"#ABC837",
paddingVertical:20,
marginVertical:10
},
buttonText:{
    textAlign:"center",
    fontSize:23,
    color:"black",
    fontWeight:"200",
    fontFamily:Platform.OS==="android" ? "sans-serif-light":undefined

}
});
