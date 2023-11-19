import tv from './tv.png';
import phone from './phone.png';
import watch from './watch.png';
import create from './create.png';

const Content = () => {

   return (
      <main className="main-body">
         <section className="hero-main">
            <div className="hero-listing" >
               <h1 className="listing-title">Unlimited movies, TV shows, and mode</h1>
               <h2 className="listing-text">Watch anywhere. Cancel anytime</h2>
               <h3 className="listing-text">Ready to watch? Enter your email to create or restart your membership </h3>
            </div>
            <div className="listing-items">
                  <input className='item-input'></input>
                  <button className="item-btn">Get Started</button>
            </div>
         </section>
         <hr className='hr'/>
         <section className="enjoy-main">
            <div className="enjoy-framework" >
               <h1 className="framework-title">Enjoy on your TV</h1>
               <h2 className="framework-text">Watch on Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Bluray player and more</h2>
            </div>
            <img className='item-img'src={tv}></img>
         </section>
         <hr className='hr'/>
         <section className="download-main">
            <img className='item-img'src={phone}></img>
            <div className="download-framework" >
               <h1 className="framework-title">Download your shows to watch online</h1>
               <h2 className="framework-text">Watch on Smart TV's, Playstation, Xbox, Chromecast, Apple TV, Bluray player and more</h2>
            </div>
         </section>
         <hr className='hr'/>
         <section className="watch-main">
            <div className="watch-framework">
               <h1 className="framework-title">Watch evrywhere</h1>
               <h2 className="framework-text">Steram unlimited movies and TV shows on your phone, tablet, laptop, and TV</h2>
            </div>
            <img className='item-img' src={watch}></img>
         </section>
         <hr className='hr'/>
         <section className="create-main">
            <img className='item-img' src={create}></img>
            <div className="create-framework">
               <h1 className="framework-title">Create profiles for kids</h1>
               <h2 className="framework-text">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
         </section>
         <hr className='hr'/>
         <section className='questions-main'>
            <h1 className='questions-tytle'> Frequently Asked Questions</h1>
            <div className='questions-answers'>Q/A</div>
            <div className='create-mebership'>Ready to watch? Enter your email to create or restatrt your membership</div>
            <nav className='questions-nav'>
               <input className='email-address' alt='Email address'></input>
               <btn className="btn-get-started">Get Started ></btn>
            </nav>
         </section>
         <hr className='hr'/>
       
      </main>
   
  )
       }

export default Content