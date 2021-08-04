import { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import HourlyChart from "./HourlyChart";
import WeeklyChart from "./WeeklyChart";
import YearlyChart from "./YearChart";

const ChartToggle = ({ symbol }) => {
  const [chart, setChart] = useState(0);

  const useStyles = makeStyles({
    charts: {
      width: "100%",
      maxWidth: "84vw",
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
    },
    buttons: {
      display: "flex",
      marginBottom: 100,
      // background: "grey",
      width: "50%",
      justifyContent: "space-around",
    },
    btn: {
      // background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.charts}>
      {chart === 0 && <HourlyChart symbol={symbol} />}
      {chart === 1 && <WeeklyChart symbol={symbol} />}
      {chart === 2 && <YearlyChart symbol={symbol} />}
      <div className={classes.buttons}>
        <Button className={classes.btn} onClick={() => setChart(0)}>
          Hourly
        </Button>
        <Button className={classes.btn} onClick={() => setChart(1)}>
          Weekly
        </Button>
        <Button className={classes.btn} onClick={() => setChart(2)}>
          Yearly
        </Button>
      </div>
    </div>
  );
};

export default ChartToggle;