import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import {
    Email,
    Twitter,
    Note,
    GitHub,
} from '@material-ui/icons';
// iconはここでインポートしておく

/**
 * contact.sections
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

export const contact = {
    sections: [
        {
            title: "SNS",
            text1: "LINE,Twitter,E-mailがレス早いです.",
            text2: "",
            listTitle: "",
            list: [
                <a href="nbr.41to@gmail.com">E-mail</a>,
                <a href="https://twitter.com/Knob_nbr41to">Twitter</a>,
                <a href="https://note.com/nbr41">note</a>,
                <a href="https://lin.ee/iTzRHQR">OfficialLINE</a>,
                <a href="https://www.youtube.com/channel/UCMbCS3ynaSuLJGMX512v-lQ">nobmath</a>,
                <a href="https://www.youtube.com/channel/UCRu_dGDzDp1Xh8j8N7IZm1w">Vlog</a>,
                <a href="https://github.com/nbr41to">GitHub</a>,
                <a href="https://www.linkedin.com/in/knob/">Linkdin</a>,
            ]
        },
    ]
}


// export const pages = []