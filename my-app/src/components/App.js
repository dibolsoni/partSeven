import React, {Component} from 'react';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'; 

import '../App.css';

import axios from 'axios';
import apiKey from '../config';

import Header from './Header';
import Gallery from './Gallery';
import Nav from "./Nav";
import SearchForm from "./SearchForm";
import NotFound from './NotFound';

export class App extends Component {
  
  constructor() {
    super();

    this.state = {
      photos: [],
      loading: true,
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  componentWillUnmount() {
    clearInterval(this.state.photos);
  }

  performSearch = (topic = 'any') => {
      this.setState({loading:true})
      const per_page = 24;
      const format = 'json';
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&tags=${topic}&accuracy=1&privacy_filter=1&per_page=${per_page}&format=${format}&nojsoncallback=1`;
      axios.get(url)
        .then((response) => {
          this.setState({
            photos: response.data.photos.photo,
            loading: false
          })
        })
        .catch((err) => {
          console.log('Error fetching and parsing data', err);
        })
  }

  render() { 
    return (
      <BrowserRouter>
          <div className='container'>
              <Header /> 
              <Switch>
                <Route exact path='/' render={ () => ( 
                  <div className="main-content">
                    <SearchForm onSearch={this.performSearch} />
                    <Nav onMenuClick={this.performSearch} />    
                    {
                      this.state.loading ? <p> Loading ...</p> : this.state.photos ? <Gallery photos={ this.state.photos } /> : <NotFound /> 
                    }
                  </div>
                  )} 
                />
                <Route component={NotFound} />
              </Switch>

          </div>
        </BrowserRouter>
        

    );
  }

  
}

export default App;
