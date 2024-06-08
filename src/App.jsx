import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById("contact-form");
    for (let x = 0; x < 5; x++) {
      console.log(event.target[x].value)
    }; form.reset()
    alert("Thank you for contacting me! I'll reply as soon as possible.")
  }

return (
  <>
    <div className='main-container container-fluid'>
      <div className='hero-container'>
        <div className='hero-portrait-card-container d-none d-lg-flex'>
          <div className='hero-image'></div>
          <div className='card-socials-container'>
            <a href='https://www.linkedin.com/in/eric-r-long/' target='_blank'>
              <div className='social-button linkedin-img'></div>
            </a>
            <a href='https://github.com/Ric-KL' target='_blank'>
              <div className='social-button github-img'></div>
            </a>
          </div>
        </div>
        <div className='hero-text-container'>
          <div className='hero-header'>
            <h1>Hi, I'm Eric!</h1>
          </div>
          <div className='hero-body-container'>
            <p>
              I’m a Full-Stack Developer based in Modesto CA. I’m well-versed in JavaScript, HTML/CSS, SQL, and Python, as well as several supporting libraries, frameworks, and modules such React, Bootstrap, and Express. I have experience in web application development, database designing, API creation, machine learning, and natural language processing.
            </p>
            <p>
              I graduated from UC Santa Barbara in 2022 with a Bachelor’s in Language and Speech Technologies. Afterwards, I trained and interned with Bay Valley Tech and took place in GloCol’s PeopleSense project. I’m a motivated and curious individual, always willing to learn something new and always seeking a new skill to develop. I believe in being well-rounded and multi-faceted, able to take on any challenge that comes my way.
            </p>
            <p>
              If I seem like an interesting person or a good fit for your company, read on to learn more about me, or <a href='#contact-jump'>contact me</a> and let’s talk!
            </p>
          </div>
        </div>
      </div>
      <div className='project-container bounds d-none'>
        project carasoul
      </div>
      <div className='about-container'>
        <div className='about-me-header'>
          <h1>
            A Little More About Me
          </h1>
        </div>
        <div className='about-me-content-container'>
          <div className='about-me-text-container'>
            <p>
              In addition to my passion for coding, I have a general love for and appreciation of technology, often seeking out cutting edge innovations and learning about foundational inventions from history. For the most part, I find the process of designing things fascinating, from physical devices to systems of thought and language, and am always happy to hear how people work through the creative process.
            </p>
            <p>
              For my own creative ventures, I enjoy organizing and playing tabletop role-playing games. I often relish the time spent writing, making companion media like images and apps, and excitedly trying my hand at improvisational storytelling.
            </p>
            <p>
              When I’m looking for something more relaxed, I boot up my computer and play some video games, watch movies with my friends, and spend time with my pets.
            </p>
          </div>
          <div className='about-me-image-container'>
            <div className='large-img placeholder-img'>

            </div>
            <div className='small-img-container'>
              <div className='small-img placeholder-img'>

              </div>
              <div className='small-img placeholder-img img-3'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact-jump" className='contact-container'>
        <div className='contact-header'>
          <h1>Contact Me</h1>
        </div>

        <form id='contact-form' className='form-container' onSubmit={handleSubmit}>
          <div className='form-wrapper'>
            <div className='user-inputs-container'>
              <div className='inputs-labels-container'>
                <h2 className='form-height'>Name: </h2>
                <h2 className='form-height'>Subject: </h2>
                <h2 className='form-height'>Email: </h2>
                <h2 className='form-height'>Phone: </h2>
              </div>
              <div className='input-fields-container'>
                <input placeholder='Name (Required)' className='form-height' name='name' required></input>
                <input placeholder='Subject (Required)' className='form-height' required name='subject'></input>
                <input placeholder='Email (Required)' className='form-height' required name='email'></input>
                <input placeholder='Phone' className='form-height' name='phone'></input>
              </div>
            </div>
            <textarea placeholder='Your message...' className='user-message-area' required name='message'></textarea>
          </div>
          <div className='submit-container'>
            <input type='submit' className='submit-button'></input>
          </div>
        </form>

      </div>
    </div>
  </>
)
}

export default App
