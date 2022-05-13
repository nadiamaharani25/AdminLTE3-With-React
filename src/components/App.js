import React from 'react'
import ListGenre from './ListGenre'
import Header from '../Header'
import Menu from '../Menu'
import Dashboard from '../Dashboard'
import Footer from '../Footer'


function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Dashboard />
            <ListGenre />
            <Footer />
        </div>
    )
}

export default App