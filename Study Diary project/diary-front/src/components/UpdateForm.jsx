import React, { Component } from 'react'
import { fetchSingleData, updateData } from '../service/apiclient'


export default class UpdateForm extends Component {
  state = { data: null }
  componentDidMount() {
    const id = this.props.match.params.id
    fetchSingleData(id).then(data => {
      this.setState({ data })
    }).catch(err => {
      alert(`Error fetching quote: ${err.message}`)
    })
  }
  handleTitleChange = (e) => {
    var q = this.state.data[0];
    q.title = e.target.value;
    this.setState({ title: e.target.value })
  }
  handleLegendChange = (e) => {
    var q = this.state.data[0];
    q.legend = e.target.value;
    this.setState({ legend: e.target.value })
  }
  handleStartTimeChange = (e) => {
    var q = this.state.data[0];
    q.starttime = e.target.value;
    this.setState({ starttime: e.target.value })
  }
  handleFinishTimeChange = (e) => {
    var q = this.state.data[0];
    q.finishtime = e.target.value;
    this.setState({ finishtime: e.target.value })
  }
  handleInProgressChange = (e) => {
    var q = this.state.data[0];
    q.inprogress = e.target.value;
    this.setState({ inprogress: false })
  }

  handleCreateClick = e => {
    e.preventDefault();
    updateData(this.state.data[0]).then(response => {
      this.props.history.push('/topics');
    })
  }
  render() {

    if (!this.state.data) {
      return <p>Loading...</p>
    }
    return (
      <div className="content">
        <form>
          <fieldset>
            <legend>Edit Diary Topic</legend>
            <label htmlFor='form_title'>Title</label><br />
            <input type='text' placeholder='Title' id='form_title' value={this.state.data[0].title} onChange={this.handleTitleChange} required='required' /><br />
            <label htmlFor='form_legend'>Description</label><br />
            <textarea type='text' placeholder='Edit description' autoComplete='off' id='form_legend' value={this.state.data[0].legend} onChange={this.handleLegendChange} required='required' /><br />
            <label htmlFor='form_starttime'>Started</label><br />
            <input type='date' autoComplete='off' value={this.state.data[0].starttime} id='form_starttime' onChange={this.handleStartTimeChange} /><br />
            <label htmlFor='form_finishtime'>Finished</label><br />
            <input type='date' autoComplete='off' value={this.state.data[0].finishtime} id='form_finishtime' onChange={this.handleFinishTimeChange} /><br />
            <label htmlFor='form_inprogress'>Still in progress?</label><br />
            <input type='radio' autoComplete='off' value={this.state.data[0].inprogress} id='form_inprogress' onChange={this.handleInProgressChange} /><br />
            <input type='submit' value='Edit Diary Topic' className='addButton' onClick={this.handleCreateClick} />
          </fieldset>
        </form>
      </div>
    )
  }
}
