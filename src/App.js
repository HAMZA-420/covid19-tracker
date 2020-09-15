import React from 'react';
import {Cards, Chart, CountryPicker} from './Components';
import styles from './App.module.css';
import { fetchData } from './Api';
import { StylesProvider } from '@material-ui/core';



class App extends React.Component {
    
    state= {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
       

        this.setState({data: fetchedData});
        

    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        console.log(fetchedData);
        this.setState({data: fetchedData, country: country});
    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container }> 
            
                <div className={styles.image}></div>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
            </div>
        )
    }
}
export default App;