import React, { Component } from 'react'
import { postData } from '../service/apiclient'
import '../styles/Form.css';

export default class Form extends Component {
  state = { title: String, legend: String, starttime: Date, finishtime: Date, inprogress: Boolean }
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }
  handleLegendChange = (e) => {
    this.setState({ legend: e.target.value })
  }
  handleStartTimeChange = (e) => {
    this.setState({ starttime: e.target.value })
  }
  handleFinishTimeChange = (e) => {
    this.setState({ finishtime: e.target.value })
  }
  handleInProgressChange = (e) => {
    this.setState({ inprogress: false })
  }
  handleCreateClick = e => {
    e.preventDefault();
    if (this.state.legend.trim() === '') {
      window.alert("Legend must contain text");
      return;
    }
    postData(this.state).then(response => {
      this.props.history.push('/topics');
    })
  }
  render() {
    return (
      <div className="content">
        <form>
          <fieldset className="modal-content">
            <legend>Add topic into Diary</legend>
            <label htmlFor='form_title'>Title</label><br />
            <input type='text' placeholder='Title' id='form_title' onChange={this.handleTitleChange} required='required' /><br />
            <label htmlFor='form_legend'>Description</label><br />
            <textarea type='text' placeholder='Write description here' autoComplete='off' id='form_legend' onChange={this.handleLegendChange} required='required' /><br />
            <label htmlFor='form_starttime'>Started</label><br />
            <input type='date' autoComplete='off' id='form_starttime' onChange={this.handleStartTimeChange} /><br />
            <label htmlFor='form_finishtime'>Finished</label><br />
            <input type='date' autoComplete='off' id='form_finishtime' onChange={this.handleFinishTimeChange} /><br />
            <label htmlFor='form_inprogress'>Still in progress?</label><br />
            <input type='radio' autoComplete='off' id='form_inprogress' onChange={this.handleInProgressChange} />Yes<br />
            <input type='submit' className="addButton" value='Add to learning diary' onClick={this.handleCreateClick} /><br />
          </fieldset>
        </form>
      </div>
    )
  }
}
