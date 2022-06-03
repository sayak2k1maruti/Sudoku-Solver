import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='mt-5'>
            <p className='p-2 text-lg text-center'>
                Comments and questions to &nbsp;
                <a className='text-blue-500' href='mailto:sayakdas2k1@gmail.com'>sayakdas2k1@gmail.com</a>
            </p>
            <br />
            <p className='text-right text-xl p-5 text-neutral-500 hover:text-neutral-800'>
                <Link to='/privacypolicy'>Privacy Policy</Link>
            </p>

        </footer>
    )
}

export default Footer