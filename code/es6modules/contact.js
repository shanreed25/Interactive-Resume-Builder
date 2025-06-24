
export function updateContactSection(contactInputs){
    contactInputs.forEach((input) => {
      input.addEventListener("input", () => {
            document.getElementById("preview-first-name").innerText =
            document.getElementById("first-name").value;
            document.getElementById("preview-last-name").innerText =
            document.getElementById("last-name").value;                                 
            document.getElementById("preview-email").innerText =
            document.getElementById("email").value;
            document.getElementById("preview-phone-number").innerText =
            document.getElementById("phone-number").value;
            document.getElementById("preview-city").innerText =
            document.getElementById("city").value + ',';
            document.getElementById("preview-state").innerText =
            document.getElementById("state").value;
      });
    });

}
