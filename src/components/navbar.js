import React, { Component } from 'react'
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';

class NavBar extends Component {

  render(){
    return(
      <div>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection align='start'>
              <TopAppBarIcon navIcon tabIndex={0}>
                <MaterialIcon hasRipple icon='r/' onClick={() => console.log('click')}/>
              </TopAppBarIcon>
              <TopAppBarTitle>Peeky Reader</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection align='end' role='toolbar'>
              <TopAppBarIcon actionItem tabIndex={0}>
                <MaterialIcon
                  aria-label="print page"
                  hasRipple
                  icon='Login'
                  onClick={() => console.log('print')}
                />
              </TopAppBarIcon>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust>
        <div>
        Hot Reddit
        </div>
        </TopAppBarFixedAdjust>
    </div>
    )
  };

};


export default NavBar;
