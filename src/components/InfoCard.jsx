import React from "react";
import {
  Card,
  CardContent,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { config, Spring, useSpring } from "react-spring";
import CountUp from "react-countup";

const cardStyle = {
  borderRadius: "8px",
};
const InfoCard = (props) => {
  const { header, value } = props;
  console.log({ header, value });
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {header}
        </Typography>
        <Typography fontSize="28px" color="text.primary">
          <CountUp end={value} />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
