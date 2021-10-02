import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
    Button,
    ButtonBase
} from '@mui/material';
import {
    Link
} from "react-router-dom";

const cardSize = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '30%',
    margin: '10px',
    flexDirection: 'column'
}

const BrewerCard = (props) => {
    const [type, setType] = React.useState(props.brewer.brewery_type);
    const [data, setData] = React.useState(props.brewer);
    const BrewerDetailComponentLink = React.forwardRef((props, ref) => <Link to={{pathname: `/home/${type}`, state: data }} {...props} ref={ref} />);

    const getDetails = () => {
        props.getDetails(type);
    }

    return (
        <Card style={cardSize}>
            <CardContent>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    {props.brewer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Type: {props.brewer.brewery_type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Address: {props.brewer.street} {props.brewer.state} {props.brewer.postal_code}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {
                        props.brewer.website_url == null ? "No Website Is Available" :
                        <a href={props.brewer.website_url}>Visit The Site</a>
                    }
                </Typography>
            </CardContent>
            <CardActions>
                <ButtonBase component={BrewerDetailComponentLink} onClick={getDetails}>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        See Details
                    </Typography>
                </ButtonBase>
            </CardActions>
        </Card>
    );
}

export default BrewerCard;