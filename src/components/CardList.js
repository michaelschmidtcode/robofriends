import React, {Fragment} from 'react';
import Card from './Card';

const CardList = ({robots}) => {
 return ( 
    <Fragment>
        {robots.map((user, i) => {
            return <Card key={i} id={robots[i].id} name ={robots[i].name} email={robots[i].email}/>
        })}
    </Fragment>
 );
}

export default CardList;