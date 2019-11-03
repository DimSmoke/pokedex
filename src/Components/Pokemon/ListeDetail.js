import React from 'react';
import {Link} from 'react-router-dom';
import Loader from '../Loader.js';

class ListeDetail extends React.Component {
    state ={
        isLoading: false,
        name:'',
        imageUrl:''
    };

    componentDidMount(){
        const {name, url} = this.props;

        this.setState({
            name
        });
    }

    render() {
        const {isLoading} = this.state;
        return(
            <div className="Fiche">
                <Link to={`pokemon/${this.state.name}`}>
                    {isLoading ? <Loader/> : <h6 className="Fiche_Infos">{this.state.name}</h6>}
                </Link>
            </div>
        )
    }
}

export default ListeDetail; 