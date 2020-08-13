import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function Home() {
    return (
        <div className="home">
            <div className="catch">
                <h2>人生は何度でもやり直せる</h2>
                <p>Reborn to Next Stage</p>
            </div>
            {sections.home.map((section) => <Section section={section} />)}
        </div>
    );
}