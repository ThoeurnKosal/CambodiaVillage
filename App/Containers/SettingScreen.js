import React, { Component } from "react";
import { ScrollView, Text, KeyboardAvoidingView, Button } from "react-native";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/SettingScreenStyle";

class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = "Settings";
    return { headerTitle };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <Text>Languages: English</Text>
          <Text>Auto play music: On/Off</Text>
          <Button onPress={()=>{}} title="Term and Conditions"/>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen);
