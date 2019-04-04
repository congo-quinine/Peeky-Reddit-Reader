import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

class MyReadLater extends Component {


  renderReadLaterCards = () => this.props.readLater.map( (i) =>
        <Figure style={{ width: '50%', marginLeft: '20%', paddingTop: '10px' }}>
          <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={i.url}
            onError={(e) => e.target.src=`${i.thumbnail}`
          }
          />
          <Figure.Caption>
            <a target="_blank" href={i.url}>{i.title}</a>
          </Figure.Caption>
        </Figure>
        )

  render(){
    return(
      <div>
      <Jumbotron>
      {console.log(this.props)}
        <h1>Welcome Reddit Reader!</h1>
        <p>
          You have {this.props.readLater.length} articles to read.
        </p>
        <p>
          <Button variant="primary">Sort By</Button>
        </p>
      </Jumbotron>

      <div>
        {this.renderReadLaterCards()}
        {console.log(this.props.readLater)}
      </div>

      </div>
    )
  }
};

export default MyReadLater;
