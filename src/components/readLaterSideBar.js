import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure'
import { StickyContainer, Sticky } from 'react-sticky';
import '../scss/App.css'

class ReadLaterSideBar extends Component {



  renderRedditCards = () => this.props.readLater.map( (i) => <Sticky>{({ style }) =>
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
        }
        </Sticky>)


  render(){
    return(
      <StickyContainer style={{ width: '25%', position: 'fixed', zIndex: 2}}>
      <div id="fadeDiv">
        {
          this.props.readLater === ""
          ? <p> Click Read Later to save an article </p>
          : <p> {this.props.readLater} has been added to your saved articles.</p>
      }
      </div>
      </StickyContainer>
    )
  }
};

export default ReadLaterSideBar;
