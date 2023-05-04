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
            <div >
                {watch.listing &&
                    <div>
                        {watch.listing.model.brand.name} {watch.listing.model.name}
                        <img className={styles.image} src={watch.listing.images[0].image.url} /><br />
                        {watch.listing.condition} / {watch.listing.manufactureYear} <br />
                        {/* Selling Price ${watch.listing.salePriceCents} <br />
                        Level 1 Commission ${watch.listing.commissionRateBips} <br />
                        Seller fee ${watch.listing.sellerFeeCents} <br />
                        Insured Shipping Free
                        Bezel authentication Free */}
                    </div>
                }
            </div>

        </>
    );
}

export default Description;