import Elysia, { t } from "elysia";
import { prisma } from "../db";

const reservedUsernames = await Bun.file("./reservedUsernames.json").json() as string[];
const profanities = await Bun.file("./profanities.json").json() as string[];

export const authController = new Elysia({ prefix: "/auth" })
    .post("/login", () => { })
    .post("/refresh", () => { })
    .post("/logout", () => { })

    // Create account
    .post("", async ({ body: { username: _username, email: _email, password }, set }) => {
        const username = _username.toLowerCase();
        const email = _email.toLowerCase();

        const usernameError = checkUsername(username);
        if (usernameError) {
            set.status = 400;
            return { message: usernameError };
        }

        if (/^[a-zA-Z0-9!@#$%^&*\?]+$/.test(password)) {
            set.status = 400;
            return { message: "Password contains invalid characters." };
        }

        if (password.toLowerCase().includes("password")) {
            set.status = 400;
            return { message: "Password cannot include 'password'." };
        }

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: await Bun.password.hash(password)
            }
        });

    }, {
        body: t.Object({
            username: t.String({
                minLength: 4,
                maxLength: 19
            }),
            email: t.String({
                maxLength: 320,
                format: "email",
                default: "jon@doe.com"
            }),
            password: t.String({
                minLength: 6,
                maxLength: 32
            })
        })
    })

    .get('/data', () => {

    })
    .get('/username/:username', () => {

    })
    .get('/email/:email', () => {

    })
    .get("/verify/:member/:id", ({ params: { member, id } }) => { });


const checkUsername = function (username: string) {

    // Ensure username contains no special characters
    if (!/^[a-zA-Z0-9]+$/.test(username)) return "contains special characters" as const;

    // Then check if the name's taken
    const usernameLowercase = username.toLowerCase();
    // if (doesMemberExist(usernameLowercase)) return res.status(409).json({ 'conflict': 'That username is taken' });

    // Then check if the name's reserved
    if (reservedUsernames.includes(usernameLowercase)) return 'contains reserved word' as const; // Code for reserved (but the users don't know that!)

    // Lastly check for profain words
    if (profanities.find(profanity => usernameLowercase.includes(profanity))) return 'contains profanity' as const;

    return undefined; // Everything's good, no conflicts!
}