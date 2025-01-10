import { getItems } from "./item-dao.js";
import { createForm } from "./item-form.js";
import { createTable } from "./item-table.js";

async function init() {
    const app = document.getElementById("app");
    
    const itemForm = createForm();
    
    const items = await getItems();
    const itemsTable = createTable(items);
    
    app.append(itemForm, itemsTable);
}

init();
