import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import markdown from './about.md'
import { about } from '../contents/about'
import Section from '../components/organisms/Section'
import ProfileBox from '../components/organisms/ProfileBox'

export default function About() {
    // const markdown_text = fetch(markdown).then((response) => response.text())
    const [markdownText, setMarkdownText] = useState()
    // console.log(markdownText);
    useEffect(() => {
        fetch(markdown).then((response) => response.text()).then((text) => {
            setMarkdownText(text);
        })
    }, [])
    return (
        <div className="about">
            <h1>About</h1>
            <ProfileBox />
            {about.sections.map((section, index) => <Section section={section} key={index} />)}
            <ReactMarkdown className="markdown" source={markdownText} />
        </div>
    );
}