import React from 'react';
import { Field } from 'redux-form';
import { Combobox, DropdownList } from 'react-widgets';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';


export const renderDatePicker = ({ input, className, label, dateFormat, meta: { touched, error, warning } }) => {
    return (
        <div>
            <Datetime defaultValue="YYYY-MM-DD" timeFormat={false} placeholder="YYYY-MM-DD" closeOnSelect={true} dateFormat={dateFormat} onChange={(date) => input.onChange(date)} />
            {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
                <span>{warning}</span>))}
        </div>)
};

export const renderField = ({ input, className, label, id,  value, type, style, meta: { touched, error, warning } }) => (
    <div>
        <input className={className} {...input} placeholder={label} type={type} style={style} />
        {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
            <span>{warning}</span>))}
    </div>
)


export const renderSelect = ({ input, className, label, meta: { touched, error, warning }, children }) => (
    <div>
        <select className={className} {...input} placeholder={label} >
        {children}
        </select>
        {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
            <span>{warning}</span>))}
    </div>
)

export const renderTextArea = ({ input, className, label, type, style, meta: { touched, error, warning } }) => (
    <div>
        <textarea {...input} className={className} placeholder={label} style={style} />
        {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
            <span>{warning}</span>))}
    </div>
);

export const renderRadio = ({ input, className, label, type, style, meta: { touched, error, warning }, children }) => (
    <div>
        {children}
        <div>
            {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
            <span>{warning}</span>))}
        </div>
    </div>
);

export const renderCheckbox = ({ input, className, label, type, style, meta: { touched, error, warning }, children }) => (
    <div>
        {children}
        <div>
            {touched && ((error && <span style={{ "color": "red" }}><i className="fa fa-exclamation" /> {error}</span>) || (warning &&
            <span>{warning}</span>))}
        </div>
    </div>
);
