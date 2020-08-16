// Webサイトの文章はなるべくここに
import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import { Home, Face, MailOutline, LaptopChromebook, Twitter } from '@material-ui/icons';
// iconはここでインポートしておく

export const menu = [
    {
        title: 'HOME',
        icon: < Home className="icon" />,
        path: "",
    },
    {
        title: 'ABOUT',
        icon: <Face className="icon" />,
        path: "about",
    },
    {
        title: 'WORK',
        icon: <LaptopChromebook className="icon" />,
        path: "work",
    },
    {
        title: 'CONTACT',
        icon: <MailOutline className="icon" />,
        path: "contact",
    },
]


export const sections = {
    // ======
    //  HOME
    // ======
    home: [
        {
            title: "Description",
            text1: "ここは,僕の作るポートフォリオサイトです.今は,純正のReactで作っています.自身とともに成長します.また,自己紹介用のサイトとしても運用しています.ゆっくりしていってください！",
            text2: "",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "List in progress",
            text1: "",
            text2: "",
            listTitle: "",
            list: [
                "React,React Native",
                "公認心理師資格認定試験",
                "ポートフォリオ作成",
                "nobmath",
                "ダンス",
            ]
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
    ],
    // =======
    //  ABOUT
    // =======
    about: [

    ],
    // ======
    //  WORK
    // ======
    work: [
        {
            title: "Technology × Psychology",
            text1: "ITと心理学を使って,多くの人が幸せに暮せる方法を追求しております.できるがありましたら,CONTACTから気軽に連絡ください.",
            text2: "",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "具体的なできること",
            text1: "",
            text2: "依頼したお仕事は,守秘義務を厳守し,自前のPC,iPad,iPhoneで実施いたします.",
            listTitle: "",
            list: [
                "総合コンサルティング",
                "アプリケーション開発",
                "心理コンサルティング",
                "コーチング",
                "カウンセリング",
                "お悩み相談",
                "成長メンター",
                "学習メンター",
                "数学講師（中学・高校）",
                "数学講師（中学・高校）",
            ]
        },
    ],
    // =========
    //  CONTACT
    // =========
    contact: [
        {
            title: "SNS",
            text1: "LINE,Twitter,E-mailがレス早いです.",
            text2: "",
            listTitle: "",
            list: [
                <a href="nbr.41to@gmail.com">E-mail</a>,
                <a href="https://twitter.com/Knob_nbr41to">Twitter</a>,
                <a href="https://lin.ee/iTzRHQR">OfficialLINE</a>,
                <a href="https://www.youtube.com/channel/UCMbCS3ynaSuLJGMX512v-lQ">nobmath</a>,
                <a href="https://www.youtube.com/channel/UCRu_dGDzDp1Xh8j8N7IZm1w">Vlog</a>,
                <a href="https://note.com/nbr41">note</a>,
                <a href="https://github.com/nbr41to">GitHub</a>,
                <a href="https://www.linkedin.com/in/knob/">Linkdin</a>,
            ]
        },
    ]
}

export const contents = {
    home: [
        {
            title: "Description",
            content: "sentence"
        }
    ],
    about: [
        {
            title: 'name',
            content: "Knob",
        }
    ],
    work: [
        {
            title: 'name',
            content: "Knob",
        }
    ],
    contact: [
        {
            title: "twitter",
            url: "https://twitter.com/Knob_nbr41to",
            icon: <Twitter className="icon" />,
        },
        {
            title: "note",
            url: "https://note.com/nbr41",
            icon: <Twitter className="icon" />,
        },
        {
            title: "GitHub",
            url: "https://github.com/nbr41to",
            icon: <Twitter className="icon" />,
        },
        {
            title: "Linkedin",
            url: "https://www.linkedin.com/in/knob/",
            icon: <Twitter className="icon" />,
        },
    ]
}


// export const pages = []