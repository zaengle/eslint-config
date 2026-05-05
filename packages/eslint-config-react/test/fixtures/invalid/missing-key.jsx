export function List({ items }) {
  return (
    <ul>
      {items.map((n) => <li>{n}</li>)}
    </ul>
  )
}
