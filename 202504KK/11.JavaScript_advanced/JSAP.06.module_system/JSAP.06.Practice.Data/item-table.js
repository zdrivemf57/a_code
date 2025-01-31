function createTableHeader() {
  const th1 = document.createElement("th");
  const th2 = document.createElement("th");
  th1.textContent = "商品名";
  th2.textContent = "値段";
  const thead = document.createElement("thead");
  thead.append(th1, th2);
  return thead;
}

function createTableRow({ name, price }) {
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");

  td1.textContent = name;
  td2.textContent = price + "円";
  const tr = document.createElement("tr");
  tr.append(td1, td2);
  return tr;
}

function createTable(items) {
  const tbody = document.createElement("tbody");
  items.forEach((item) => {
    const tr = createTableRow(item);
    tbody.append(tr);
  });

  const table = document.createElement("table");
  table.setAttribute("id", "item-table");
  table.append(createTableHeader(), tbody);
  return table;
}

function appendTableRow(item) {
  document.querySelector("#item-table tbody").append(createTableRow(item));
}

export { createTable, appendTableRow };
