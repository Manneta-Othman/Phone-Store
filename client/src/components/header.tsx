import React from 'react'
import style from './header.module.scss'
import Link from 'next/link'

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className={style.container}>
      <h1>
        <span>M.Phone</span>
        <span>Store</span>
      </h1>

      <form action="">
        <input type="text" />
      </form>

      <ul className={style.navlist}>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <Link href='/about'>
          <li>About</li>
        </Link>
        <Link href='/signin'>
          <li>Sign In</li>
        </Link>
      </ul>
    </div>
  )
}