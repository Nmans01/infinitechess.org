import { Html } from "@elysiajs/html";
import { Page } from "./Page";

export const CreateAccount = () =>
    <Page currPage="createAccount">
        <h1 class="center">Create Account</h1>
        <form action="./createaccount" method="POST" class="center" id="form">
            <div class="formfield">
                <div id="usernameinputline">
                    <label for="username">Username:</label>
                    <input id="username" type="text" name="username" required minlength="3" maxlength="20" autocomplete="off" autofocus="true" />
                </div>
                {/* <!-- This is where our script inserts an error division! --> */}
                <div id="emailinputline">
                    <div class="line">
                        <label for="email">Email:</label>
                        <input id="email" type="email" name="email" required minlength="3" maxlength="320" autocomplete="off" />
                    </div>
                </div>
                <div id="passwordinputline">
                    <div class="line">
                        <label for="password">Password:</label>
                        <input id="password" type="password" name="password" required minlength="6" />
                    </div>
                </div>
            </div>
            <input type="submit" value="Create Account" class="unavailable" id="submit" />
            <p class="agreement">I agree to the <a href="/termsofservice" class="agreement" target="_blank">Terms of Service</a></p>
        </form>
    </Page>;