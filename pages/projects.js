import React from "react";
import Head from "next/head";

export default function Projects() {
  return (
    <div className="container">
      <Head>
        <title>Projects {"∞"} Nick Tobolski</title>
        <meta
          property="og:title"
          content="Projects of Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Miscellaneous Musing"
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Projects</h1>

        <div className="grid">
          <a
            href="https://github.com/nicktobolski/bananacci"
            className="card"
            target="_blank"
          >
            <h2>Banana Volume Visualizer &rarr;</h2>
            <p>
             Fix windows volume key usability problem in a playful way.            </p>
          </a>
          <a
            href="https://www.quixottica.com/"
            className="card"
            target="_blank"
          >
            <h2>Team Stats &rarr;</h2>
            <p>
              A tool for improving team performance through data visualization
              in the game League of Legends. 
            </p>
          </a>
          <a
            href="https://pollinator.emrgnt.co/"
            className="card"
            target="_blank"
          >
            <h2>Pollinator Relationships &rarr;</h2>
            <p>
              A prototype of a tool for exploring visual relationships between
              pollinators and their angiosperms.
            </p>
          </a>
          <a
            href="https://web.archive.org/web/20170912074045/http://bekindbumpersticker.com/"
            className="card"
            target="_blank"
          >
            <h2>BE KIND Bumper Stickers  &rarr;</h2>
            <p>
              I made, marketed, and sold these BE KIND bumper stickers in 2016.
            </p>
          </a>
          {/* <a
            href="https://ilikefarts.com"
            className="card"
            target="_blank"
            title="or maybe they didn't"
          >
            <h2>Untitled &rarr;</h2>
            <p>Someone had to.</p>
          </a> */}
        </div>
      </main>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid {
            align-items: stretch !important;
          }
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition:
            color 0.15s ease,
            border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
