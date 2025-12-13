const baseUrl = "http://localhost:3000/api/posts";

export async function getAllPosts() {
    const res = await fetch(baseUrl);
    return res.json();
}

export async function getPostById(id) {
    const res = await fetch(`&{baseUrl}/${id}`);
    return res.json();

}