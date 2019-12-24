import React from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as Logo } from './logo.svg'

import './Header.css'
const Header = () => {
    return (
        <motion.header className="Header">
            <Logo />
            <h2>Filter</h2>
        </motion.header>
    )
}

export default Header
