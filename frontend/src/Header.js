import React from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as Logo } from './logo.svg'

import './Header.css'
const Header = () => {
    return (
        <motion.header className="Header">
            <Logo />
            <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                Filter
            </motion.h2>
            <motion.h2 whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                Menu
            </motion.h2>
        </motion.header>
    )
}

export default Header
