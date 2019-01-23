import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { renderDatePicker, renderField, renderSelect, renderTextArea, renderRadio } from '../includes/FormRenderWrappers';
import { Field, reduxForm, reset, destroy, isPristine } from 'redux-form'
import { connect } from 'react-redux';
import uuidv from "uuid";
import axios from 'axios';
import { getMaster, createMaster } from "../../actions/index";


let MasterPopup = props => {
  const { handleSubmit, pristine, reset, submitting, title } = props;
  return (
    <div className="modal fade add-time-block" id="m_modal_10" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Add {title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group m-form__group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <Field className="form-control m-input m-input--solid" aria-describedby="emailHelp" name="title" component={renderField} type="text" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
              <button type="button" data-dismiss="modal" id="cancel_popup" className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const validate = val => {
  const errors = {};
  if (!val.title) {
    errors.title = 'Required';
  }
  return errors;
};

MasterPopup = reduxForm({
  form: 'MasterForm', // a unique identifier for this form
  validate
})(MasterPopup)


class Masters extends Component {
  constructor(props) {
    super(props);
    const { match } = props;
    this.state = {
      master: match.params.types,
    };
    this.AddMaster = this.AddMaster.bind(this);
  }
  componentWillReceiveProps(prevProps) {
    if (prevProps.match.params.types !== this.props.match.params.types) {
      this.setState({ master: prevProps.match.params.types });
      this.props.getMaster(prevProps.match.params.types);
    }
  }

  componentDidMount() {
    this.props.getMaster(this.state.master);
  }

  AddMaster(values) {
    values.uuid = uuidv();
    values.type = this.state.master;
    this.props.createMaster(values);
    document.getElementById("cancel_popup").click();
    this.props.reset("MasterForm");
  }

  render() {
    const master_type = this.state.master;
    const tableData = this.props.master_data.map((function (table, i) {
      return <tr className="clickable-row" key={i}>
        <td>{i + 1}</td>
        <th scope="row">{table.title}</th>
      </tr>
    }));
    return (
      <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <div className="m-subheader">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <Link to="/" className="back-btn"><i className="la la-undo"></i></Link>
              <h3 className="m-subheader__title"></h3>
            </div>
          </div>
        </div>
        <div className="m-grid__item m-grid__item--fluid m-wrapper">
          <div className="m-content">
            <div className="row">
              <div className="col-md-12">
                <div className="m-portlet m-portlet--tab">
                  <div className="inline-filter-bar m-b-15">
                    <div className="d-flex align-items-center">
                      <div className="mr-auto">
                        <h3 className="m-subheader__title "></h3>
                      </div>
                      <div className="m-l-30">
                        <div className="m-portlet__head-tools text-right">
                          <button className="m-badge" data-toggle="modal" data-target="#m_modal_10"><i className="la la-plus"></i>Add {master_type}</button>
                                </div>
                        </div>
                      </div>
                    </div>
                    <form className="m-form m-form--fit m-form--label-align-right p-l-r-0">
                      <div className="table-responsive">
                        <div className="m-section__content">
                          <table className="table">
                            <thead>
                              <tr>
                                <th>Sr. No.</th>
                                <th>Title</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData}
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
        <MasterPopup onSubmit={this.AddMaster} title={this.state.master} />
      </div>
    )
  }
}
const mapDispatchToProps = { reset, getMaster, createMaster };

function mapStateToProps(state) {
  return {
    master_data: state.getMaster.master_data_new
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Masters);