import React from 'react';

class ListeDetail extends React.Component {
    state ={
        name:'',
        imageUrl:'',
        pokemonIndex:''
    }

    render() {
        const {name, url} = this.props;

        return(
            <h1>{name}</h1>
        )
    }
}

export default ListeDetail; 