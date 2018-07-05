import React, { Component } from 'react';


export default class Abilities extends Component{

  render() {
    return(
      <div className="abilities cluster">
        <div className="box-spreader">
          <div className="small-font">ABILITY</div>
          <div className="small-font">NAME</div>
          <div  className="box-spreader" id="ability-names">
            <div className="black-box">STR</div>
            <div className="black-box">DEX</div>
            <div className="black-box">CON</div>
            <div className="black-box">INT</div>
            <div className="black-box">WIS</div>
            <div className="black-box">CHA</div>
          </div>
        </div>
        <div className="box-spreader">
          <div className="small-font">ABILITY</div>
          <div className="small-font">SCORE</div>
          <div className="box-spreader" id="ability-scores">
            <div className="white-box editable">8</div>
            <div className="white-box editable">16</div>
            <div className="white-box editable">15</div>
            <div className="white-box editable">16</div>
            <div className="white-box editable">6</div>
            <div className="white-box editable">16</div>
          </div>
        </div>
        <div className="box-spreader">
          <div className="small-font">ABILITY</div>
          <div className="small-font">MODIFIER</div>
          <div className="box-spreader" id="ability-scores">
            <div className="white-box editable">-1</div>
            <div className="white-box editable">+3</div>
            <div className="white-box editable">+2</div>
            <div className="white-box editable">+3</div>
            <div className="white-box editable">-2</div>
            <div className="white-box editable">+3</div>
          </div>
        </div>
        <div className="box-spreader">
          <div className="small-font">TEMPORARY</div>
          <div className="small-font">SCORE</div>
          <div className="box-spreader" id="temporary-scores">
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">20</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
          </div>
        </div>
        <div className="box-spreader" id="temporary-modifiers">
          <div className="small-font">TEMPORARY</div>
          <div className="small-font">MODIFIER</div>
          <div className="box-spreader" id="temporary-modifiers">
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">+5</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
            <div className="gray-box editable">-</div>
          </div>
        </div>

      </div>
    )
  }
}
