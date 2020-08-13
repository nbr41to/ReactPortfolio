import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function About() {
    return (
        <div className="about">
            <h1>About</h1>
            {sections.about.map((section) => <Section section={section} />)}
        </div>
    );
}