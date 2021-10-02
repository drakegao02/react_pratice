import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

const useBreweries = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [city, setCity] = useState(props);
    const [data, setData] = useState([]);

    const onChange = (city) => {
        setCity(city);
    };

    useEffect(() => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        };

        if(city !== '') {
            // use config.config.webapiurl will be using the .net 5 webapi to fetch data if the webapi is running
            axios.get(`${config.config.brewerOfficialApi}?by_city=${city}`, axiosConfig).then(d => {
                setData(d.data);
                console.log(d.data);
            });
            // axios.get(`${config.config.webapiurl}?by_city=${city}`, axiosConfig).then(d => {
            //     setData(d.data);
            //     console.log(d.data);
            // });
            setIsLoading(false);
        }
 
    }, [city]);

    return [isLoading, data, onChange];
}

export default useBreweries;