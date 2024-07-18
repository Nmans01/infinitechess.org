import html from "@elysiajs/html";
import Elysia from "elysia";
import { Home } from "./components/Home";
import { LogIn } from "./components/Login";
import { Credits } from "./components/Credits";
import { TermsOfService } from "./components/TermsOfService";
import { News } from "./components/News";
import { Play } from "./components/Play";

export const pageRoutes = new Elysia()
    .use(html())
    .get("", () => Home())
    .get("/credits", () => Credits())
    .get("/play", () => Play())
    .get("/news", () => News())
    .get("/login", () => LogIn())
    .get("/terms-of-service", () => TermsOfService());
