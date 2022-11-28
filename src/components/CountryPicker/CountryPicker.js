import React, { useEffect, useState } from "react";
import { FormControl, NativeSelect } from "@mui/material";
import { fetchCountries } from "../../api/index";

import styles from "./CountryPicker.module.css";

const CountryPicker = ({onCountryChangeHandler}) => {
  const [countryNames, setCountryNames] = useState([]);
  // console.log(countryNames);

  useEffect(() => {
    const fetchAPI = async () => {
      const fetchedCountries = await fetchCountries();
      setCountryNames(fetchedCountries);
    };
    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(event) => onCountryChangeHandler(event.target.value)}
			>
				{countryNames.map((countryName, index) => (
					<option key={index} value={countryName}>{countryName}</option>
				))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
