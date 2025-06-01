# Interactive-Resume-Builder
**Interactive Resume Builder (No FrameWorks)**

- User can view the form and resume/view sections on the same page
- User can complete contact and work details of the form
- As the user enter their details into the form they can view it immediatly in the resume/view section 
- User can download a PDF format of the resume

## Color Scheme
- Background:Charcoal #2C3E50
- Text: Almost Black #2D3436
- Accent: Teal #1ABC9C

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







<!-- 
    <button onclick="addForm()">Add Form</button>
    <div id="formsContainer">
        <form id="resume-form">

        </form>
    </div>

    <script>
        let formCount = 0;

        function addForm() {
            formCount++;

            const form = document.getElementById('resume-form');
            //form.id = `form-${formCount}`;


            const jobTitle = document.createElement('input');
            jobTitle.type = 'text';
            jobTitle.id = 'job-title'
            jobTitle.placeholder = `Job Title`;
            jobTitle.name = `job-title`;
            form.appendChild(jobTitle);



            // const inputField = document.createElement('input');
            // inputField.type = 'text';
            // inputField.placeholder = `Enter value for form ${formCount}`;
            // inputField.name = `form-${formCount}-input`;
            // form.appendChild(inputField);

            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.textContent = 'Submit';
            form.appendChild(submitButton);

            // const container = document.getElementById('formsContainer');
            // container.appendChild(form);
        }
    </script>
</body>
</html> -->