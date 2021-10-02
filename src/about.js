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

const About = () => {
    return(
        <section style={cardSize}>
            <Typography variant="h5" color="text.secondary">
                React coding assessment
            </Typography>
        </section>
    );
}

export default About;