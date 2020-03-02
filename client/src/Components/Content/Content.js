import React from 'react';
import { Grid, Container } from '@material-ui/core/'

import './Content.css'

class Content extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content">
                <Container maxWidth="lg" >
                    <Grid
                        item
                        xs={12}
                        spacing={1}
                    >
                        {this.props.children}
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Content;
