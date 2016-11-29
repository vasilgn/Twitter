import React, { Component } from 'react'
import './Nav.css'
import {logout} from '../../rest/logout.js'
export default class NavigationBar extends Component{

  render(){
    return(
      <div className="ui secondary  menu">
        <a className="active item">
          Profile
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Friends
        </a>
        <div className="right menu center aligned">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..."/>
                <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item" onClick={logout}>
            Logout
          </a>
        </div>
      </div>)
  }
  componentDidMount() {
  }
}