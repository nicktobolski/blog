import React from "react";
import Head from "next/head";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Tools - Nick Tobolski</title>
        <meta
          property="og:title"
          content="Content of Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Tools extend the reach of our species by granting us compounding
            abilities; one tool begets another and potentially millions more."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Tools</h1>

        <div className="grid">
          <p className="intro">
            Tools<sup>†</sup> extend the reach of our species by granting us
            compounding abilities; one tool begets another and potentially
            millions more.
          </p>

          <p>
            Tools allow homo sapiens to circumvent the evolutionary pattern of
            adaptation being tied to generations. Instead, our species create
            adaptations more rapidly than is otherwise allowed. This ability,
            unrivaled, is a force multiplier for our species' adaptation. All
            technological progress is tool creation.
          </p>
          <p>
            Poorly designed tools, like traits lost in the aeons of evolution,
            are inefficient and are eventually supplanted by better adaptations.
          </p>
          <p>
            Which capabilities or advantages does a tool grant its user? How
            much time and energy does it save them? How much more effective can
            its user be in the real world? The success of a tools and
            evolutionary adaptations fundamentally hinge on utility and
            leverage.
          </p>
          <p>
            From an evolutionary perspective, building anything other than
            well-designed tools is a waste of time.
          </p>
          {/* <p>Life is too short to build bad software.</p> */}
          <div className="footnote">
            † e.g., axes, wrenches, books, cars, computers, surgical machines,
            web applications, LLMs, etc.
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
          margin-bottom: 36px;
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
          margin-top: 5rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
