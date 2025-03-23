function downloadResume() {
    // Specify the path to your resume file
    const resumeUrl = 'Devops_Engineer_Manish_word.pdf';  // Replace with your actual file path
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Manish_Rawat.pdf';  // The filename to save as
    document.body.appendChild(a); // Append the link to the body
    a.click();  // Trigger the click event to start the download
    document.body.removeChild(a);
}