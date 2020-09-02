import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
// iconはここでインポートしておく
import kakizome from '../images/2020kakizome.jpeg'



/**
 * about.sections
 */

/**
 * KEYS
 * section.wide
 * section.title
 * section.text1
 * section.list
 * section.image
 * section.movie
 * section.text2
 */

export const about = {
    sections: [
        {
            wide: true,
            title: "今年の書き初め",
            text1: "飛翔！",
            text2: "これは今年の元旦にiPadで書いた書き初めです.",
            discription: "これは今年の元旦にiPadで書いた書き初めです.",
            listTitle: "",
            list: [
            ],
            image: <img src={kakizome} />,
        },
    ]
}