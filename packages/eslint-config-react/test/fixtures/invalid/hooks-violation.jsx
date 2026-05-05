import { useState } from 'react'

export function Bad({ flag }) {
  if (flag) {
    const [x] = useState(0)
    return <p>{x}</p>
  }
  return null
}
