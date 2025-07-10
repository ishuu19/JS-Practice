document.querySelector(".result").style.display = "none";

document.getElementById('calculate').addEventListener('click', calculateAge);

function calculateAge() {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if(dob > today){
        showModal("Please enter a valid date of birth");
        return;
    }
    if (dob === "") {
        showModal("Please enter your date of birth");
        return;
      }
      
    const birthDate = new Date(dob);
    const age = today.getFullYear() - birthDate.getFullYear();
    document.querySelector(".result").style.display = "block";
    document.getElementById('age').innerHTML = `You are ${age} years old`;
}

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.querySelector(".close");

function showModal(message) {
  modalMessage.textContent = message;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

