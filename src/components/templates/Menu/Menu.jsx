import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { StyledComponent } from "./Menu.styled"
import { menu } from 'contents/menu'

const Menu = ({ row }) => {
  let [subtitle, setSubtitle] = useState()
  const location = useLocation()
  const getH2tagsText = () => {
    const content = document.getElementById("content")
    const getValue = content.getElementsByTagName("h2");
    // ここで getValueはHTMLCollection という配列もどきになっているので.配列メソッドは使えない
    // そこで,Array.prototypeを使う
    Array.prototype.map.call(getValue, (item, index) => {
      // idを割り振って
      item.id = index
      // そのcontentTextを取得
      subtitle.push(item.innerText)
      setSubtitle(subtitle)
    })

    // // 一度配列にしないと.mapできない
    // const h2array = [...getValue];
    // // map...返り値○,forEach...返り値×
    // console.log(h2array)
    // h2array.map((h2, index) => {
    //   console.log(h2.id)
    //   // setSubtitle([...subtitle, h2.innerText])
    //   // なぜこれができない...
    //   subtitle.push(h2.innerText)
    //   setSubtitle(subtitle)
    //   // console.log(subtitle)
    // })
  }

  useEffect(() => {
    subtitle = []
    setSubtitle(subtitle)
    getH2tagsText()
    // console.log(subtitle)
  }, [location])

  return (
    <StyledComponent row={row}>
      <h2>― <strong>MENU</strong> ―</h2>
      <ul>
        {menu.map((list, index) => {
          const path = `/${list.path}`
          return (
            <>
              <li className={location.pathname === "/" + list.path ? 'active' : ''} key={index}>
                <Link to={path}>
                  {list.icon}
                  <span>{list.title}</span>
                </Link>
              </li>
              {subtitle &&
                <ul className={`subtitle ${location.pathname === "/" + list.path ? 'subtitle_active' : ''}`}>
                  {subtitle.map((item, index) => <li><a href={"#" + index}>{item}</a></li>)}
                </ul>
              }
            </>
          )
        })}
        {/* ここできたときまじ,嬉しかった */}
      </ul>
    </StyledComponent>
  )
};

export default Menu