import React from 'react';
import Section from '../components/atoms/Section'
import { sections } from '../contents'

export default function Documents() {
    return (
        <div className="documents">
            <h1>Documents</h1>
            {/* {sections.documents.map((section, index) => <Section section={section} key={index} />)} */}
        </div>
    );
}