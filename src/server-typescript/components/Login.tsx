import Html from "@elysiajs/html";
import { Page } from "./Page";

export const LogIn = () =>
    <Page currPage="login">
        <h1 class="center">Log In</h1>
        <form action="./login" method="POST" class="center" id="form">
            <div class="formfield">
                <div id="usernameinputline">
                    <label for="username">Username:</label>
                    <input id="username" type="text" name="username" required maxlength="40" autocomplete="off" autofocus="true" />
                </div>
                <div id="passwordinputline">
                    <label for="password">Password:</label>
                    <input id="password" type="password" name="password" required />
                </div>
                {/* <!-- This is where our script inserts an error division! --> */}
            </div>
            <p id="forgot" class="forgothidden">Forgot? <a href="mailto:infinitechess.org@gmail.com">Email us.</a></p>
            <input type="submit" value="Log In" class="unavailable" id="submit" />
        </form>
    </Page>;