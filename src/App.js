import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const FetchData = await fetchData();
    this.setState({ data: FetchData });
  }

  handleCountryChange = async (country) => {
    const FetchData = await fetchData(country);
    console.log(FetchData);
    this.setState({ data: FetchData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.Container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
