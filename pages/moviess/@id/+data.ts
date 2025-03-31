export { data };

async function data(pageContext: { routeParams: { id: string } }) {
  let product = {
    name: "Product Name",
    price: 100,
    ids: pageContext.routeParams.id,
  };

  product = {
    name: product.name,
    price: product.price,
    ids: pageContext.routeParams.id,
  };
  console.log("hello from server");
  console.log("APISETTING");
  return product;
}
