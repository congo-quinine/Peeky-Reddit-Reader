import React, { Component } from 'react'
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";

let classNames = require('classnames');

const cardStyle = classNames({
  'mdc-card': true,
  'mdc-card--outlined': true,
  'card-size': true
})

const cardContentStyle = classNames({
  'content-tab-size': true
})

class RedditCard extends Component {

  render(){
    return(
      <div>
      <Card className={cardStyle}>
      <CardPrimaryContent>
        <h3>{this.props.reddit.title}</h3>
        <CardMedia square imageUrl={this.props.reddit.url} />
      </CardPrimaryContent>

      <CardActions>
        <CardActionButtons>
          <button>Click Me</button>
        </CardActionButtons>

        <CardActionIcons>
          <i>Click Me Too!</i>
        </CardActionIcons>
      </CardActions>
    </Card>
    </div>
    )
  }

}

export default RedditCard;
