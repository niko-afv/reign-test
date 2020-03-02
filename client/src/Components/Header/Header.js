import React from 'react';
import { Grid, Container } from '@material-ui/core/'

import './Header.css'

class Header extends React.Component {
    constructor() {
        super();
        this.title = 'HN Feed'
        this.subtitle = 'We <3 hacker news!'
    }

    render() {
        return (
            <div className="header">
                <Container maxWidth="lg" >
                    <Grid
                        container
                        direction="column"
                        item xs={12}
                        spacing={1}
                        className="header_content"
                    >
                        <h1 className="title">{ this.title }</h1>
                        <p className="subtitle">{ this.subtitle }</p>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Header;
