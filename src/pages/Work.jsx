import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function Work() {
    return (
        <div className="work">
            <h1>Bussiness</h1>
            {sections.work.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}