import React, {Component} from 'react';
import Wrapper from 'components/wrapper';
import Header from 'components/header';
import Container from 'components/container';
import 'app/index.scss';

export default class App extends Component{

    render() {
        return (
            <Wrapper>
                <Header title="首页"/>
                <Container/>
            </Wrapper>
        )
    }
}