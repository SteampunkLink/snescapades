import path from "path";
import express from "express";
import dotenv from "dotenv";

import entryRoutes from "./routes/entryRoutes";
import rankRoutes from "./routes/rankRoutes";
import faqRoutes from "./routes/faqRoutes";
import friendRoutes from "./routes/friendRoutes";
import cardRoutes from "./routes/cardRoutes";

dotenv.config();
import { errorHandler } from "./middleware/errorMiddleware";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/entries", entryRoutes);
app.use("/api/ranks", rankRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/friends", friendRoutes);
app.use("/api/cards", cardRoutes);

const dirname = path.resolve();
app.use("/images", express.static(path.join(dirname, "/images")));
app.use("/markdown", express.static(path.join(dirname, "/markdown")));

if (process.env.NODE_ENV === "PRODUCTION") {
  const rootDirectory = path.join(__dirname, "..", "..", "client", "dist");
  app.use(express.static(rootDirectory));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(rootDirectory, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running");
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server]: Server is running on port ${PORT}`);
});
