import React, {Component} from 'react';
import 'views/home/index.scss';

export default class Home extends Component {

    render() {
        return (
            <div className="view-home">
                <p>Hello World</p>
                <img src={require('views/home/image/test.jpg')} alt=""/>
            </div>
        )
    }
}