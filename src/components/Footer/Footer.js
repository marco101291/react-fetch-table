import React, { useEffect } from "react"
import footerStyles from './footerStyles.module.css'



const Footer = ({ range, setPage, page, pageDivision }) => {
    
    useEffect(() => {
        if (pageDivision.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [pageDivision, page, setPage]);
    return (
        <div className={footerStyles.tableFooter}>
            {range.map((el, index) => (
                <button
                    key={index}
                    className={`${footerStyles.button} ${page === el ? footerStyles.activeButton : footerStyles.inactiveButton
                        }`}
                    onClick={() => setPage(el)}
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default Footer;