import React, { Component } from 'react';
// import MobileTearSheet from '../../../MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import KeyboardArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import Menu from 'material-ui/svg-icons/navigation/menu';
import data from '../../data.json';
import moment from 'moment';

class Stream extends Component {
  render() {

  let header;
  let avatar;

  if(!data.success) {
    console.log('error');
  }

  return (
    <div>
      <List>
        <AppBar
          style={{'background':'purple'}}
          title={<span style={{'color':'white','fontSize':'24px'}}>Activity</span>}
          iconElementLeft={<IconButton><KeyboardArrowLeftIcon /></IconButton>}
          iconElementRight={<IconButton><Menu/></IconButton>}
        />
        
        {
          data.data.recentActivities.map((item, i) => {
            if (item.nodeTypeString === 'Comment') {
              header=' commented on the idea';
            }
            if (item.nodeTypeString === 'Reply') {
              header=' replied to the idea ';
            }
            if (item.nodeTypeString === 'Idea') {
              header=' posted an idea ';
            }

            return (
              <div>
                <ListItem
                key={item.nodeid}
                leftAvatar={<Avatar img={item.authorAvatar}/>}
                primaryText={<span><span style={{'fontWeight': 'bold', 'textAlign':'left'}}>{item.author}</span><span style={{'color':'grey'}}>{header}</span></span>}
                secondaryText={
                  <div>
                    <span style={{'color': 'black', 'textAlign':'left'}}>{item.title}</span>
                    <br/>
                    <span style={{'fontStyle':'italic', 'color':'grey', 'textAlign':'left'}}>{moment(item.postDate).fromNow()}</span>
                  </div>
                }
                secondaryTextLines={2} 
                />
                <Divider inset={true} />
              </div>
            )
          })
        }
      </List>
    </div>
    )
  }
};

export default Stream;