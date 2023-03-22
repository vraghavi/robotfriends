import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const cardComponent = robots.map(({ id, name, username, email }) => (
        <Card
            key={id}
            name={name}
            username={username}
            email={email} />
    ));
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;