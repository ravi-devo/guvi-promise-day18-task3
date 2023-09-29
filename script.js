const luciferData = document.querySelector('.lucifer-data');

//Anonymous function will call itself.
(async function () {
    try {
      const response = await fetch("https://lucifer-quotes.vercel.app/api/quotes/10");
      const jsonData = await response.json();
      luciferSeriesQuotes(jsonData);
    } catch (error) {
      console.log("Error: ", error);
    }
  })();

  function luciferSeriesQuotes(jsonData) {
    const luciferQuotes = jsonData;
    for (const {
      "quote": quote,
      "author": author
    } of luciferQuotes) {
      const tableRow = document.createElement('div');
      tableRow.style.backgroundColor = "brown";
      tableRow.style.color = "white";
      tableRow.style.borderRadius = "10px";
      tableRow.style.boxShadow = "5px 5px black";
      tableRow.style.padding = "1rem";
      tableRow.style.margin = "1rem";
      tableRow.innerHTML = `
        <p>${quote}</p>
        <p class="text-end">-${author}</p>
        `
      luciferData.appendChild(tableRow);
  
    }
  }