import React from 'react';
import './Main.css';
import { useSelector } from 'react-redux';
function Main() {
    const toggleDefault = useSelector(state => state.toggle.value)
    return (
        <main className="py-4">
            <div className="container-lg">
                <div className="row">
                    <div className="col-12">
                        <h3 className={toggleDefault? 'text-white': 'text-black'}>
                            TIKI Earnings Manager
                        </h3>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="d-flex rounded-3 text-white bg_prime justify-content-between align-items-center p-3">
                            <p className="p-0 m-0">
                                Please enter your address above
                            </p>
                            <a href="#" className="text-white">
                                Buy TIKI →
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="mb-3 col-6 col-xl-3  h-auto">
                        <div className={`col_wrapper rounded-3 h-100 shadow-sm d-flex flex-column flex-md-row  align-items-center p-3  ${toggleDefault? 'bg_dark_prime': 'bg-white'}`}>
                            <span className="tiki_size text-white mb-2 mb-md-0 d-flex justify-content-center align-items-center">
                                <i className="fas fa-database    "></i>
                            </span>
                            <div className="ms-md-3 ">
                                <span className={`${toggleDefault?'text-white-50': 'text-black-50'}`}>Your TIKI Holdings</span>
                                <h5 className={`mb-0 ${toggleDefault?'text-white': 'text-black'} mt-2`}>
                                    0 TIKI
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 col-6 col-xl-3  h-auto ">
                        <div className={`col_wrapper rounded-3 h-100 shadow-sm d-flex flex-column flex-md-row align-items-center p-3  ${toggleDefault? 'bg_dark_prime': 'bg-white'}`}>
                            <span className="tiki_size bg_cyan  mb-2 mb-md-0 text-white d-flex justify-content-center align-items-center">
                                <i className="fas fa-dollar-sign    "></i>
                            </span>

                            <div className="ms-3 ">
                                <span className={`${toggleDefault?'text-white-50': 'text-black-50'}`}>Total BNB Paid</span>
                                <h5 className="mb-0 mt-2 text_yellow">
                                    0.0000 BNB
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 col-6 col-xl-3  h-auto">
                        <div className={`col_wrapper rounded-3 h-100 d-flex flex-column flex-md-row align-items-center p-3 shadow-sm ${toggleDefault? 'bg_dark_prime': 'bg-white'}`}>
                            <span className="tiki_size bg_primary  mb-2 mb-md-0 text-white d-flex justify-content-center align-items-center">
                                <i className="fas fa-lock    "></i>
                            </span>

                            <div className="ms-3 ">
                                <span className={`${toggleDefault? 'text-white-50': 'text-black-50'}`}>Last Payout Time</span>
                                <h5 className={`mb-0 mt-2 ${toggleDefault? 'text-white': 'text-black'}`}>
                                    Never
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3 col-6 col-xl-3  h-auto">
                        <div className={`col_wrapper rounded-3 h-100 flex-column flex-md-row d-flex align-items-center p-3 shadow-sm  ${toggleDefault? 'bg_dark_prime': 'bg-white'}`}>
                            <span className="tiki_size bg_yellow  mb-2 mb-md-0 text-white d-flex justify-content-center align-items-center">
                                <i className="fas fa-history    "></i>
                            </span>

                            <div className="ms-3 ">
                                <span className={`${toggleDefault? 'text-white-50': 'text-black-50'}`}>Next Payout Loading</span>
                                <h5 className={`${toggleDefault? 'mb-0 mt-2 text-white': 'mb-0 mt-2 text-black'}`}>
                                    <span className="text_yellow">
                                        Processing
                                    </span>
                                    &nbsp;  | 0%
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className={`col_wrapper shadow-sm ${toggleDefault? 'bg_dark_prime': 'bg-white'} p-3`}>
                            <div className="row">
                                <div className="col-6 h-auto">
                                    <div className="col_wrapper h-100">
                                        <button className="btn h-100 disable_btn text_sm text-capitalize w-100 bg_prime text-white">
                                            Payout is Processing
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6 h-auto">
                                    <div className="col_wrapper h-100">
                                        <button className="btn disable_btn h-100 text_sm text-capitalize w-100 bg_cyan text-white">
                                            You Do Not Own Enough TIKI To Reinvest
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className={`col_wrapper ${toggleDefault? 'bg_dark_prime': 'bg-white'} shadow-sm p-3 d-flex flex-column text-center align-items-center`}>

                            <img style={{ height: '150px' }} src="https://tikitoken.app/static/media/bnb.162aaf57.png" alt="" />
                            <h4 className="text-white mt-4 font_size_4">
                                Total BNB Paid To TIKI Holders
                            </h4>
                            <div className="font_size_5">
                                <span className="text_cyan">
                                    15,664 <span className="text_yellow">BNB</span>
                                </span>
                                <br />
                                <span className="text_cyan">
                                    = $4,248,535
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-6 h-auto">
                                <div className={`col_wrapper shadow-sm ${toggleDefault? 'bg_dark_prime': 'bg-white'} p-4 h-100`}>
                                    <ul className="list-group">
                                        <li className="list-group-item bg_transparent text-center border-0">
                                            <img style={{ height: '100px' }} src="https://tikitoken.app/static/media/money.d301ec34.png" alt="" />
                                        </li>
                                        <li className={`list-group-item bg_transparent text-center border-0 ${toggleDefault?'text-white': 'text-black'}`}>
                                            <h3>
                                                Your 0 TIKI Earns:
                                            </h3>
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0.00 BNB </span>
                                            <span className="text_cyan me-2">
                                                ($0.00)
                                            </span>
                                            Per Week
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0.00 BNB </span>
                                            <span className="text_cyan me-2">
                                                ($0.00)
                                            </span>
                                            Per Month
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0.00 BNB </span>
                                            <span className="text_cyan me-2">
                                                ($0.00)
                                            </span>
                                            Per Year
                                        </li>

                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0.00 BNB </span>
                                            <span className="text_cyan me-2">
                                                ($0.00)
                                            </span>
                                            Per Day
                                        </li>
                                        <div className="list-group-item text-white-50 bg_transparent text-center border-0 text_lg">
                                            Estimations are based on $2m trading volume
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 h-auto">
                                <div className={`col_wrapper shadow-sm ${toggleDefault? 'bg_dark_prime': 'bg-white'} p-4 h-100`}>
                                    <ul className="list-group">
                                        <li className="list-group-item bg_transparent text-center border-0">
                                            <img style={{ height: '100px' }} src="https://tikitoken.app/static/media/money.d301ec34.png" alt="" />
                                        </li>
                                        <li className={`list-group-item bg_transparent text-center border-0 ${toggleDefault?'text-white': 'text-black'}`}>
                                            <h3>
                                                By Reinvesting Dividends Every Day, Your 0 TIKI Becomes:
                                            </h3>
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0 TIKI </span>
                                            <span className="text_cyan me-2">
                                                (0x Earnings)
                                            </span>
                                            In a Week
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0 TIKI </span>
                                            <span className="text_cyan me-2">
                                                (0x Earnings)
                                            </span>
                                            In a Month
                                        </li>
                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0 TIKI </span>
                                            <span className="text_cyan me-2">
                                                (0x Earnings)
                                            </span>
                                            In 2 Months

                                        </li>

                                        <li className={`list-group-item text_sm ${toggleDefault?'text-white-50': 'text-black-50'} bg_transparent text-center border-0`}>
                                            <span className="text_yellow">
                                                0 TIKI </span>
                                            <span className="text_cyan me-2">
                                                (0x Earnings)
                                            </span>
                                            In 6 Months
                                        </li>
                                        <div className="list-group-item text_lg text-white-50 bg_transparent text-center border-0">
                                            Estimations are based on $2m trading volume
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Main;