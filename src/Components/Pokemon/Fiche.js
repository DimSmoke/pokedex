import React from 'react';
import axios from 'axios';

import Loader from '../Loader.js'

const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
}

class Fiche extends React.Component{
    state = {
        isLoading: false,
        name : '',
        imageUrl: '',
        types: [],
        stats: {
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            specialAttack: '',
            specialDefense: ''
        },
        height: '',
        weight: '',
        abilities: ''
    };

    async componentDidMount() {
        const { name } = this.props.match.params;

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;

        const pokemonRes = await axios.get(pokemonUrl);

        const Name = pokemonRes.data.name;
        const imageUrl = pokemonRes.data.sprites.front_default;

        let { hp, attack, defense, speed, specialAttack, specialDefense } = '';

        pokemonRes.data.stats.map(stat => {
            switch(stat.stat.name) {
                case 'hp':
                    hp = stat['base_stat'];
                    break;
                case 'attack':
                    attack = stat['base_stat'];
                    break;
                case 'defense':
                    defense = stat['base_stat'];
                    break;
                case 'speed':
                    speed = stat['base_stat'];
                    break;
                case 'special-attack':
                    specialAttack = stat['base_stat'];
                    break;
                case 'special-defense':
                    specialDefense = stat['base_stat'];
                    break;
            }
        });

        const height = 
        Math.round(pokemonRes.data.height * 10);

        const weight = 
        Math.round(pokemonRes.data.weight / 10);

        const types = pokemonRes.data.types.map(type => type.type.name);

        const abilities = pokemonRes.data.abilities.map(ability => {
            return ability.ability.name
                .toLowerCase()
                .split('-')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join('');
        });

        this.setState({
            name,
            imageUrl,
            types,
            stats: {
                hp,
                attack,
                defense,
                speed,
                specialAttack,
                specialDefense
            },
            height,
            weight,
            abilities
        });
    }

    render(){
        const {isLoading} = this.state;
        return (
            <div>
                <div class="titre">
                    <div class="nom">
                        <h2>{this.state.name}</h2>
                    </div>
                    <div class="image">
                        {isLoading ? <Loader/> : <img src={this.state.imageUrl} />}
                    </div>
                </div>
                <div>
                    {this.state.types.map(type => (
                        <span
                            key={type}
                            class="type"
                            style={{
                                backgroundColor: `#${TYPE_COLORS[type]}`,
                                color: 'white'
                            }}
                        >
                            {type
                                .toLowerCase()
                                .split(' ')
                                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                                .join(' ')}
                        </span> 
                    ))}
                </div>
                <div class="informations">
                    <div class="statistiques">
                        <small>HP : {this.state.stats.hp}</small>
                        <small>Attaque : {this.state.stats.attack}</small>
                        <small>Défense : {this.state.stats.defense}</small>
                        <small>Vitesse : {this.state.stats.speed}</small>
                        <small>Attaque Spéciale : {this.state.stats.specialAttack}</small>
                        <small>Défense Spéciale : {this.state.stats.specialDefense}</small>
                    </div>
                    <div class="taille_poids">
                        <small>Taille : {this.state.height} cm</small>
                        <small>Poids : {this.state.weight} kg</small>
                    </div>
                    <div class="capacités">
                        <small>Capacités : {this.state.abilities}</small>
                    </div>
                </div>

            </div>
          )
    }
}

export default Fiche;