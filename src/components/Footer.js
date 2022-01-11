import TwitterIcon from '../images/Twitter-Icon.png';
import GithubIcon from '../images/GitHub-Icon.png';

const Footer = () => {
    return (
        <div className='footer'>
            <img 
                src={GithubIcon} 
                alt='github-icon'
                className='footer--github'
            />
            <img 
                src={TwitterIcon} 
                alt='twitter-icon'
                className='footer--twitter'
            />
        </div>
    )
}

export default Footer; 