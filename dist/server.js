"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// routes
const quizRoute_1 = __importDefault(require("./routes/quizRoute"));
dotenv_1.default.config();
const server = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
server.use((0, cors_1.default)());
server.use(express_1.default.json());
// Routes
server.use("^/", (req, res) => {
    res.send("Hello Root Route");
});
server.use("/quiz", quizRoute_1.default);
server.use("^/*", (req, res) => {
    res.send("Not Found Route");
});
server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
