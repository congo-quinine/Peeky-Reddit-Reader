import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure'
import ReadLaterCards from '../components/readLaterCards.js'

class MyReadLater extends Component {

  state = {
    likes: 0
  }


  handleOnClick = () => {
    this.setState({
      likes: this.state.likes += 1
    })

  }

  renderReadLaterCards = () => this.props.readLater.map( (i) =>
      <ReadLaterCards data={i} />
      )

  render(){
    return(
      <div>
      <Jumbotron>
        <h1>Welcome To Your Read Later!</h1>
        {
          this.props.readLater.length > 0
          ? <p>You have {this.props.readLater.length} article(s) to read.</p>
          : <p>You have no reddit articles saved. Go check out the front page!</p>
        }
      </Jumbotron>

      <div style={{width: '80%'}}>
        {this.renderReadLaterCards()}
      </div>
      </div>
    )
  }
};

export default MyReadLater;
