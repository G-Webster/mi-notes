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
            <div className="p-2 ms-2 border-end bg-light" style={{maxWidth: '300px'}}>
              <div className="card-body">
                <h5 className="card-title">About</h5>
             
                <p className="card-text my-2">This is a simple app for taking notes. Still in development!</p>
            
              </div>
            </div>


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
