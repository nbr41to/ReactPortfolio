import React from 'react';
import Section from '../components/organisms/Section'
import { contact } from '../contents/contact'

export default function Contact() {
    return (
        <div className="contact">
            <h1>Contact</h1>
            {contact.sections.map((section, index) => <Section section={section} key={index} />)}
        </div>
    );
}