import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        NIMULE AREA BASED DEVELOPMENT INVESTMENT STRATEGY FRAMEWORK:
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          IT tool for rural communities entreprenuership{" "}
        </span>
      </h1>
      <p className="desc text-center">
        Enhancing Local CDC's capacity: Supported by IGAD Regional Migration Fund (IGADRMF),
        financed by the Federal Government of Germany through the German
        Development Bank (KfW),
      </p>

      <Feed />
    </section>
  );
};

export default Home;
