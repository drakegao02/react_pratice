import * as React from 'react';
import MapContainer from './GoogleMapContainer';
import {
    Card,
    CardContent,
    Typography,
    ButtonBase,
    Button
} from '@mui/material';

import {
    Link
} from 'react-router-dom';

const container = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    margin: '10px',
    flexDirection: 'row',
    justifyContent: 'center'
}

const card = {
    width: "80%",
    marginTop: "10px"
}

const notAvailableContainer = {
    margin: '10px',
    height: "40px"
}

const btn = {
    color: 'white'
}

const BrewerDetail = (props) => {
    // somehow react 17 is not compatible with react router dom, so I have to use localstorage to pass the data intead of setting everything up for
    React.useEffect(() => {
        console.log(props.location.state.street);
    }, []);

    const HomeComponentLink = React.forwardRef((props, ref) => <Link to="/home" {...props} ref={ref} />); 

    return (
        <section style={container}>
            <Card style={card}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        {props.location.state.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} component="div">
                        ODBD ID: {props.location.state.obdb_id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Type: {props.location.state.brewery_type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Website: {
                            (props.location.state.website_url==null) ? "No url is available" : props.location.state.website_url
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        PHone: {props.location.state.phone==null ? "No phone number is available" : props.location.state.phone}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={card}>
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                        Address
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {
                            (props.location.state.street ==null) ? 
                            "No street is available" : 
                            `Street: ${props.location.state.street}`
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        City: {props.location.state.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Country: {props.location.state.country}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        State: {props.location.state.state}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={card}>
                {
                    (props.location.state.latitude === null || props.location.state.longitude === null) ?
                    <section style={notAvailableContainer}>
                        <Typography variant="body2" color="text.secondary">
                            No location information is available, display default location
                        </Typography>
                    </section>
                    :
                    <MapContainer
                        name={props.location.state.name}
                        lat={props.location.state.latitude}
                        lng={props.location.state.longitude}
                    />
                }
            </Card>
            <div style={card}>
                <Button variant="contained" style={btn}>
                    <Link to="/home">Back</Link>
                </Button>
            </div>
            
        </section>
       
    )
}

export default BrewerDetail;