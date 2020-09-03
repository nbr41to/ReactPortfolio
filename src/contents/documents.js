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
            wide: "",
            title: "Exercise share app DEMO",
            text1: "概要：運動の記録シェアする意識高いアプリのデモ（本番用は現在開発中...）",
            text2: "コメント：今回は",
            discription: <a href="https://nbr41to.github.io/exercise_app_lite/">https://nbr41to.github.io/exercise_app_lite/</a>,
            listTitle: "機能や技術などの概要",
            list: [
                "4人の仮ユーザでのログイン",
                "マイプロフィールの編集（名前のみ）",
                "マイエクササイズの編集",
                "マイエクササイズから選択してコメント付けて投稿",
                "react,firebase",
            ],
            image: "",
            movie: "",
        },
        {
            wide: "",
            title: "nobmath app",
            text1: "概要：YouTubeチャンネルnobmathのWebアプリ",
            text2: "",
            discription: <a href="https://nobmath123.web.app/">https://nobmath123.web.app/</a>,
            listTitle: "機能や技術などの概要",
            list: [
                "YouTube Data API を使った最新の動画10件",
                "メッセージと写真を送信するとSlackに通知が来て,firestrageに保存された画像も表示される機能",
                "Firestoreを用いた簡単なリアルタイムチャット機能",
                "react,firebase",
            ],
            image: "",
            movie: "",
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