import React, { useState } from 'react';
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
    justifyContent: 'center',
}

const divContainer = {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
    flexDirection: 'row'

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
    const previousCity = localStorage.getItem('city');
    const [isLoading, breweries, onChange] = userBreweries(previousCity);
    const [type, setType] = useState('');
    const [city, setCity] = useState('');
    const getDetails = (data) => {
        setType(data);
    }

    const getData = (city) => {
        localStorage.setItem('city', city);
        onChange(city);
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    const displayItem = () => {
        {
            return (
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
        <section>
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
            
            <div style={cardSize}>
                { displayItem() }
            </div>
            
        </section>
    );
}

export default Home;