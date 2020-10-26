import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { about } from '../../contents/about'
import Section from '../../components/organisms/Section'
import ProfileBox from '../../components/organisms/ProfileBox'
import Test from './Test'

export default function About({ markdownText }) {
    return (
        <div className="about">
            <h1>About</h1>
            <ProfileBox />
            {/* <Link to="/about/test">リンク</Link> */}
            {about.sections.map((section, index) => <Section section={section} key={index} />)}
            <ReactMarkdown className="markdown" source={markdownText} />
        </div>
    );
}