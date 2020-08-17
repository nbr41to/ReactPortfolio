import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function Bussiness() {
    return (
        <div className="bussiness">
            <h1>Bussiness</h1>
            {sections.bussiness.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}