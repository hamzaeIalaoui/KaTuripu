import Typewriter from 'typewriter-effect';


export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>

                  <Typewriter
                    options={{
                      delay: 100,
                      deleteSpeed: 100,
                      PauseFor: 2500,
                      strings: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Engineering', 'Computer Science'],
                      autoStart: true,
                      loop: true,
                    }}
                  />


                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#problem'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
