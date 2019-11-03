import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './Logo_pokemon.png';
import './App.css';

import List from './Components/Pokemon/List.js';
import Fiche from './Components/Pokemon/Fiche';
/*
import Form from './Containers/Form.js';
import Bouton from './Components/Bouton.js';
*/
class App extends React.Component {
  /*
    state = {
    value: '',
    };

    handleSubmit = this.handleSubmit.bind(this);

    handleSubmit(ev) {
        ev.preventDefault();   
        this.setState({
            value: new FormData(ev.currentTarget).get('filter'),
        }); 
    }
  */
  render(){
  /*
  const filteredPkms = this.state.pokemon.filter(Pokemon => 
    Pokemon.Name.toLowerCase().includes(this.state.value.toLowerCase()),
  );

  console.log(filteredPkms);
  */
    return (
      <Router>
        <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/pokemon/:name" component={Fiche}/>
              </Switch>
            </header>
          </div>
        </Router>
    );
  }
}

export default App;
