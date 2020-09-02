import React from 'react';
import Section from '../../components/organisms/Section'

export default function Programing() {
    return (
        <div className="programming">
            <h1>Programming</h1>
            <h2>成長を記録するページです.</h2>
            <ul>
                <h2>開発物一覧</h2>
                <li><a href="https://nobmath123.web.app/">数学学習支援アプリ（個人開発）</a></li>
                <li><a href="https://karaokensaku.web.app/">カラオケ検索(共同開発)</a></li>
            </ul>
        </div>
    );
}