import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  headerDiv: {
    backgroundColor: '#151515', // Customize the background color
    padding: theme.spacing(2), // Customize the padding
    // Add any other styles you want for .header-div
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color: 'white', // Customize the text color
    fontSize: '24px', // Customize the font size
    fontWeight: 'bold', // Customize the font weight
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerDiv}>
        <Typography variant="h5" className={classes.title}>
          Wanderer
        </Typography>
    </div>
  );
};

export default Header;
