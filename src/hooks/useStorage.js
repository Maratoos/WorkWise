import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { auth, firestore, storage } from "../firebase/config"
import { updateProfile } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

export const useStorage = () => {
    const user = auth.currentUser
    const updateProfileImage = async (file) => {
        try{
            const filePath = `users/${user.uid}/images/avatars/${file.name}`
            const fileRef = await uploadBytesResumable(ref(storage, filePath), file)
            const fileUrl = await getDownloadURL(fileRef.ref)

            await updateProfile(user, {
                photoURL: fileUrl
            })

            const docRef = doc(firestore, "users", user.uid)

            await setDoc(docRef, {
                photoURL: fileUrl
            }, {
                merge: true
            })

            return fileUrl
        } catch(err) {
            error = err.message
            throw new Error(err.message)
        }
    }
    const updateProfileBackgroundImage = async (file) => {
        try{
            const filePath = `users/${user.uid}/images/profilebg/${file.name}`
            const fileRef = await uploadBytesResumable(ref(storage, filePath), file)
            const fileUrl = await getDownloadURL(fileRef.ref)

            await updateProfile(user, {
                profileBg: fileUrl
            })

            const docRef = doc(firestore, "users", user.uid)

            await setDoc(docRef, {
                profileBg: fileUrl
            }, {
                merge: true
            })

            return fileUrl
        } catch(err) {
            error = err.message
            throw new Error(err.message)
        }
    }

    return { updateProfileImage, updateProfileBackgroundImage }
} 