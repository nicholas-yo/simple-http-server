(async () => {
  const http = await import("http");
  const { default: routes } = await import("./routes/index");

  const server = http.createServer(async (req, res) => {
    for await (const route of [routes]) {
      switch (req.url) {
        case "/":
          route["/"](res);
          break;
        case "/styles/index.css":
          route["/style"](res);
          break;
        default:
          route["/404"](res);
          break;
      }
    }
  });

  server.listen(3000, () => {
    console.log("Running at http://localhost:3000");
  });
})();
