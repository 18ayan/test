import { Outlet, Link } from "react-router-dom";

export const Header = (props) => {
    const HandleChangeLanguage = (e)=>{
        if(e.target.innerText == "English"){
             props.changeLanguage("en");
        }else{
            props.changeLanguage("hi");
        }
    }
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">All</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Politics">Politics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Education">Education</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Crime">Crime</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                    <li><Link className="dropdown-item" to="/Technology">Technolgy</Link></li>
                                    <li><Link className="dropdown-item" to="/Covid-19">Covid-19</Link></li>
                                    <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><span className="dropdown-item" onClick={HandleChangeLanguage}>English</span></li>
                                    <li><span className="dropdown-item" onClick={HandleChangeLanguage}>Hindi</span></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={changeSearchHandler}>
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
};