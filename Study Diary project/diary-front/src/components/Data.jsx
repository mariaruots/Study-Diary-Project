import React, { Component } from 'react';
import '../styles/Data.css';

export default class Data extends Component {
    showDetails = () => {
        this.props.history.push(`${this.props.match.url}/${this.props.data.id}`);
    }
    render() {
        const { id, title, legend, starttime, finishtime, inprogress } = this.props.data;
        return (
            <div className="topics">
                <p>ID: {id}</p>
                <h2>{title}</h2>
                <p>{legend}</p>
                <p><i>Started: {starttime}</i></p>
                <p><i>Finished: {finishtime}</i></p>
                <p>{inprogress}</p>
                <button type="button" className="editButton" onClick={this.showDetails}>Show details</button>
            </div>
        )
    }
}
