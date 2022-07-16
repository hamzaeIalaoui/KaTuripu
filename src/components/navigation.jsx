export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          

          <a className='nav navbar-nav navbar-left' href='#'>
            <span>
              <img src='img/logo.png' alt='logo' width="163" height="58.5" />
            </span>
          </a>

          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#problem' className='page-scroll'>
                Problem
              </a>
            </li>
            <li>
              <a href='#solution' className='page-scroll'>
                Solution
              </a>
            </li>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
         <li>
              <a href='#slides' className='page-scroll'>
                Slides
              </a>
            </li> 
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
