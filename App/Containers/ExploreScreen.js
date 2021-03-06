import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  ListView,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import ExploreCard from "../Components/ExploreCard";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/ExploreScreenStyle";

class ExploreScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let headerTitle = "Explore";
    return { headerTitle };
  };

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    data = ["Steung Thmey Village", "Svay Dangkum Village"]

    this.state = {
      dataSource: this.ds.cloneWithRows(data)
    };

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior="position">
          <ListView
            dataSource={this.state.dataSource}
            renderRow={rowData => (
              <ExploreCard title={rowData} onPress={() => {}} />
            )}
          />
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
)(ExploreScreen);
