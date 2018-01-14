import React, {Component} from 'react';
import 'components/header/index.scss';

export default class Header extends Component{

    render() {

        let {title} = this.props;

        return <div className="header"><h1>{title}</h1></div>
    }
}