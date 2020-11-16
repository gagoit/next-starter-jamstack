import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import style from'../css/index.css'

const Home = () => (
  <div>
    <h1>Gagoit</h1>

    <h3>
      <Link href="/blog">
        <a>Read my Blog</a>
      </Link>
    </h3>
  </div>
)

export default Home
