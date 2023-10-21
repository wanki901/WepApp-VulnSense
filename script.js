document.addEventListener("DOMContentLoaded", function() {
    const uploadFileButton = document.getElementById("uploadFileButton");
    const enterAddressButton = document.getElementById("enterAddressButton");
    
    const fileUploadSection = document.getElementById("fileUploadSection");
    const addressInputSection = document.getElementById("addressInputSection");
    
    const chooseFileButton = document.getElementById("chooseFileButton");

    const fileInput = document.getElementById("fileInput");
    const textInput = document.getElementById("textInput");
    
    const uploadButton = document.getElementById("uploadButton");
    const processButton = document.getElementById("processButton");
    
    const scanStatus = document.getElementById("scanStatus");

    uploadFileButton.addEventListener("click", function() {
        fileUploadSection.style.display = "block";
        addressInputSection.style.display = "none";
    });

    enterAddressButton.addEventListener("click", function() {
        fileUploadSection.style.display = "none";
        addressInputSection.style.display = "block";
    });

    fileInput.addEventListener("change", function() {
        const selectedFile = fileInput.files[0];
        
        if (selectedFile) {
            // Handle the selected file here
            const fileName = selectedFile.name;
            scanStatus.innerText = `Selected file: ${fileName}`;
        }
    });

    fileUploadSection.addEventListener("dragover", function(e) {
        e.preventDefault();
        fileUploadSection.classList.add("drag-over");
    });

    fileUploadSection.addEventListener("dragleave", function() {
        fileUploadSection.classList.remove("drag-over");
    });

    fileUploadSection.addEventListener("drop", function(e) {
        e.preventDefault();
        fileUploadSection.classList.remove("drag-over");

        const droppedFile = e.dataTransfer.files[0];

        if (droppedFile) {
            fileInput.files = e.dataTransfer.files;
            const fileName = droppedFile.name;
            let filedata = `<h4>${fileName}</h4>`
            dropArea.innerHTML = filedata;
            scanStatus.innerText = `Dropped file: ${fileName}`;
        }
    });

    uploadButton.addEventListener("click", function() {
        const selectedFile = fileInput.files[0];
        
        if (selectedFile) {
            // Simulate a scan process (you would send the file to a server in a real implementation)
            scanStatus.innerText = "Scanning file...";
            setTimeout(() => {
                scanStatus.innerText = "Scan complete. No threats detected.";
            }, 2000);
        } else {
            alert("Please select a file to upload.");
        }
    });

    processButton.addEventListener("click", function() {
        const inputText = textInput.value;
        
        if (inputText) {
            // Process the input text here
            scanStatus.innerText = "Processing address...";
            setTimeout(() => {
                scanStatus.innerText = "Processing complete.";
            }, 2000);
        } else {
            alert("Please enter an address.");
        }
    });
});

const dropArea = document.querySelector(".drop_box"),
  button = dropArea.querySelector("button"),
  dragText = dropArea.querySelector("header"),
  input = dropArea.querySelector("input");
let file;
var filename;

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function (e) {
  var fileName = e.target.files[0].name;
  let filedata = `<h4>${fileName}</h4>`
  dropArea.innerHTML = filedata;
});