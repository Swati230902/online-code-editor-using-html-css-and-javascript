function runCode() {
    // Get the code from the textareas
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = `<style>${document.getElementById('css-code').value}</style>`;
    const jsCode = `<script>${document.getElementById('js-code').value}<\/script>`;

    // Combine the code into a single document for the iframe
    const fullCode = htmlCode + cssCode + jsCode;

    // Get the iframe and write the code into it
    const outputFrame = document.getElementById('output-frame').contentWindow.document;
    outputFrame.open();
    outputFrame.write(fullCode);
    outputFrame.close();
}

// Add event listener to the run button
document.getElementById('run-btn').addEventListener('click', runCode);


