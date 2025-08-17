import { createProfileCard } from "./cardUtils.js";

const container = document.getElementById("container");
const form = document.getElementById("profileForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();

  if (name && role) {
    const card = createProfileCard(name, role);
    container.appendChild(card);
    form.reset();
  }
});
