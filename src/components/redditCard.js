import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class RedditCard extends Component {

  render(){

        const css = {
          cardSize:{
            width: '40%',
            margin: 'auto',
            marginTop: '20px'
          },
          cardTextStyle:{
            padding: '10px'
          },
          floatRight:{
            float: "right",
            cursor: "pointer"
          }
        }

    return(
      <Card bg="dark" text="white" style={css.cardSize}>
        <Card.Body>
          <Card.Title>{this.props.reddit.title}</Card.Title>
            {
              this.props.reddit.url.length > 40
              ? <Card.Text style={css.cardTextStyle}><a href={this.props.reddit.url} rel="noopener noreferrer" target="_blank">{this.props.reddit.url}></a></Card.Text>
              : <a href={this.props.reddit.url} rel="noopener noreferrer" target="_blank">
              <Card.Img src={this.props.reddit.url}
                onError={ (e) => {
                return e.target.src=`${this.props.reddit.thumbnail}`}
              }/>
              </a>
            }
          </Card.Body>
        <Card.Footer>
          <small className="text-muted">r/{this.props.reddit.subreddit}</small>
          <small style={css.floatRight} className="text-muted" onClick={ () => this.props.addReadLater(this.props.reddit)}>Read Later</small>
          <small style={{float: 'right', paddingRight: '0.5%'}} className="text-muted"></small>
        </Card.Footer>
      </Card>
    )
  }
}

export default RedditCard;
