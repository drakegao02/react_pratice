import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

const useBreweries = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(props);
    const [data, setData] = useState([]);
    useEffect(() => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*"
            }
        };
        // use config.config.webapiurl will be using the .net 5 webapi to fetch data if the webapi is running
        axios.get(`${config.config.brewerOfficialApi}?per_page=${page}`, axiosConfig).then(d => {
            setData(d.data);
            console.log(d.data);
        });
        // axios.get(`${config.config.webapiurl}?per_page=${page}`, axiosConfig).then(d => {
        //     setData(d.data);
        //     console.log(d.data);
        // });
        setIsLoading(false);
    }, [page, props]);

    return [isLoading, data];
}

export default useBreweries;