import React from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
import '@aws-amplify/ui-react/styles.css';
import HomePage from './Home';



Amplify.configure(config);

function App() {
  return (
    <HomePage />
  );
}

export default withAuthenticator(App);