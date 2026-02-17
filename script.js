document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".search-box");
  const input = document.querySelector(".search-input");
  const wrapper = document.querySelector(".wrapper");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    const query = input.value.trim();
    if (!query) return;

    // Hide the wrapper (search box area)
    wrapper.style.display = "none";

    // Create a centered loading container
    const loadingDiv = document.createElement("div");
    loadingDiv.id = "loading";
    loadingDiv.style.display = "flex";
    loadingDiv.style.flexDirection = "column";
    loadingDiv.style.justifyContent = "center";
    loadingDiv.style.alignItems = "center";
    loadingDiv.style.height = "80vh"; // center vertically
    loadingDiv.style.color = "white";
    loadingDiv.style.fontFamily = "'Syne', sans-serif";

    // Add "Fetching results..." text
    const loadingText = document.createElement("span");
    loadingText.textContent = `Fetching results for "${query}".`;
    loadingText.style.fontSize = "22px";
    loadingText.style.marginBottom = "20px";

    // Add a monotone spinner
    const spinner = document.createElement("span");
    spinner.classList.add("spinner");

    // Append text + spinner
    loadingDiv.appendChild(loadingText);
    loadingDiv.appendChild(spinner);

    // Append to body
    document.body.appendChild(loadingDiv);
  });
});
