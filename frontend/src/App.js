import React, { useState } from 'react'

import Header from './Header'
import Item from './Item'
import Modal from './Modal'
import Filter from './Filter'

import './App.css'

export const AppContext = React.createContext(null)

function App() {
    const [showFilter, setShowFilter] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [apartments, setApartments] = useState(null)

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    showFilter: show => setShowFilter(show),
                    showCreate: show => setShowCreate(show),
                    filterViewActive: showFilter,
                    menuViewActive: showCreate,
                    setApartments,
                }}
            >
                <Header />
                <Modal
                    isVisible={showFilter}
                    close={() => setShowFilter(false)}
                >
                    {({ close }) => <Filter close={close} />}
                </Modal>
                <Modal
                    isVisible={showCreate}
                    close={() => setShowCreate(false)}
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
