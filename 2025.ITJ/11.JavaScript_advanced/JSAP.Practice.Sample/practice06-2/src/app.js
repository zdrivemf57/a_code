import { getItems } from "./item-dao";
import { createForm } from "./item-form";
import { createTable } from "./item-table";

async function init() {
    const app = document.getElementById("app");
    
    const itemForm = createForm();
    
    const items = await getItems();
    const itemsTable = createTable(items);
    
    app.append(itemForm, itemsTable);
}

init();