import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LogoutButton from "./ui/LogoutButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <section className="w-full flex-center flex-col">
      <h2>Welcome {session?.user?.username}</h2>
      <h1 className="head_text text-center">
        Comm Solutions:
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          {" "}
          For all your personal and corporate communication.
        </span>
      </h1>
      <p className="desc text-center">
        Professional communication solutions for individuals and corporates
      </p>
      <div>
        <LogoutButton label={"Logout"} />
      </div>
    </section>
  );
}




