
export async function fetchAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
}




