import React from "react"
import {
    Link,
    Redirect,
} from 'react-router-dom';
import {

} from '@material-ui/icons';
// iconはここでインポートしておく

/**
 * home.sections
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

export const home = {
    sections: [
        {
            title: "Welcome!!",
            text1: "ここは,僕のポートフォリオ&ラボです！自身とともに成長します.ゆっくりしていってください！",
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
                "駆け出しプログラマー [JavaScript, React, React Native, TypeScript, Gatsby, GraphQL, Storybook]",
                "第4回 公認心理師 資格認定試験",
                <a href="https://www.youtube.com/channel/UCMbCS3ynaSuLJGMX512v-lQ">数学支援 [nobmath]</a>,
                "ダンスの練習",
                "Grow up Community運営 [LearnCir]",
                <a href="https://note.com/nbr41">note毎日更新</a>,

            ]
        },
        {
            wide: "",
            title: "Exercise share app DEMO [本番用を現在開発中...]",
            text1: "概要：運動の記録シェアする意識高いアプリのデモ（本番用は現在開発中...）",
            text2: "コメント：今回は",
            discription: <a href="https://nbr41to.github.io/exercise_app_lite/">https://nbr41to.github.io/exercise_app_lite/</a>,
            listTitle: "機能や技術などの概要",
            list: [
                "ログイン,ゲストログイン",
                "マイプロフィールの編集",
                "マイエクササイズの編集",
                "マイエクササイズから選択してコメント付けて投稿",
                "他人の投稿からエクササイズをコピー",
                "他人の投稿へのいいね機能",
                "react,firebase",
            ],
            image: "",
            movie: "",
        },
    ],
}
