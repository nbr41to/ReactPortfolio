import React, { useState, useEffect } from 'react'
import markdown from 'markdown/test.md'
import MarkdownSection from '../../components/organisms/MarkdownSection'

const Test = () => {
  const [markdownText, setMarkdownText] = useState()
  useEffect(() => {
    fetch(markdown).then((response) => response.text()).then((text) => {
      setMarkdownText(text);
    })
  }, [])
  return (
    <div>
      <h1>テストです</h1>
      <MarkdownSection markdown={markdownText} />
    </div>
  )
}

export default Test
