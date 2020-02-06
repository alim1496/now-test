function getCss() {
  return `
  html {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  * {
    box-sizing: border-box;
  }
  body {
    background-image: url("./shareImage.png");
    height: 100vh;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 18px;
    padding: 20px;
  }
  .container {
    position: relative;
  }
  .book-cover {
    position: absolute;
    left: 55px;
    top: 20px;
  }
  .book-desc {
    position: absolute;
    right: 100px;
  }
  `;
}
export function getHtml(parsedReqs: ParsedReqs) {
  const { title, author, image } = parsedReqs;

  return `
  <!DOCTYPE html>
  <html>
    <meta charset="utf-8">
    <title>Generated Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet">
    <style>
      ${getCss()}
    </style>
    <body>
    <div class="container">
      <img src="${image}" alt="cover" class="book-cover" />
      <div>
        <h2>${title}</h2>
        <h4>${author}</h4>
      </div>
    </div>
  </body>
  </html>
  `;
}
