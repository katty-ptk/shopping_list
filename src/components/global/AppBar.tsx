import React from 'react'

type AppBarProps = {
    text: string
}

function AppBar({ text }: AppBarProps) {
  return (
    <div className="appbar">
        <h1>{text}</h1>
      </div>
  )
}

export default AppBar