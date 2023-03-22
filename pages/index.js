import { ConnectWallet, MediaRenderer, useActiveListings, useContract } from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

const Home = () => {
  const { contract } = useContract(
    '0xA6cC608D4F117136598044Ec428d8961b59AE101',
    'marketplace'
  )
    const router = useRouter();

  const { data: nfts, isLoading} = useActiveListings(contract);

  const onADONISSS1ImageClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (

    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
      
        <ConnectWallet/>
        {!isLoading ? (
          <div>
            {nfts && nfts.map((nft ) => {
              return (
                <div>
                  <MediaRenderer
                   src={nft.asset.image}
                   height="200px"
                   width="200px"
                  />
                  <p>{nft.asset.name}</p>
                  <p>Price: {nft.buyoutCurrencyValuePerToken.displayValue} MATIC</p>
                  <button
                   onClick={async () => {
                    try {
                      await contract?.buyoutListing(BigNumber.from(nft.id), 1);
                    } catch (error) {
                      console.error(error);
                      alert(error);
                    }
                   }}
                   >
                    Buy Now
                   </button>
                  </div>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </main>
    </div>
  );
};

export default Home;