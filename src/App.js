/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';

const app = css`
  font-family: 'Montserrat', sans-serif;

  main {
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: space-between;
      padding: 35px 6% 25px;

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: inherit;
        gap: 30px;

        a {
          text-decoration: none;
          color: rgba(33, 31, 39, 0.7);
          font-weight: 500;

          &:hover {
            color: rgb(104 81 255);
            transition: 0.3s;
          }
        }

        li:first-of-type a {
          color: rgb(104 81 255) !important;
        }

        div {
          border-left: 1px solid rgba(33, 31, 39, 0.5);
        }
      }
    }

    h1 {
      font-size: 46px;
    }

    .introSection {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 600px;

      div {
        width: 512px;

        h1 {
          font-size: 60px;
          margin: 25px 0;
          line-height: 1.3em;
        }

        p {
          font-size: 18px;
          margin: 0;
          color: rgb(84 84 84);
          line-height: 1.5em;
        }

        button {
          display: flex;
          padding: 25px 30px;
          align-items: center;
          gap: 10px;
          background-color: rgb(104 81 255);
          border: none;
          border-radius: 5px;
          margin-top: 35px;
          box-shadow: 0 0 20px 1px rgb(0 0 0 / 20%);

          &:hover {
            transform: scale(1.05);
            background-color: rgb(117 96 255);
            transition: 0.3s;
          }

          p {
            color: white;
          }
        }
      }

      .introImage {
        width: 512px;
        margin: 50px;
      }
    }

    .partners {
      display: flex;
      justify-content: center;
      gap: 50px;

      div:nth-of-type(1) {
        width: 500px;
        margin-top: 50px;

        p {
          color: white;
          font-size: 16px;
          font-weight: 500;
        }

        h1 {
          line-height: 56px;
          color: white;
        }
      }
      div:nth-of-type(2) {
        width: 800px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .firstPartnerGrid {
          margin-bottom: 50px;
          display: grid;
          justify-content: center;
          gap: 15px;
          grid-template-columns: repeat(5, 1fr);

          a {
            display: inline-block;
            width: 120px;
            height: 160px;
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            box-shadow: 0 0 20px 1px rgb(0 0 0 / 20%);

            p {
              color: black;
            }

            p:nth-of-type(3) {
              color: rgb(117 117 117);
              font-size: 14px;
            }
          }
        }

        .secondPartnerGrid {
          width: 600px;
          grid-template-columns: repeat(4, 1fr);
        }

        button {
          display: flex;
          background: transparent;
          border: none;
          align-items: center;
          gap: 10px;
          font-size: 18px;
          font-weight: 600;
          color: rgb(104 81 255);
        }
      }

      &::before {
        position: absolute;
        z-index: -1;
        left: 0;
        top: 107vh;
        content: '';
        width: 800px;
        height: 500px;
        background-color: rgb(104 81 255);
        border-radius: 0 0 600px 0;
      }

      &::after {
        content: '';
        width: 100%;
        height: 100%;
        z-index: -2;
        position: absolute;
        background: linear-gradient(white 20%, black 0%);
      }
    }

    .whyFortmatic {
      display: flex;
      flex-wrap: wrap;
      padding-top: 100px;
      background-color: black;
      justify-content: center;

      h1 {
        text-align: center;
        color: white;
        width: 100%;
        margin: 0;
        padding-bottom: 50px;
      }

      p {
        text-align: center;
        color: rgb(117 117 117);
        width: 100%;
      }

      .whyFormaticGrid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        div {
          width: 300px;
          height: 250px;
          padding: 0px 50px;
          margin: 50px 0px;

          &:nth-of-type(2),
          &:nth-of-type(3),
          &:nth-of-type(5),
          &:nth-of-type(6) {
            border-left: 1px solid grey;
          }

          p {
            text-align: left;
            font-weight: 500;
          }

          h2 {
            color: white;
          }
        }
      }
    }

    .testimonials {
      height: auto;
      display: flex;
      flex-wrap: wrap;

      &::after {
        content: '';
        background-color: #00c988;
        width: 30%;
        height: 1500px;
        border-radius: 0 0 600px 0;
        position: absolute;
        z-index: -1;
      }

      h1 {
        margin: 0;
        padding-top: 80px;
        width: 100%;
        text-align: center;
      }

      .testimonial {
        display: inherit;
        align-items: center;
        margin: 80px 0 50px 100px;
        gap: 100px;

        div:nth-of-type(1) > img {
          width: 400px;
          border-radius: 10px;
          box-shadow: 0 0 20px 1px rgb(0 0 0 / 20%);
        }

        div:nth-of-type(2) {
          width: 600px;
          font-weight: 500;

          img {
            height: 50px;
          }

          p > mark {
            background: linear-gradient(
              180deg,
              hsla(0, 0%, 100%, 0) 50%,
              #c9fcd8 0
            );
          }

          p:nth-of-type(2) {
            color: grey;
          }
        }
      }
    }

    .investors {
      display: flex;
      flex-wrap: wrap;
      margin-top: 300px;
      justify-content: center;

      h1 {
        width: 100%;
        text-align: center;
        margin: 0;
      }

      p {
        width: 100%;
        text-align: center;
        font-size: 24px;
        color: grey;
        font-weight: 500;
      }

      div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        img:hover {
          transition: 0.2s ease;
          transform: translate(0, -10px);
        }
      }

      div:nth-of-type(2) {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;

        div {
          display: flex;
          align-items: center;
          width: 300px;
          margin: 0 10px;

          img {
            width: 100px;
            height: 100px;
            transform: none;
          }

          div {
            flex-wrap: wrap;
            width: 200px;
            align-items: center;
            gap: 0;

            & > p {
              text-align: left;
              color: black;
              margin: 0;
              font-size: 20px;
              font-weight: 600;

              &:nth-of-type(2) {
                font-size: 18px;
                font-weight: 500;
              }
            }

            &:hover {
              transform: none;
              transition: none;
            }
          }

          &:hover {
            transition: 0.2s ease;
            transform: translate(0, -10px);
          }
        }
      }
    }
  }

  footer {
    display: flex;
    margin-top: 200px;
    padding: 100px;
    justify-content: space-between;

    div:nth-of-type(1) {
      width: 200px;

      div {
        display: inline-block;

        a {
          text-decoration: none;
        }
      }

      .spacer {
        height: 200px;
      }
    }

    div:nth-of-type(2) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 150px;

      ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
          padding: 5px 0;

          h1 {
            font-size: 18px;
            font-weight: 500;
          }

          a {
            text-decoration: none;
            color: grey;

            &:hover {
              color: rgb(104 81 255);
              transition: 0.3s;
            }
          }
        }
      }
    }
  }
`;

