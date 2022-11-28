import React, { useEffect, useState } from "react";
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

// const url = `${process.env.REACT_APP_URL}`
const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('')
  // console.log(data); 
  // console.log(country)

  useEffect(() => {
    // const fetchAPI = async () => {
    //   const data = await fetchData()
    //   setData(data);
    // }
    // fetchAPI()
    handleCountryChange()
  }, []);

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country)
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src="https://i.ibb.co/7QpKsCX/image.png" alt="covid-19" />
      <Cards data={data} />
      <CountryPicker onCountryChangeHandler={handleCountryChange} country={country} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
