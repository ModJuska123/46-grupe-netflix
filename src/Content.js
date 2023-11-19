import tv from './tv.png';
import phone from './phone.png';
import watch from './watch.png';

const Content = () => {

   return (
      <main className="main-body">
         <section className="hero-main">
            <div className="hero-listing" >
               <h1 className="listing-title">Unlimited movies, TV showe, and mode</h1>
               <h2 className="listing-text">Watch anywhere. Cancel anytime</h2>
               <h3 className="listing-text">Ready to watch? Enter your email to create or restart your membership </h3>
            </div>
            <div className="listing-items">
                  <input className='item-input'></input>
                  <button className="item-btn">Get Started</button>
            </div>
         </section>
         <hr/>
         <section className="enjoy-main">
            <div className="enjoy-framework" >
               <h1 className="framework-title">Enjoy on your TV</h1>
               <h2 className="framework-text">Watch on Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Bluray player and more</h2>
            </div>
            <img className='item-img'src={tv}></img>
         </section>
         <hr/>
         <section className="download-main">
            <img className='item-img'src={phone}></img>
            <div className="download-framework" >
               <h1 className="framework-title">Enjoy on your TV</h1>
               <h2 className="framework-text">Watch on Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Bluray player and more</h2>
            </div>
         </section>
         <hr/>
         <section className="watch-main">
            <div className="watch-framework">
               <h1 className="framework-title">Enjoy on your TV</h1>
               <h2 className="framework-text">Watch on Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Bluray player and more</h2>
            <img className='item-img'src={watch}></img>
            </div>
            <hr/>
         </section>
         <hr/>
      </main>
   
  )
       }

export default Content