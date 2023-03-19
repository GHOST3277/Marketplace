import { useCallback } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import styles from "./desktop2.module.css";

// Explore page

const Desktop2 = () => {
  const router = useRouter();

  const onADONISSS1ImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onExplore1Click = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const onCreateClick = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  return (
    <div className={styles.desktop2}>
      <img className={styles.desktop2Child} alt="" src="/rectangle-15@2x.png" />
      <img
        className={styles.headerDividerIcon}
        alt=""
        src="/header-divider.svg"
      />
      <h1 className={styles.explore}>Explore</h1>
      <div className={styles.dropsTab}>
        <canvas className={styles.dropsTabChild} />
        <canvas className={styles.dropsTabItem} />
        <canvas className={styles.dropsTabInner} />
        <canvas className={styles.rectangleCanvas} />
        <canvas className={styles.dropsTabChild1} />
        <canvas className={styles.dropsTabChild2} />
      </div>
      <div className={styles.dropsTab1}>
        <canvas className={styles.dropsTabChild} />
        <canvas className={styles.dropsTabItem} />
        <canvas className={styles.dropsTabInner} />
        <canvas className={styles.rectangleCanvas} />
        <canvas className={styles.dropsTabChild1} />
        <canvas className={styles.dropsTabChild2} />
      </div>
      <header className={styles.header}>
        <img
          className={styles.adonisss1Icon}
          alt=""
          src="/adonisss-1@2x.png"
          onClick={onADONISSS1ImageClick}
        />
        <a className={styles.explore1} onClick={onExplore1Click}>
          Explore
        </a>
        <a className={styles.create} onClick={onCreateClick}>
          Create
        </a>
        <div className={styles.drops}>Drops</div>
        <button className={styles.rectangleParent}>
          <Button
            className={styles.groupChild}
            sx={{ width: 205 }}
            variant="contained"
            color="primary"
          >
            Button
          </Button>
          <button className={styles.connectWallet}>Connect Wallet</button>
        </button>
      </header>
    </div>
  );
};

export default Desktop2;
