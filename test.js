const hi = async () => {
    const x = await fetch("https://jsonplaceholder.typicode.com/todos")
    return x
}
console.log("hi",hi())
console.log("s")