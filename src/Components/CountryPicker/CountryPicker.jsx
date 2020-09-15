import React,{useEffect,useState} from 'react';
import {fetchCountries} from '../../Api';
import {NativeSelect, FormControl} from '@material-ui/core';
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() =>{
        const fetchAPI = async() =>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();

    }, [setFetchedCountries]);

    return(
        <FormControl className={styleMedia.formContorl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
    {fetchedCountries.map((country, i)=> <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>

    )
}

export default CountryPicker;