import React from 'react'
import LogoGrey from '../../assets/images/logo_grey.png'
const Footer = () => {
    return (
        <div className='position-fixed bottom-0 w-100'>

            <footer class="text-center text-lg-start bg-body-tertiary text-muted">

                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>



                    <div>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="" class="me-4 text-reset">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>

                </section>



                <section class="">
                    <div class="container text-center text-md-start mt-5">

                        <div class="row mt-3">

                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <img src={LogoGrey} alt="" className='mb-4' />
                                <div className='d-flex align-items-center mt-4'>
                                    <button className='btn btn-secondary me-2'>Sign in</button>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <p className='m-0 me-2'>or </p>
                                        <button className='btn btn-secondary'>Register</button>
                                    </div>


                                </div>
                            </div>


                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" class="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Contact Us</a>
                                </p>

                                <p>
                                    <a href="#!" class="text-reset">Privacy Policy</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-reset">Terms and conditions</a>
                                </p>
                            </div>



                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div class="text-center p-4 bg-grey">
                    © 2021 Copyright:
                    <a class="text-reset fw-bold " href="https://mdbootstrap.com/">odyssey.com</a>
                </div>


            </footer>


        </div>
    )
}

export default Footer