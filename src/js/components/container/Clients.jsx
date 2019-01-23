import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getClient } from "../../actions/clients";


class Clients extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getClient();
    }
    render() {
        const tableData = this.props.client_data.map((function (table, i) {
            return <tr className='clickable-row' data-href='sample-client.html' key={i}>
                <td>{table.name}</td>
                <td>2</td>
                <td>4</td>
                <td>1</td>
                <td>1</td>
            </tr>
        }));
        return (
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
                                                <Link to="/add_building" className="m-badge m-r-10"><i className="la la-plus"></i>Add Building</Link>
                                                <Link to="/add_client" className="m-badge"><i className="la la-plus"></i>Add Client</Link>
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
                                                        <th>Client Name</th>
                                                        <th>Building Locations</th>
                                                        <th>Active Jobs</th>
                                                        <th>Unpaid Invoices</th>
                                                        <th>Unapproved Proposals</th>
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
        )
    }
}


const mapDispatchToProps = { getClient };

function mapStateToProps(state) {
    return {
        client_data: state.getClients.client_data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Clients);