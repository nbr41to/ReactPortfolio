import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import markdown from './about.md'
import { about } from '../contents/about'
import Section from '../components/organisms/Section'
import ProfileBox from '../components/organisms/ProfileBox'

export default function About({ markdownText }) {
    return (
        <div className="about">
            <h1>About</h1>
            <ProfileBox />
            {about.sections.map((section, index) => <Section section={section} key={index} />)}
            <ReactMarkdown className="markdown" source={markdownText} />
        </div>
    );
}