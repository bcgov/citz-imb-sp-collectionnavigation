import React from "react";
import "./App.css";
import Collections from "./components/Collections";
import { ButtonGroup } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonGroup
        variant='text'
        color='primary'
        aria-label="text primary button group"
      >
        <Collections />
      </ButtonGroup>
    </div>
  )
}

export default App;
