import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Crew extends Component {
    render() {
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-subheader">
                    <div className="d-flex align-items-center">
                        <div className="mr-auto">
                            <h3 className="m-subheader__title "></h3>
                        </div>
                        <div className="m-l-30">
                            <div className="m-portlet__head-tools text-right">
                                <Link to="/add_crew" className="m-badge"><i className="la la-plus"></i>Add Crew</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="m-portlet m-portlet--tab">
									<form className="m-form m-form--fit m-form--label-align-right p-l-r-0">
                                    <div className="table-responsive">
                                        <div className="m-section__content">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>User Name</th>
                                                        <th>Email</th>
                                                        <th>Position</th>
                                                        <th>Active Projects</th>
                                                        <th>Hourly Rate</th>
                                                        <th>Hours Worked This Month</th>
                                                        <th>Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className='clickable-row' data-href='sample-crew.html'>
                                                        <td>Josh Stone</td>
                                                        <td>test1234@gmail.com</td>
                                                        <td>Contrary to popular</td>
                                                        <td>Contrary to popular</td>
                                                        <td>$100</td>
                                                        <td>42</td>
                                                        <td>Completed</td>

                                                    </tr>
                                                    <tr className='clickable-row' data-href='sample-crew.html'>
                                                        <td>Josh Stone</td>
                                                        <td>test1234@gmail.com</td>
                                                        <td>Contrary to popular</td>
                                                        <td>Contrary to popular</td>
                                                        <td>$100</td>
                                                        <td>42</td>
                                                        <td>Completed</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Crew;