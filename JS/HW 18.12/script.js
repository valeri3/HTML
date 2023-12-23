document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            const table = document.createElement("table");
            table.border = "1";
            const thead = document.createElement("thead");
            const headerRow = document.createElement("tr");
            Object.keys(data[0]).forEach(key => {
                const th = document.createElement("th");
                th.textContent = key;
                headerRow.appendChild(th);
            });
            
            thead.appendChild(headerRow);
            table.appendChild(thead);
            const tbody = document.createElement("tbody");
            data.forEach(item => {
                const row = document.createElement("tr");

                if (item.completed) {
                    row.style.backgroundColor = "green";
                } else {
                    row.style.backgroundColor = "red";
                }

                Object.values(item).forEach(value => {
                    const td = document.createElement("td");
                    td.textContent = value;
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            document.body.appendChild(table);
        })
        .catch(error => console.error("Error fetching data:", error));
});