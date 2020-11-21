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

  alert("sdsdsdsd");
  getProducts("", "");
}

function getProducts(category, name) {
  fetch(`/products/all_products?category=${category}&name=${name}`)
    .then((response) => response.json())
    .then((products) => {
      var div = document.getElementById("list_products");

      products.forEach((element) => {
        var product = `<div class="col mb-2">
        <div class="card h-100 border border-success">
          <div class="card-img-top">
            <img src="" class:"card-img-top mt-2" width="300" height="300"/>
          </div>
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
          </div>
          <div class="card-footer bg-white">
            <div class="row">
              <div class="col-8">
                <p class="text-success font-weight-bold pt-3 pb-0 pl-4">${element.price}</p>
              </div>
              <div class="col-4">
                <p class="pt-2"><img src="" alt="Add Product to Cart" style="height: 2em" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
        div.innerHTML += product;
      });
    });
}
