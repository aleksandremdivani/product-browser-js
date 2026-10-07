let allProducts = [];
const renderProducts = (products) => {
  const productsList = document.getElementById("products-list");
  productsList.innerHTML = "";
  products.forEach((p) => {
    productsList.innerHTML += `
    <li>
    <h2>${p.title}</h2>
    </li>
    `;
  });
};

const serachField = document.getElementById("search-inp");
serachField.addEventListener("input", (e) => {
  const value = e.target.value;
  const filteredProducts = allProducts.filter((i) => {
    return i.title.toLowerCase().includes(value.toLowerCase());
  });
  renderProducts(filteredProducts);
});

const fetchProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    data = await response.json();
    allProducts = data.products;
    console.log(allProducts);
    renderProducts(allProducts);
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();
