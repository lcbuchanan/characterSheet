import React, { Component } from 'react';
import NameAndStats from './NameAndStats'
import Abilities from './Abilities'
import InitiativeAC from './InitiativeAC'

export default class App extends Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div >
          <div >
            <NameAndStats />
            <div className="second-box">
              <Abilities />
              <InitiativeAC />
            </div>
          </div>
      </div>
    );
  }
}
