import { Html } from "@elysiajs/html";

export const Page = ({ currPage, children }: Html.PropsWithChildren<{
    currPage?:
    | "home"
    | "play"
    | "news"
    | "login"
    | "createAccount"
}>) =>
    <html>
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Create Account</title>
            <link rel='stylesheet' href='/css/createaccount.css' />
            <link rel="icon" type="image/png" href="/img/favicon.png" />
            <script defer src="/scripts/createaccount.js"></script>
        </head>
        <body>
            <header>
                <nav>
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <a href="/play">
                        <p>Play</p>
                    </a>
                    <a href="./news">
                        <p>News</p>
                    </a>
                    <a href="./login">
                        <p>Log In</p>
                    </a>
                    <a href="./createaccount">
                        <p class="currPage">Create Account</p>
                    </a>
                </nav>
            </header>
            <main>
                <div id="content">
                    {children}
                </div>
            </main>
            <footer>
                <a href="mailto:infinitechess.org@gmail.com">Contact us.</a>
                <a href="/termsofservice">Terms of Service</a>
                <a href="https://github.com/Infinite-Chess/infinitechess.org" target="_blank">Source Code</a>
            </footer>
        </body>
    </html>;