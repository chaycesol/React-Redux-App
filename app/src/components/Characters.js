import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchCharacters } from '../store';

const Characters = (props) => {
    useEffect(() => {
        fetchCharacters()
    }, [])
    return(
        <section>
            <h3>Rick and Morty Present</h3>
            <h1>The Galactic Federation Most Wanted</h1>
            {props.isLoading ? <h4>Loading missions now... </h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}> My bad. Launch cancelled! {props.error}</p>
      ) : null}
      {props.characters.length > 0 ? (
        <div>
          {props.characters.map((character) => (
            <h2 key={character.id}>{character.name}</h2>
          ))}
          </div>
      ) : null}
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        characters: state.characters,
        isLoading: state.isLoading,
        error: state.error
    };
};

export default connect(mapStateToProps, {})(Characters);