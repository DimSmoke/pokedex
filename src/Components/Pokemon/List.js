import React from 'react';
import axios from 'axios';

import ListDetail from './ListeDetail';

class List extends React.Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807',
        pokemon: null
    };

    async componentDidMount () { 
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div classname="info">
                        {this.state.pokemon.map(pokemon => (
                            <ListDetail 
                            key ={pokemon.name}
                            name ={pokemon.name}
                            url ={pokemon.url}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Chargement</h1>
                )}
            </React.Fragment>
        );
    }
}

export default List;