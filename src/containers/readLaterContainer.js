import React, { Component } from 'react';
import MyReadLater from '../components/myReadLater.js';
import { connect } from 'react-redux';
import {fetchReadLater} from '../actions/fetchReadLater.js'

class ReadLaterContainer extends Component {

  componentDidMount(){
    this.props.getReadLater()
  }

  render(){
    return(
      <div>
        <MyReadLater readLater={this.props.readLater} />
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
    getReadLater: () => dispatch(fetchReadLater())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadLaterContainer);
