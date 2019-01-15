import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio} from '../includes/FormRenderWrappers'; 
import { Field, reduxForm } from 'redux-form'
import moment from 'moment';

let Myjob = props => {
    const { handleSubmit, pristine, reset, submitting, ShowChild, childPage } = props;
    return (
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
            <div className="m-subheader">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <Link to="/" className="back-btn"><i className="la la-undo"></i></Link>
                    </div>
                </div>
            </div>
            <div className="m-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-portlet m-portlet--tab">
                            <form className="m-form m-form--fit m-form--label-align-right" onSubmit={handleSubmit}>
                                <div className="m-portlet__body">
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Add Work Request
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Select Client  </label>
                                                <Field component={renderSelect}  name="client" className="form-control m-input m-input--solid">
                                                    <option>select</option>
                                                    <option value="mukesh">mukesh</option>
                                                    <option value="abc">abc</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Work Request No.</label>
                                                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" name="request_number" component={renderField}  type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="m-form__group form-group">
                                                <label htmlFor="exampleInputPassword1">Request Type</label>
                                                <div className="m-radio-list">
                                                    <Field component={renderRadio} name="request_type" className="form-control m-input m-input--solid" >
                                                        <label className="m-radio m-r-20">
                                                            <Field name="request_type" component="input" value="1" type="radio" />Repair
                                                            <span></span>
                                                        </label>
                                                        <label className="m-radio">
                                                            <Field name="request_type" component="input" value="2" type="radio" />Capital Improvement
                                                            <span></span>
                                                        </label>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Request Category</label>
                                                <Field component={renderSelect} name="request_category" className="form-control m-input m-input--solid">
                                                    <option>select</option>
                                                    <option value="Electrical">Electrical</option>
                                                    <option value="Plumbing">Plumbing</option>
                                                    <option value="Civil">Civil</option>
                                                    <option value="Technical">Technical</option>
                                                    <option value="Mechanical">Mechanical</option>
                                                    <option value="House Keeping">House Keeping</option>
                                                    <option value="Safety">Safety</option>
                                                </Field>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Location Type</label>
                                                <Field component={renderSelect} name="location_type" className="form-control m-input m-input--solid">
                                                    <option>select</option>
                                                    <option value="Building">Building</option>
                                                    <option value="Room">Room</option>
                                                    <option value="Suite">Suite</option>
                                                    <option value="Ground">Ground</option>
                                                    <option value="Parking Lot">Parking Lot</option>
                                                    <option value="Roof">Roof</option>
                                                    <option value="Floor">Floor</option>
                                                    <option value="Basement">Basement</option>
                                                </Field>
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
                                                    Requested By
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="m-form__group form-group">
                                                <div className="m-radio-list">
                                                    <Field component={renderRadio} name="request_by" className="form-control m-input m-input--solid" >
                                                        <label className="m-radio m-r-20">
                                                            <Field component="input" name="request_by" onChange={ShowChild} value="1" type="radio" /> Building Owner/ Manager/ Super
                                                        <span></span>
                                                        </label>
                                                        <label className="m-radio">
                                                            <Field component="input" name="request_by" onChange={ShowChild} value="2" type="radio" />Tenant
                                                        <span></span>
                                                        </label>
                                                    </Field>
                                                </div>
                                            </div>
                                            <div id="Self" className="search-field">
                                            </div>
                                            {childPage}
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
                                                Work Description
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputEmail1">Brief Description/ Memo</label>
                                            <Field component={renderTextArea} name="brief_description" rows="3" className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{"minHeight":"90px"}} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group m-form__group">
                                            <label htmlFor="exampleInputEmail1"> Full Description</label>
                                            <Field component={renderTextArea} name="full_description" rows="3" className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" style={{"minHeight":"90px"}} />
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
                                                Work Schedule
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label htmlFor="exampleInputEmail1"> Tentative Start Date</label>
                                            <Field name="start_date" component={renderDatePicker}  dateFormat="YYYY-MM-DD" className="form-control m-input" type="text" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="m-form__group form-group">
                                            <label htmlFor="exampleInputPassword1">Priority</label>
                                            <div className="m-radio-list m-t-15">
                                                <Field component={renderRadio} name="priority" className="form-control m-input m-input--solid" >
                                                    <label className="m-radio m-r-20">
                                                        <Field component="input" name="priority" value="1" type="radio" /> High
                                                        <span></span>
                                                    </label>
                                                        <label className="m-radio m-r-20">
                                                            <Field component="input" name="priority" value="2" type="radio" />Medium
                                                        <span></span>
                                                    </label>
                                                        <label className="m-radio m-r-20">
                                                            <Field component="input" name="priority" value="3" type="radio" />Low
                                                        <span></span>
                                                    </label>
                                                        <label className="m-radio">
                                                            <Field component="input" name="priority" value="4" type="radio" />None
                                                        <span></span>
                                                    </label>
                                                </Field>
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
                                                More Details
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="drag-block img-upload-view">
                                            <span className="select-file">
                                                <input id="" name="" accept="" type="file" /><i className="la la-plus"></i></span>
                                                Add Images
                                        </div>
                                    </div>
                                </div>
                                <div className="m-portlet__foot m-portlet__foot--fit text-center">
                                    <div className="m-form__actions">
                                        <button type="submit" disabled={submitting} className="btn btn-metal">Submit</button>
                                        <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-secondary">Cancel</button>
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
    if (!val.client) {
        errors.client = 'Required';
    }
    if (!val.request_category) {
        errors.request_category = 'Required';
    }
    if (!val.location_type) {
        errors.location_type = 'Required';
    }
    if (!val.request_number) {
        errors.request_number = 'Required';
    }
    if (!val.brief_description) {
        errors.brief_description = 'Required';
    }
    if (!val.full_description) {
        errors.full_description = 'Required';
    }
    if (!val.request_type) {
        errors.request_type = 'Required';
    }
    if (!val.priority) {
        errors.priority = 'Required';
    }
    if (!val.request_by) {
        errors.request_by = 'Required';
    }
    if (!val.tenant_name) {
        errors.tenant_name = 'Required';
    }
    
    return errors;
};

