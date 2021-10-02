import React, { Fragment, useState } from 'react';
import userBreweries from './brewerhook';
import BrewerCard from './BrewerCard';
import {
    Button,
    Container,
    TextField
} from '@mui/material';

const cardSize = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
}

const divContainer = {
    display: 'flex',
    justifyContent: 'center',
    flex: '0 0 100%',
    margin: '10px'
}

const textInput = {
    width: "50%",
    'marginTop': '20px'
}

const btn = {
    'marginTop': '20px',
    'marginLeft': '20px'
}

const Home = () => {
    const [isLoading, breweries, onChange] = userBreweries();
    const [type, setType] = useState('');
    const [city, setCity] = useState('');

    const getDetails = (data) => {
        setType(data);
    }
    const getData = (city) => {
        onChange(city);
    }

    const handleChange = (event) => {
        setCity(event.target.value);
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
            <Container style={divContainer}>
                <TextField
                    style={textInput}
                    size="small"
                    id="outlined-name"
                    label="Name"
                    placeholder="Enter a state"
                    onChange={handleChange}
                    />
                <Button style={btn} variant="contained" onClick={() => getData(city)}>GetData</Button>
            </Container>
            
            { displayItem() }
            
        </section>
    );
}

export default Home;