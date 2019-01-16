import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Model,
  Asset,
  Pano,
} from 'react-360';

export default class Hello360 extends React.Component {

  constructor() {
    super();

    this.state = {
      score: 0,
      count: 0
    }
  }

  // This method increments our count, triggering a re-render
  _incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
      score: this.state.score + 10
    });
  };

  render() {
    return (
      <View style = {styles.panel}>
        <VrButton onClick = {this._incrementCount} style = {styles.scoreboard}>
          <Text style = {styles.score} > {`Score: ${this.state.score}`}
          </Text>
        </VrButton>
      </View>

      //tree
      <Entity source={{obj: asset('tree.obj'), mtl: asset('tree.mtl')}} />

    );
  }


};




const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreboard: {
    padding: 10,
    //backgroundColor: '#00f9ed',
    borderColor: '#00f9ed',
    //borderWidth: 2,
  },
  score: {
    fontSize: 24,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
