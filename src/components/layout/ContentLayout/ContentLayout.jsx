export const ContentLayout = ({ currentRoute }) => {
  return (
    <section className="card willFadeIn !px-[10%] !py-[5%]">
      <header className="content_card">
        <h1 className="contentRoute_title text-3xl font-semibold mb-[1em]">
          {currentRoute.pageTitle}
        </h1>
      </header>
      <article className="contentRoute_content">
        {currentRoute.pageContent.map((cont, index) => (
          <p
            key={index}
            className="text-sm font-extralight leading-6 tracking-wide mb-[4%] last:mb-0"
          >
            {cont}
          </p>
        ))}
      </article>
    </section>
  );
};