import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <NavLink to='/' className="navigationButton">
          Home
        </NavLink>
        <NavLink to='/topics' className="navigationButton">
          Diary Topics
        </NavLink>
        <NavLink to='/form' className="navigationButton">
          Add new Topic
        </NavLink>
        <h1 className="navigationHead">Learning Diary</h1>
      </div>
    )
  }
}
