import './styles.css';
import oops from '../../assets/oops.png';

const Oops = () => {
    return <div className='oops-container'>
        <img src={oops} className='oops-img' alt='Page not found' />
        <h1 className='title'>Page not found</h1>
        <a className='link' href='/'>Go Back</a>
    </div>
}

export default Oops;