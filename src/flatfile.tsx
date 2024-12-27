import Pastel from "pastel";

const app = new Pastel({
  importMeta: import.meta as any,
});

await app.run();
