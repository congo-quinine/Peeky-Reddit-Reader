import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure'

class ReadLaterCards extends Component {

  state = {
    likes: 0
  }


  handleOnClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })

  }

  render(){
    return(
      <div>
        <Figure style={{width: '50%', marginLeft: '40%', paddingTop: '20px'}}>
          <p style={{cursor: 'pointer', color: "red"}} onClick={() => this.props.deleteReadLater(this.props.data.url)}>X</p>
          <Figure.Image
            width={200}
            height={200}
            alt="171x180"
            src={this.props.data.url}
            onError={(e) => e.target.src=`http://www.avtlens.com/wp-content/uploads/2018/10/type-article.png`
          }
          />
          <Figure.Caption>
            <a target="_blank" rel="noopener noreferrer" href={this.props.data.url}>{this.props.data.title}</a>
            <button onClick={this.handleOnClick  }>Like</button>
            <p>{this.state.likes}</p>
          </Figure.Caption>
        </Figure>
      </div>
    )
    }


    }

    export default ReadLaterCards;
