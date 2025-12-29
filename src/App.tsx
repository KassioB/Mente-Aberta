import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from './routes'
import { Layout } from './components/Layout'

function App() {
    return (
        <BrowserRouter basename="/Mente-Aberta">
            <Layout>
                <AppRoutes />
            </Layout>
        </BrowserRouter>
    )
}

export default App
