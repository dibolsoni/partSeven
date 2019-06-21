import React, { Component } from 'react';
import { Consumer } from './Context';
import axios from 'axios';
import apiKey from '../config';

import Gallery from "./Gallery";

export class SearchMenu extends Component {
    // let tag;
    // match ? tag = match.params.tag : tag = null;
    // // search(tag);
    // // return (
    // //     <div className="container">
    // //         <Gallery photos={ photos } />
    // //     </div>
    // // );
    // console.log(tag);

    // componentDidMount() {
    //     this.performSearch(this.props.match.params.tag);
    // }

    // performSearch = (topic) => {
    //     const per_page = 24;
    //     const format = 'json';
    //     const url = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&tags=${topic}&accuracy=1&privacy_filter=1&per_page=${per_page}&format=${format}&nojsoncallback=1`;
    //     console.log(topic);
    //     axios.get(url)
    //       .then((response) => {
    //         this.setState({
    //           photos: response.data.photos.photo,
    //           loading: false
    //         })
    //       })
    //       .catch((err) => {
    //         console.log('Error fetching and parsing data', err);
    //       })
    //   }

    render() {
        return (
            <Consumer>
                { context => {
                        return (
                        <Gallery photos={context.gifs} />
                        );
                    } }
            </Consumer>

        ); 
    }


}
export default SearchMenu;