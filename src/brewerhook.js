import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

const useBreweries = () => {
    const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
    const [city, setCity] = useState();
=======
    const [city, setCity] = useState(props);
>>>>>>> dff299d2c9c7e966c9557c45103b9f7f688a4485
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

        if(city !== '' && typeof city !== 'undefined') {
            // use config.config.webapiurl will be using the .net 5 webapi to fetch data if the webapi is running
            axios.get(`${config.config.brewerOfficialApi}?by_city=${city}`, axiosConfig).then(d => {
                setData(d.data);
                console.log(d.data);
            });

            // this is the dotnet version of webapi, need to run the brewerApi, then uncomment this, and comment the call from above
            // axios.get(`${config.config.webapiurl}?city=${city}`, axiosConfig).then(d => {
            //     setData(d.data);
            //     console.log(d.data);
            // });
            setIsLoading(false);
        }
 
    }, [city]);

    return [isLoading, data, onChange];
}

export default useBreweries;