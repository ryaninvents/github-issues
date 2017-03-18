import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

export default class GhIssuesView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('github-issues');
    ReactDOM.render(React.createElement(App), this.element);
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getView() {
    return this.element;
  }

  getTitle() {
      return 'GitHub Issues';
  }

  getUri() {
      return 'github-issues:///';
  }

}

GhIssuesView.Provider = (view) => view.element;
