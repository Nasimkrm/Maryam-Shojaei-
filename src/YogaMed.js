const YogaMed = () => (
    <div className="info">

        <div className="img-cont">
        <img className="waterDrop" src="./images/waterDrop.jpg" alt="" />
        </div>
        <header>
            <h1 className="page-title"> یوگا و مدیتیشن  </h1>
        </header>


        <div className="border-div">
        <div className="yoga">

    <p>کلاس های یوگا به سبک هاتا هر <b> یکشنبه </b> و <b> سه شنبه </b> ساعت 8:30 صبح به صورت مجازی برگزار می شوند.  </p>

    <br /><br />
    <h4>هاتا یوگا چیست؟</h4>
    <p></p>
    



            <a className="button-yoga" href="https://www.instagram.com/noor_youga_moraghebe/">بیشتر</a>

        </div>
        </div>

        <div className="card">
        <img className="drop-img" src="./images/drop.jpg" alt="" />
        <header className="card-header">
          <h4>عنوان: بازیابی خویشتن</h4>
          <h4 className="card-title">دوره ی مراقبه</h4>
          
        </header>
        
        <audio controls className="audio">
                <source src="./moraghebe.ogg" />
            </audio>

        </div>

</div>
    
)
 
export default YogaMed;