import * as React from 'react'
import { Link } from 'gatsby'
const AboutPage = () => {
  const test: string = 'tttt';
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>{test}</p>
    </main>
  )
}
export default AboutPage