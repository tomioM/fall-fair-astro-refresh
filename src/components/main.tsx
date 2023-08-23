import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const MyComponent = (props) => {
  const { data: { page } } = useTina(props);

  return ( 
  <>
    {console.log(page)}
    <nav className="navigation">
      <div className="nav-container">
        <div>
          <a href="#hero" className="logo w-inline-block">
            <h2 className="logo-heading simple">{page.title}</h2>
            <h2 className="logo-heading detailed">
              <span className="text-span">{page.title} {page.year}</span>
            </h2>
          </a>
        </div>
        <div className="nav-right-wrapper">
          <a
            href="https://webflow.com/vimalanvijayasekaran"
            target="_blank"
            className="link cloneables"
            >More cloneables</a
          >
          <a
            href="https://www.facebook.com/gabriolacommons"
            target="_blank"
            className="link"
            >Facebook</a
          >
          <a
            href="https://www.gabriolacommons.ca/"
            target="_blank"
            className="link commons"
            >Gabriola Commons</a
          >
          <a href="mailto:maximk7@gmail.com" className="link">Contact Us</a>
        </div>
      </div>
    </nav>
    <section id="hero" className="section hero wf-section">
      <img
        src="mask-shape.svg"
        loading="lazy"
        alt=""
        className="image hide"
      />
      <div className="container hero">
        <div className="hero-content-wrapper">
          <div className="made-for-community">
            <img
              src="images/commons-logo-cream.png"
              loading="lazy"
              data-sizes='[{"max":479,"size":"12vw"},{"max":10000,"size":"30px"}]'
              alt=""
              className="_wf-logo"
            />
            <div className="qf-text">A Gabriola Commons tradition!<br /></div>
          </div>
          <h1 id="heading-title" className="hero-heading">
            {page.title}
          </h1>
          <h3 className="sub-heading">
            {page.subheading}
          </h3>
          <p className="paragraph">
            {page.description}
          </p>
          <div>
            <a
              data-w-id="29ee5900-ec6d-1893-983c-4736b43dade9"
              href="https://www.facebook.com/events/1339381806789423"
              target="_blank"
              className="button w-inline-block"
            >
              <div className="button-text">Facebook</div>
              <div className="button-bg facebook"></div>
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img
            src="images/squash-racer.png"
            loading="lazy"
            data-w-id="be8b1bdd-8a17-ccd1-840f-02e6dedfddd0"
            data-sizes='[{"max":479,"size":"89vw"},{"max":767,"size":"400px"},{"max":991,"size":"52vw"},{"max":10000,"size":"28vw"}]'
            sizes="(max-width: 479px) 89vw, (max-width: 767px) 400px, (max-width: 991px) 52vw, 28vw"
            alt=""
            className="hero-image"
          />
          <div className="hero-image-shadow"></div>
        </div>
      </div>
    </section>
    <section id="call-outs" className="normal-section blue wf-section">
      <img
        src="mask-shape.svg"
        loading="lazy"
        alt=""
        className="image"
      />
      <article className="container call-outs">
        <h1 id="heading-title" className="heading-2">Call Outs</h1>
        <div className="row-wrap single">
          <div className="row-header-wrap">
            <h2 className="row-header orange">Exhibition / competition<br />‍</h2>
          </div>
          <div>
            <div className="rich-text w-richtext">
              <p><strong>Exhibition Details:</strong></p>
              <p>+ All submissions must be Gabriola made or grown.<br /></p>
              <p>
                + You can enter as many categories as you&#x27;d like..<br />
              </p>
              <p>
                + There are open categories for Junior Maker, Baker, and Farmer
                for our young creators! <br />
              </p>
              <p>
                + Bring entries to the Commons on Sunday, Sept 18th between
                9-11am.<br />
              </p>
              <p>
                + Pre-registration is not required. We&#x27;ll have forms on
                site for you to add info.
              </p>
              <p>
                + All first place peeps will receive a ribbon handmade by our
                volunteer team (we hope to have enough made for 2nd and 3rd
                too!)<br />
              </p>
              <p>
                + We&#x27;ll be announcing category winners throughout the event
                (12-6pm)<br />
              </p>
              <p>
                + Fair attendees will receive stickers to assign to their top
                picks. We also have an awesome roster of volunteer judges.
              </p>
              <p>Coordinator: </p>
              <p>maximk7@gmail.com</p>
              <p>‍</p>
              <p>
                <strong>COMPETITION CATEGORIES</strong>
                <a
                  href="documents/Gabriola-Fall-Fair-Exhibition-Categories-2021.pdf"
                  >Download PDF</a
                >
              </p>
              <p><strong>Crafts</strong></p>
              <ol role="list">
                <li>Up-cycled</li>
                <li>Sustainably-sourced nature crafts</li>
                <li>Fibre Art</li>
                <li>Pottery</li>
                <li>Woodwork</li>
                <li>Veggie Monsters</li>
                <li>Junior Maker<br /></li>
              </ol>
              <p><strong>Flowers</strong></p>
              <ol start="8" role="list">
                <li>Mixed Bouquet</li>
                <li>Largest single bloom</li>
                <li>Cultivated native species arrangement</li>
                <li>Dahlias</li>
                <li>Sunflowers</li>
                <li>Weird and wacky (unique beauty)<br /></li>
              </ol>
              <p><strong>Baked &amp; Preserved</strong></p>
              <ol start="14" role="list">
                <li>Pies</li>
                <li>Bread</li>
                <li>Cake</li>
                <li>Cookies</li>
                <li>Gluten-free Vegan</li>
                <li>Jams and Jellies</li>
                <li>Most innovative</li>
                <li>Tastiest topping (savory)</li>
                <li>Honey</li>
                <li>Junior Baker<br /></li>
              </ol>
              <p><strong>Veggies &amp; Fruits</strong></p>
              <ol start="24" role="list">
                <li>Silly or seductive</li>
                <li>Heavyweight champion</li>
                <li>Largest diameter</li>
                <li>Spectacular squash</li>
                <li>Edible bouquet</li>
                <li>Rockin’ roots</li>
                <li>Perfectly imperfect fruit</li>
                <li>Berry bowl</li>
                <li>Terrific tomatoes</li>
                <li>Exotic fruits</li>
                <li>A+ Apples</li>
                <li>Junior Farmer<br /></li>
              </ol>
              <p><strong>And…</strong></p>
              <ol start="36" role="list">
                <li>Fabulous fungi</li>
                <li>Eggceptional eggs</li>
                <li>Celebrity look-alike scarecrow</li>
                <li>Miniature scarecrow</li>
                <li>Home brew</li>
                <li>Best bud (cannabis)</li>
                <li>Harvest medley basket</li>
              </ol>
              <p>‍</p>
            </div>
          </div>
        </div>
        <img
          src="images/scarecrow.png"
          loading="lazy"
          id="w-node-c04ca2b0-8fc7-d734-1bce-b8a2ae9cac73-a004c39e"
          data-sizes='[{"max":479,"size":"94vw"},{"max":767,"size":"93vw"},{"max":10000,"size":"600px"}]'
          sizes="(max-width: 479px) 94vw, (max-width: 767px) 93vw, 600px"
          alt=""
          className="scarecrow"
        />
      </article>
    </section>
    <section className="normal-section orange wf-section">
      <img
        src="mask-shape.svg"
        loading="lazy"
        alt=""
        className="image orange"
      />
      <div
        data-w-id="ba49faed-bc5d-634f-572d-624e65881eb1"
        className="nav-color-controller"
      ></div>
      <div className="container call-outs">
        <h1 id="heading-title" className="heading-2">Call Outs</h1>
        <div className="row-wrap">
          <div className="row-header-wrap">
            <h2 className="row-header blue">squash race!</h2>
            <p></p>
          </div>
          <div>
            <div className="rich-text w-richtext">
              <p><strong>Squash Race Guidelines</strong></p>
              <ul role="list">
                <li>
                  Racetrack is a 24&#x27; long downhill slope. Squash racers are
                  gravity-powered.
                </li>
                <li>
                  Make a racer at home, using wheels and whatever materials and
                  decorations you can find.
                  <strong
                    >The maximum size for the wheelbase is 18&quot; wide and
                    16&quot; long.</strong
                  >
                </li>
                <li>
                  Didn&#x27;t make a racer ahead of time? No problem! Racecar
                  makings and some donated squashes available day-of.  Please
                  bring extra for other racers if you have them!
                </li>
                <li>
                  Races begin 2:30pm. Detailed schedule will be posted onsite.
                </li>
              </ul>
              <br />
              <p><strong>Race Master:</strong></p>
              <p>
                ‍<a href="mailto:Linda.Nielson@viu.ca"
                  >jeff@humannaturecounselling.ca</a
                >
              </p>
              <br />
              <p><strong>Categories:</strong></p>
              <ol role="list">
                <li><strong>Youth </strong>(self-identified)</li>
                <li>
                  <strong>&quot;90% Squash&quot;</strong> -for the pure squash
                  racer, using the squash as the chassis:) Open to all-ages
                </li>
                <li><strong>Open </strong>- anything goes, all-ages</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="row-wrap">
          <div className="row-header-wrap">
            <h2 className="row-header blue">
              CALL FOR BOOTHS: VENDORS, ARTISANS, COMMUNITY GROUPS
            </h2>
            <p>Contact: maximk7@gmail.com</p>
          </div>
          <div>
            <div className="rich-text w-richtext">
              <ul role="list">
                <li>
                  You bring everything you need. Wifi available, but no tables,
                  tents, power or water supplied.
                </li>
                <li>We want this event to be a lot of fun and interactive.</li>
                <li>
                  We’re trying to create a “Midway” feel. We strongly encourage
                  you to create an all-ages game for your booth! (This could
                  also be used as a fundraiser for your group, or attract people
                  to your business.)
                </li>
                <li>
                  Registration is $20 for displays, demos, info booths / $30 if
                  you are selling something.
                </li>
                <li>
                  Please allow some time after the event to help with the
                  general clean up.
                </li>
                <li>
                  You will be given a space on the day-of during setup (10:30am
                  - 12pm).
                </li>
                <li>
                  Email
                  <a href="mailto:maximk7@gmail.com">maximk7@gmail.com</a> to
                  secure a space.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer" className="footer wf-section">
      <div className="container-2 w-container">
        <div className="footer-flex-container-2">
          <div>
            <h2 className="footer-heading-2">send us a message</h2>
            <ul role="list" className="w-list-unstyled">
              <li className="list-item">
                <div className="text-block-11">Email:</div>
                <a
                  href="mailto:maximk7@gmail.com?subject=Hey!"
                  className="footer-link"
                  >maximk7@gmail.com</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading-2">Credits</h2>
            <ul role="list" className="w-list-unstyled">
              <li className="list-item">
                <div className="text-block-11">Photo Elements</div>
                <a
                  href="https://www.flickr.com/photos/gabriolaisland/"
                  className="footer-link"
                  >Bill Pope,</a
                >
                <a href="#" className="footer-link dead"> Jinny Hayes</a>
              </li>
              <li className="list-item">
                <div className="text-block-11">Website:</div>
                <a href="mailto:tomiowm.design@gmail.com" className="footer-link"
                  >Tomio Miyagawa</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2 className="footer-heading-2">Social media</h2>
            <ul role="list" className="w-list-unstyled">
              <li className="list-item">
                <a
                  href="https://www.facebook.com/events/1339381806789423"
                  target="_blank"
                  className="footer-link"
                  >Facebook</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
};
