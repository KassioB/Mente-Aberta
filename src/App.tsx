import { Footer } from './components/Footer'
import { BrowserRouter } from "react-router"
import { AppRoutes } from './routes'

function App() {


    return (
        <>
            <BrowserRouter>
                <AppRoutes />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
