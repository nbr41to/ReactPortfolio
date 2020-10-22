import React from 'react';
import Section from '../components/organisms/Section'
import { documents } from '../contents/documents'

export default function Documents() {
    return (
        <div className="documents">
            <h1>Documents</h1>
            {documents.sections.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}