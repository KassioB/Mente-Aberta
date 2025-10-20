import { Footer } from './components/Footer'
import { BrowserRouter } from "react-router"
import { AppRoutes } from './routes'
import { Booklet } from './pages/Booklet'

function App() {


    return (
        <>
            <BrowserRouter>
                <AppRoutes />
                <Booklet />
            </BrowserRouter>
        </>
    )
}

export default App
