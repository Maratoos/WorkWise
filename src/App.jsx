import './App.css'
import { Header } from './components/Header/Header'
import { Auth } from './pages/Auth/Auth'
import { Home } from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { setUserAction, setUserLoadingAction } from './components/Auth/store/actions'
import { useDispatch } from 'react-redux'
import { getDocument } from './hooks/useDocument'

function App() {
  const [user, setUser] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (_user) => {
      if(_user) {
        dispatch(setUserLoadingAction(true))
        const res = await getDocument("users", _user.uid)
        setUser({ ..._user, ...res.data() })
        dispatch(setUserAction({ ..._user, ...res.data() }))
        dispatch(setUserLoadingAction(false))
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
