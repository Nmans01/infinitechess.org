import { Html } from "@elysiajs/html";
import { Page } from "./Page";

export const Home = () =>
    <Page currPage="home">
        <div class="logo">
            <img src="/img/king_w.png" alt="White chess king" />
            <h1 class="center">Infinite Chess</h1>
            <img src="/img/queen_w.png" alt="White chess king" />
            <p class="center">The official website for playing live!</p>
        </div>
        <div class="center">
            <iframe class="" src="https://www.youtube.com/embed/rav29N0-h2c" title="YouTube video: I Made Chess, but It's Infinite" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <h2>What is it?</h2>
        <p>Infinite Chess is a variant of chess in which there are no borders, much larger
            than your familiar 8x8 board. The queen, rooks, and
            bishops have <em>no limit</em> to how far they can move per turn. Pick any natural number up to infinity!</p>
        <p>With no limit to how far you can move, there are positions possible where the doomsday clock, or checkmate-in-<em>blank</em>, number is represented by the first infinite ordinal, <strong>omega ω</strong>. In fact, researches have discovered that <strong>any</strong> countable ordinal is achievable for the checkmate clock!</p>
        <p>As you can imagine, there are infinite possibilites for starting configurations, many of which you can play competitively! Your end goal is still checkmate, which requires new tactics seeing as there are no walls to trap the enemy king against. Games don't typically last much longer than normal chess games. Pawns also still promote at ranks 1 & 8!</p>
        <h3>How can I play?</h3>
        <p>The current version release is 1.3.2 on the <a href="/play">Play</a> page!</p>

        <br />
        <h3 class="center">About the Project</h3>
        {/* <!-- <h3>About the Project</h3> --> */}
        <p>I am Naviary. Since I first discovered Infinite Chess (the concept existed long before this website), I have been very intrigued by it and its possibilities! Up to just recently, playing has been quite difficult, requiring chess.com members to create images of the current board and send them back and forth for every move played. Due to this, not many people know about or have been able to play this.</p>
        <p>It is my goal to build a way to make this easily playable for everyone, and grow a community surrounding it. I have spent countless hours of my own time on this website, up-keeping, and developing the game. I have many more ideas that will keep me occupied for some time. While I wish to keep this free-to-play, life has requirements, to help support me financially please consider joining my <a target="_blank" href="https://www.patreon.com/Naviary">Patreon</a>.</p>

        <br />
        <h3 class="center">Patreon Supporters</h3>
        <div class="patreon-container">
            <p>Andreas</p>
            <p>Lebarb</p>
            <p>Mauer01</p>
            <p>Levon</p>
            <p><span class="IM">IM</span> Luke Harmon-Vellotti</p>
            {/* <!-- LJ --> */}
            <p>KnightBeforeLast</p>
            <p>SuperGamersGames</p>
        </div>
        <div class="patreon-container">
            <p>EmmaBellHelium</p>
            <p>Meni</p>
            <p>Settemio</p>
        </div>
    </Page >;