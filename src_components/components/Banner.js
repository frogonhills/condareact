import React from 'react'
import {name , age , person } from '../data';
export default function Banner() {
    return (
        <div>
            <h1>Hello form banner </h1>
            <p>{name}</p>
            <p>{age}</p>
            <p>{person.name}</p>
        </div>
    )
}
