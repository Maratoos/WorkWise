import './App.css'
import { Header } from './components/Header/Header'
import { Auth } from './pages/Auth/Auth'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { setUserAction } from './components/Auth/store/actions'
import { useDispatch } from 'react-redux'

function App() {
  const [user, setUser] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (_user) => {
      if(_user) {
        setUser(_user)
        dispatch(setUserAction(_user))
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
