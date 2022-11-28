import axios from "axios";

const url = `${process.env.REACT_APP_URL}`;

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`
  }
  return await axios
    .get(`${changeableUrl}`)
    .then(({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
      return { confirmed, recovered, deaths, lastUpdate };
    })
    .catch((error) => {
      console.log(error.message);
    });
  // try {
  //   const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(url)
  //   return { confirmed, recovered, deaths, lastUpdate };
  // } catch (error) {
  //   console.log(error.message)
  // }
};


export const fetchDailyData = async () => {
  return axios.get(`${url}/daily`).then(({data}) => {
    return data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      recovered: dailyData.recovered.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }))
  }).catch(error => console.log(error.message))
}

export const fetchCountries = async () => {
  return await axios.get(`${url}/countries`).then(({ data: {countries} }) => {
    return countries.map(country => country.name)
  }).catch(error => console.log(error.message))
}
