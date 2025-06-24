import { formatPhoneNumber } from "./functions/formatPhoneNumber.js";
export function updateContactSection(contactInputs){
    contactInputs.forEach((input) => {
      input.addEventListener("input", () => {
            document.getElementById("preview-first-name").textContent =
            document.getElementById("first-name").value;
            document.getElementById("preview-last-name").textContent =
            document.getElementById("last-name").value;                                 
            document.getElementById("preview-email").textContent =
            document.getElementById("email").value;
            document.getElementById("preview-phone-number").textContent =
            formatPhoneNumber(document.getElementById("phone-number").value);
            document.getElementById("preview-location").textContent =
            document.getElementById("location").value;
      });
    });

}
