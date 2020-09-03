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
            title: "Welcome my site!!",
            text1: "ここは,僕のポートフォリオ&ラボです！自己紹介用のページを作ったり,自分の興味のある実験やその記録をしています.僕の人生における知見をここに成長の記録として残せたら良いなと考えています！ゆっくりしていってください！",
            text2: "",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "List in progress",
            text1: "今,取り組んでいること",
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
            title: "このWebサイトの紹介",
            text1: "更新履歴として,実装した機能を記します.",
            text2: "使用技術：React, React Hooks, React Router, styled-components, react-markdown, Firebase",
            discription: <a href="https://github.com/nbr41to/ReactPortfolio">source https://github.com/nbr41to/ReactPortfolio</a>,
            listTitle: "機能や技術などの概要",
            list: [
                "2020/09/02 -",
                "デザインの大幅改変",
                "PC版アイコンメニューの追加",
                "ページ内遷移できるサブメニューの追加",
                "スマホ用ハンバーガーメニューの追加",
                "SectionComponentのみでページのカードを手軽に配置できるようにした.（画像や動画埋め込みにも対応）",
                "Markdownファイルからページを生成できるようにした（サブメニューの生成よりも早い課題あり）",
                "コンテンツのテキストはすべて,ページごとに分けたjsファイルにオブジェクトとして管理できるようにリファクタリング",
                "PC版アイコンメニューの追加",
                "2020/08/15 -",
                "Reactで作成したポートフォリオに移行",
                "ドメインも移行",
                "純正のReactとReact Routerを使用",
                "Atomic Design風にしてある",
                "さっくりとそれっぽいものを作って終了",
            ],
            image: "",
            movie: "",
        },
    ],
}
