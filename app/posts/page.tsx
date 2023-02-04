async function fetcheando() {
    return await fetch('http://localhost:3000/api/posts/allPosts')
}


export default async function Posts() {
    const allPostres = await fetcheando()
    const data = await allPostres.json()

    return(<pre>{JSON.stringify(data)}</pre>)
}