const promotionBanner = css`
  display: flex;
  background-color: rgb(104 81 255);
  color: white;
  justify-content: center;

  p {
    margin: 0;
    padding: 20px;
  }
  a {
    margin-left: 15px;
    padding: 6px 12px;
    text-decoration: none;
    background-color: white;
    color: rgb(104 81 255);
    font-weight: bold;
    font-size: small;
    border-radius: 7px;
  }
`;

function App() {
  return (
    <div css={app}>
      <div css={promotionBanner}>
        <p>
          <span role="img" aria-label="wizard">
            🧙‍♀️
          </span>
          <strong>Fortmatic is now Magic – announces $4M in funding</strong>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </p>
      </div>
      <main>
        <header>
          <img src="./images/logo.9658e1c5.svg" alt="logo" />
          <ul>
            <li>
              <a href="./">Home</a>
            </li>
            <li>
              <a href="./">Documentation</a>
            </li>
            <li>
              <a href="./">Security</a>
            </li>
            <li>
              <a href="./">Partners</a>
            </li>
            <li>
              <a href="./">Pricing</a>
            </li>
            <li>
              <a href="./">Support</a>
            </li>
            <div />
            <li>
              <a href="./">Wallet</a>
            </li>
            <li>
              <a href="./">Developers</a>
            </li>
          </ul>
        </header>
        <section className="introSection">
          <div>
            <h1>Don't let wallets own your UX</h1>
            <p>
              Let users access your Ethereum app from anywhere.
              <br />
              No more browser extensions and seed phrases.
            </p>
            <button>
              <p>Get Started</p>
              <img src="./images/white_arrow.f3028fba.svg" alt="" />
            </button>
          </div>
          <div className="introImage">
            <img
              src="./images/intro_hero@2x.b10bf771.png"
              alt="display of the mobile application"
              width="100%"
            />
          </div>
        </section>
        <section className="partners">
          <div>
            <p>Trusted compliant authentication standard</p>
            <h1>
              Leading blockchain companies around the world have integrated
              Fortmatic.
            </h1>
          </div>
          <div>
            <div className="firstPartnerGrid">
              <a
                href="https://democracy.earth/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/democracy_earth_home.d018fbd5.svg"
                  alt="Democracy Earth logo"
                />
                <p>
                  Democracy
                  <br />
                  Earth
                </p>
                <p>Governance</p>
              </a>
              <a
                href="https://zerion.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/zerion_home.d3fe4247.svg"
                  alt="Zerion logo"
                />
                <p>Zerion</p>
                <p>Finance</p>
              </a>
              <a
                href="https://www.tokensets.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/set_home.46d1402d.svg"
                  alt="TokenSets logo"
                />
                <p>TokenSets</p>
                <p>Finance</p>
              </a>
              <a
                href="https://cent.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/cent_home.381e2ed5.svg" alt="Cent logo" />
                <p>Cent</p>
                <p>Social Network</p>
              </a>
              <a
                href="https://uniswap.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/uniswap_home.f634db96.svg"
                  alt="Uniswap logo"
                />
                <p>Uniswap</p>
                <p>Exchange</p>
              </a>
            </div>
            <div className="firstPartnerGrid secondPartnerGrid">
              <a
                href="https://pooltogether.com/de"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/pooltogether_home.7db00665.svg"
                  alt="PoolTogether logo"
                />
                <p>PoolTogether</p>
                <p>Game</p>
              </a>
              <a
                href="https://opensea.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/opensea_home.bfa3a4cf.svg"
                  alt="OpenSea logo"
                />
                <p>OpenSea</p>
                <p>Marketplace</p>
              </a>
              <a
                href="https://www.f1deltatime.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/f1_home.5e35c006.svg"
                  alt="F1 Delta Time logo"
                />
                <p>F1 Delta Time</p>
                <p>Game</p>
              </a>
              <a
                href="https://radar.tech/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/radar_home.20f9afd1.svg"
                  alt="Radar Relay logo"
                />
                <p>Radar Relay</p>
                <p>Exchange</p>
              </a>
            </div>
            <button>
              View More Companies
              <img src="./images/arrow_right_magic.bb0b0733.svg" alt="" />
            </button>
          </div>
        </section>
        <section className="whyFortmatic">
          <p>WHY FORTMATIC?</p>
          <br />
          <h1>Don’t settle for less.</h1>
          <div className="whyFormaticGrid">
            <div>
              <img src="./images/funnel.4d5848cf.svg" alt="" />
              <h2>Expand user funnel.</h2>
              <p>
                65% of our users interact with apps on mobile web – not just
                desktop.
              </p>
            </div>
            <div>
              <img src="./images/flame.e59e4dfe.svg" alt="" />
              <h2>Integration in minutes.</h2>
              <p>
                Nothing to change if your app already works with web3 and
                MetaMask. Fortmatic is a better alternative to MetaMask.
              </p>
            </div>
            <div>
              <img src="./images/badge.7cafe99e.svg" alt="" />
              <h2>Security compliant.</h2>
              <p>
                Fortmatic is SOC 2 Type 1 compliant with a non-custodial HSM
                architecture.
              </p>
            </div>
            <div>
              <img src="./images/flag.4a9fd990.svg" alt="" />
              <h2>Increase user conversion.</h2>
              <p>
                Slash user onboarding steps by 70% with a familiar Web 2.0
                experience.
              </p>
            </div>
            <div>
              <img src="./images/hearts.cc9e257c.svg" alt="" />
              <h2>Full control over UX.</h2>
              <p>
                Is customizeable, embedded, and doesn't take users away from
                your app.
              </p>
            </div>
            <div>
              <img src="./images/lock.2a11ac06.svg" alt="" />
              <h2>Multi-factor authentication.</h2>
              <p>
                User have access to: OTP code, device 2FA, recovery email, and
                more.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <h1>Testimonials</h1>
          <div className="testimonial">
            <div>
              <img src="./images/naval@2x.d80b0853.png" alt="Naval Ravikant" />
            </div>
            <div>
              <a
                href="https://twitter.com/naval"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/naval_logo@2x.4d5df98e.png"
                  alt="Naval Ravikant's Twitter avatar"
                />
              </a>
              <p>
                “Magic [formerly known as Fortmatic] points the way towards a
                world in which user identity and authentication is decentralized
                and <mark>not subject to control by the tech giants</mark>
                ."
              </p>
              <p>Naval Ravikant, Co-founder of AngelList</p>
            </div>
          </div>
          <div className="testimonial">
            <div>
              <img src="./images/cent@2x.9ae77963.png" alt="Matthew Ferrick" />
            </div>
            <div>
              <a
                href="https://cent.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./images/cent_logo.d6ab36b1.svg" alt="Cent logo" />
              </a>
              <p>
                “
                <mark>
                  We’d always wanted to make Metamask and things like it
                  unnecessary on Cent
                </mark>
                , but there just wasn't a safe or seamless solution to do that;
                until Fortmatic. <mark>We love it, and so do our users."</mark>
              </p>
              <p>Matthew Ferrick, Product Manager & Community</p>
            </div>
          </div>
          <div className="testimonial">
            <div>
              <img src="./images/set@2x.5365ab13.png" alt="Matthew Ferrick" />
            </div>
            <div>
              <a
                href="https://www.tokensets.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/set_logo.077e0519.svg"
                  alt="TokenSets logo"
                />
              </a>
              <p>
                “The feedback we've gotten about Fortmatic on TokenSets has been
                overwhelmingly positive because of its intuitive user
                experience, with
                <mark>
                  users consistently logging in more with Fortmatic over
                  MetaMask
                </mark>
                since we've launched.
                <br />
                <br />
                Overall, Fortmatic has been a valuable integration for
                TokenSets, allowing
                <mark>
                  us to capture a market of users that haven't been onboarded
                  onto existing wallet providers
                </mark>
                , and raising the bar for product quality in a space that
                desperately needs it."
              </p>
              <p>Inje Yeo, CPO</p>
            </div>
          </div>
        </section>
        <section className="investors">
          <h1>Investors</h1>
          <p>Fortmatic is a collaborative effort from the best.</p>
          <div>
            <img
              src="./images/placeholder.f74b44f3.svg"
              alt="placeholder logo"
            />
            <img src="./images/lightspeed.2286b674.svg" alt="lightspeed logo" />
            <img src="./images/sv_angel.9a8d449a.svg" alt="SvAngel logo" />
            <img
              src="./images/social_capital.57d283c9.svg"
              alt="SocialCapital logo"
            />
            <img
              src="./images/cherubic.30f428bc.svg"
              alt="CherubicVentures logo"
            />
            <img src="./images/volt.0590232f.svg" alt="VoltCapital logo" />
            <img src="./images/refactor.dc008529.svg" alt="Refractor logo" />
            <img
              src="./images/unusual.74e8081d.svg"
              alt="UnusualVentures logo"
            />
          </div>
          <div>
            <div>
              <img src="./images/naval@2x.8e1d2747.png" alt="Naval Ravikant" />
              <div>
                <p>Naval Ravikant</p>
                <p>Co-founder, AngelList</p>
              </div>
            </div>
            <div>
              <img
                src="./images/guillermo@2x.c63cf9f1.png"
                alt="Guillermo Rauch"
              />
              <div>
                <p>Guillermo Rauch</p>
                <p>CEO, Vercel</p>
              </div>
            </div>
            <div>
              <img
                src="./images/roham@2x.e3b4fd6a.png"
                alt="Roham Gharegozlou"
              />
              <div>
                <p>Roham Gharegozlou</p>
                <p>CEO, Dapper Labs</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <img src="./images/logo.9658e1c5.svg" alt="logo" />
          <div className="spacer" />
          <div>
            <p>© 2020 Magic Labs, Inc.</p>
            <a href="mailto:contact@fortmatic.com">contact@fortmatic.com</a>
          </div>
        </div>
        <div>
          <ul>
            <li>
              <h1>COMPANY</h1>
            </li>
            <li>
              <a href="./">Partners</a>
            </li>
            <li>
              <a href="./">Careers</a>
            </li>
            <li>
              <a href="./">Legal</a>
            </li>
            <li>
              <a href="./">Pricing</a>
            </li>
            <li>
              <a href="./">Security</a>
            </li>
          </ul>
          <ul>
            <li>
              <h1>RESOURCES</h1>
            </li>
            <li>
              <a href="./">Documentation</a>
            </li>
            <li>
              <a href="./">Brand Assets</a>
            </li>
          </ul>
          <ul>
            <li>
              <h1>SOCIAL</h1>
            </li>
            <li>
              <a href="./">Telegram</a>
            </li>
            <li>
              <a href="./">Blog</a>
            </li>
            <li>
              <a href="./">Twitter</a>
            </li>
            <li>
              <a href="./">Discord</a>
            </li>
            <li>
              <a href="./">GitHub</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
