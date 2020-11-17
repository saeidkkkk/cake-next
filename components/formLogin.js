import {useState} from 'react';



function FormLogin() {

    const [formBox, setFormBox] = useState('login');
    
    const [loginUsername, setLoginUsername] = useState('');
    const [passwordPassword, setPasswordPassword] = useState('');
    const [registerCode, setRegisterCode] = useState('');
    const [registerName, setRegisterName] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [forgetCode, setForgetCode] = useState('');
    const [forgetPassword, setForgetPassword] = useState('');
    
    const btnLogin = () => {
         
        if(!false){
            setFormBox('password');
        }else{
            setFormBox('register');
        }
        console.log (registerCode);
    }

    const btnPassword = () => {

    }

    const btnRegister = () => {

    }

    const btnForget = () => {

    }

    return (
  <>
    
                 
    {(() => {
                  if (formBox == 'login') { return (
                    <div className="form-content__template">
                        <h2 className="head-section__item"> <i className="lnr lnr-enter"></i> ورود | عضویت </h2>
                        <div className="login-form__register"> 
                        <div>

                        <label className="head-label" for="user"> شماره همراه یا ایمیل </label>
                        <input className="input-form__text" type='text' placeholder="شماره همراه یا ایمیل را وارد کنید" onChange={(event) => setLoginUsername(event.target.value)} />
                        <input className="input-form__submit" type='submit' value="ادامه" onClick={btnLogin} />
                        </div>
                        </div>
                    </div>
                  ) } else if (formBox == 'password') { return (

                    <div className="form-content__template">
                        <h2 className="head-section__item"> <i className="lnr lnr-enter"></i> رمز ورود را وارد کنید </h2>
                        <div className="login-form__register">
                        <div>
                        <label className="head-label" for="name"> رمز عبور </label>
                        <input className="input-form__text" type='password' placeholder="رمز عبور حساب کاربری خود را وارد کنید"  onChange={(event) => setPasswordPassword(event.target.value)} />
                        <input className="input-form__submit" type='submit' value="ورود" onClick={btnPassword} />
                        <a className="forget-pass" onClick={() => setFormBox('forget')}> فراموشی رمز عبور </a>
                        </div>
                        </div>
                        <a onClick={() => setFormBox('login')} className="back-btn" title="بازگشت به مرحله قبل">  <i className="lnr lnr-arrow-right" /> </a>
                    </div>
                  ) } else if (formBox == 'register') { return (
                    <div className="form-content__template">   
                        <h2 className="head-section__item"> <i className="lnr lnr-users"></i> عضویت </h2>
                        <div className="login-form__register">
                        <div>
                          <div className="verify-timer">
                            زمان باقیمانده <span> 01 : 55 </span>
                          </div>
                        <label className="head-label" for="verify"> کد تایید </label>
                        <input className="input-form__text" type='number' placeholder="کد تایید را وارد کنید" onChange={(event) => setRegisterCode(event.target.value)} />
                        <label className="head-label" for="name"> نام و نام خانوادگی </label>
                        <input className="input-form__text" type='text' placeholder="نام و نام خانوادگی را وارد کنید" onChange={(event) => setRegisterName(event.target.value)} />
                        <label className="head-label" for="pass"> رمز عبور </label>
                        <input className="input-form__text" type='password' placeholder="رمز عبور مورد نظر خود را وارد کنید" onChange={(event) => setRegisterPassword(event.target.value)} />
                        <input className="input-form__submit" type='submit' value="عضویت" onClick={btnRegister} />
                        </div>
                        </div>
                        <a onClick={() => setFormBox('login')} className="back-btn" title="بازگشت به مرحله قبل">  <i className="lnr lnr-arrow-right"></i> </a>
                    </div>
                  ) } else if (formBox == 'forget') { return (
                    <div className="form-content__template">
                        <h2 className="head-section__item"> <i className="lnr lnr-pencil"></i> فراموشی رمز عبور </h2>
                        <div className="login-form__register">
                        <div>
                          <div className="verify-timer">
                            زمان باقیمانده <span> 01 : 55 </span>
                          </div>
                        <label className="head-label" for="verify"> کد تایید </label>
                        <input className="input-form__text" type='number' placeholder="کد تایید را وارد کنید" onChange={(event) => setForgetCode(event.target.value)} />
                        <label className="head-label" for="pass"> رمز عبور جدید </label>
                        <input className="input-form__text" type='password' placeholder="رمز عبور جدید را وارد کنید" onChange={(event) => setForgetPassword(event.target.value)} />
                        <input className="input-form__submit" type='submit' value="تغییر رمز عبور" onClick={btnForget} />
                        </div>
                        </div>
                        <a onClick={() => setFormBox('password')} className="back-btn" title="بازگشت به مرحله قبل">  <i className="lnr lnr-arrow-right"></i> </a>
                    </div>
                  )}
                })()}


  </>
    );
  
  }
  
  export default FormLogin;
  