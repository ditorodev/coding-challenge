import React, { useState } from 'react'

import Header from './Header'
import Item from './Item'
import Modal from './Modal'
import Filter from './Filter'

import './App.css'

export const AppContext = React.createContext(null)

function App() {
    const [showFilter, setShowFilter] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    showFilter: show => setShowFilter(show),
                    showMenu: show => setShowMenu(show),
                    filterViewActive: showFilter,
                    menuViewActive: showMenu,
                }}
            >
                <Header />
                <Modal
                    isVisible={showFilter}
                    close={() => setShowFilter(false)}
                >
                    {({ close }) => <Filter close={close} />}
                </Modal>
                <div className="items">
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App
