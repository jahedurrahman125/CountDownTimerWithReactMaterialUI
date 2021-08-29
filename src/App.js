import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography
} from '@material-ui/core';
import useStyles from './style';

const App = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const classes = useStyles();
  
  function countdown_timers(){
    const nextYear = "1 Jan 2022";
    const newYearsDate = new Date(nextYear);
    const currentDate = new Date();

    const diff = (newYearsDate-currentDate)/1000;

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60; 
    console.log(days)
    setDay(days);
    setHour(('0'+hours).slice(-2));
    setMinute(('0'+minutes).slice(-2));
    setSecond(('0'+seconds).slice(-2));
  };
  setInterval(countdown_timers, 100);
  return ( 
    <div className={classes.root}>
      <Card className={classes.card}>
      <CardHeader className={classes.cardHeader}
        titleTypographyProps={{variant:'h3' }}
        title="New Year Count-Down"
      />
      <CardContent className={classes.cardBody}>
          <div className={classes.days}>
              <Typography className={classes.bigText}>{day}</Typography>
              <span className={classes.bigTextSpan}>Days</span>
          </div>
          <div className={classes.hours}>
              <Typography className={classes.bigText}>{hour}</Typography>
              <span className={classes.bigTextSpan}>Hours</span>
          </div>
          <div className={classes.minutes}>
              <Typography className={classes.bigText}>{minute}</Typography>
              <span className={classes.bigTextSpan}>Minutes</span>
          </div>
          <div className={classes.seconds}>
              <Typography className={classes.bigText}>{second}</Typography>
              <span className={classes.bigTextSpan}>Seconds</span>
          </div>
      </CardContent>
    </Card>
  </div>
  )
}
export default App; 