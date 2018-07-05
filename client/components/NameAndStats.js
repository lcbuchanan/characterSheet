import React, { Component } from 'react';

export default class NameAndStats extends Component {

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

  storeNew = (evt) => {
    this.setState({newData: evt.target.value})
  }

  render(){

    return(
      <div className="header-wrapper">
        <div className="heading">
          <div className="cluster">
            <div className="fib-field">
              {
                this.state.editing === 'characterName'
                ? <form onSubmit={(evt) => this.updateField(evt, 'characterName')}>
                    <input onChange={this.storeNew} type="text" name="characterName"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('characterName')}>Rose</div>
              }
              <hr></hr>
              <div>character name</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'playerName'
                ? <form onSubmit={(evt) => this.updateField(evt, 'playerName')}>
                    <input onChange={this.storeNew} type="text" name="playerName"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('playerName')}>Lori</div>
              }
              <hr></hr>
              <div>player name</div>
            </div>
          </div>
          <div className="cluster">
            <div className="fib-field">
              {
                this.state.editing === 'className'
                ? <form onSubmit={(evt) => this.updateField(evt, 'className')}>
                    <input onChange={this.storeNew} type="text" name="className"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('className')}>Swashbuckler</div>
              }
              <hr></hr>
              <div>className</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'level'
                ? <form onSubmit={(evt) => this.updateField(evt, 'level')}>
                    <input onChange={this.storeNew} type="text" name="level"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('level')}>11</div>
              }
              <hr></hr>
              <div>level</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'race'
                ? <form onSubmit={(evt) => this.updateField(evt, 'race')}>
                    <input onChange={this.storeNew} type="text" name="race"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('race')}>Half-Elf</div>
              }
              <hr></hr>
              <div>race</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'alignment'
                ? <form onSubmit={(evt) => this.updateField(evt, 'alignment')}>
                    <input onChange={this.storeNew} type="text" name="alignment"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('alignment')}>Chaotic Good</div>
              }
              <hr></hr>
              <div>alignment</div>
            </div>
          </div>
          <div className="cluster">
            <div className="fib-field">
              {
                this.state.editing === 'size'
                ? <form onSubmit={(evt) => this.updateField(evt, 'size')}>
                    <input onChange={this.storeNew} type="text" name="size"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('size')}>Medium</div>
              }
              <hr></hr>
              <div>size</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'age'
                ? <form onSubmit={(evt) => this.updateField(evt, 'age')}>
                    <input onChange={this.storeNew} type="text" name="age"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('age')}>30</div>
              }
              <hr></hr>
              <div>age</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'height'
                ? <form onSubmit={(evt) => this.updateField(evt, 'height')}>
                    <input onChange={this.storeNew} type="text" name="height"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('height')}>{`5'2"`}</div>
              }
              <hr></hr>
              <div>height</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'weight'
                ? <form onSubmit={(evt) => this.updateField(evt, 'weight')}>
                    <input onChange={this.storeNew} type="text" name="weight"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('weight')}>{`110lb`}</div>
              }
              <hr></hr>
              <div>weight</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'hair'
                ? <form onSubmit={(evt) => this.updateField(evt, 'hair')}>
                    <input onChange={this.storeNew} type="text" name="hair"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('hair')}>Platinum Dreds</div>
              }
              <hr></hr>
              <div>hair</div>
            </div>
            <div className="fib-field">
              {
                this.state.editing === 'skin'
                ? <form onSubmit={(evt) => this.updateField(evt, 'skin')}>
                    <input onChange={this.storeNew} type="text" name="skin"/>
                  </form>
                : <div className="edit-header" onClick={() => this.setEditing('skin')}>Really Tan</div>
              }
              <hr></hr>
              <div>skin</div>
            </div>
          </div>
        </div>
        <div>
          <img src="logo.png" alt="this is a D&D logo"/>
        </div>
      </div>
    )
  }
}
