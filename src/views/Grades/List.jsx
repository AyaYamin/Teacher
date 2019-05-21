import React, { Component } from 'react';
import { Pagination } from 'react-bootstrap';
/*
function fetchBlogPosts(pageNumber) {
    let p = new URLSearchParams();
    p.append('page', pageNumber || 1);

    console.log('http://api.symfony-3.dev/app_dev.php/posts?', 'http://api.symfony-3.dev/app_dev.php/posts?' + p);

    return fetch('http://api.symfony-3.dev/app_dev.php/posts?' + p, {
        method: 'GET',
        mode: 'CORS'
      })
      .then(res => res.json())
      .catch(err => err);
}

export default class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            currentPageNumber: 1,
            totalItems: 1,
            itemsPerPage: 10
        };
    };
    handleSelect(number) {
        console.log('handle select', number);
        this.setState({currentPageNumber: number});
      }


      getBlogPosts(pageNumber) {
        fetchBlogPosts(pageNumber)
            .then(response => {
                console.log('blog posts', response);
                this.setState({
                    blogPosts: response.items,
                    currentPageNumber: response.currentPage,
                    numItemsPerPage: response.numItemsPerPage,
                    totalItems: response.totalCount
                });
            });
    }

    componentDidMount() {
        this.getBlogPosts(1);
    }
   
    render() {

        let totalPages = Math.ceil(this.state.totalItems / this.state.numItemsPerPage);

        return (
            <div>
                <Table blogPosts={this.state.blogPosts}
                       onDelete={this.onDelete.bind(this)} />

                <Pagination
                    bsSize="medium"
                    items={totalPages}
                    activePage={this.state.currentPageNumber}
                    onSelect={this.handleSelect.bind(this)}/>
            </div>
        );
    }
}
*/

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Child = ({ match }) => (
    <div>
      <h3>ID: {match.params.id}</h3>
    </div>
  )
class A extends React.Component {
    render() {
        return (
          <Router>
            <h2>Accounts</h2>
            <ul>
              <li><Link to="/netflix">Netflix</Link></li>
              <li><Link to="/zillow-group">Zillow Group</Link></li>
              <li><Link to="/yahoo">Yahoo</Link></li>
              <li><Link to="/modus-create">Modus Create</Link></li>
            </ul>
      
            <Route path="/:id" component={Child}/>
          </Router>
        )
      }
}

export default A