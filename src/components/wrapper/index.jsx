import React, {Component} from 'react';
import 'components/wrapper/index.scss';

export default class Wrapper extends Component{

    render() {
        return <div className="wrapper">{this.props.children}</div>
    }
}