import React from 'react'
import styles from './Banner.module.css'
import { FaChevronLeft,FaEllipsisV } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={styles.banner}>
        <span><FaChevronLeft /></span>
        <span>BitCoin Wallet</span>
        <span><FaEllipsisV /></span>
    </div>
  )
}

export default Banner