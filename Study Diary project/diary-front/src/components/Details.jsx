import React, { Component } from 'react';
import { fetchSingleData, deleteDataWithId } from '../service/apiclient';
import '../styles/Details.css';

export default class Details extends Component {
  state = { data: null }
  componentDidMount() {
    const id = this.props.match.params.id
    fetchSingleData(id).then(data => {
      this.setState({ data })
    }).catch(err => {
      alert(`Error fetching data: ${err.message}`)
    })
  }
  deleteMe = () => {
    deleteDataWithId(this.state.data[0].id).then(async response => {
      if (response.status === 200) {
        window.alert("Deleted");
        this.props.history.push("/topics");
      }
      else {
        const msge = await response.json();
        alert(`Something went wrong ${response.status} - ${response.statusText}`);
        console.error(msge);
      }
    })
  }

  updateMe = () => {
    this.props.history.push(`${this.state.data[0].id}/updateform`);
  }


  render() {
    if (!this.state.data) {
      return <p>Loading...</p>
    }
    const { id, title, legend, starttime, finishtime, inprogress } = this.state.data[0];
    return (
      <div className="details">
        <h2>Details</h2>
        <div>
          <p>Id: {id}</p>
          <p>Title: {title}</p>
          <p>Description: {legend}</p>
          <p>Started: {starttime}</p>
          <p>Finished: {finishtime}</p>
          <p>{inprogress}</p>
        </div>
        <button className="editButton" onClick={this.props.history.goBack}>Back</button>
        <button className="editButton" onClick={this.deleteMe}>Delete</button>
        <button className="editButton" onClick={this.updateMe}>Edit</button>
      </div>
    )
  }
}
