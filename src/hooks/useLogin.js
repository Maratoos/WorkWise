import { signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useState } from "react"
import { auth, firestore } from '../firebase/config'

export const useLogin = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    
    const login = async (email, password) => {
        setError(null)
        setIsPending(true)
        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)

            const usersRef = doc(firestore, "users", user.uid)

            await setDoc(usersRef, {isOnline: true}, {merge: true})

            setIsPending(false)
            setError(null)
            return user
        }
         catch(err) {
            setError(err.message)
            setIsPending(false)
        }
    }
    return { login, error, isPending }
}