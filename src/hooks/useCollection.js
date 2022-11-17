import { addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc, Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestore } from "../firebase/config";

export const useCollection = (collectionName) => {
    const [isCancelled, setIsCancelled] = useState(false)

    const collectionRef = collection(firestore, collectionName)

    const addDocument = async (newDocument) => {
        try {
            const addedDoc = await addDoc(collectionRef, { ...newDocument, createdAt: Timestamp.fromDate(new Date()),})
        } catch(err) {
            console.log(err.message)
        }
    }
    
    const updateDocument = async (docId, collectionName, newData) => {
        try{
           return await setDoc(doc(firestore, collectionName, docId), newData, { merge: true }) 
        } catch (err) {
            return null
        }
    }

    const deleteDocument = async (docId) => {
        try {
            await deleteDoc(doc(firestore, collectionName, docId))
        } catch (err) {
        }
    }

    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { addDocument, isCancelled, response, updateDocument, deleteDocument }
}

export const useGetCollection = (collectionName, options) => {
    const [documents, setDocuments] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const collectionRef = query(collection(firestore, collectionName))

        const unsubscribe = onSnapshot(collectionRef, (snap) => {
            let results = []

            snap.docs.forEach((doc) => {
                results.push({ ...doc.data(), id: doc.id})
            });

            setDocuments(results)
            setError(null)
        })
        return () => {
            unsubscribe()
        }
    }, [collectionName, options])

    return { documents, error }
}

