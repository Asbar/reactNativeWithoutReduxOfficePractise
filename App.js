import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';
import Api from "./Services/loginService";
import LoginComponent from "./component/loginComponent";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rovers: []
    }
  }

  componentWillMount() {
    Api.getRovers().then((res) => {
      this.setState({
        rovers: res.title
      })
    })
  }

  checkValidUser= (str)=>{
    if(str==this.state.rovers){
      //alert("truee");
      alert(str+" + "+this.state.rovers);      
    }else{
      //alert("Falsee");
      alert(str+" + "+this.state.rovers);
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginComponent isValidUser={this.checkValidUser} />
        <Text>{this.state.rovers} not working??</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
