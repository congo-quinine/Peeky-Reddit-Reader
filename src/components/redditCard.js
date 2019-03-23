import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'


class RedditCard extends Component {

  render(){

      const cardSize = {
        width: '40%',
        margin: 'auto',
        marginTop: '20px'
      }

    return(
      <div>
      <Card style={cardSize}>
        <Card.Body>
          <Card.Title>{this.props.reddit.title}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        { this.props.reddit.url.length > 40
          ?<a href={this.props.reddit.url}>{this.props.reddit.url}</a>
          :<Card.Img variant="top" src={this.props.reddit.url} />
        }
        <Card.Footer>
          <small className="text-muted">{this.props.reddit.subreddit}</small>
        </Card.Footer>
      </Card>
      </div>
    )
  }

}

export default RedditCard;
