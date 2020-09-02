import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import {

} from '@material-ui/icons';
// iconはここでインポートしておく

/**
 * documents.sections
 */

/**
 * KEYS
 * section.title
 * section.text1
 * section.list
 * section.image
 * section.movie
 * section.text2
 */

export const documents = {
    sections: [
        {
            wide: "",
            title: "Discription",
            text1: "ここには,",
            text2: "",
            discription: "",
            listTitle: "",
            list: [
            ],
            image: "",
        },
        {
            title: "Growth record",
            text1: "",
            text2: "",
            listTitle: "",
            list: [
                <Link to="/growth-record/math/">数学</Link>,
                <Link to="/growth-record/prog">プログラミング</Link>,
                <Link to="/growth-record/psyc">心理学</Link>,
                <Link to="/growth-record/cube">ルービックキューブ</Link>,
            ]
        },
        {
            title: "Sentence: To Turnover",
            text1: <a href="https://note.com/nbr41/n/na2a9a2ea769c" target="_blank">6年務めた学校の先生を退職して思うこと</a>,
            text2: "",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "Sentence: I hope gray.",
            text1: <a href="https://note.com/nbr41/n/naa44ad26421b" target="_blank">灰色の世界に生きる</a>,
            text2: "",
            listTitle: "",
            list: [
            ]
        },

    ]
}