import React, { useState, useEffect } from "react";
import "./App.css";
import Collections from "./components/Collections";
import MenuTest from "./components/MenuTest";

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
  let _spPageContextInfo = window._spPageContextInfo
  const classes = useStyles();
  let baseUrl = ''

  useEffect(() => {
    if (_spPageContextInfo === undefined) {
      baseUrl = 'https://localhost:8081'
    } else {
      baseUrl = _spPageContextInfo.siteAbsoluteUrl
    }
    return () => { };
  }, [])

  return (
    <div className={classes.root}>
      <MenuTest />
      <Collections baseUrl={baseUrl} />
    </div>
  )
}

export default App;
