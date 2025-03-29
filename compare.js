function renderTableFromJSON() {
  fetch('data.json')
    .then(response => response.json())
    .then(shoes => {
      let tableHtml = `
        <table>
          <tr>
            <th>Модель</th>
            <th>Год</th>
            <th>Вес</th>
            <th>Амортизация</th>
            <th>Drop</th>
            <th>Высота подошвы</th>
            <th>Поверхность</th>
            <th>Особенности</th>
            <th>Средняя цена</th>
            <th>Оценка (средняя)</th>
            <th>Цвета</th>
          </tr>
      `;

      shoes.forEach(shoe => {
        const avgScore = Object.values(shoe.reviewScores).reduce((a, b) => a + b, 0) / Object.keys(shoe.reviewScores).length;
        const imagesHtml = shoe.images.map(url => `<img src="${url}" alt="${shoe.model}" />`).join("");
        tableHtml += `
          <tr>
            <td>${shoe.brand} ${shoe.model}</td>
            <td>${shoe.year}</td>
            <td>${shoe.weight}</td>
            <td>${shoe.cushioning}</td>
            <td>${shoe.drop}</td>
            <td>${shoe.stackHeight}</td>
            <td>${shoe.surface}</td>
            <td>${shoe.features}</td>
            <td>${shoe.averagePrice}</td>
            <td>${avgScore.toFixed(1)}</td>
            <td>${imagesHtml}</td>
          </tr>
        `;
      });

      tableHtml += `</table>`;
      document.getElementById("comparison-table").innerHTML = tableHtml;
    });
}
