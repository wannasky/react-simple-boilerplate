import React from 'react';
import ReactDom from 'react-dom';
import App from 'app';

const render = Comp => {
    ReactDom.render(
        <Comp/>,
        document.getElementById('root')
    )
}

render(App);