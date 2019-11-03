import React from 'react';
import {Link} from 'react-router-dom';
import './Liste.css';

class ListeDetail extends React.Component {
    state ={
        name:'',
        imageUrl:'',
        pokemonIndex: ''
    };

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name,
            imageUrl,
            pokemonIndex
        });
    }

    

    render() {
        return(
            <div className="Fiche">
                <Link to={`pokemon/${this.state.name}`}>
                    <h6 className="Fiche_Infos" >{this.state.name}</h6>
                    <img
                    src={this.state.imageUrl}
                    />
                </Link>
            </div>
        )
    }
}

export default ListeDetail; 