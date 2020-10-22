// Webサイトの文章はなるべくここに
import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import {
} from '@material-ui/icons';
// iconはここでインポートしておく

/**
 * business.sections
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

export const business = {
    sections: [
        {
            title: "Technology × Psychology",
            text1: "ITと心理学を使って,多くの人が幸せに暮せる方法を追求しております.できることがありましたら,CONTACTから気軽に連絡ください.",
            text2: "",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "具体的なできること",
            text1: "",
            text2: "依頼したお仕事は守秘義務を厳守した上で実施いたします.",
            listTitle: "",
            list: [
                "総合コンサルティング",
                "HTML/CSS/SassでのWebコーディング",
                "Reactでの簡単なアプリケーション開発",
                "心理コンサルティング",
                "コーチング",
                "カウンセリング",
                "お悩み相談",
                "成長メンター",
                "学習メンター",
                "数学講師（中学・高校）",
            ]
        },
    ],
}
