import './ReactWelcome.scss';
import React from 'react';
import ReactLogo from './ReactLogo/ReactLogo';

export default class ReactWelcome extends React.Component {
  render() {
    return (
      <article className="kickoff-start">
        <ReactLogo />
        <h1>Welcome to React Kickoff</h1>
        <p>
          Thanks for using this <a href="https://github.com/Negan1911/react-kickoff">Repository</a>, go ahead, develop your own app!
        </p>
        <p className="warning">
          Just remember to change the files <code>bower.json</code> and <code>package.json</code> with your data!
        </p>
      </article>
    );
  }

  componentWillMount() {
    window.console.log('Welcome to react-kickoff!');
  }
}
