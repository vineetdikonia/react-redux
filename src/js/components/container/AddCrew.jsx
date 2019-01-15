import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio, renderCheckbox } from '../includes/FormRenderWrappers';
import { Field, reduxForm } from 'redux-form'
import moment from 'moment';
import dummy from "../../../styles/assets/demo/demo12/media/img/dummy.jpg";

let Crew = props => {
    const { handleSubmit, pristine, reset, submitting, ShowChild, childPage } = props;
    return (
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <Link to="/crew" className="back-btn"><i className="la la-undo"></i></Link>
                        <h3 className="m-subheader__title ">Add Crew</h3>
                    </div>
                </div>
            </div>
            <div className="m-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-portlet m-portlet--tab">
                            <form className="m-form m-form--fit m-form--label-align-right" onSubmit={handleSubmit}>
                                <div className="m-portlet__body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">First Name</label>
                                                <Field className="form-control m-input m-input--solid" name="first_name" component={renderField} type="text" />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email Id (User will choose on first login)</label>
                                                <Field className="form-control m-input m-input--solid" name="email" component={renderField} type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Last Name</label>
                                                <Field className="form-control m-input m-input--solid" name="last_name" component={renderField} type="text" />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Role</label>
                                                <Field className="form-control m-input m-input--solid" name="role" component={renderField} type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group text-center">
                                                <label htmlFor="exampleInputEmail1">Client Logo</label>
                                                <div className="client-dp client-crew-img"><img alt="" src={dummy} /></div>
                                                <div className="drag-blocks img-file-select">
                                                    <span className="select-file">
                                                        <input id="" name="" accept="" type="file" />Change Picture</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Week Starts</label>
                                                <select className="form-control m-input m-input--solid" id="exampleSelect1">
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Work Day Length (Hours)</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp"  component={renderField} name="work_hours" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Hourly Rate</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="$" component={renderField} name="hourly_rate" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Annual Leave Entitlement</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp"  component={renderField} name="annual_entitlement" type="text" />
                                                <span style={{ "display": "block", "textAlign": "right" }}>(days in year)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Address Line 1</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Address Line 2</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">City</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">State</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Zip Code</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Telephone Number</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">DOB</label>
                                                <Field name="dob" component={renderDatePicker} dateFormat="YYYY-MM-DD" className="form-control m-input" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Experience
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Work Category</label>
                                                <select className="form-control m-input m-input--solid">
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                    <option>---</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Work Experience</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Legal Documents
                                                    </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">License</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Insurance Cover Note No.</label>
                                                <input className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Upload Document</label>
                                                <div className="drag-block img-upload-view" style={{ "margin": "0" }}>
                                                    <span className="select-file">
                                                        <input id="" name="" accept="" type="file" /><i className="la la-plus"></i></span> Add Document
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Upload Resume</label>
                                                <div className="drag-block img-upload-view" style={{ "margin": "0" }}>
                                                    <span className="select-file">
                                                        <input id="" name="" accept="" type="file" /><i className="la la-plus"></i></span> Add Resume
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Emergency Contact Details
                                                    </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Contact Person</label>
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Relation</label>
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Telephone No.</label>
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Mobile No.</label>
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email Id</label>
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Access Privileges
                                                    </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="m-checkbox-inline">
                                        <Field component={renderCheckbox} name="request_type" className="form-control m-input m-input--solid" >
                                            <label className="m-checkbox">
                                                <Field name="access" component="input" value="1" type="checkbox" /> Has Admin Privileges
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access" component="input" value="2" type="checkbox" /> Can Add Work Requests
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access" component="input" value="3" type="checkbox" />Can Add Proposals
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access" component="input" value="4" type="checkbox" />Can Schedule Jobs
                                                <span></span>
                                            </label>
                                        </Field>
                                    </div>
                                </div>
                                <div className="m-portlet__foot m-portlet__foot--fit text-center">
                                    <div className="m-form__actions">
                                        <button type="submit" disabled={submitting} className="btn btn-metal">Submit</button>
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

const validate = val => {
    const errors = {};
    if (!val.first_name) {
        errors.first_name = 'Required';
    }
    if (!val.email ) {
        errors.email = 'Required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
        errors.email = 'Invalid Email';
    }
    if (!val.last_name) {
        errors.last_name = 'Required';
    }
    if (!val.dob) {
        errors.dob = 'Required';
    }
    if (!val.role) {
        errors.role = 'Required';
    }
    if (!val.access) {
        errors.access = 'Required';
    }
    if (!val.work_hours) {
        errors.work_hours = 'Required';
    } else {
        if (isNaN(Number(val.work_hours))) {
            errors.work_hours = 'Allow Only Number.';
        }
    }
    if (!val.hourly_rate) {
        errors.hourly_rate = 'Required';
    }else {
        if (isNaN(Number(val.hourly_rate))){
            errors.hourly_rate = 'Allow Only Number.';
        }
    }
    if (!val.annual_entitlement) {
        errors.annual_entitlement = 'Required';
    } else {
        if (isNaN(Number(val.annual_entitlement))) {
            errors.annual_entitlement = 'Allow Only Number.';
        }
    }
    return errors;
};

Crew = reduxForm({
    form: 'CrewForm', // a unique identifier for this form
    validate
})(Crew)

class AddCrew extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.SubmitCrew = this.SubmitCrew.bind(this);
    }
    SubmitCrew(values) {
        console.log(values);
    }
    render() {
        return (
            <Crew onSubmit={this.SubmitCrew} />
        );
    }
}

export default AddCrew;