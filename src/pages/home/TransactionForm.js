import { useEffect, useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export default function TransactionForm ({uid}) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const {addDocument, response} = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({name, amount})
        addDocument( { uid, name, amount})
    }
    //reset the form fields if write successfull
    useEffect(() => {
        if (response.success) {
            setName('')
            setAmount('')
        }
    }, [response.success])

    return (
        <>
            <h3>Add a transaction</h3>
            <form onSubmit= { handleSubmit}>
                <label>
                    <span>Transaction name:</span >
                    <input type="text" required onChange={(e) => setName(e.target.value)} value={ name } />
                </label>

                <label>
                    <span>Amount (€):</span>
                    <input type="number" required onChange={(e) => setAmount(e.target.value)} value={ amount }  />
                </label>

                <button> Add transaction </button>
            </form>

        </>
    )
}