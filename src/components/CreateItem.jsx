import { useState } from "react"

const CreateItem = ({ createItems }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        createItems(title)
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                placeholder="Create new item..."
                className="w-full px-5 py-3 rounded-md mx-5"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
        </form>
    )
}

export default CreateItem