import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio, renderCheckbox } from '../includes/FormRenderWrappers';
import { Field, reduxForm , reset} from 'redux-form'
import moment from 'moment';
import uuidv from "uuid";
import dummy from "../../../styles/assets/demo/demo12/media/img/dummy.jpg";
import {getMaster, createCrew } from "../../actions/index";

let Crew = props => {
    const { handleSubmit, pristine, reset, submitting, ShowChild, childCategory } = props;
    return (
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-portlet m-portlet--tab">
                            <div className="m-subheader">
                                <div className="d-flex align-items-center">
                                    <div className="mr-auto">
                                        <Link to="/crew" className="back-btn"><i className="la la-undo"></i></Link> /
                                        <h3 className="m-subheader__title ">Add Crew</h3>
                                    </div>
                                </div>
                            </div>
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
                                                <Field component={renderSelect} name="week_start" className="form-control m-input m-input--solid">
                                                    <option>Select</option>
                                                    <option value="Monday">Monday</option>
                                                    <option value="Tuesday">Tuesday </option>
                                                    <option value="Wednesday">Wednesday</option>
                                                    <option value="Thursday">Thursday</option>
                                                    <option value="Friday">Friday</option>
                                                    <option value="Saturday">Saturday</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Work Day Length (Hours)</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp"  component={renderField} name="work_hours" type="number" />
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
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp"  component={renderField} name="annual_entitlement" type="number" />
                                                <span style={{ "display": "block", "textAlign": "right" }}>(days in year)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Address Line 1</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="address_one" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Address Line 2</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="address_two" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">City</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="city" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">State</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="state" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Zip Code</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="zip" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Telephone Number</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="telephone" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Mobile Number</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="mobile_number" type="text" />
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
                                                <Field component={renderSelect} name="work_category" className="form-control m-input m-input--solid">
                                                    <option>select</option>
                                                    {childCategory}
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Work Experience</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" component={renderField} name="work_experience" type="text" />
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
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group file-name">
                                                <input className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="File Name" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="drag-block img-upload-view" style={{"margin":"0"}}>
                                                <span className="select-file">
                                                    <input id="" name="" accept="" type="file" /><i className="la la-plus"></i></span>
                                                    Upload File
                                                
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <button type="button" className="btn m-btn--pill    btn-info m-btn m-btn--custom"><i className="la la-plus"></i> Add More Documents</button>
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
                                            <label className="m-checkbox">
                                                <Field name="access_privileges[1]" component="input" value="1" type="checkbox" /> Has Admin Privileges
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access_privileges[2]" component="input" value="2" type="checkbox" /> Can Add Work Requests
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access_privileges[3]" component="input" value="3" type="checkbox" />Can Add Proposals
                                                <span></span>
                                            </label>
                                            <label className="m-checkbox">
                                                <Field name="access_privileges[4]" component="input" value="4" type="checkbox" />Can Schedule Jobs
                                                <span></span>
                                            </label>
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
    }else{
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
            errors.email = 'Invalid Email';
        }
    }
    if (!val.last_name) {
        errors.last_name = 'Required';
    }
    if (!val.dob) {
        errors.dob = 'Required';
    }
    if (!val.city) {
        errors.city = 'Required';
    }
    if (!val.state) {
        errors.state = 'Required';
    }
    if (!val.zip) {
        errors.zip = 'Required';
    }
    if (!val.mobile_number) {
        errors.mobile_number = 'Required';
    }else{
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.mobile_number)) {
            errors.mobile_number = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!/^(0|[1-9][0-9]{9})$/i.test(val.telephone) && val.telephone) {
        errors.telephone = 'Invalid phone number, must be 10 digits.';
    }
    if (!val.role) {
        errors.role = 'Required';
    }
    if (!val.week_start) {
        errors.week_start = 'Required';
    }
    if (!val.work_category) {
        errors.work_category = 'Required';
    }
    /*  if (!val.access_privileges) {
        errors.access_privileges = 'Required';
    } */
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
    if (!val.work_experience) {
        errors.work_experience = 'Required';
    }
    if (!val.address_one) {
        errors.address_one = 'Required';
    }
    if (!val.address_two) {
        errors.address_two = 'Required';
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
    componentDidMount() {
        this.props.getMaster('category');
    }
    SubmitCrew(values) {
       // console.log(values);
       if(values.access_privileges){
        const arr = [];
        values.access_privileges.map((function (check, i) {
            if(check==true && i !=0){
                arr.push(i);
            }
        }));
        values.access_privileges = JSON.stringify(arr);
       }
        values.uuid = uuidv();
        this.props.createCrew(values);
        this.props.reset("CrewForm"); 
    }
    render() {
        const optionData = this.props.category.map((function (category, i) {
            return <option value={category.id} key={i}>{category.title}</option>
        }));
        return (
            <Crew onSubmit={this.SubmitCrew} childCategory={optionData}/>
        );
    }
}

const mapDispatchToProps = { getMaster, createCrew, reset };

function mapStateToProps(state) {
    return {
        category: state.getMaster.master_data_new
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCrew);