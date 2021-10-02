import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BrewerDetail from './BrewerDetail';
import AboutComponent from './about';
import {
    ButtonBase,
    Card
} from '@mui/material';

import {
    Home,
    Description
 } from '@mui/icons-material';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import HomeComponent from './Home';

export default function ButtonAppBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0
  };

  const centered = {
    'height': '100vh', /* Magic here */
    'display': 'flex',
    'justifyContent': 'center'
  };


  const HomeComponentLink = React.forwardRef((props, ref) => <Link to="/home" {...props} ref={ref} />); 
  const AboutComponentLink = React.forwardRef((props, ref) => <Link to="/about" {...props} ref={ref} />); 

  var linksArray = [];
  linksArray[0] = HomeComponentLink;
  linksArray[1] = AboutComponentLink;
  return (
    <Router style={centered} >
        <Box>
            <AppBar position="static">
                <Toolbar>
                <List style={flexContainer}>
                    {
                      ["Home", "About"].map((d, index) => (
                        <ListItem button key={index} onClick={(event) => handleListItemClick(event, index)} selected={selectedIndex[index]}>
                          <ButtonBase component={linksArray[index]}>
                            <ListItemText>{d}</ListItemText>
                          </ButtonBase>
                        </ListItem>
                      ))
                    }
                </List>
                </Toolbar>
            </AppBar>
        </Box>
        <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={HomeComponent} />
            <Route exact path="/about" component={AboutComponent} />
            <Route path={`/home/:type`} component={BrewerDetail}>
            </Route>
        </Switch>
    </Router>
  );
}
