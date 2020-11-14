import React, { Component } from 'react';
import 'primereact/resources/primereact.min.css';
import axios from 'axios'



class MovieCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poster: []
        }
    }

    componentDidMount() {

        axios.get("/api/movies/list").then((res) => {
            this.setState({
                poster: res.data.data.movies
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
    
    render() {
        return(
          <div className="movie-cards">
            {this.state.poster.map((obj, i) => {
                return (
                    <div onClick = {
                        () => this.handleClick(obj)
                    }
                    className="p-col p-shadow-1" key={i}>
                        <img className="p-shadow-20" style={{width: '11em', margin: '0.5em'}} src={obj.large_cover_image} alt=""/>
                        <h3 className="movie-title">
                            {this.printTitle(obj)}
                        </h3>
                        <h4 className="movie-date">
                            {obj.year}
                        </h4>
                    </div>
                )
            })
            }
          </div>
        )
    }    
}

export default class Movies extends Component {

    render() {

        return (
            <div className="p-grid  p-align-center">
                <MovieCard/>
            </div>
        );
    }
}