export function List({ items }: { items: number[] }) {
  return (
    <ul>
      {items.map((n) => <li>{n}</li>)}
    </ul>
  )
}
