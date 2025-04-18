import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './styleFooter.scss';

function Footer() {
    return (
        <Box className="footer">
            <Box className="footer__section">
                <Typography variant="h6" className="footer__title">
                    HOTLINE: 028.33.444.555
                </Typography>
            </Box>

            <Box className="footer__section">
                <Typography variant="h6" className="footer__title">
                    Chính sách chung
                </Typography>
                <ul className="footer__list">
                    {[
                        "Chính sách vận chuyển",
                        "Chính sách bảo hành",
                        "Chính sách đổi trả và hoàn tiền",
                        "Chính sách cho doanh nghiệp",
                        "Chính sách hàng chính hãng"
                    ].map((item, i) => (
                        <li key={i}><Link href="#" className="footer__link">{item}</Link></li>
                    ))}
                </ul>
            </Box>

            <Box className="footer__section">
                <Typography variant="h6" className="footer__title">
                    Hướng dẫn dịch vụ
                </Typography>
                <ul className="footer__list">
                    {[
                        "Phương thức thanh toán",
                        "Hướng dẫn mua hàng",
                        "Gửi yêu cầu bảo hành",
                        "Hướng dẫn mua hàng trả góp",
                        "Góp ý, Khiếu Nại"
                    ].map((item, i) => (
                        <li key={i}><Link href="#" className="footer__link">{item}</Link></li>
                    ))}
                </ul>
            </Box>

            <Box className="footer__section footer__icons">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/paypal.png" alt="Paypal" />
                <img src="https://www.icreatemagazine.nl/app/uploads/2023/08/ApplePay.png" alt="Apple Pay" />
            </Box>
        </Box>
    );
}

export default Footer;
