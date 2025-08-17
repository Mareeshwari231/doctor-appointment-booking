// Simple color change
const colorBtn = document.getElementById("colorBtn");
colorBtn.addEventListener("click", () => {
  document.body.style.background =
    document.body.style.background === "lightblue" ? "" : "lightblue";
});

// Create Card functionality
const createCardBtn = document.getElementById("createCardBtn");
const cardContainer = document.getElementById("cardContainer");

createCardBtn.addEventListener("click", () => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h3");
  title.textContent = "New Doctor Card";

  const subtitle = document.createElement("p");
  subtitle.textContent = "Specialist in Healthcare";

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("delete-btn");
  removeBtn.addEventListener("click", () => card.remove());

  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(removeBtn);

  cardContainer.appendChild(card);
});
