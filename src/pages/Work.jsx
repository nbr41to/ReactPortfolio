import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function Work() {
    return (
        <div className="work">
            <h1>Work</h1>
            {sections.work.map((section) => <Section section={section} />)}
        </div>
    );
}