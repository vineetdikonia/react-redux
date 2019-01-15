import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class WorkRequest extends Component {
  render() {
    return (
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <h3 className="m-subheader__title ">Work Requests</h3>
                    </div>
                    <div className="m-l-30">
                        <div className="m-portlet__head-tools text-right">
                            <Link to="AddJob" className="m-badge"><i className="la la-plus"></i>Add Work Request</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="">
                            <div className="">
                                <div className="row m-b-15">
                                    <div className="col-md-10">
                                        <div className="filter-block" style={{"paddingLeft":"0"}}>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="form-group m-form__group">
                                                        <i className="la la-user"></i>
                                                        <select className="form-control m-bootstrap-select m_selectpicker">
                                                            <option>Client Name</option>
                                                            <option>Lefrak Organization</option>
                                                            <option>Olivia</option>
                                                            <option>Emily</option>
                                                            <option>Isla</option>
                                                            <option>Jacob</option>
                                                            <option>Kyle</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="input-group" id="m_daterangepicker_2">
                                                        <i className="la la-calendar-o"></i>
                                                        <input className="form-control m-input" readOnly="" type="text" />
                                                    </div>
                                                </div>
                                                    <div className="col">
                                                        <div className="form-group m-form__group">
                                                            <i className="la la-crosshairs"></i>
                                                            <select className="form-control m-bootstrap-select m_selectpicker">
                                                                <option>Priority</option>
                                                                <option>High</option>
                                                                <option>Medium</option>
                                                                <option>Low</option>
                                                                <option>None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="col">
                                                            <div className="form-group m-form__group">
                                                                <i className="la la-chain-broken"></i>
                                                                <select className="form-control m-bootstrap-select m_selectpicker">
                                                                    <option>Generated By</option>
                                                                    <option>Self</option>
                                                                    <option>Others</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="col">
                                                            <div className="form-group m-form__group">
                                                                <i className="la la-tags"></i>
                                                                <select className="form-control m-bootstrap-select m_selectpicker">
                                                                    <option>Type</option>
                                                                    <option>Flat Rate Project </option>
                                                                    <option>Custom Pricing</option>
                                                                    <option>$1 Reactive Project</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-portlet m-portlet--tab">
                                        <form className="m-form m-form--fit m-form--label-align-right p-l-r-0">
                                            <div className="table-responsive">
                                                <div className="m-section__content work-request-table">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th>Work Request No.</th>
                                                                <th>Client Name</th>
                                                                <th>Property Name</th>
                                                                <th>Type</th>
                                                                <th>Description</th>
                                                                <th>Generated By </th>
                                                                <th>Priority</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="clickable-row" data-href="work-request-details.html">
                                                                <th scope="row">PR1055</th>
                                                                <td>Lefrak Organization</td>
                                                                <td>Tulane</td>
                                                                <td>$1 Reactive Project</td>
                                                                <td>Install water meters on main supply lines...</td>
                                                                <td>Self</td>
                                                                <td><span className="btn-danger priority-set">High</span></td>
                                                            </tr>
                                                            <tr className="clickable-row" data-href="work-request-details.html">
                                                                <th scope="row">POAR002</th>
                                                                <td>Shoreline Contracts Inc</td>
                                                                <td>Tulane</td>
                                                                <td>Flat Rate Project </td>
                                                                <td>
                                                                    Painting of floor in basement area..
                                                                </td>
                                                                <td>Others</td>
                                                                <td><span className="btn-info priority-set">Medium</span></td>
                                                            </tr>
                                                            <tr className="clickable-row" data-href="work-request-details.html">
                                                                <th scope="row">POAR002</th>
                                                                <td>Lefrak Organization</td>
                                                                <td>Tulane</td>
                                                                <td>Custom Pricing</td>
                                                                <td>Install water meters on main supply lines...</td>
                                                                <td>Others</td>
                                                                <td><span className="btn-metal priority-set">None</span></td>
                                                            </tr>
                                                            <tr className="clickable-row" data-href="work-request-details.html">
                                                                <th scope="row">POAR002</th>
                                                                <td>Lefrak Organization</td>
                                                                <td>Tulane</td>
                                                                <td>Flat Rate Project </td>
                                                                <td>Install water meters on main supply lines...</td>
                                                                <td>Others</td>
                                                                <td><span className="btn-metal priority-set">None</span></td>
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
                </div>
            </div>
    )
  }
}

export default WorkRequest;