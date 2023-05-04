//https://www.codingthesmartway.com/how-to-fetch-api-data-with-react/

import React, { useEffect, useState } from "react"
import styles from "./Description.module.css";

const Description = () => {
    const [watch, setWatch] = useState([])
    const fetchWatchData = () => {
        fetch("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setWatch(data)
            })
    }
    useEffect(() => {
        fetchWatchData()
    }, [])
    return (
        <>
            <div className={styles.wrapping}>
                {watch.listing &&
                    <div>
                        <div className={styles.container}>
                            <div className={styles.name}>
                            {watch.listing.model.brand.name} {watch.listing.model.name}<br/>
                            {watch.listing.condition} / {watch.listing.manufactureYear} <br />
                            </div>
                            <img className={styles.image} src={watch.listing.images[0].image.url} /><br />
                        </div>
                        <div className={styles.container}>
                            <br/>
                            Selling Price {(watch.salePriceCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })} <br />
                            Level 1 Commission {(watch.commissionRateBips / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })} <br />
                            Seller fee {(watch.sellerFeeCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })} <br />
                            Insured Shipping Free <br />
                            Bezel authentication Free <br />
                        </div>
                        Earnings {(watch.payoutAmountCents / 100).toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </div>
                }
            </div>

        </>
    );
}

export default Description;