import ListItems from "./ListItems"

const ListItem = ({ items, updateItems, removeItems }) => {
    return (
        <section className="mt-5">
            {
                items.map(item => (
                    <ListItems 
                        key={item.id}
                        item={item}
                        updateItems={updateItems}
                        removeItems={removeItems}
                    />
                ))
            }
        </section>
    )
}

export default ListItem