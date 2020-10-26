import React from "react"
import { StyledComponent } from "./ProfilBox.styled"
import my_photo from './with.JPG'


/**
 * ProfileBoxの種類
 * title
 * 各所にtext
 * list
 * image
 * iframe
 */


const ProfileBox = () => {
    return (
        <StyledComponent>
            <img src={my_photo} />
            <div className="profile">
                <h2>Profile</h2>
                <p>名前：こばやし のぶゆき</p>
                <p>性別：男</p>
                <p>年齢：29</p>
                <p>学歴：中央大学理工学部数学科卒</p>
                <p>数学教えたり,プログラミング教えたり,受託開発したり,公認心理師の勉強したりしてるフリーランス.</p>
            </div>
        </StyledComponent>
    )
}

export default ProfileBox;