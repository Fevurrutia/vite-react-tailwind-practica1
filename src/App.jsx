import { useState } from "react"
import Header from "./components/Header"
import CreateItem from "./components/CreateItem"
import ListItem from "./components/ListItem"
import CompletedItem from "./components/CompletedItem"

const StateInitialItem = [
    {id:1, title:'Titulo Item 1', completed: false},
    {id:2, title:'Titulo Item 2', completed: false},
    {id:3, title:'Titulo Item 3', completed: false},
    {id:4, title:'Titulo Item 4', completed: false},
    {id:5, title:'Titulo Item 5', completed: false}
]

const App = () => {
    const [items, setItems] = useState(StateInitialItem)

    const createItems = (title) => {
        const newItems = {
            id: Date.now(),
            title: title.trim(),
            completed: false
        }
        setItems([...items, newItems])
    }

    const updateItems = (id) => {
        setItems(items.map(item => item.id === id ? {...item, completed: !item.completed} : item))
    }

    const removeItems = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return(
        <div className="container mx-auto bg-violet-500 rounded-md mt-10 pb-10">

            <Header />

            <CreateItem 
                createItems={createItems}
            />

            <ListItem 
                items={items}
                updateItems={updateItems}
                removeItems={removeItems}
            /> 

            <CompletedItem />
        </div>
    )
}

export default App