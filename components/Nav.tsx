"use client";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState<any>("");
  useEffect(() => {
    const _setProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    _setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>

            <button
              type="button"
              onClick={() => signOut()}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image ? session?.user?.image : ""}
                className="rounded-full"
                width={37}
                height={37}
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider: any) => {
                return (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sign in with {provider.name}
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
