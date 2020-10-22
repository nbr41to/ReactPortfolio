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
                <p>年齢：28</p>
                <p>学歴：中央大学理工学部数学科卒</p>
                <p>仕事：6年間教員やってました</p>
            </div>
        </StyledComponent>
    )
}

export default ProfileBox;