export const Slides = () => {
    return (
    <div id='slides' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
           <h2>Presentation</h2> 
        </div>
        <div className='google-slides'>
        <iframe title="meow"
                src="https://docs.google.com/presentation/d/1573tOi2-xI2H-8HZbIsar09Y0iu71wmAR99LlXzJJDM/embed?start=false&loop=false&delayms=15000&slide=id.gd9c453428_0_16" 
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