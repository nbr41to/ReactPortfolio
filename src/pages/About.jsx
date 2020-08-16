import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'
import markdown from './about.md'
import my_photo from '../images/with.JPG'

export default function About() {
    // const markdown_text = fetch(markdown).then((response) => response.text())
    const [markdownText, setMarkdownText] = useState()
    console.log(markdownText);
    useEffect(() => {
        fetch(markdown).then((response) => response.text()).then((text) => {
            setMarkdownText(text);
        })
    }, [])
    return (
        <div className="about">
            <h1>About</h1>
            <div className="top">
                <img src={my_photo} />
                <div className="profile">
                    <h2>Profile</h2>
                    <p>名前：こばやし のぶゆき</p>
                    <p>性別：男</p>
                    <p>年齢：28</p>
                    <p>学歴：中央大学理工学部数学科卒</p>
                    <p>仕事：6年間教員やってました</p>
                </div>
            </div>
            <ReactMarkdown className="markdown" source={markdownText} />
            <div className="bottom">
                <h2>Another Sentences</h2>
                <p>その他にもnoteで発信していますので,よろしければご覧ください！</p>
                <ul>
                    <li><a href="https://note.com/nbr41/n/na2a9a2ea769c" target="_blank">6年務めた学校の先生を退職して思うこと</a></li>
                    <li><a href="https://note.com/nbr41/n/naa44ad26421b" target="_blank">灰色の世界に生きる</a></li>
                </ul>
            </div>
        </div>
    );
}