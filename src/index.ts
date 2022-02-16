(async () => {
  const http = await import("http");
  const { default: r } = await import("./routes/index");

  const routes = await r;

  const server = http.createServer((req, res) => {
    switch (req.url) {
      case "/":
        routes["/"](res);
        break;
      case "/styles/index.css":
        routes["/style"](res);
        break;
      default:
        routes["/404"](res);
        break;
    }
  });

  server.listen(3000, () => {
    console.log("Running at http://localhost:3000");
  });
})();
