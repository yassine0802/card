document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const totalPrice = document.getElementById("total-price");

  let total = 0;

  items.forEach((item) => {
    const minusBtn = item.querySelector(".minus-btn");
    const plusBtn = item.querySelector(".plus-btn");
    const quantity = item.querySelector(".quantity");
    const likeBtn = item.querySelector(".like-btn");
    const deleteBtn = item.querySelector(".delete-btn");

    let price = 10; // Assuming each item costs $10

    minusBtn.addEventListener("click", () => {
      if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        total -= price;
        totalPrice.textContent = `$${total}`;
      }
    });

    plusBtn.addEventListener("click", () => {
      quantity.textContent = parseInt(quantity.textContent) + 1;
      total += price;
      totalPrice.textContent = `$${total}`;
    });

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("loved");
    });

    deleteBtn.addEventListener("click", () => {
      total -= parseInt(quantity.textContent) * price;
      totalPrice.textContent = `$${total}`;
      item.remove();
    });

    total += price;
  });

  totalPrice.textContent = `$${total}`;
});
