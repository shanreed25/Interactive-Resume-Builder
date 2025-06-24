//Generate PDF from Preview-------------------------------------------------------------------------------------------------------------------
export function generatePDF() {
  // Choose the element to convert
  const element = document.getElementById("preview");

  // Optional configuration
  const opt = {
    margin: .3,
    filename: "myfile.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  // Generate the PDF
  html2pdf().set(opt).from(element).save();
  console.log(element);
}
