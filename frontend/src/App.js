import React, { useEffect, useState } from 'react'

import Header from './Header'
import Item from './Item'
import Modal from './Modal'
import Filter from './Filter'
import Create from './Create'
import api from './api'

import './App.css'

export const AppContext = React.createContext(null)

function App() {
    const [showFilter, setShowFilter] = useState(false)
    const [showCreate, setShowCreate] = useState(false)
    const [apartments, setApartments] = useState(null)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        async function loadApartments() {
            api.get('/apartments/all').then(res => {
                setApartments(res.data.data.apartments)
                setLoad(false)
            })
        }
        if (load) {
            loadApartments()
        }
    }, [load, setApartments])

    return (
        <div className="App">
            <AppContext.Provider
                value={{
                    showFilter: show => setShowFilter(show),
                    showCreate: show => setShowCreate(show),
                    setApartments,
                    setLoad,
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
                    {({ close }) => <Create close={close} />}
                </Modal>
                <div className="items">
                    {load ? (
                        'Loading...'
                    ) : (
                        <>
                            {apartments.map(apartment => (
                                <Item
                                    {...apartment}
                                    bedrooms={apartment.number_bedrooms}
                                    bathrooms={apartment.number_bathrooms}
                                />
                            ))}
                        </>
                    )}
                </div>
            </AppContext.Provider>
        </div>
    )
}

export default App
