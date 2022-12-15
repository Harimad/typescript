import React from 'react'
import { add } from '../functions/hello.js'

const Hello = () => {
  return <div>Hello {add(1, 2)}</div>
}

export default Hello
