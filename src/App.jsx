import React, { Component } from 'react';
import './App.css';
import data from './halake_connpass.json';

class App extends Component {
  componentWillMount() {
    this.setState({'events': data.events})
  }

  saveState() {
    console.log('clicked')
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to React</h1>
        <h2>Latest events for HaLake</h2>
        <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
          <thead>
            <tr>
              <th>event_id</th>
              <th>title</th>
              <th>started_at</th>
            </tr>
          </thead>
          <tbody>
            {this.state.events.map((e) => <tr key={e.event_id}><td>{e.event_id}</td><td>{e.title}</td><td>{e.started_at}</td></tr>)}
          </tbody>
        </table>
        <p>
          <button onClick={() => this.saveState}>Save</button>
        </p>
      </div>
    );
  }
}

export default App;
