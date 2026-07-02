function analyzeResume(){

    let score = Math.floor(Math.random() * 30) + 70;
    let match = Math.floor(Math.random() * 25) + 65;

    document.getElementById("result").innerHTML = `
        <h2>Analysis Result</h2>

        <p><strong>ATS Score:</strong> ${score}%</p>

        <p><strong>Job Match:</strong> ${match}%</p>

        <p><strong>Detected Skills:</strong></p>

        <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>Git</li>
            <li>SQL</li>
        </ul>

        <p><strong>Suggestions:</strong> Add AWS, Docker, REST API</p>
    `;
}
