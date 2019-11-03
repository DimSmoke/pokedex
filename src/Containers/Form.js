import React from 'react';

const Form = ({ handleSubmit, value }) => (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="filter">Filtre</label>
                <input id="filter" name="filter" type="text"/>
                <input value="envoyer" type="submit"/>
            </form>
            <p>{value}</p>
        </>
        );

export default Form;