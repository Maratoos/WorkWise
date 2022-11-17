import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth, firestore } from '../firebase/config'
import { useAuthContext } from "./useAuthContext"
import { doc, setDoc } from "firebase/firestore"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            const usersRef = doc(firestore, "users", user.uid)
            await setDoc(usersRef, {
                isOnline: false
            }, { merge: true })

            await signOut(auth)

            setIsPending(false)
            setError(null)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { logout, error, isPending }
}