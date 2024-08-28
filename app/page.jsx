import Feed from "@components/Feed";
import RegistrationForm from "@components/form/RegistrationForm";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      The School Manager:
      <br className="max-md:hidden" />
      <span className="green_gradient text-center">
        Records and transactions system
      </span>
    </h1>
    <p className="desc text-center">
      Vision Bearers Academy.
    </p>
    <Feed />
    <RegistrationForm />
  </section>
);

export default Home;
