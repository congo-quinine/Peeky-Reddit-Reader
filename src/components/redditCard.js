import React, { Component } from 'react'
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from "@material/react-card";


class RedditCard extends Component {

  render(){

    const cardStyle = classNames({
      'card-size': true,
      'primary-card-color': true
    })

    return(
      <Card className={cardStyle} >
        <CardPrimaryContent className="">
          <h1>Header</h1>
          <CardMedia square imageUrl='./my/fancy/image.png' />
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
    )
  }

}

export default RedditCard;
