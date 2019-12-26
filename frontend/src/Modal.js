import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import './Modal.css'

const Modal = ({ isVisible, close, children }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <motion.div
                        className="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => close(false)}
                    />
                    <motion.div
                        className="Modal"
                        initial={{ scale: 0.5, translateY: -200 }}
                        animate={{ scale: 1, translateY: 0 }}
                        exit={{ scale: 0, translateY: -200, opacity: 0 }}
                    >
                        {children({ close })}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Modal
