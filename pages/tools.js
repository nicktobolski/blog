import React from "react";
import Head from "next/head";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Tool Making - Nick Tobolski</title>
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
        <div className="grid">
          <h1 className="essay-header">Tool Making</h1>
          <p className="intro">
            Tools<sup>†</sup> extend the reach of our species by granting us
            compounding abilities; one tool begets another and potentially
            millions more.
          </p>

          <p>
            Tool making allows <em>Homo sapiens</em> to bypass numerous
            constraints of evolution. Instead, our species can adapt much more
            rapidly than is otherwise possible. This ability, virtually
            unrivaled in the known universe, is a force multiplier for our
            adaptation.
          </p>

          {/* <h2>Maximizing Fitness</h2> */}

          <blockquote>
            They're sub-microscopic and made of organic molecules, rather than
            macroscopic and made of silicates or steel but, at the molecular
            level, life was tool-making and tool-using at the start.{" "}
            <cite>
              Carl Sagan &amp; Ann Druyan, Shadows of Forgotten Ancestors
            </cite>
          </blockquote>
          <p>
            Which advantages does a tool grant its user? How much time and
            computation does it save them? How much more effective can they be
            in the real world? The better the tool, the more fitness is bestowed
            upon its user.
          </p>
          <p>
            Poorly designed tools, like many traits lost in eons of evolution,
            are inefficient, or not sufficiently useful and risk being
            supplanted.
          </p>
          <p>
            To play our part in this process, started billions of years ago, we
            should create tools that grant their users maximum fitness at
            minimal cost.
          </p>

          {/* <p>Life is too short to build bad software.</p> */}
          <div className="footnote">
            † e.g., axes, wrenches, books, cars, computers, surgical machines,
            DNA sequencers, languages, applications, LLMs, etc.
          </div>
        </div>
      </main>

      {/*

Outline: When do they become obsolete and how do you prevent it?


*/}
      <footer></footer>

      <style jsx>{`
        h1.essay-header {
          text-align: left !important;
        }
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
          padding: 5rem 1.5rem;
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
          margin-bottom: 2rem;
        }
        blockquote {
          font-size: 1.15rem;
          padding-left: 2rem;
          border-left: 4px solid #ddd;
          margin: 2rem 0 2.2rem 0;
          color: #2e2e2e;
        }
        cite {
          display: inline-block;
          padding-left: 0.5em;
          opacity: 0.5;
        }
        cite::before {
          content: " — ";
          padding-right: 0.25em;
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
          margin-top: 2rem;
          margin-bottom: 5rem;
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
