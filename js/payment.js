// Toggle transaction fields
function showTransactionFields(method) {
  document.querySelectorAll('.transaction-fields').forEach(el => el.style.display = 'none');
  if (method) {
    const selected = document.getElementById(method);
    if (selected) {
      selected.style.display = 'block';
    }
  }
}

// Validation function
function validateInput(input) {
  const value = input.value.trim();
  const parent = input.parentElement;

  // Remove old icons if any
  let oldIcon = parent.querySelector('i');
  if (oldIcon) oldIcon.remove();

  if (value !== "") {
    input.style.border = "2px solid green";
    const icon = document.createElement("i");
    icon.className = "bx bx-check-shield";
    icon.style.color = "green";
    icon.style.marginLeft = "8px";
    parent.appendChild(icon);
  } else {
    input.style.border = "2px solid red";
    const icon = document.createElement("i");
    icon.className = "bx bx-alert-shield";
    icon.style.color = "red";
    icon.style.marginLeft = "8px";
    parent.appendChild(icon);
  }
}

// Attach validation to all inputs
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".transaction-fields input").forEach(input => {
    input.addEventListener("blur", () => validateInput(input));
  });

  // Add confirm button functionality
  document.querySelectorAll(".transaction-fields .confirm-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const section = btn.closest(".transaction-fields");
      let allValid = true;
      section.querySelectorAll("input").forEach(input => {
        validateInput(input);
        if (input.value.trim() === "") {
          allValid = false;
        }
      });
      if (allValid) {
        alert("All details confirmed for " + section.id.toUpperCase());
      } else {
        alert("Please fill all required fields for " + section.id.toUpperCase());
      }
    });
  });
});
