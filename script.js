const btn = document.querySelector("button");
const user = document.querySelector("input");
const img = document.querySelector("img");

const nameDiv = document.querySelector("#name");
const fullname = document.querySelector("#fullname");
const bio = document.querySelector("#bio");
const repos = document.querySelector("#repos");
const followers = document.querySelector("#followers");
const locationDiv = document.querySelector("#location");
const company = document.querySelector("#company");

const main = document.querySelector("#main");

const url = "https://api.github.com/users/";

const genratecard = async () => {
  if (!user.value.trim()) {
    alert("Please enter a username");
    return;
  }

  let URL = `${url}${user.value.trim()}`;
  let response = await fetch(URL);

  if (!response.ok) {
    alert("User not found!");
    return;
  }

  let data = await response.json();
  img.src = data.avatar_url;
  nameDiv.textContent = `Username: ${data.login}`;
  fullname.textContent = `Full Name: ${data.name || "Not available"}`;
  bio.textContent = `Bio: ${data.bio || "No bio available"}`;
  repos.textContent = `Public Repos: ${data.public_repos}`;
  followers.textContent = `Followers: ${data.followers} | Following: ${data.following}`;
  locationDiv.textContent = `Location: ${data.location || "Not specified"}`;
  company.textContent = `Company: ${data.company || "Not specified"}`;
};

btn.addEventListener("click", async () => {
  await genratecard();
  main.classList.add("visible");
});
