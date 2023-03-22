import Link from "next/link";
import Image from "next/image";
import logo from "../public/adonisss-1@2x.png";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Navbar.css";

const Navbar = () => {

  const router = useRouter();
  const onADONISSS1ImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <nav>
      <div className="flex justify-between items-center">
        <div className="logo cursor-pointer" onClick={onADONISSS1ImageClick}>
          <img
            alt=""
            src="/adonisss-1@2x.png"
            width={200}
            height={200}
          />
        </div>
        <div className="nav">
          <ul className="flex">
            <li>HOME</li>
            <li>EXPLORE</li>
            <li>PROFILE</li>
            <ConnectWallet/>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
