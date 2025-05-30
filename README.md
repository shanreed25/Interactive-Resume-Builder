# Interactive-Resume-Builder

Interactive Resume Builder (No FrameWorks)
## Color Scheme
- Background:Charcoal #2C3E50
- Text: Almost Black #2D3436
- Accent: 

## HTML Forms

- For Taking User Input

### Styling HTML Forms

- Flexbox
- Mobile friendly layout
- Light/dark theme toggle

### Generate Resume on the DOM

- Serializing Form Data
- Local storage

### [html2pdf.js CDN](https://cdnjs.com/libraries/html2pdf.js/0.8.0)

- Used to capture HTML content and convert it into a PDF

---




const startDateInput = document.getElementsByClassName('month-year');
const formattedDate = document.getElementById('formattedDate');

startDateInput.addEventListener('change', () => {
const value = monthInput.value; // e.g., "2024-06"
if (value) {
const [year, month] = value.split("-");
const date = new Date(year, month - 1); // Month is zero-based
const options = { year: 'numeric', month: 'long' };
formattedDate.textContent = date.toLocaleDateString('en-US', options);
} else {
formattedDate.textContent = "";
}
});