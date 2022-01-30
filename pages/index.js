import { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import USPCard from "../components/USPCard";
import FeatureCard from "../components/FeatureCard";
import PriceCard from "../components/PriceCard";

export default function Home() {
  const [socialMediaLinks, updateSocialMediaLinks] = useState({
    discord: "https://discord.com/invite/b4nRGTjYqy",
  });

  return (
    <main>
      <section id="landing-section">
        <div className="container">
          <div className="row text-center text-sm-start align-items-center justify-content-center flex-row-reverse py-3">
            <div className="col-sm-4">
              <div className="hero-image">
                <Image
                  src="/images/ai-charts.png"
                  alt="predictive chart"
                  width={360}
                  height={360}
                  quality={90}
                />
              </div>
            </div>
            <div className="col-sm-8">
              <h1 className="fw-bold display-2 my-3">
                <span className="text-primary">Sharing Power</span>
                <br /> One Click Away
              </h1>
              <p className="text-secondary lead my-3">
                We help users monetize their spare computation power by hosting
                other users seeking affordable and accessible processing.
              </p>
              <a
                href={socialMediaLinks.discord}
                className="btn btn-primary btn-lg my-3 shadow"
              >
                Join Our Community!
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about-section">
        <div className="container">
          <div className="row text-center text-sm-start align-items-center justify-content-center py-3">
            <div className="col-sm-4">
              <Image
                src="/images/network-globe.png"
                alt="network globe"
                width={360}
                height={360}
                quality={90}
              />
            </div>
            <div className="col-sm-8">
              <h2 className="fw-bold my-3">How Does DeceNode Work?</h2>
              <p className="text-secondary lead my-3">
                DeceNode provides ML Developers and Data Scientists with{" "}
                <span className="text-primary">time</span> and{" "}
                <span className="text-primary">cost efficient</span> computation
                power by <span className="text-primary">utilizing idle</span>{" "}
                computers via a{" "}
                <span className="text-primary">decentralized peer-to-peer</span>{" "}
                network.
              </p>
              <p className="text-secondary lead my-3">
                A marketplace platform resembling an{" "}
                <span className="text-primary">“AirBNB for Servers”</span>,
                helping users (rentors){" "}
                <span className="text-primary">monetize</span> their spare
                computation power by hosting other users (rentees) seeking{" "}
                <span className="text-primary">affordable</span> and{" "}
                <span className="text-primary">accessible</span> processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="usp-section">
        <div className="container">
          <div className="text-center py-5">
            <h2 className="fw-bold text-light mb-3">
              Our Decentralized Market Platform Enables
            </h2>
            <div className="usp-cards my-3">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-4">
                  <USPCard
                    image="/images/hosts-money.png"
                    title="Hosts"
                    text="To ear profits by renting out their spare, unused computation power to other users in need of it"
                  />
                </div>
                <div className="col-sm-4">
                  <USPCard
                    image="/images/rentees-power.png"
                    title="Rentees"
                    text="To access affordable computation power as opposed to expensive hardware upgrades or monopolized cloud computing"
                  />
                </div>
                <div className="col-sm-4">
                  <USPCard
                    image="/images/developers-code.png"
                    title="Developers"
                    text="To utilize quick and easy developing environment setup to run power intensive AI/ML/Data-Science tasks"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features-section">
        <div className="container">
          <div className="text-center py-3">
            <h2 className="fw-bold my-3">Features That Set Us Apart</h2>
            <p className="text-secondary lead my-3">
              Our unique features makes us different from others while offering
              the best to our users
            </p>
            <div className="feature-cards">
              <div className="row row-cols-1 row-cols-sm-2 g-3 my-3">
                <div className="col">
                  <FeatureCard
                    image="/images/ai-charts.png"
                    title="Curated for ML Developers"
                    desc="We focus on creating a user-friendly platform making development easy for AI and ML practitioners."
                  />
                </div>
                <div className="col">
                  <FeatureCard
                    image="/images/plugin-system.png"
                    title="Plugin System For Easier Development"
                    desc="We provide a rich plugin system for hassle-free setup of your custom development environment."
                  />
                </div>
                <div className="col">
                  <FeatureCard
                    image="/images/hosts-money.png"
                    title="Currency Based, Non-Volatile Transactions"
                    desc="Unlike Web3.0 platforms, we operate on non-crypto payment methods using simple, day-to-day currency based transactions."
                  />
                </div>
                <div className="col">
                  <FeatureCard
                    image="/images/academic-books.png"
                    title="Academically Backed and Open-Sourced"
                    desc="Our decentralized P2PRC network is academically published and is an open source contribution"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing-section">
        <div className="container">
          <div className="text-center py-3">
            <h2 className="fw-bold my-3">Simple Pricing Plans</h2>
            <p className="text-secondary lead my-3">
              We offer competitive plans to match your use case
            </p>
            <div className="row row-cols-1 row-cols-sm-3 g-3">
              <div className="col">
                <PriceCard
                  title="Basic"
                  price="0"
                  caption="Ideal for beginners and hobbies"
                  desc1="Pay as you Go"
                  desc2="Hourly Rates Decided by the Hosts (as Low as 1$ per Hour)"
                  desc3="6% Per Transaction + 0.30"
                  btn="Get Started for FREE!"
                />
              </div>
              <div className="col">
                <PriceCard
                  title="Pro"
                  price="10"
                  caption="For frequent users who need more"
                  desc1="PAll Benefits as Basic"
                  desc2="24/7 Live Support"
                  desc3="4% per transaction + 0.30 cents"
                  btn="Get Started"
                />
              </div>
              <div className="col">
                <PriceCard
                  title="Enterprise"
                  price="50"
                  caption="For enterprise who need more"
                  desc1="All Benefits as Basic"
                  desc2="24/7 Live Support"
                  desc3="2% per transaction + 0.30 cents"
                  btn="Get Started"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team-section">
        <div className="container">
          <div className="text-center py-3">
            <h2 className="fw-bold my-3">Meet Our Team</h2>
            <p className="text-secondary lead my-3">
              Meet our dynamic team geared up to innovate and revolutionize
            </p>
            <div className="image shadow d-block">
              <Image
                src={"images/our-team.png"}
                width={1920}
                height={732}
                alt="our team picture"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
