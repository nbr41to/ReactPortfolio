import React from 'react';
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <ul className="sns_list">
                <h2>SNS</h2>
                <li><a href="https://twitter.com/Knob_nbr41to">Twitter</a></li>
                <li><a href="https://lin.ee/iTzRHQR">OfficialLINE</a></li>
                <li><a href="https://www.youtube.com/channel/UCMbCS3ynaSuLJGMX512v-lQ">nobmath</a></li>
                <li><a href="https://www.youtube.com/channel/UCRu_dGDzDp1Xh8j8N7IZm1w">Vlog</a></li>
                <li><a href="https://note.com/nbr41">note</a></li>
                <li><a href="https://github.com/nbr41to">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/knob/">Linkdin</a></li>
            </ul>
        </>
    );
}