import React, { Component } from 'react'
import { StickyContainer } from 'react-sticky';
import '../scss/App.css'

class ReadLaterSideBar extends Component {

  render(){
    return(
      <StickyContainer style={{ width: '25%', position: 'fixed', zIndex: 2}}>
      <div style={{paddingLeft: '50px'}}>
        {
          this.props.readLater === ""
          ? <p> Click Read Later to save an article </p>
          : <p> {this.props.readLater} has been added to your saved articles.</p>
      }
      </div>
      </StickyContainer>
    )
  }
};

export default ReadLaterSideBar;
