import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio, renderCheckbox } from '../includes/FormRenderWrappers';
import { Field, reduxForm, reset } from 'redux-form'
import moment from 'moment';
import uuidv from "uuid";
import { getClient, createClient } from "../../actions/clients";
import dummy from "../../../styles/assets/demo/demo12/media/img/dummy.jpg";


let Client = props => {
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
                                        <Link to="/clients" className="back-btn"><i className="la la-undo"></i></Link> /
                                        <h3 className="m-subheader__title ">New Client</h3>
                                    </div>
                                </div>
                            </div>
                            <form className="m-form m-form--fit m-form--label-align-right" onSubmit={handleSubmit}>
                                <div className="m-portlet__body">
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Client Basic Info
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="name" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="email" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Address</label>
                                                <Field component={renderTextArea} name="address" rows="3" className="form-control m-input m-input--solid" aria-describedby="emailHelp" placeholder="" style={{ "minHeight": "90px" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group text-center">
                                                <label htmlFor="exampleInputEmail1">Client Logo</label>
                                                <div className="client-dp"><img alt="" src={dummy} /></div>
                                                <div className="drag-blocks">
                                                    <span className="select-file">
                                                        <input id="" name="" accept="" type="file" />Change Picture</span>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">City</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="city" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">State</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="state" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Postal Code</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="zip" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Country</label>
                                                <Field component={renderSelect} name="country" className="form-control m-input m-input--solid">
                                                    <option>Select</option>
                                                    <option value="India">India</option>
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="phone" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Fax</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="fax" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Website</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="website" aria-describedby="emailHelp" placeholder="" type="text" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="m-portlet__foot m-portlet__foot--fit text-center">
                                    <div className="m-form__actions">
                                        <Link to="/add_building" className="btn btn-metal"><i className="la la-plus"></i>Add Building</Link>

                                        <button type="submit" disabled={submitting} className="btn btn-metal">Save Client</button>
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
    if (!val.name) {
        errors.name = 'Required';
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
    if (!val.phone) {
        errors.phone = 'Required';
    } else {
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.mobile_number)) {
            errors.mobile_number = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!val.fax) {
        errors.fax = 'Required';
    }
    if (!val.country) {
        errors.country = 'Required';
    }
    if (!val.address) {
        errors.address = 'Required';
    }
    if (!val.website) {
        errors.website = 'Required';
    }
    if (!val.email) {
        errors.email = 'Required';
    } else {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val.email)) {
            errors.email = 'Invalid Email';
        }
    }
    return errors;
};

Client = reduxForm({
    form: 'ClientForm', // a unique identifier for this form
    validate
})(Client)

class AddClient extends Component {
    constructor(props){
    super(props);
    this.ClientSubmit = this.ClientSubmit.bind(this);
    }
    ClientSubmit(values){
        values.uuid = uuidv();
        this.props.createClient(values);
        this.props.reset("ClientForm"); 
    }
    render() {
        return (
            <Client onSubmit={this.ClientSubmit}/>
        )
    }
}


const mapDispatchToProps = { createClient, reset };



export default connect(null, mapDispatchToProps)(AddClient);