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
            text1: "このページでは,僕の作ったアプリやエッセイの紹介をしています！",
            text2: "",
            discription: "",
            listTitle: "",
            list: [
            ],
            image: "",
        },
        // {
        //     title: "Growth record",
        //     text1: "",
        //     text2: "",
        //     listTitle: "",
        //     list: [
        //         <Link to="/growth-record/math/">数学</Link>,
        //         <Link to="/growth-record/prog">プログラミング</Link>,
        //         <Link to="/growth-record/psyc">心理学</Link>,
        //         <Link to="/growth-record/cube">ルービックキューブ</Link>,
        //     ]
        // },
        {
            wide: true,
            title: "Online Word Wolf App",
            text1: "概要：グループ会話しながら,ワードウルフするためのアプリ",
            text2: "よくあるアプリのように部屋を作成して,そこに皆で集まるような仕組みにしました",
            discription: "動作動画 by YouTube",
            listTitle: "機能や技術などの概要",
            list: [
                "React Hooks",
                "Firebaseによる,ルームの作成と,キーワード管理",
                "部屋パスワードによる友達の招待",
                "ゲーム人数の多様化",
                "ゲームの強制終了機能",
                "ゲーム終了時に狼の投票を開始する機能",
                "投票完了時に結果を表示する機能",
                "useEffectのクリーンナップ関数で使用した部屋データを削除",
                <a href="https://word-wolf-app.web.app">PreviewSite</a>,
                <a href="https://github.com/nbr41to/word-wolf-app">SourceCode</a>,
            ],
            image: "",
            movie: "https://www.youtube.com/embed/oPeAG_xw5IE",
        },
        {
            wide: true,
            title: "React todo app",
            text1: "概要：Reactを学んで初めて作ったWebアプリです.同時にUI-ライブラリの存在を知り感動したので,Material-uiも初めて使ってみました！",
            text2: "UI-ライブラリを使用すると,素人でも見た目がいい感じになることがわかった.",
            discription: "動作動画 by YouTube",
            listTitle: "機能や技術などの概要",
            list: [
                "useStateを使ったTodoの保存と削除",
                "mapメソッドによるJSXの繰り返し",
                "short-idを使って,Todoにidを振り分け,",
                "Material-uiのスタイリングの練習",
                <a href="https://nbr41to.github.io/react-first-app/">PreviewSite</a>,
                <a href="https://github.com/nbr41to/react-first-app/">SourceCode</a>,
            ],
            image: "",
            movie: "https://www.youtube.com/embed/qDre2qHap2A",
        },
        {
            wide: true,
            title: "React chat app",
            text1: "概要：Reactで作った2つ目の作品です.ずっと作りたかったリアルタイムチャットアプリです.",
            text2: "デザインの重要性を知りました.（デザイン性を重視したリアルタイムチャットはnobmath appで実装しました）",
            discription: "動作動画 by YouTube",
            listTitle: "機能や技術などの概要",
            list: [
                "Firebaseを使ったユーザ管理",
                "React RouterとuseEffectとuseContextを使ったログイン認証機能",
                "Firestoreを使ったリアルタイムでのメッセージデータ通信",
                "short-idを使ってゲストログイン機能を後から実装",
                <a href="https://nbr41to.github.io/react-second-app/">PreviewSite</a>,
                <a href="https://github.com/nbr41to/react-second-app/">SourceCode</a>,
            ],
            image: "",
            movie: "https://www.youtube.com/embed/yGBBDm893cU",
        },
        {
            wide: true,
            title: "Exercise share app DEMO",
            text1: "概要：運動の記録シェアする意識高いアプリのデモ（本番用は現在開発中...）",
            text2: "コメント：今回は",
            discription: "動作動画 by YouTube",
            listTitle: "機能や技術などの概要",
            list: [
                "4人の仮ユーザでのログイン",
                "マイプロフィールの編集（名前のみ）",
                "マイエクササイズの編集",
                "マイエクササイズから選択してコメント付けて投稿",
                "react,firebase",
                <a href="https://nbr41to.github.io/exercise_app_lite/">PreviewSite</a>,
                <a href="https://github.com/nbr41to/exercise_app_lite">SourceCode</a>,
            ],
            image: "",
            movie: "https://www.youtube.com/embed/MKHDyRA0zAY",
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
        {
            title: "Health: 有酸素運動で脳を活性化",
            text1: "4月から運動を毎日続けるためにダンスを独学で始めました.あくまでもメインは有酸素運動.",
            text2: "結果：ほぼ毎日運動が続き,ダンスの成長が楽しい.",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "Health: 水シャワー",
            text1: "風邪予防のため始めた水シャワー2年近く続いています.最初は手足だけだったのですが,最近は頭から40秒間被れるようになりました.",
            text2: "結果：風邪は年に1回くらい（もともと年5〜6回）",
            listTitle: "",
            list: [
            ]
        },
        {
            title: "Health: リーンゲインズ",
            text1: "超お手軽プチ断食を2019年4月からしています.12時〜21時以外の時間は水しかのみません.",
            text2: "結果：7kg痩せて,集中力UP",
            listTitle: "",
            list: [
            ]
        },
    ]
}