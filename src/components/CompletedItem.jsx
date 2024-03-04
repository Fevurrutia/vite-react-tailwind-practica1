const CompletedItem = () => {
    return (
        <section className="mt-10">
            <article className="flex justify-between items-center bg-white rounded-md py-3 px-5 mx-5">
                <span className="font-semibold text-gray-500">5 items left</span>
                <button className="font-semibold text-gray-500">Clear Completed</button>
            </article>
        </section>
    )
}

export default CompletedItem