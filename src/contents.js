// Webサイトの文章はなるべくここに
import React from "react"
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