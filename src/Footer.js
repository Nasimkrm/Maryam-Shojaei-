const Footer = () => {
    return (
        
        <div className="footer">
        
        <div className="footer-logo"><img className="footer-logo"  src="./images/logo3.png" alt="" /></div>
        

        <div className="icon-p">
        <div className="icons-div">
        <a href="https://www.instagram.com/noor.skincare.mariya/"><img className="icons-footer" src="./images/instagram.png" alt="" /></a>
        <a href="www.google.com"><img className="icons-footer" src="./images/telegramme.png" alt="" /></a>
        
        </div>

        <p>تمامی حقوق محفوظ است</p>
        </div>


        <div className="main-links">
            <p className="link-title">صفحات اصلی</p>
            <a className="main-link" href="/">خانه</a>
            <a className="main-link" href="/yoga">یوگا و مدیتیشن</a>
            <a className="main-link" href="/facial">خدمات پوستی</a>
        </div>

        </div>
     );
}
 
export default Footer;