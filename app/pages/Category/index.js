/*
 * @Author: tybalt.Huang 
 * @Date: 2018-10-16 09:38:57 
 * @Last Modified by: tybalt.Huang
 * @Last Modified time: 2018-10-16 14:01:23
 */
import React from 'react';
import {Platform, StyleSheet, Text, View,Image, Button} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Category extends React.Component {
  static navigationOptions = {
    headerTitle: '分类',
  };
  constructor(props) {
    super(props);
  }
  //组件未加载
  componentWillMount() {

  }
  //组件已加载
  componentDidMount() {
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Category!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title="go to user" onPress={()=>this.props.navigation.navigate('User')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Category;