import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import axios from 'axios';

class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poster: [],
            page: 1
        }
    }

    componentDidMount() {
        axios.get("/api/movies/list/1").then((res) => {
            this.setState({
                poster: res.data.movies
            })
        })
    }

    handleClick = (obj) => {
        console.log(obj)
    }

    printTitle = (obj) => {

        if (obj.title.length > 17) {
            return (obj.title.substring(0, 17) + "...");
        }
        else {
            return (obj.title);    
        }
    }

    nextPage = () => {
        this.setState({page: this.state.page + 1});
        axios.get(`/api/movies/list/${this.state.page}`).then((res) => {
            const newPoster = this.state.poster.concat(res.data.movies);
            this.setState({
                poster: newPoster
            })
        })
    }

    render() {
        return(
          <div onScroll={this.nextPage} className="movie-cards">
            {this.state.poster.map((obj, i) => {
                return (
                    <div onClick = {
                        () => this.handleClick(obj)
                    }
                    className="p-col p-shadow-1" key={i}>
                        <img className="p-shadow-20" style={{width: '9em', height: '13.5em', margin: '0.5em'}} src={obj.large_cover_image} alt=""/>
                        <h3 className="movie-title">
                            {this.printTitle(obj)}
                        </h3>
                        <h4 className="movie-date">
                            {obj.year}
                        </h4>
                    </div>
                )
            })}
            <Button style={{margin: '3em'}} className="p-button-rounded" onClick={() => this.nextPage()}>Next Page ...</Button>
            <ProgressSpinner style={{height: '5em'}}/>
          </div>
        )
    }    
}

export default class Movies extends Component {

    render() {
        return (
            <div className="p-grid p-align-center">
                <MovieCard/>
            </div>
        );
    }
}