Myjob = reduxForm({
    form: 'Job', // a unique identifier for this form
    validate
})(Myjob)

class Addjobs extends Component {
    constructor(props){
        super(props);
        this.state = {
            childContent: ""
        }
        this.child = this.child.bind(this);
    }
    ShowJOb(values) {
        values.start_date = moment(values.start_date._d).format('YYYY-MM-DD');
        console.log(values);
        /* axios.post('/api/submit-form', values)
            .then(function (response) {
                console.log(response);
                //Perform action based on response
        }) */
    }
    child(values){
        console.log(values.target.value);
        if (values.target.value == 2) {
            this.setState({
                childContent: <div id="Tenant" className="search-fields">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="search-block form-group m-form__group">
                                <Field component="input" name="search" className="form-control m-input m-input--solid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" type="text" />
                                <button className="m-badge  m-badge--info m-badge--wide"><i className="la la-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group m-form__group">
                                <Field component={renderField} name="tenant_name" label="Tenant Name" className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group m-form__group">
                                <Field component={renderField} name="tenant_contact" label="Tenant Contact Person" className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="form-group m-form__group">
                                <Field component="input" name="email" placeholder="Email" className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group m-form__group">
                                <Field component="input" name="mobile" placeholder="Mobile" className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group m-form__group">
                                <Field component="input" name="phone" placeholder="Phone" className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group m-form__group">
                                <Field component="input" name="ext" placeholder="Ext." className="form-control m-input m-input--solid" aria-describedby="emailHelp" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
             });
        }else{
            this.setState({ childContent: "" });
        }
    }
    render() {
        return (
            <Myjob onSubmit={this.ShowJOb} ShowChild={this.child} childPage={this.state.childContent}/>
        );
    }
}

export default Addjobs;

