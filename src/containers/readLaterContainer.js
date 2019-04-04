import React, { Component } from 'react';
import MyReadLater from '../components/myReadLater.js';
import { connect } from 'react-redux';
import {fetchReadLater} from '../actions/fetchReadLater.js'
import {deleteReadLater} from '../actions/deleteReadLater.js'

class ReadLaterContainer extends Component {

  componentDidMount(){
    this.props.getReadLater()
  }

  deleteReadLater = (data) => {
    this.props.deleteReadLater(data)
  }

  render(){
    return(
      <div>
      {console.log(this.props.readLater)}
        <MyReadLater readLater={this.props.readLater} deleteReadLater={this.deleteReadLater}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    readLater: state.readLater
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getReadLater: () => dispatch(fetchReadLater()),
    deleteReadLater: (data) => dispatch(deleteReadLater(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadLaterContainer);
