// Jhankar code
function updateProduct(isIncrease, inputId, priceId, unitePrice) {
    // update iphone
    const productInput = document.getElementById(inputId);
    let productNumber = productInput.value;
    if (isIncrease) {
      productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
      productNumber = parseInt(productNumber) - 1;
    }
  
    // update price
    productInput.value = productNumber;
    const productTotal = document.getElementById(priceId);
    productTotal.innerText = productNumber * unitePrice;
  
    updateSummery();
  }
  
  // update cart summery
  function updateSummery() {
    const phoneInput = document.getElementById("iphone-quantity");
    const phonePrice = phoneInput.value * 1219;
  
    const coverInput = document.getElementById("cover-quantity");
    const coverPrice = coverInput.value * 55;
  
    const subtotal = phonePrice + coverPrice;
    document.getElementById("subtotal").innerText = subtotal;
  
    const tax = (document.getElementById("tax").innerText = (subtotal * 5) / 100);
    const total = (document.getElementById("total").innerText =
      subtotal + (subtotal * 5) / 100);
  }
  
  document.getElementById("iphone-plus").addEventListener("click", () => {
    updateProduct(true, "iphone-quantity", "iphone-price", 1219);
  });
  
  document.getElementById("iphone-minus").addEventListener("click", () => {
    updateProduct(false, "iphone-quantity", "iphone-price", 1219);
  });
  document.getElementById("cover-plus").addEventListener("click", () => {
    updateProduct(true, "cover-quantity", "cover-price", 55);
  });
  
  document.getElementById("cover-minus").addEventListener("click", () => {
    updateProduct(false, "cover-quantity", "cover-price", 55);
  });
  
  // remove items from cart
  const removeItem = Array.from(document.getElementsByClassName("remove-item"));
  for (const item of removeItem) {
    item.addEventListener("click", () => {
      const parent = item.parentNode.parentNode.parentNode.parentNode;
      const child = item.parentNode.parentNode.parentNode;
      parent.removeChild(child);
    });
  }