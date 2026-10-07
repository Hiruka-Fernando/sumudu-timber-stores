import type { ReactNode } from 'react'
import '../styles/Products.css'

type Props = {
  title: string
  lead: string
  body?: string[]
  children?: ReactNode
}

export default function ProductHero({ title, lead, body = [], children }: Props) {
  return (
    <section className="products-hero text-center d-flex align-items-center justify-content-center">
      <div className="products-hero-box p-4 rounded">
        <h2 className="section-title mb-3">{title}</h2>
        <p className="lead text-light">{lead}</p>
        {body.map((text) => (
          <p className="text-light" key={text}>
            {text}
          </p>
        ))}
        {children}
      </div>
    </section>
  )
}
