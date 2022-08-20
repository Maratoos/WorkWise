import './App.css'
import { Header } from './components/Header/Header'
import { Auth } from './pages/Auth/Auth'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if(_user) {
        setUser(_user)
      }
    })

    return () => {
      unsub()
    }
  }, [])
  return (
    <div className="App">
      <div className="wrapper">
        {user && <Header />}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/auth' element={<Auth user={user} />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
