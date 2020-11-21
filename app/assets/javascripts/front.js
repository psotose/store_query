function getData() {
  fetch("/products/all_categories")
    .then((response) => response.json())
    .then((categories) => {
      var select = document.getElementById("categories_select");
      var optionAll = `<option value="">Todas las categorias</option>`;
      select.innerHTML = optionAll;
      categories.forEach((element) => {
        select.innerHTML += `<option value="${element.id}">${element.name}</option>`;
      });
    });
}

function getProducts() {
  alert("boton");
}
