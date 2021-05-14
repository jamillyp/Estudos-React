import React, { Component } from 'react';
import CardNota from './CardNota';

export default class ListaNotas extends Component {

    render() {
        return (
            <ul>
                {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                    return (
                    <li key={index}>
                        <CardNota />
                    </li>)
                })}
            </ul>
        );
    }
}
