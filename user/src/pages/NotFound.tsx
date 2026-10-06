import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found | Sumudu Timber Stores & Sawmills')
  return (
    <div className="container text-center py-5 my-5">
      <h1 className="display-4">404</h1>
      <p className="lead">This page doesn&rsquo;t exist (or hasn&rsquo;t been converted yet).</p>
      <Link className="btn btn-secondary" to="/">
        Back to home
      </Link>
    </div>
  )
}
