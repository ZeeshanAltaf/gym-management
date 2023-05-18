import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const DashLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  return (
    <div className='p-0'>
      <Link style={{ color: match ? '#F05024' : 'black' }} to={to} {...props}>
        {children}
      </Link>
    </div>
  )
}

export default DashLink