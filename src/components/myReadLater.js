import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Figure from 'react-bootstrap/Figure'

class MyReadLater extends Component {


  renderReadLaterCards = () => this.props.readLater.map( (i) =>
      <div>
        <Figure style={{width: '50%', marginLeft: '40%', paddingTop: '20px'}}>
          <p style={{cursor: 'pointer', color: "red"}} onClick={() => this.props.deleteReadLater(i.url)}>X</p>
          <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={i.url}
            onError={(e) => e.target.src=`http://www.avtlens.com/wp-content/uploads/2018/10/type-article.png`
          }
          />
          <Figure.Caption>
            <a target="_blank" rel="noopener noreferrer" href={i.url}>{i.title}</a>
          </Figure.Caption>
        </Figure>
      </div>
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
