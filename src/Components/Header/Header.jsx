import logo from '../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center my-7 lg:container px-10 lg:px-0'>
            <img src={logo} alt="logo" className='mx-auto'/>
            <p className='font-semibold my-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
    );
};

export default Header;