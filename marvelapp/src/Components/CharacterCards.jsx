import React from 'react';
import './Styles/Cards.css'
import UseFetch from '../customHooks/UseFetch';
import CharacterCard from './CharacterCard/CharacterCard';

const CharacterCards = () => {
    const { data, loading, error } = UseFetch(`https://gateway.marvel.com/v1/public/characters?ts=1717144418535&apikey=0790651aef0a1f3a399dede8c1835e97&hash=230318354a6130d396a08edf82d68dd8`);

    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    // Check if data exists and if there are any results
    if (!data || !data.data || !data.data.results || data.data.results.length === 0) {
        return <h1>No Data Found</h1>;
    }

    const characters = data.data.results;

    return (
        <>
            <h2 className='title'>Characters</h2>
            <div className='Row'>
                {characters.map((char, i) => (
                    <CharacterCard key={i} character={char} />
                ))}
            </div>
        </>

    );
};

export default CharacterCards;