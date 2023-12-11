import React from 'react'

function FirstComponents(props) {
  return (
    <>
    <h1>Happy birthday</h1>
    <h2>{props.firstName} {props.Lastname}</h2>
    <i>{props.children}</i>
    </>
  )
}

export default FirstComponents