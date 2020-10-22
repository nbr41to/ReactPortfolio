import React from 'react';
import Section from '../components/organisms/Section'
import { business } from '../contents/business'

export default function Business() {
    return (
        <div className="business">
            <h1>Business</h1>
            {business.sections.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}