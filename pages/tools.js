import React from "react";
import Head from "next/head";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Tools by Nick Tobolski</title>
        <meta
          property="og:title"
          content="Content of Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Tools extend the reach of our species by granting us compounding
            abilities; one tool begets another, and potentially millions more."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Tools and Their Makers</h1>
        <div className="description">by Nick Tobolski</div>

        <div className="grid">
          <p className="intro">
            Tools<sup>†</sup> extend the reach of our species by granting us
            compounding abilities; one tool begets another, and potentially
            millions more.
          </p>
          <p>Technological progress is made possible through tool creation.</p>
          <p>
            Tool creation allows humans to circumvent the evolutionary cycle of
            adaptation being tied to generations. Instead, our species creates
            new adaptations much more rapidly than generational adaptation
            allows. This ability, unrivaled among our animal counterparts, is a
            force multiplier for our species' adaptation, and explains a large
            portion of our success in this planet's ecosystem.
          </p>
          <p>
            Poorly designed tools, like poor adaptations, are inefficient and
            are eventually replaced by more efficient and more useful ones.
          </p>
          <p>
            Which capabilities does a tool grant its user? How much time and
            energy does it save them? Tool design, and evolutionary adaptations,
            are about utility and leverage (not to discount{" "}
            <a href="https://lawsofux.com/aesthetic-usability-effect/">
              aesthetics
            </a>
            ).
          </p>
          <p>
            Successful tools endure because they either serve as a foundation
            for more tool creation (e.g., computers), or they're so
            well-designed that any variation makes them less useful. Time spent
            building anything other than well-designed tools is time wasted.
          </p>
          <div className="footnote">
            † e.g., axes, wrenches, books, cars, computers, surgical machines,
            web applications, LLMs, et al.
          </div>
        </div>
      </main>

      {/*

Outline: When do they become obsolete and how do you prevent it?


*/}
      <footer></footer>

      <style jsx>{`
        sup {
          font-size: 1rem;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .intro {
          font-size: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1rem;
          color: #6e6e6e;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: start;
          flex-wrap: wrap;
          font-size: 1.15rem;
          line-height: 1.5;

          max-width: 45rem;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .footnote {
          font-style: italic;
          font-size: 0.8rem;
          color: #6e6e6e;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
