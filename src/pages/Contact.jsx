import React from 'react';
import Section from '../components/Section'
import { sections } from '../contents'

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            {sections.contact.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}