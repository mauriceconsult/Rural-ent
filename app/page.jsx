import Feed from "@components/Feed";
import RegistrationForm from "@components/form/RegistrationForm";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Custom Management Solution:
      <br className="max-md:hidden" />
      <span className="green_gradient text-center">
        your agile management system
      </span>
    </h1>
    <p className="desc text-center">
      Newgenie is an agile tool that adapts to your organization needs.
    </p>
    {/* <Feed /> */}
    <RegistrationForm />
  </section>
);

export default Home;
