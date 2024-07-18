import { Page } from "./Page"
import Html from "@elysiajs/html";

export const Member = () =>
    <Page>
        <div id="verifyerror" class="hidden">
            <h2 class="red center">Please check your email to verify your account.</h2>
            <p class="center">Didn't get one? Check your <strong>spam</strong> folder. Also, <span id="sendemail" class="underline">send it again.</span> If you still can't find it, <a href="mailto:infinitechess.org@gmail.com">message me.</a></p>
        </div>
        <h2 id="verifyconfirm" class="hidden green center">Thank you! Your account has been verified.</h2>
        <div class="member">
            <img src="/img/member_default.png" alt="Blank profile image" />
            <h1 id="membername"></h1>
        </div>
        <section id="stats" class="center">
            <p><strong>Elo rating: </strong><span id="elo"></span></p>
            <p><strong>Joined: </strong><span id="joined"></span></p>
            <p><strong>Seen: </strong><span id="seen"></span> ago</p>
        </section>
        <div id="content-container">
            <div style="flex-grow: 1;">
                <button id="show-account-info" class="hidden action-button" onclick="showAccountInfo()">Show Account Info</button>
                <section id="accountinfo" class="hidden">
                    <h6 class="center">Account Info</h6>
                    <p><strong>Email: </strong><span id="email">insert email here</span></p>
                </section>
            </div>
            <div style="flex-grow: 0;">
                <button id="delete-account" class="hidden action-button">Delete account</button>
            </div>
        </div>
        <p id="change" class="hidden center">To change your username, email or password, <a href="mailto:infinitechess.org@gmail.com">contact us.</a></p>
        <script src="/scripts/member.js"></script>
    </Page >;
