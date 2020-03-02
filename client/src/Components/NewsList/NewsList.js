import React from 'react';
import axios  from 'axios'
import  hdate from 'human-date'


import { Grid, Container, List, ListItem, ListItemIcon, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core/'
import RemoveIcon from '@material-ui/icons/Delete';
import './NewsList.css'

class NewsList extends React.Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            items: []
        }
        this.fetchNews()
    }

    fetchNews () {
        const url= 'http://localhost:3800/api/articles/'
        axios.get(url)
            .then(response => {
                this.setState({
                    items: response.data.articles
                })
                console.log(this.state)
        })
    }

    handleClick = (article, event) => {
        const url= `http://localhost:3800/api/articles/${article._id}/disable`
        const newState = this.state
        const index = newState.items.findIndex(item => item._id == article._id)
        newState.items.splice(index, 1)
        axios.get(url)
            .then(response => {
                this.setState(newState)
            })
    }

    dateFormat = (date) => {
        return hdate.relativeTime(date)
    }

    render() {
        return (
            <Grid>
                <List dense>
                    {this.state.items.map( value => {
                            return (
                                <ListItem width="100%" key={value._id} dense button onMouseEnter={(e) => this.setState({activeIndex: value._id})}>
                                    <ListItemText edge="start" xs={10} className="article_item" primary={`${value.title}`}  />
                                    <ListItemText xs={10} className="article_item" secondary={`-${value.author}-`} />
                                    <ListItemText className="" primary={`-${this.dateFormat(value.date)}-`} edge="" />
                                    {this.state.activeIndex == value._id   && (
                                        <ListItemSecondaryAction edge="end" onClick={(e) => this.handleClick(value, e)}>
                                            <IconButton edge="end" aria-label="comments" >
                                                <RemoveIcon></RemoveIcon>
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    )}
                                </ListItem>
                            )
                        }
                    )}
                </List>
            </Grid>
        )
    }
}

export default NewsList;
