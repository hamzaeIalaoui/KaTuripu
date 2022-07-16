export const Slides = () => {
    return (
    <div id='slides' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
           <h2>Presentation</h2> 
        </div>
        <div className='google-slides'>
        <iframe title="meow"
                src="https://docs.google.com/presentation/d/1J8nJjxj2QWeuGOZC5lKdZjgHmhm0HHKy2PtrgTYFKWc/embed?start=false&loop=false&delayms=15000&slide=id.p1" 
                frameborder="0" 
                width="960" height="569" 
                allowfullscreen="true" 
                mozallowfullscreen="true" webkitallowfullscreen="true">

        </iframe>
        </div>
      </div>
    </div>
    )
}