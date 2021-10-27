import React from "react";
import axios from "axios";
import "./App.css";
import Summary from "./Summary";
import Country from "./Country";

class Detail extends React.Component {

   

  state = {
    
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
  };

  async componentDidMount() {
    const resp = await axios.get("https://api.covid19api.com/summary");
    console.log(resp);
    this.setState({ countries: resp.data.Countries });
    this.setState({ global: resp.data.Global });
    this.setState({ currentDate: resp.data.Date });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      /*  <div>
       <h2>New Confirmed {this.state.global.NewConfirmed}</h2>   
        <h2>Total Confirmed{this.state.global.TotalConfirmed}</h2>
        <h2>Date{new Date(this.state.currentDate).toString()}</h2>
     */
      <div>
        <Summary
          Summary={this.state.global}
          currentDate={this.state.currentDate}
          newcon={this.state.global.NewConfirmed}
          // coutny={this.state.countries.map(country =>(<Country countries={country} key={country.Country} />))}
        />

        <table className="table">
          <tr>
            
            <th>Country</th>
            <th>New Confirmed</th>
            <th>Total Confirmed</th>
            <th>New Recovery</th>
            <th>Total Recovery</th>
            <th>New Death</th>
            <th>Total Death</th>

            <th>Date</th>
          </tr>
          <tr>
    
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.Country}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.NewConfirmed}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.TotalConfirmed}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.NewRecovered}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.TotalRecovered}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.NewDeaths}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.TotalDeaths}</p>
              ))}
            </td>
            <td>
              {this.state.countries.map((Countries) => (
                <p>{Countries.Date}</p>
              ))}
            </td>
          </tr>
        </table>

        <p></p>
      </div>
    );
  }
}

export default Detail;
