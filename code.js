// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Create header
    var header = document.createElement("header");
    header.innerHTML = `
        <h1>Welcome to My Website</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    `;
    document.body.appendChild(header);

    // Create main content
    var main = document.createElement("main");
    main.innerHTML = `
        <h2>Main Content</h2>
        <p>This is the main content area of the website.</p>
        <h3>Table Example</h3>
        <table class="custom-table">
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Data 1</td>
                    <td>Data 2</td>
                    <td>Data 3</td>
                </tr>
                <tr>
                    <td>Data 4</td>
                    <td>Data 5</td>
                    <td>Data 6</td>
                </tr>
            </tbody>
        </table>
    `;
    document.body.appendChild(main);
});
