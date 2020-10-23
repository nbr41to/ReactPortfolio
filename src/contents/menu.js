import React from "react"
import {
    Home,
    Face,
    MailOutline,
    LaptopChromebook,
    MenuBook,
    Code,
    Star,
    ViewModule,
} from '@material-ui/icons';
// iconはここでインポートしておくと使える

/**
 * MENU
 * メニュー関連
 */


export const menu = [
    {
        title: 'Home',
        icon: < Home className="icon" />,
        path: "",
        sub_menu: [

        ],
    },
    {
        title: 'About',
        icon: <Face className="icon" />,
        path: "about",
    },
    {
        title: 'Business',
        icon: <LaptopChromebook className="icon" />,
        path: "business",
    },
    {
        title: 'Contact',
        icon: <MailOutline className="icon" />,
        path: "contact",
    },
    {
        title: 'Docs',
        icon: <MenuBook className="icon" />,
        path: "documents",
    },
    {
        title: 'Experiment',
        icon: <Code className="icon" />,
        path: "experoment",
    },
    {
        title: 'Favorite',
        icon: <Star className="icon" />,
        path: "favorite",
    },
    {
        title: 'Gallery',
        icon: <ViewModule className="icon" />,
        path: "gallery",
    },
]
