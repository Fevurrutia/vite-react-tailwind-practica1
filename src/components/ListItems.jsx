import CrossIcon from "./icons/CrossIcon"

const ListItems = ({ item, updateItems, removeItems }) => {
    return (
        <article className="flex justify-between items-center rounded-md bg-white mx-10 p-3 mt-3">
            <button 
                className={`${item.completed
                ? "border-2 border-none border-gray-400 rounded-full w-8 h-8 bg-green-700" 
                : "border-2 border-gray-400 rounded-full w-8 h-8" 
                }`}
                onClick={() => updateItems(item.id)}
            >
            </button>
            
            <p className={`font-semibold text-gray-500 ${item.completed && "line-through" }`}>{item.title}</p>
            <button onClick={() => removeItems(item.id)}> <CrossIcon /> </button>
        </article>
    )
}

export default ListItems