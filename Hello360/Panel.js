import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  VrButton,
  asset,
} from 'react-360';

export default class Panel extends React.Component {

  render() {
    return (
      <View style = {styles.panel}>
        <VrButton onClick = {this._incrementCount} style = {styles.scoreboard}>
          <Text style = {styles.score} > {`Score: ${this.state.score}`}
          </Text>
        </VrButton>
      </View>
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
