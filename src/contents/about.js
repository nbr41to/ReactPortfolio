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
            text1: "新しい旅路での成長を誓い,書きました.",
            text2: "今年一年は人生でもっとも成長する一年になりますように.",
            discription: "元旦にiPadで書きました.",
            listTitle: "",
            list: [
            ],
            image: <img src={kakizome} />,
        },
    ]
}