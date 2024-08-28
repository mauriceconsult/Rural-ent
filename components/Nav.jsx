"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/vblogo.svg"
          alt="Vision_Bearers"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Vision Bearers Academy</p>
      </Link>

      {/* Desktop Navigation */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/register-student" className="black_btn">
              Register Student
            </Link>
            <Link
              href="/receive-fees"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Receive Fees
            </Link>
            <Link
              href="/create-class"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Class
            </Link>
            <Link
              href="/create-notices"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Notices
            </Link>
            <Link
              href="/register teacher"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Register Teacher
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/admin"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Admin
                </Link>
                <Link
                  href="/register-student"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Register Student
                </Link>
                <Link
                  href="/receive-fees"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Receive Fees
                </Link>
                <Link
                  href="/create-class"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Class
                </Link>
                <Link
                  href="/create-notices"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Notices
                </Link>
                <Link
                  href="/register teacher"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Register Teacher
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
