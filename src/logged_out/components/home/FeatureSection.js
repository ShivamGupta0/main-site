import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Cost Effective",
    text:
      "We will match the best price for you",
    icon: <AttachMoneyIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
    headline: "On Time Delivery",
    text:
      "We take our deadlines very sereously and beat them by a margin",
    icon: <CalendarTodayIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "100% Client Satisfaction",
    text:
      "Client satisfaction is our priority",
    icon: <ThumbUpIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Free Consultancy",
    text:
      "Get free consultancy by experienced developers and business planners",
    icon: <DoneAllIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "24/7 Customer Support",
    text:
      "We are always there for you, no matter what time or day",
    icon: <HeadsetMicIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "MoneyBack Guarantee",
    text:
      "Unsatisfied with our work?  We promise to return your money back",
    icon: <VerifiedUserIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid lg-p-top">
        <Typography variant="h3" align="center" className="lg-mg-bottom">
          Why Us ?
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
