import React from "react"
import { Link } from "gatsby"

type HeaderProps = {
  siteTitle?: string
};

const styles = {
  header: {
    background: 'rebeccapurple',
    marginBottom: '1.45rem'
  },
  div: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '1.45rem 1.0875rem'
  },
  h1: {
    margin: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export function Header({ siteTitle = "" }: HeaderProps): JSX.Element {
  return (
    <header style={styles.header} >
      <div style={styles.div} >
        <h1 style={styles.h1}>
          <Link to="/" style={styles.link} >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}
