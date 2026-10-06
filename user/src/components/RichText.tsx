import { Fragment } from 'react'

// Renders **bold**, __italic__ and "\n" line breaks from plain strings.
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|__[^_]+__)/g)

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**')) return <b key={i}>{part.slice(2, -2)}</b>
        if (part.startsWith('__')) return <i key={i}>{part.slice(2, -2)}</i>
        return (
          <Fragment key={i}>
            {part.split('\n').map((line, j) => (
              <Fragment key={j}>
                {j > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </Fragment>
        )
      })}
    </>
  )
}
