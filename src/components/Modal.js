// https://dev.to/franciscomendes10866/how-to-create-a-modal-in-react-3coc

import * as React from "react"
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

import Description from "./Description";

const Modal = ({ setIsOpen }) => {
    return (
        <>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>
                    <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                        <RiCloseLine />
                    </button>
                    <div className={styles.flexContainer}>
                        <div className={styles.modalActions}>
                            <div className={styles.textContainer}>
                                <h6 className={styles.heading1}>CONGRATS!</h6>
                                <h4 className={styles.heading2}>Your watch sold!</h4>
                                <div className={styles.description}>
                                    You have 1 business day to accept the sale. If you do not accept, it will be automatically rejected.
                                </div>
                            </div>
                            <div className={styles.actionsContainer}>
                                <button className={styles.deleteBtn} onClick={() => { setIsOpen(false); fetch('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept') }}>
                                    Accept sale
                                </button>
                                <button
                                    className={styles.cancelBtn}
                                    onClick={() => { setIsOpen(false); fetch('https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline') }}
                                >
                                    Reject sale
                                </button>
                            </div>
                        </div>
                        <div className="rightSide">
                            <Description/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Modal;