"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/health", (_req, res) => {
    res.json({
        status: "ok",
        service: "smart-support-api",
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SmartSupport API running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map