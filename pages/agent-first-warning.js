import React from "react";
import Head from "next/head";

export default function AgentFirstWarning() {
  return (
    <div className="container">
      <Head>
        <title>A Warning to Agent-First Teams - Nick Tobolski</title>
        <meta
          property="og:title"
          content="A Warning to Agent-First Teams - Nick Tobolski"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Here be dragons: the part of the map your guardrails don't chart."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid">
          <h1 className="essay-header">A Warning to Agent-First Teams</h1>
          <p className="subtitle">
            <em>
              Here be dragons: the part of the map your guardrails don't
              chart.
            </em>
          </p>

          <p>
            Software production is getting both cheap and fast. It
            opens to people who could never write it themselves: the
            marketing team ships its own landing page, the HR analyst builds
            the tool she's been requesting for two years, the product manager
            stops writing tickets and starts writing intent. The platform
            absorbs the technical complexity of security, deployment,
            monitoring, and rollback, while the humans supply judgment about
            what the business actually needs. You do more with less, and with
            less-senior people. The developer doesn't disappear; the
            developer ascends, building the platform that lets everyone else
            produce.
          </p>

          <p>
            If you run an organization, you should want this to be true. Much
            of it is true. Production really is getting cheaper. Non-technical
            teams really can ship working software through agents, today,
            behind guardrails that catch real problems.
          </p>

          <p>
            But there is a question the pitch never asks, and it's the
            question this essay exists to press: cheap to <em>produce</em> is
            not the same as cheap to <em>own</em>. Production is a flow.
            Ownership is a stock. And the entire agent-first movement is,
            right now, optimizing a flow while a stock accumulates behind it
            in the dark.
          </p>

          <h2>The framing error underneath everything</h2>

          <p>
            When agent-first thinkers talk about the hard problem, they talk
            about cognitive load, and to their credit, they talk about it
            seriously. The best of the genre observes that agents compress
            complexity: all the questions that engineering roles used to
            raise sequentially, over weeks, now land on a single human
            upfront, in the narrow window of a prompt. The proposed solution
            is the platform, which absorbs the anticipation burden so the
            human carries only what matters. Cognitive load becomes a{" "}
            <em>throughput</em> to regulate.
          </p>

          <p>
            Notice the shape of that framing. Throughput. Flow. Decisions per
            unit time. Everything in it is a rate.
          </p>

          <p>
            Technical debt is not a rate. It is a stock, a reservoir that
            fills. And stocks are invisible to flow metrics, by construction.
            Debt never shows up in this sprint's velocity. It shows up as
            velocity silently getting more expensive: the change that should
            take an hour takes a day, then a week, and nobody can name the day
            it went wrong because there wasn't one.
          </p>

          <p>
            I have watched this movie in purely human organizations more
            times than I can count, and the plot never varies. A team ships
            fast for eighteen months. The demos are great; the graph goes up
            and to the right. Then, gradually, the graph bends. Features that
            used to take a sprint take a quarter. Estimates inflate and
            nobody can defend them, because the true answer, that we no
            longer fully understand our own system, is unsayable in a
            planning meeting. Headcount is flat, effort is flat, output is
            falling, and the org responds by adding process, which makes it
            worse. There was no incident. No postmortem. The floor never gave
            way; the ceiling just kept getting lower until everyone was
            working hunched over.
          </p>

          <p>
            That is what a stock problem looks like. It is old, it is
            well-documented, and human teams with experienced engineers and
            every incentive to prevent it fail to prevent it{" "}
            <em>routinely</em>. Hold that in mind. Because the only claim the
            rest of this essay needs to make is a short one: agents make this
            specific, familiar failure faster.
          </p>

          <h2>Why agents accelerate the accumulation</h2>

          <p>
            Two mechanisms. The first is simple arithmetic; the second is the
            one that should keep you up at night.
          </p>

          <p>
            <strong>Volume.</strong> Debt accrues roughly in proportion to
            code produced and decisions made, not to code{" "}
            <em>thoughtfully</em> produced. The agent-first model's entire
            promise is a dramatic increase in production volume, spread
            across more teams, including teams with no ability to evaluate
            the code they're causing to exist. You have scaled output without
            scaling the judgment that keeps output coherent. Debt per unit
            time rises almost by definition. This alone would be manageable;
            it's the same problem at a higher rate.
          </p>

          <p>
            <strong>The severed signal.</strong> This is the new problem. In
            human systems, technical debt has a pain receptor (a nociceptor,
            to borrow the physiological term). The engineer who has to work
            inside the mess <em>feels</em> it. She complains in retro. She
            pads her estimates. She refactors when she can and, when she
            can't, she at least carries the mental map of where the bodies
            are buried. That pain is information, and it is the only reason
            debt in human systems is even semi-self-limiting. The reservoir
            has a float valve: eventually, the suffering of the people in the
            codebase forces the organization to notice.
          </p>

          <p>
            The agent-first model severs that signal at exactly the point it
            advertises as its benefit. The producer is non-technical and
            cannot read the rot. No human holds the mental model, because no
            human wrote the code. And the agent, the only party actually
            touching the mess, will build on top of garbage forever without a
            flicker of discomfort. It does not pad estimates. It does not
            complain in retro. It produces, cheerfully, at full speed, on top
            of anything.
          </p>

          <p>
            Worse than building on the mess, the agent learns from it.
            Practitioners are already documenting this at the micro scale.
            Scott Robinson describes{" "}
            <a
              href="https://unstack.io/write-code-like-a-human-will-maintain-it"
              target="_blank"
              rel="noopener noreferrer"
            >
              catching himself
            </a>{" "}
            merging the same copy-pasted access check into a project four
            times, reasoning that the LLM, not he, would be the one
            maintaining it. Then the trap closed: the model reads the repo,
            so every merged shortcut became a signal about how things are
            done here. The fifth request reproduced the pattern; the refactor
            preserved all five copies, because by then the duplication{" "}
            <em>was</em> the house style. He thought he was outsourcing
            maintenance and found he was training the maintainer on his worst
            habits. Scale that from one developer's side project to an
            organization where the producers can't read the code at all, and
            the stock stops being inert. It becomes instructional. The debt
            teaches.
          </p>

          <p>
            Put the two mechanisms together, add the feedback loop, and the
            thesis crystallizes: the agent model is not debt-neutral. It is{" "}
            <em>structurally debt-generating</em>, because it decouples the
            act of production from the experience of consequence. A human
            team accumulating debt is at least <em>present</em> to it. An
            agentic platform optimized for self-service throughput is a
            machine for generating debt that no one is positioned to feel.
          </p>

          <h2>The quiet redefinition</h2>

          <p>
            Here the advocates have an answer, and it's worth taking
            seriously because it's half right. The answer is:{" "}
            <em>the platform handles sustainability.</em> Guardrails enforce
            security, accessibility, brand consistency, conventions, test
            coverage. Pipelines guarantee safe deployment and rollback.
            Everything is versioned, audited, traceable. The marketing team
            doesn't need to write sustainable code because the system around
            the code is sustainable.
          </p>

          <p>
            Watch what happened in that paragraph. "Sustainable" got
            redefined, quietly, and I think mostly innocently. It slid from{" "}
            <em>the code is well-structured</em> to{" "}
            <em>the system around the code prevents the worst outcomes</em>.
            Those are different claims, and the gap between them is where
            organizations die.
          </p>

          <p>
            Call it the floor and the ceiling. The floor is everything a gate
            can check: does it pass the security scan, does the contrast
            ratio meet WCAG, did the tests run, can we roll it back. Floor
            properties are binary and mechanically verifiable, and platforms
            are genuinely excellent at defending them. Better than most human
            teams, honestly. The agent-first literature is right about the
            floor, and I'll concede it without reservation.
          </p>

          <p>
            The ceiling is everything a gate cannot check: whether the domain
            model is coherent, whether the abstraction boundaries make
            sense, whether the same business logic now exists in five
            incompatible copies, whether this application should have been
            built at all. Ceiling properties are matters of judgment. They
            compound invisibly. And here is the uncomfortable empirical fact:{" "}
            <em>codebases almost never die of floor violations.</em> The
            floor failure is an incident. It is painful, visible, and fixed by
            Thursday. What kills systems is the ceiling quietly descending
            for three years while every individual change passes every
            individual check. A green pipeline is not a healthy portfolio. It
            is a portfolio in which no single change was individually
            objectionable, which describes every debt collapse I have ever
            seen.
          </p>

          <p>
            The advocates, to their credit, sometimes admit this. "The
            platform guarantees minimums, not business excellence," writes
            one. Exactly so. But minimums are precisely not where survival is
            decided.
          </p>

          <p>
            This is what the old cartographers understood when they wrote{" "}
            <em>here be dragons</em> on the blank parts of the map. The
            guardrails are a chart of the known coastline: everything they
            verify is, by definition, mapped territory. The ceiling is the
            blank part. The dragons were never on the chart. That's what made
            them dragons.
          </p>

          <p>
            One honest exception, so it's said plainly: none of this applies
            to leaf applications, meaning the short-lived, low-blast-radius,
            disposable-by-design work. The campaign microsite, the one-off
            internal dashboard, the glue script. For that work, "disposable"
            is a legitimate architecture, the floor is the only thing that
            matters, and the agent-first model is simply correct. If your
            entire portfolio is leaves, stop reading; you're fine. The
            warning is for organizations whose agents are producing things
            that will still be running, and still be depended on, in five
            years. If history is any guide, that will be most things, because
            nothing is more permanent than a temporary system that works.
          </p>

          <h2>The role that doesn't exist</h2>

          <p>
            So ask the question the throughput framing cannot even pose:{" "}
            <em>who owns the stock?</em>
          </p>

          <p>
            Walk the org chart the agent-first model proposes.
            Stream-aligned teams own business intent, the <em>what</em>. The
            platform team owns systemic capability, the <em>how</em> of
            pipes, gates, and tooling. Enabling teams are temporary by design.
            Every capability has an owner. And the long-term coherence of
            what is actually being produced, the accumulated, compounding,
            cross-cutting entropy of everything the organization ships, falls
            cleanly into the gap between all of them. It is not one app's
            architecture; it is the portfolio's trajectory. In the standard
            model, that trajectory has no name attached to it.
          </p>

          <p>
            The obvious objection: why not the platform team? Because the
            platform team owns <em>capabilities</em>, the pipes and the
            gates, while stock ownership requires reading the <em>content</em>{" "}
            of what flows through them, across business domains, over years.
            Those are different jobs with different skills and, critically,
            different incentives. A team measured on pipeline reliability and
            self-service percentage will never be measured on whether the
            applications passing through the pipeline are becoming
            incoherent, and what a team is not measured on, a team does not
            defend. Asking the platform team to own the stock is asking the
            harbor master to be responsible for whether the cargo makes
            sense.
          </p>

          <p>
            The deeper objection, the one the smartest agent-first advocates
            will actually make, is this: <em>models are improving fast.</em>{" "}
            Domain modeling, abstraction boundaries, architectural coherence:
            these are exactly what next-generation agents will handle. You
            are warning about a transient.
          </p>

          <p>
            First: accountability does not transfer to a model. When the
            portfolio degrades, when the change that should take an hour
            takes a week, "the agent was supposed to handle architecture" is
            not an answer anyone can act on. Someone must be{" "}
            <em>positioned to notice</em> degradation: watching the trend,
            empowered to intervene, answerable for the outcome. Noticing is a
            role, not a feature. No capability curve, however steep, produces
            an org chart.
          </p>

          <p>
            Second: "the model will get better" is a bet, and the stock
            framing tells you exactly what's wrong with it. You are
            compounding the downside while you wait to find out if it pays.
            Three years of accumulated entropy does not un-accumulate when
            the better model ships. The better model inherits the mess, and,
            trained as these systems are to be agreeable and to build on what
            exists, it will extend the mess with superhuman fluency.
            Improvement in the workers is not improvement in the inventory.
          </p>

          <h2>The inverted skill curve</h2>

          <p>
            Now the turn that should reframe how you read every agent-first
            pitch deck: this model <em>lowers</em> the skill floor required to
            produce and <em>raises</em> the skill ceiling required to
            sustain.
          </p>

          <p>
            Lowering the floor is the whole advertisement. Anyone can ship.
            But everything above establishes the other half: with volume up
            and the pain signal severed, keeping the portfolio coherent now
            demands <em>more</em> senior judgment than the human-team era
            did, not less. The pitch is "do more with less, and with
            less-senior people." For shipping, true. For sustaining, precisely
            backwards. And on a five-year horizon, sustaining is where the
            money is. Ask anyone who has paid for a rewrite.
          </p>

          <p>
            It gets worse, because senior judgment is manufactured in exactly
            one way: juniors doing the work. The engineer who can smell rot
            before it's load-bearing acquired that sense by living inside
            rotting systems, by <em>being</em> the nociceptor, feeling the
            pain the agent model is designed to eliminate. Scar tissue
            becomes taste. There is no other production line for it.
          </p>

          <p>
            So follow the incentives. The agent-first org, quite rationally
            by its own lights, stops hiring juniors, because the agents do
            the junior work. In doing so it dismantles the manufacturing
            process for the one skill its own model makes scarcer. This is
            eating your seed corn: five years out, the organization needs
            more stock-level judgment than ever, has trained no one to
            provide it, and is bidding in a market where every other
            agent-first org made the same rational, self-defeating choice.
            When you hear "we're replacing junior headcount with agents," the
            correct translation is: <em>we have decided not to grow our 2031
            staff engineers, and we are betting someone else will.</em>
          </p>

          <h2>The question nobody has answered</h2>

          <p>
            It would be satisfying to end with a fix. I don't have one, and I
            distrust anyone who claims to.
          </p>

          <p>
            The obvious instinct is to name an owner: a steward with the
            seniority to read what the agents produce and the authority to
            halt when the domain model fractures. The instinct is right about
            one thing, because unowned stock rots. But the role dissolves at
            scale. One human cannot hold forty domain models; federate it and
            you need a hierarchy of senior judgment staffed from the very
            pipeline the model is dismantling. Every version of the answer
            needs more of the thing agent-first makes scarce.
          </p>

          <p>
            So here is the warning, in one breath. The floor problem is
            solved. The ceiling problem is not solved, and right now it isn't
            even named. Agent-first does not remove the need for senior
            engineering judgment; it concentrates it, raises the stakes on
            it, and quietly stops manufacturing it, all while generating the
            problem that demands it at unprecedented speed. If your
            organization is sailing this way, the honest posture is not "we
            have a plan." Nobody has a plan. The honest posture is to know
            which part of the map you're on. The guardrails chart the
            coastline, and they chart it well. But the mapped territory was
            never where ships were lost.
          </p>

          <p className="attribution">
            ~ Written with{" "}
            <a
              href="https://claude.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude
            </a>
            ; conceived, outlined, and edited by Nick Tobolski
          </p>
        </div>
      </main>

      <footer></footer>

      <style jsx>{`
        h1.essay-header {
          text-align: left !important;
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
          color: var(--accent);
          text-decoration: none;
        }

        a:hover,
        a:focus,
        a:active {
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

        .attribution {
          font-style: italic;
          font-size: 0.9rem;
          color: var(--secondary);
          margin-top: 2rem;
        }

        .subtitle {
          font-size: 1.3rem;
          color: var(--secondary);
          margin-top: -0.5rem;
          margin-bottom: 2rem;
        }

        h2 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }

        blockquote {
          font-size: 1.15rem;
          padding-left: 2rem;
          border-left: 4px solid var(--blockquote-border);
          margin: 2rem 0 2.2rem 0;
          color: var(--blockquote-text);
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
          color: var(--secondary);
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: start;
          flex-wrap: wrap;
          font-size: 1.15rem;
          line-height: 1.6;

          max-width: 45rem;
          margin-top: 3rem;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
