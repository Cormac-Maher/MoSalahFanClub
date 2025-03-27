function generateTriangle() {
    const numRows = document.getElementById("rows").value;

  if (numRows > 16)
  {
      numRows = 16;
  }
    const triangle = document.getElementById("triangle");

    // Clears existing content
    triangle.innerHTML = "";

    // Generates Pascal's Triangle
    const pascalTriangle = [];
    for (let i = 0; i < numRows; i++) {
        pascalTriangle[i] = [];
        for (let j = 0; j <= i; j++) {
            pascalTriangle[i][j] = (j === 0 || j === i) ? 1 : pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
        }

        // Creates a row
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        pascalTriangle[i].forEach(value => {
            // Creates a hexagon for each value
            const hexagon = document.createElement("div");
            hexagon.className = "hexagon";
            if (value % 2 !== 0) {
                hexagon.classList.add("odd");
            }
            hexagon.textContent = value;
            rowDiv.appendChild(hexagon);
        });
        triangle.appendChild(rowDiv);
    }
}