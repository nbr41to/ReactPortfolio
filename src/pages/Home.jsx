import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'
import kakizome from '../images/2020kakizome.jpeg'

export default function Home() {
    return (
        <div className="home">
            <div className="catch">
                <h2>人生は何度でもやり直せる</h2>
                <p>Reborn to Next Stage</p>
            </div>
            {sections.home.map((section, index) => <Section section={section} key={index} />)}
            <div className="container">
                <h2>This year's goal</h2>
                <img src={kakizome} />
            </div>
        </div>
    );
}