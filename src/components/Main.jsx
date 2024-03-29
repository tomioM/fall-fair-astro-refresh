import { useTina, tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const Main = (props) => {
  const { data: { page } } = useTina(props);

  return ( 
  <>
    {console.log(page)}
    <nav className="navigation">
      <div className="nav-container">
        <div>
          <a href="#hero" className="logo w-inline-block">
            <h2 className="logo-heading simple" data-tina-field={tinaField(page, 'title')}>{page.title}</h2>
            <h2 className="logo-heading detailed">
              <span className="text-span"><span data-tina-field={tinaField(page, 'title')}>{page.title}</span> <span>{page.year}</span></span>
            </h2>
          </a>
        </div>
        <div className="nav-right-wrapper">
          {
            page.navLinks?.map(navLink => (
              <a
              href={navLink.url}
              target="_blank"
              className="link"
              data-tina-field={tinaField(navLink, 'name')}
              >{navLink.name}</a>
            ))
          }
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
            <div className="qf-text" data-tina-field={tinaField(page, 'byline')}>{page.hero.byline}<br /></div>
          </div>
          <h1 id="heading-title" className="hero-heading" data-tina-field={tinaField(page, 'title')}>
            {page.title}
          </h1>
          <h3 className="sub-heading" data-tina-field={tinaField(page, 'subheading')}>
            {page.hero.subheading}
          </h3>
          <p className="paragraph" data-tina-field={tinaField(page, 'description')}>
            {page.hero.description}
          </p>
          <div>
            {
              page.hero.heroLinks?.map(heroLink => (
                <a
                  data-w-id="29ee5900-ec6d-1893-983c-4736b43dade9"
                  href={heroLink?.url}
                  target="_blank"
                  className="button w-inline-block"
                  data-tina-field={tinaField(heroLink, 'name')}
                >
                  <div className="button-text">{heroLink?.name}</div>
                  <div className="button-bg facebook"></div>
                </a>
              ))
            }
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
            <h2 className="row-header orange" data-tina-field={tinaField(page, 'exhibition.heading')}>{page.exhibition.heading}‍</h2>
          </div>
          <div>
            <div className="rich-text w-richtext" data-tina-field={tinaField(page, 'exhibition.text')}>
              <TinaMarkdown content={page.exhibition.text} />
            </div>
          </div>
        </div>
        <div className="row-wrap single">
          <div className="row-header-wrap">
            <h2 className="row-header orange" data-tina-field={tinaField(page, 'competition.heading')}>{page.competition.heading}‍</h2>
          </div>
          <div>
            <div className="rich-text w-richtext" data-tina-field={tinaField(page, 'competition.text')}>
              <TinaMarkdown content={page.competition.text} />
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
        <div className="row-wrap single">
          <div className="row-header-wrap">
            <h2 className="row-header blue" data-tina-field={tinaField(page, 'race.heading')}>{page.race.heading}</h2>
            <p></p>
          </div>
          <div>
            <div className="rich-text w-richtext" data-tina-field={tinaField(page, 'race.text')}>
              <TinaMarkdown content={page.race.text} />
            </div>
          </div>
        </div>
        <div className="row-wrap single">
          <div className="row-header-wrap">
            <h2 className="row-header blue" data-tina-field={tinaField(page, 'booths.heading')}>
              {page.booths.heading}
            </h2>
          </div>
          <div>
            <div className="rich-text w-richtext" data-tina-field={tinaField(page, 'booths.text')}>
              <TinaMarkdown content={page.booths.text} />
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
            {
              page.footer.contacts?.map(item => (
                <li className="list-item" data-tina-field={tinaField(item, 'heading')}>
                  <div className="text-block-11">{item.heading}</div>
                  <TinaMarkdown content={item.links}/>
                </li>
              ))
            }
            </ul>
          </div>
          <div>
            <h2 className="footer-heading-2">Credits</h2>
            <ul role="list" className="w-list-unstyled">
            {
                page.footer.credits?.map(item => (
                  <li className="list-item" data-tina-field={tinaField(item, 'heading')}>
                    <div className="text-block-11">{item.heading}</div>
                    <TinaMarkdown content={item.links}/>
                  </li>
                ))
              }
            </ul>
          </div>
          <div>
            <h2 className="footer-heading-2">Social media</h2>
            <ul role="list" className="w-list-unstyled">
            {
                page.footer.socials?.map(item => (
                  <li className="list-item" data-tina-field={tinaField(item, 'heading')}>
                    <div className="text-block-11">{item.heading}</div>
                    <TinaMarkdown content={item.links}/>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </>
  );
};
