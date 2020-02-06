import { IncomingMessage, ServerResponse } from "http";

export default async function handler(
  _req: IncomingMessage,
  res: ServerResponse
) {
  try {
    const html = `
<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <title>Generated Image</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      background: yellow;
    }
  </style>
  <body>
    <div class="container">
      <div class="title">Deploying Serverless Function</div>
      <div class="author">
        <img src="https://flipgive.imgix.net/images/users/avatars/000/000/010/original/1532032692llamas-and-haircuts-llama-justin-bieber.jpg" class="author-image" />
        Leigh Halliday
      </div>
      <div class="website">leighhalliday.com</div>
    </div>
  </body>
</html>`;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(html);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
}