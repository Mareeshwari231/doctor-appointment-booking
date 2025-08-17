// Function to create profile cards
export function createProfileCard(name, role) {
  const card = document.createElement("div");
  card.classList.add("card");

  const avatar = document.createElement("img");
  avatar.src = `https://i.pravatar.cc/150?u=${name}`;

  const title = document.createElement("h3");
  title.textContent = name;

  const subtitle = document.createElement("p");
  subtitle.textContent = role;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("delete-btn");
  removeBtn.addEventListener("click", () => card.remove());

  card.appendChild(avatar);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(removeBtn);

  return card;
}
