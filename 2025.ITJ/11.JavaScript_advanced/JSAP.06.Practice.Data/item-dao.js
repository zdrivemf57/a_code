const API_URL = "http://localhost:3000/items";

async function getItems() {
    const res = await fetch(API_URL);
    return await res.json();
}

async function addItem(item) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });   
}

export { getItems, addItem };
