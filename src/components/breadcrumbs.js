import React, {PropTypes} from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';

export default class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.renderRootLink = this.renderRootLink.bind(this);
    }
    renderRootLink({match}) {
        const className = `crumb ${match ? 'text-normal' : 'text-info'}`;
        return (
            <Link className={className} to='/'>GitHub Issues</Link>
        );
    }
    render() {
        return (
            <div className="breadcrumbs">
                <h2>
                    <Route path="/" exact children={this.renderRootLink} />
                    <span className="crumb">foo</span>
                </h2>
            </div>
        );
    }
}

Breadcrumbs.propTypes = {
};
