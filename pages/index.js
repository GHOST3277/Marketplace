import { useState, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import FrameComponent1 from "../components/frame-component1";
import PortalPopup from "../components/portal-popup";
import styles from "./index.module.css";

// Home page

const Desktop1 = () => {
  const router = useRouter();
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onExploreClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onCreateClick = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onDropsClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onGroupButton2Click = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onGroupButton3Click = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  return (
    <>
      <main className={styles.desktop1} data-animate-on-scroll>
        <nav className={styles.header}>
          <img
            className={styles.adonisss1Icon}
            alt=""
            src="/adonisss-1@2x.png"
          />
          <a className={styles.explore} onClick={onExploreClick}>
            Explore
          </a>
          <a className={styles.create} onClick={onCreateClick}>
            Create
          </a>
          <a className={styles.drops} onClick={onDropsClick}>
            Drops
          </a>
          <button className={styles.rectangleParent}>
            <Button
              className={styles.groupChild}
              sx={{ width: 205 }}
              variant="contained"
              color="primary"
            >
              Connect Wallet
            </Button>
          </button>
        </nav>
        <img
          className={styles.headerDividerIcon}
          alt=""
          src="/header-divider.svg"
        />
        <div className={styles.searchAndDivider}>
          <img className={styles.icon} alt="" src="/3-573@2x.png" />
          <h1 className={styles.revolution}>Revolution</h1>
          <input className={styles.searchBar} type="text" />
          <img
            className={styles.icroundSearchIcon}
            alt=""
            src="/icroundsearch.svg"
          />
          <h2 className={styles.nameIsTheContainer}>
            <p
              className={styles.nameIsThe}
            >{`ADONISSS is the premier NFT marketplace for beginners, experts, and everyone in-between - `}</p>
            <p className={styles.nameIsThe}>
              without the hassle of Hidden Fees and Bot exploits.
            </p>
          </h2>
          <h3 className={styles.trackDownExclusive}>
            Track down exclusive NFTs from Top Creators.
          </h3>
          <h1 className={styles.discoverTheNft}>Discover the NFT</h1>
          <img
            className={styles.searchAndDividerChild}
            alt=""
            src="/vector-3.svg"
          />
          <img
            className={styles.searchAndDividerItem}
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className={styles.desktop1Child} />
        <img className={styles.icon1} alt="" src="/2-3@2x.png" />
        <div className={styles.subsBar}>
          <img className={styles.icon2} alt="" src="/4-2@2x.png" />
          <h1 className={styles.neverMissA}>Never Miss a Drop!</h1>
          <h2 className={styles.subscribeToOur}>
            Subscribe to our ultra-exclusive drop list and be the first to know
            about upcoming NFT drops.
          </h2>
          <input className={styles.subsBarChild} type="text" />
          <h4 className={styles.email}>Email</h4>
          <button className={styles.rectangleGroup} onClick={openFramePopup}>
            <button className={styles.groupItem} />
            <h2 className={styles.subscribe}>Subscribe</h2>
          </button>
          <img className={styles.subsBarItem} alt="" src="/vector-5.svg" />
          <img className={styles.subsBarInner} alt="" src="/vector-6.svg" />
        </div>
        <h1 className={styles.createNftsFor}>
          Create NFTs for your Community.
        </h1>
        <button
          className={styles.rectangleContainer}
          onClick={onGroupButton2Click}
        >
          <Button
            className={styles.groupChild}
            sx={{ width: 236 }}
            variant="contained"
            color="primary"
          >
            More
          </Button>
        </button>
        <button className={styles.groupButton} onClick={onGroupButton3Click}>
          <div className={styles.rectangleDiv} />
          <div className={styles.startSelling}>Start Selling</div>
        </button>
        <h2 className={styles.ourPlatformOffersContainer}>
          <p
            className={styles.nameIsThe}
          >{`Our platform offers a seamless and accessible way to turn your artwork, videos, music and more into one-of-a-kind, `}</p>
          <p
            className={styles.nameIsThe}
          >{`ownership-verified assets that can be bought and sold globally. `}</p>
          <p
            className={styles.nameIsThe}
          >{`Unleash the full potential of your digital creations and start creating NFTs now on our website. `}</p>
        </h2>
        <h3 className={styles.otherUsefulInfo}>other useful info.</h3>
        <div className={styles.otherUsefulInfo1}>other useful info.</div>
        <h3 className={styles.otherUsefulInfo2}>other useful info.</h3>
        <div className={styles.dropsTab}>
          <div className={styles.latestDrops}>Latest Drops</div>
          <canvas className={styles.dropsTabChild} />
          <canvas className={styles.dropsTabItem} />
          <canvas className={styles.dropsTabInner} />
          <canvas className={styles.rectangleCanvas} />
          <canvas className={styles.dropsTabChild1} />
          <canvas className={styles.dropsTabChild2} />
          <img
            className={styles.dc1f2f2d99cad863c10395c9173b1Icon}
            alt=""
            src="/159dc1f2f2d99cad863c10395c9173b1-1@2x.png"
          />
          <img
            className={styles.y0jrmjoklsFtjk1feh5l1j0LajfpIcon}
            alt=""
            src="/y0jrmjoklsftjk1feh5l1j0lajfpgqy9ibhrvzrg8lxbduu-4eyneullhawpklbzhc7rzo2vrj0jqpc8cwo61ddagjalhunj-1@2x.png"
          />
          <img
            className={styles.c617e0f492e49296abe247c8430a58Icon}
            alt=""
            src="/c617e0f492e49296abe247c8430a58dc-1@2x.png"
          />
          <img
            className={styles.fb5c12057a136522a82229dedbca1Icon}
            alt=""
            src="/3572fb5c12057a136522a82229dedbca-1@2x.png"
          />
          <img
            className={styles.bc37a6269630d2c134015ec0d8d47dIcon}
            alt=""
            src="/2bc37a6269630d2c134015ec0d8d47d2-1@2x.png"
          />
          <img
            className={styles.f5a1b20ea19a528edc8531794d6602Icon}
            alt=""
            src="/f5a1b20ea19a528edc8531794d6602e8-1@2x.png"
          />
          <div className={styles.azuki6970}>Azuki #6970</div>
          <div className={styles.cyberkong6970}>CyberKong #6970</div>
          <div className={styles.doodle6970}>Doodle #6970</div>
          <div className={styles.azuki69701}>Azuki #6970</div>
          <div className={styles.mutatedApe6970}>Mutated Ape #6970</div>
          <div className={styles.div}>#6970</div>
          <div className={styles.eth}>69 ETH</div>
          <div className={styles.eth1}>69 ETH</div>
          <div className={styles.eth2}>69 ETH</div>
          <div className={styles.eth3}>69 ETH</div>
          <div className={styles.eth4}>69 ETH</div>
          <div className={styles.eth5}>69 ETH</div>
        </div>
        <img
          className={styles.adonisss1Icon1}
          alt=""
          src="/adonisss-11@2x.png"
        />
      </main>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent1 onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop1;
