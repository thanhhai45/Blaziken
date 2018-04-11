import React, { Component } from 'react'
import CategoryList from './components/CategoryList';
import Author from './../authorize';
import { Route } from 'react-router-dom';
export default class Page extends Component {
  render() {
    return (
      <div>
            <CategoryList />
      </div>
    )
  }
}
