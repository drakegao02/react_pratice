import React, { Fragment, useState } from 'react';
import userBreweries from './brewerhook';
import BrewerCard from './BrewerCard';
import {
    Typography
} from '@mui/material';

const cardSize = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
}

const Home = () => {
    const [isLoading, breweries] = userBreweries(15);
    const [type, setType] = useState('');

    const getDetails = (data) => {
        console.log(data);
        setType(data);
    }
    const displayItem = () => {
        {
            return (
                
                (isLoading) ? 
                <div></div>
                : 
                breweries.map((d, index) => {
                    return (
                        <BrewerCard
                            key={index}
                            brewer={d}
                            getDetails={getDetails}
                        />
                    )
                })
            );
        }
    }


    return(
        <section style={cardSize}>
            {
                displayItem()
            }
        </section>
    );
}

export default Home;