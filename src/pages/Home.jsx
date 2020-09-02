import React from 'react';
import Section from '../components/organisms/Section'
import { home } from '../contents/home'
import kakizome from '../images/2020kakizome.jpeg'
import eyecatch from '../images/eyecatch.jpeg'

export default function Home() {
    return (
        <div className="home">
            <div className="catch">
                <img src={eyecatch} style={{ width: '100%' }} />
            </div>
            {home.sections.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}