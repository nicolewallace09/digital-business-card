import myImg from '../images/myImg.JPG'

const About  = () => {
    return (
        <div className='about'>
            {/* <div className='about--photo'>
                <img 
                    src={myImg} 
                    alt='profile-avatar'
                    className='about--img'
                />
            </div> */}
            <h1 className='about--title'>
                About
            </h1>
            <p className='about--text'>
                I am Full Stack Software Engineer based in the SF Bay Area with a background in Business Administration and Liberal Arts. 
                I am a naturally curious person which makes me want to always learn new things, a problem-solver who questions everything, and a hard worker who doesn't take life too seriously and enjoys the little things.
            </p>
        </div>
    )
}

export default About; 