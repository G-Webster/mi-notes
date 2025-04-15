import './App.css'
import { HashRouter } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Header from './components/Header'

function App() {
 
  return (
     <div>
         <Header />
      <div className="">
      <main>
        <div className="d-flex flex-row mb-3">
          <div className="p-2 show-on-desk">
            {/* Flex item 1 */}
            </div>
          <div className="p-2 flex-grow-1 main-content">
          <HashRouter>
              <AppRoutes />
          </HashRouter>
          </div>
          <div className="p-2 show-on-desk">
            {/* Flex item 3 */}
            </div>
        </div>
     </main>
       </div>
     </div>
  )
}

export default App
