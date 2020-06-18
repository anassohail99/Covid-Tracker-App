import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./Components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

class App extends Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const FetchData = await fetchData();
    this.setState({ data: FetchData });
  }
  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
