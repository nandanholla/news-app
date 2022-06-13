export default function Footer() {

    return (
        <div className='mb-5'>
            <div className="mt-3">
                <div className="cta bg-black py-5 text- text-white w-100 d-flex flex-column align-items-center justify-content-center rounded-2">
                    <h2 className="text-center mt-3 fs-1 fw-semibold px-2 ">Subscribe to our newsletter to get latest news on your inbox.</h2>
                    <div className="cta-group d-flex flex-md-row flex-column justify-content-center align-align-items-center bg-white p-5 rounded-2 my-3">
                        <input type="text" className="form-control me-1 mb-md-0 mb-3" placeholder="Your email address" aria-label="Recipient's username with two button addons" />
                        <button className="btn btn-lg btn-dark text-uppercase fs-6 fw-semibold" type="button">Subscribe</button>
                    </div>
                </div>
            </div>

            <footer className='d-flex mt-5 justify-content-center'>
                <div className="footer__menu row d-flex justify-content-between">
                    <div className="col">
                        <p className="h5 fw-semibold">About</p>
                        <ul className='list-unstyled'>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Editorial Team</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <p className="h5 fw-semibold">Pages</p>
                        <ul className='list-unstyled'>
                            <li><a href="#">RSS Feeds</a></li>
                            <li><a href="#">Deals Store</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Jobs</a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <p className="h5 fw-semibold">Deals</p>
                        <ul className='list-unstyled'>
                            <li><a href="#">Exclusives</a></li>
                            <li><a href="#">Hacking</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Android</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </footer>
            <hr />
        </div>
    )
}
