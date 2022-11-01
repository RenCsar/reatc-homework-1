import './estilo.css';

export default function Header(){
    return(
        <>
            <header>
                <div className='brand-container'>
                <h3>Brandname</h3>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                </nav>
                </div>
                <div className='login-container'>
                    <p>Login</p>
                    <button>JOINS US</button>
                </div>
            </header>
        </>
    );
}