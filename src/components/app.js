import React from 'react';
import {MemoryRouter} from 'react-router';

import Breadcrumbs from './breadcrumbs';

export default class App extends React.Component {
    render() {
        return (
            <MemoryRouter>
                <div>
                    <Breadcrumbs />
                </div>
            </MemoryRouter>
        );
    }
}
