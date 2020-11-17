import Header from '../components/header';
import Footer from '../components/footer';
import FormLogin from '../components/formLogin';




export default function Login() {
  return (
      <>
      <Header />

      <div className="base">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                <div className="form-general-box__edge">
                  <div className="row">
                  <div className="col-lg-4 d-lg-block d-md-none d-sm-none d-none">
                      <div className="form-box__image">
                        <img src="/kn2.png" alt="فرم ورود" title="login form" />
                      </div>
                  </div>
                  <div className="col-lg-8 col-md-12 col-sm-12 col-12"> <FormLogin /> </div>
                  </div>
                </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-12"></div>
        </div>
        </div>
      </div>

      <Footer />

      </>
  )
}
