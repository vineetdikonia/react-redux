import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio, renderCheckbox } from '../includes/FormRenderWrappers';
import { Field, reduxForm, reset, FieldArray } from 'redux-form'
import { createBuilding } from "../../actions/buildings";
import { getMaster } from "../../actions/index";
import moment from 'moment';
import uuidv from "uuid";


const renderTenat = ({ fields, meta: { touched, error, submitFailed } }) => (
    <div>
        {fields.map((member, index) => (
            <div key={index}>
                <div className="row">
                    <div className="col-md-6 col-xl-6">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1"> Tenant Location Type</label>
                            <Field component={renderSelect} name={`${member}.location_type`} className="form-control m-input m-input--solid">
                                <option>Select</option>
                                <option>Building</option>
                                <option>Room</option>
                                <option>Suite</option>
                                <option>Ground</option>
                                <option>Parking Lot</option>
                                <option>Roof</option>
                                <option>Floor</option>
                                <option>Basement</option>
                            </Field>
                        </div>
                    </div>
                    <div className="col-md-3 col-xs-3">
                        <div className="input-group m-input-group m-t-25">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">#</span>
                            </div>
                            <Field name={`${member}.code`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                    {index!=0 ? 
                        <div className="col-md-3 col-xs-3">
                            <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => fields.remove(index)}
                                style={{ "top": "30%" , "position": "relative"}}
                            >X</button>
                        </div>
                        : ''
                    }
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Tenant Name</label>
                            <Field name={`${member}.tenant_name`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Tenant Contact Person</label>
                            <Field name={`${member}.contact_person`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <Field name={`${member}.email`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Mobile</label>
                            <Field name={`${member}.mobile`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Phone</label>
                            <Field name={`${member}.phone`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group m-form__group">
                            <label htmlFor="exampleInputEmail1">Extension</label>
                            <Field name={`${member}.extension`} component={renderField} className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                        </div>
                    </div>
                </div>
            </div>
        ))}

        <div className="text-center">
            <button type="button" className="btn btn-success" onClick={() => fields.push({})}><i className="la la-plus"></i> Tenant</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </div>

    </div>
);

let Building = props => {
    const { handleSubmit, pristine, reset, submitting, childLocation } = props;
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
                                        <h3 className="m-subheader__title ">Building Info</h3>
                                    </div>
                                </div>
                            </div>
                            <form className="m-form m-form--fit m-form--label-align-right" onSubmit={handleSubmit}>
                                <div className="m-portlet__body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Building Name</label>
                                                <Field className="form-control m-input m-input--solid" component={renderField} name="building_name" aria-describedby="emailHelp" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="m-form__group form-group">
                                                <label htmlFor="exampleInputPassword1">Building Type</label>
                                                <div className="m-radio-list m-t-15">
                                                    <Field component={renderRadio} name="building_type" className="form-control m-input m-input--solid" >
                                                        <label className="m-radio m-r-20">
                                                            <Field name="building_type" component="input" value="1" type="radio" /> Resident
                                                        <span></span>
                                                        </label>
                                                        <label className="m-radio">
                                                            <Field name="building_type" component="input" value="2" type="radio" />Commercial
                                                        <span></span>
                                                        </label>
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Building Description</label>
                                                <Field component={renderTextArea} name="building_description" rows="3" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" style={{ "minHeight": "90px" }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="m-b-10">
                                                <label htmlFor="exampleInputEmail1"> Address</label>
                                                <Field component={renderField} name="address_one" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="Line 1" type="text" />
                                            </div>
                                            <div className="form-group m-form__group">
                                                <Field component={renderField} name="address_two" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="Line 2" type="text" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> City</label>
                                                <Field component={renderField} name="city" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Sate</label>
                                                <Field component={renderField} name="state" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Zip Code</label>
                                                <Field component={renderField} name="zip" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
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
                                                    Building Owner
										        </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Owner Name</label>
                                                <Field component={renderField} name="owner_name" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                <Field component={renderField} name="owner_email" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Owner Mobile</label>
                                                <Field component={renderField} name="owner_mobile" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Owner Phone</label>
                                                <Field component={renderField} name="owner_phone" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Extension</label>
                                                <Field component={renderField} name="owner_extension" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
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
                                                    Building Manager
												</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Building Manager</label>
                                                <Field component={renderField} name="building_manager" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                 <Field component={renderField} name="manager_email" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Mobile</label>
                                                 <Field component={renderField} name="manager_mobile" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                 <Field component={renderField} name="manager_phone" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                             </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Extension</label>
                                                 <Field component={renderField} name="manager_extension" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
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
                                                    Building Super
										</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1"> Building Super</label>
                                                <Field component={renderField} name="building_super" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Email</label>
                                                 <Field component={renderField} name="super_email" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Mobile</label>
                                                 <Field component={renderField} name="super_mobile" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Phone</label>
                                                 <Field component={renderField} name="super_phone" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group m-form__group">
                                                <label htmlFor="exampleInputEmail1">Extension</label>
                                                 <Field component={renderField} name="super_extension" className="form-control m-input m-input--solid" aria-describedby="emailHelp" label="" type="text" />
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
                                                    Location Info
										</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="check-block">
                                        <div className="m-checkbox-inline">
                                                {childLocation}
                                            <label className="">
                                                <button type="reset" className="btn btn-success"><i className="la la-plus"></i> Add New</button>
                                            </label>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="m-portlet__head">
                                        <div className="m-portlet__head-caption">
                                            <div className="m-portlet__head-title">
                                                <span className="m-portlet__head-icon m--hide">
                                                    <i className="la la-gear"></i>
                                                </span>
                                                <h3 className="m-portlet__head-text">
                                                    Tenant Info
										        </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <FieldArray name="tenant_info" component={renderTenat} />
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
    if (!val.building_name) {
        errors.building_name = 'Required';
    }
    if (!val.building_type) {
        errors.building_type = 'Required';
    }
    if (!val.building_description) {
        errors.building_description = 'Required';
    }
    if (!val.address_one) {
        errors.address_one = 'Required';
    }
    if (!val.address_two) {
        errors.address_two = 'Required';
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
    if (!val.owner_name) {
        errors.owner_name = 'Required';
    }
    if (!val.owner_email) {
        errors.owner_email = 'Required';
    }
    if (!val.owner_mobile) {
        errors.owner_mobile = 'Required';
    } else {
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.owner_mobile)) {
            errors.owner_mobile = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!val.owner_phone) {
        errors.owner_phone = 'Required';
    } else {
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.owner_phone)) {
            errors.owner_phone = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!val.owner_extension) {
        errors.owner_extension = 'Required';
    }
    if (!val.manager_email) {
        errors.manager_email = 'Required';
    }
    if (!val.manager_mobile) {
        errors.manager_mobile = 'Required';
    }
    if (!val.manager_phone) {
        errors.manager_phone = 'Required';
    }
    if (!val.manager_extension) {
        errors.manager_extension = 'Required';
    }
    if (!val.building_manager) {
        errors.building_manager = 'Required';
    }
    if (!val.building_super) {
        errors.building_super = 'Required';
    }
    if (!val.super_email) {
        errors.super_email = 'Required';
    }
    if (!val.super_mobile) {
        errors.super_mobile = 'Required';
    } else {
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.super_mobile)) {
            errors.super_mobile = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!val.super_phone) {
        errors.super_phone = 'Required';
    } else {
        if (!/^(0|[1-9][0-9]{9})$/i.test(val.super_phone)) {
            errors.super_phone = 'Invalid phone number, must be 10 digits.';
        }
    }
    if (!val.super_extension) {
        errors.super_extension = 'Required';
    }
    if (!val.tenant_info || !val.tenant_info.length) {
        errors.tenant_info = { _error: 'At least one member must be entered' };
    } else {
        const tenantArrayErrors = [];
        val.tenant_info.forEach((tenant, tenantIndex) => {
            const tenantErrors = {};
            if (!tenant || !tenant.location_type) {
                tenantErrors.location_type = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            }
            if (!tenant || !tenant.tenant_name) {
                tenantErrors.tenant_name = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            }
            if (!tenant || !tenant.contact_person) {
                tenantErrors.contact_person = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            }
            if (!tenant || !tenant.mobile) {
                tenantErrors.mobile = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            } else {
                if (isNaN(Number(tenant.mobile))) {
                    tenantErrors.mobile = 'Allow Only Number.';
                    tenantArrayErrors[tenantIndex] = tenantErrors;
                }
            }
            if (!tenant || !tenant.phone) {
                tenantErrors.phone = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            } else {
                if (isNaN(Number(tenant.phone))) {
                    tenantErrors.phone = 'Allow Only Number.';
                    tenantArrayErrors[tenantIndex] = tenantErrors;
                }
            }
            if (!tenant || !tenant.email) {
                tenantErrors.email = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            }
            if (!tenant || !tenant.extension) {
                tenantErrors.extension = 'Required';
                tenantArrayErrors[tenantIndex] = tenantErrors;
            }
        });
        if (tenantArrayErrors.length) {
            errors.tenant_info = tenantArrayErrors;
        }
    }
    return errors;
};

Building = reduxForm({
    form: 'BuildingForm', // a unique identifier for this form
    initialValues:{
        tenant_info : [null]
    },
    validate
})(Building)


class AddBuilding extends Component {
    constructor(props){
        super(props)
        this.buildingSubmit = this.buildingSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getMaster('location');
    }

    buildingSubmit(values){
        values.uuid = uuidv();
        if (values.location_info) {
            const arr = [];
            values.location_info.map((function (check, i) {
                if (check == true && i != 0) {
                    arr.push(i);
                }
            }));
            values.location_info = JSON.stringify(arr);
        }
        var tenant_info = values.tenant_info;
        delete values["tenant_info"];
        this.props.createBuilding(values,tenant_info);
        this.props.reset("BuildingForm");
    }

    render() {
        const checkboxData = this.props.master_data.map((function (check, i) {
            return <label className="m-checkbox" key={i}>
                <Field name={`${"location_info"}[${check.id}]`} type="checkbox" component="input" /> {check.title}
                <span></span>
            </label>
        }));
        return (
            <Building onSubmit={this.buildingSubmit} childLocation={checkboxData}/>
        )
    }
}

const mapDispatchToProps = { createBuilding, reset, getMaster };

function mapStateToProps(state) {
    return {
        master_data: state.getMaster.master_data_new
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBuilding);