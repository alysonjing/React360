import React from 'react';
import {
  View,
  VrButton,
  AmbientLight,
  asset
} from 'react-360';

import Entity from 'Entity';
export default class Model extends React.Component {

  constructor() {
  super();

  this.state = {
    monster:[1,1,1,1],
    score: 0,
    index: 0
  }
}


// _onClick = () => {
//   this.setState({
//     index: this.state.index + 1,
//     score: this.state.score + 10
//   });
// };

  render() {
    // let newMonster =[];
    // for (const i=0; i<monster.length;i++){
    //   newMonster.push(
    //     <AmbientLight intensity={0.5} />
    //     <Entity source={{
    //       obj: asset('monster.obj'),
    //       mtl: asset('monster.mtl')
    //     }}
    //         key={i}
    //         lit={true}
    //         style={{
    //           color: '#c33',
    //           transform: [
    //             {translate:[-40,-40,-100]},
    //           ] }}
    //     />
    //   )
    //         //onClick={() => { this._onClick(i); }}
    //   }

    return (
      <View>
        <AmbientLight intensity={0.2} />
        <Entity source={{
          obj: asset('tree.obj'),
          mtl: asset('tree.mtl')
        }}
            lit={true}
            style={{
              transform: [
                {translate:[0,-5,-15]}
              ] }}
        />
        <AmbientLight intensity={2} />
        <Entity source={{
          obj: asset('tree.obj'),
          mtl: asset('tree.mtl')
        }}
            lit={true}
            style={{
              transform: [
                {translate:[-10,-20,-35]}
              ] }}
        />
        <AmbientLight intensity={2} />
        <Entity source={{
          obj: asset('cube.obj'),
          mtl: asset('tree.mtl')
        }}
            lit={true}
            style={{
              transform: [
                {translate:[-30,-30,-50]},
                {scale:10},
              ]
            }}
        />

        <AmbientLight intensity={1} />
        <Entity source={{
          obj: asset('gun.obj'),
          mtl: asset('gun.mtl')
        }}
            lit={true}
            style={{
              position: 'absolute',
              transform: [
                {translate:[7,3,0]},
              ] }}
        />

        <AmbientLight intensity={0.5} />
        <Entity source={{
          obj: asset('monster.obj'),
          mtl: asset('monster.mtl')
        }}
            lit={true}
            style={{
              color: '#c33',
              transform: [
                {translate:[-40,-40,-100]},
              ] }}
        />

      </View>

      // <View style = {styles.panel}>
      //   <VrButton>
      //     <Text style = {styles.score} > {`Score: ${this.state.score}`}
      //     </Text>
      //   </VrButton>
      // </View>
    );
  }
};
