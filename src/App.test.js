import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloMessage name="Runoob" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
