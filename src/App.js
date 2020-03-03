import React, { useState, useEffect } from "react";
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
  let _spPageContextInfo = window._spPageContextInfo
  const classes = useStyles();
  const [baseUrl, setBaseUrl] = useState('')

  useEffect(() => {
    if (_spPageContextInfo === undefined) {
      setBaseUrl('https://localhost:8081')
    } else {
      setBaseUrl(_spPageContextInfo.siteAbsoluteUrl)
    }
    return () => { };
  }, [])

  return (
    <div className={classes.root}>
        <Collections baseUrl={baseUrl} />
    </div>
  )
}

export default App;
