import React from "react";
import "./App.css";

class Summary extends React.Component {
  render() {
    const { Summary, currentDate } = this.props;

    return (
      <div className="row">
        <div className="newConfirmed">
          <h3> New Confirmed </h3> <h1> {Summary.NewConfirmed} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>
        <div className="totalConfirmed">
          <h3> Total Confirmed </h3> <h1> {Summary.TotalConfirmed} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>
        <div className="newDeath">
          <h3> New Deaths </h3> <h1> {Summary.NewDeaths} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>
        <div className="totalDeath">
          <h3> Total Deaths </h3> <h1> {Summary.TotalDeaths} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>
        <div className="newRecovery">
          <h3> New Recover </h3> <h1> {Summary.NewRecovered} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>
        <div className="totalRecovery">
          <h3> Total recovered </h3> <h1> {Summary.TotalRecovered} </h1>
          <p> {new Date(currentDate).toString()} </p>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Summary;
