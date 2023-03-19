import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import FrameComponent from "../components/frame-component";
import PortalPopup from "../components/portal-popup";
import styles from "./desktop3.module.css";
import { useWeb3 } from '@3rdweb/hooks';
import Desktop2 from "./desktop2";


// Create page

const Desktop3 = () => {

  const router = useRouter();

  const { address, connectWallet } = useWeb3() 

  const [isFramePopupOpen, setFramePopupOpen] = useState(false);

  const onExploreClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onDropsClick = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onADONISSS1ImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);
 
  // Check if wallet is connected before rendering the page
  <div className={styles.button}>
    {address ? (
      <>
      <Desktop3 />
      <Desktop2 />
      <Index />
      </>
    ) : (
      <div className={styles.walletConnectWrapper}>
        <button
        className={styles.Button}
        onClick={() => connectWallet('injected')}
        >
          Connect Wallet
        </button>
        <div className={styles.details}>
          You need to have Metamask extension.
        </div>
      </div>
    )}
  </div>

  
  return (
    <>
      <div className={styles.desktop3}>
        <div className={styles.desktop3Child} />
        <div className={styles.desktop3Item} />
        <header className={styles.header}>
          <a className={styles.explore} onClick={onExploreClick}>
            Explore
          </a>
          <a className={styles.create}>Create</a>
          <a className={styles.drops} onClick={onDropsClick}>
            Drops
          </a>
          <img
            className={styles.adonisss1Icon}
            alt=""
            src="/adonisss-1@2x.png"
            onClick={onADONISSS1ImageClick}
          />
        </header>
        <img
          className={styles.headerDividerIcon}
          alt=""
          src="/header-divider.svg"
        />
        <h1 className={styles.createYourNft}>Create Your NFT</h1>
        <h1 className={styles.imageVideoAudioContainer}>
          <p className={styles.imageVideoAudio}>
            Image, Video, Audio, or 3D Model
          </p>
          <p
            className={styles.fileTypesSupported}
          >{`File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. `}</p>
        </h1>
        <h1 className={styles.nftName}>NFT Name *</h1>
        <h1 className={styles.addDescription}>Add Description</h1>
        <h1 className={styles.enterPriceLimitContainer}>
          <p className={styles.imageVideoAudio}>Enter Price</p>
          <p className={styles.fileTypesSupported}>Limit - (0.1 ETH - 1 ETH)</p>
        </h1>
        <textarea className={styles.searchBar} />
        <textarea className={styles.searchBar1} />
        <canvas className={styles.searchBar2} />
        <textarea className={styles.searchBar3} />
        <button className={styles.searchBarParent} onClick={openFramePopup}>
          <Button
            className={styles.searchBar4}
            sx={{ width: 244 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
          <div className={styles.create1}>Create</div>
        </button>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Desktop3;
