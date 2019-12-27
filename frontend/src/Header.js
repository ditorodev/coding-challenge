import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ReactComponent as Logo } from './logo.svg'

import { AppContext } from './App'

import './Header.css'

const Header = () => {
    const { showFilter, showCreate } = useContext(AppContext)
    return (
        <motion.header className="Header">
            <Logo />
            <motion.h2
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => showFilter(true)}
            >
                Filter
            </motion.h2>
            <motion.h2
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => showCreate(true)}
            >
                Create
            </motion.h2>
        </motion.header>
    )
}

export default Header
