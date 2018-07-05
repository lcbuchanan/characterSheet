import React, { Component } from 'react';


export default class InitiativeAC extends Component {

  constructor(){
    super();
    this.state = {
      editing: '',
      newData: ''
    }
  }

  setEditing = (editingField) => {
    this.setState({ editing: editingField})
  }

  updateField = (evt, fieldName) => {
    evt.preventDefault();
    //this will eventually update things in firebase
    console.log('updating', fieldName)
    console.log('to', this.state.newData)
    this.setState({ editing: ''})
  }


  render(){
    return(
      <div className="initiative-ac">
        <div className="cluster left-cluster" id="hp">
          <div className="black-box">
            <div>INITIATIVE</div>
            <div className="small-font">MODIFIER</div>
          </div>
          <div>
            <div className="small-font">TOTAL</div>
            <div className="white-box editable">+5</div>
          </div>
          <div>=</div>
          <div>
            <div className="small-font">DEX MOD</div>
            <div className="white-box editable">+5</div>
          </div>
          <div>+</div>
          <div>
            <div className="small-font">MISC MOD</div>
            <div className="white-box editable"> - </div>
          </div>
          <div className="black-box">
            <div>HP</div>
            <div className="small-font">HIT POINTS</div>
          </div>
          <div>
            <div className="small-font">TOTAL</div>
            <div className="white-box editable">68</div>
          </div>
          <div>
            <div className="small-font">CURRENT HP</div>
            <div className="white-box editable"> - </div>
          </div>
          <div>
            <div className="small-font">NONLETHAL DAMAGE</div>
            <div className="white-box editable"> - </div>
          </div>
          <div>
            <div className="small-font">SPEED</div>
            <div className="white-box editable"> 30 </div>
          </div>
          <div>
            <div className="small-font">DAMAGE REDUCTION</div>
            <div className="white-box editable"> - </div>
          </div>
        </div>
        <div className="cluster left-cluster" id="ac">
          <div className="black-box">
            <div>AC</div>
            <div className="small-font">ARMOR CLASS</div>
          </div>
          <div>
            <div className="white-box editable">24</div>
            <div className="small-font">TOTAL</div>
          </div>
          <div>=</div>
          <div>
            <div className="white-box editable">+7</div>
            <div className="small-font">ARMOR BONUS</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable"> - </div>
            <div className="small-font">SHIELD BONUS</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable">+5</div>
            <div className="small-font">DEX MOD</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable">+5</div>
            <div className="small-font">SIZE MOD</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable"> - </div>
            <div className="small-font">NAT ARMOR</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable"> +2 </div>
            <div className="small-font">DEFL. MOD</div>
          </div>
          <div>+</div>
          <div>
            <div className="white-box editable"> - </div>
            <div className="small-font">MISC MOD</div>
          </div>
          <div className="black-box">
            <div className="small-font">TOUCH</div>
            <div className="small-font">ARMOR CLASS</div>
          </div>
          <div>
            <div className="white-box editable"> -- </div>
          </div>
          <div className="black-box">
            <div className="small-font">FLAT-FOOTED</div>
            <div className="small-font">ARMOR CLASS</div>
          </div>
          <div>
            <div className="white-box editable"> -- </div>
          </div>
        </div>
      </div>
    )
  }
}
