import React from 'react';
import '../Styles/Cards.css'

const CharacterCard = ({ character }) => {
    return (
        <div className='Card'>
            <div className='ImgContainer'>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} className='Img' />
            </div>
            <h5 className='Title'>{character.name}</h5>
        </div>
    );
};

export default CharacterCard;