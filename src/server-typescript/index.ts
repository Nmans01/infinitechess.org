import Elysia from "elysia";
import { pageRoutes } from "./pageRoutes";
import { authController } from "./controllers/authController";

// const apiRoutes = new Elysia({ prefix: "/api" })

const app = new Elysia()
    .use(pageRoutes)
    .use(authController)
    .listen(3000, ({ hostname, port }) => {
        console.log(`Now running at ${hostname}:${port}`)
    })