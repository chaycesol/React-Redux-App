import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchCharacters } from '../store';

const Characters = (props) => {
    useEffect(() => {
        props.fetchCharacters();
    }, [])
    
    return(
        <section>
            <img src="https://www.seekpng.com/png/full/112-1129023_no-account-no-worries-rick-and-morty-logo.png" />
            <h3>Present</h3>
            <h1>The Galactic Federation's Most Wanted</h1>
            {props.isLoading ? <h4>Retrieving List of Criminals now... </h4> : null}
      {props.error ? (
        <p style={{ color: "red" }}> Error: Connection Failed - BE ON THE LOOKOUT FOR A RICK! {props.error}</p>
      ) : null}
      {props.characters.length > 0 ? (
        <div>
            <h2>ARREST ON SIGHT: </h2>
          {props.characters.map((character) => (
            <span key={character.id}>
                <h3>FUGITIVE: {character.name}</h3>
                <img src={character.image}/>
                    <p>Species: {character.species}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Last Known Status: {character.status}</p>
                    <p>Recent Sightings</p>
                    {character.episode.map((sighting, index) =>(
                        <li><a href={sighting} key={index}>Sighting Data</a></li>
                    )
                    )}
            </span>
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

export default connect(mapStateToProps, {fetchCharacters})(Characters);