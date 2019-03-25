import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
class RedditCard extends Component {

  render(){

      const cardSize = {
        width: '40%',
        margin: 'auto',
        marginTop: '20px'
      }

      const cardTextStyle = {
        padding: '10px'
      }

      const gifSize = {
        width: '300px',
        height: '300px'
      }

    return(
      <div>
      <Card bg="dark" text="white" style={cardSize}>
        <Card.Body>
          <Card.Title>{this.props.reddit.title}</Card.Title>
            {
              this.props.reddit.url.length > 40
              ?<Card.Text style={cardTextStyle}><a href={this.props.reddit.url} target="_blank">{this.props.reddit.url}></a></Card.Text>
              :<a href={this.props.reddit.url} target="_blank">
              <Card.Img variant="" src={this.props.reddit.url} onError={ (e) => e.target.src=`${this.props.reddit.thumbnail}` }/></a>
            }
          </Card.Body>
        <Card.Footer>
          <small className="text-muted">r/{this.props.reddit.subreddit}</small>

          <small style={{float: 'right'}} className="text-muted">Read Later</small>
          <small style={{float: 'right', paddingRight: '0.5%'}} className="text-muted">Subscribe ~</small>
        </Card.Footer>
      </Card>
      </div>
    )
  }
}

export default RedditCard;
