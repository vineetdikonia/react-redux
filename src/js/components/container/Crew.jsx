import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getCrews} from "../../actions/index";

class Crew extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCrews();
    }
    render() {
        const tableData = this.props.crews_data.map((function (table, i) {
            return <tr className='clickable-row' data-href='sample-crew.html' key={i}>
                    <td>{table.first_name+' '+table.last_name}</td>
                    <td>{table.email}</td>
                    <td>{table.role}</td>
                    <td>Contrary to popular</td>
                    <td>{'$ ' +table.hourly_rate}</td>
                    <td>42</td>
                    <td>Completed</td>

                </tr>
        }));
        return (
            <div className="m-grid__item m-grid__item--fluid m-wrapper">
                <div className="m-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="m-portlet m-portlet--tab">
                                <div className="inline-filter-bar m-b-20">
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

const mapDispatchToProps = { getCrews };

function mapStateToProps(state) {
    return {
        crews_data: state.getCrews.crews_data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Crew);