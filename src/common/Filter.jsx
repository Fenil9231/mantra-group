import React, { useContext } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { PropertyFilterContext } from '../contextApi/PropertyFilterContext';


const Filter = (props) => {

    const {dataType, handleDataTypeChange, dataLocation, handleDataLocationChange} = useContext(PropertyFilterContext); 

    const navigate = useNavigate();

    // Input Field Validation Start 
    const formik = useFormik({
        initialValues: {
          searchKeyword: "",
        },
        // Validate by Yup
        validationSchema: yup.object({
            searchKeyword: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
        }),
    
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            resetForm({ values: "" });
            toast.success("Congratulations! You Have Searched Successfully.", {
                theme: "colored",
            });

            // Navigate To Property Page
            navigate("/property-sidebar");
        },
    });

    const renderNameError = formik.touched.searchKeyword && formik.errors.searchKeyword && (
        <span className="text-danger">{formik.errors.searchKeyword}</span>
    );
    // Input Field Validation End
    
    return (
        <>  
        <ToastContainer/>
            <div className="filter">
                <form action="#" onSubmit={formik.handleSubmit}>
                    <div className="row gy-sm-4 gy-3">
                        <div className={props.colClass}>
                            <input 
                                type="text" 
                                placeholder="Enter Keyword"
                                name='searchKeyword'
                                id='name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={`common-input ${
                                    formik.touched.name && formik.errors.name ? "is-invalid" : ""
                                }`}
                            />
                            {renderNameError}
                        </div>
                        <div className={props.colClass}>
                            <div className="select-has-icon icon-black">

                                <select className="select common-input" value={dataType} onChange={handleDataTypeChange}>
                                    <option value="Type" disabled defaultValue>Type</option>
                                    <option value="All">All</option>
                                    <option value="Houses">Houses</option>
                                    <option value="Apartments">Apartments</option>
                                    <option value="Office">Office</option>
                                    <option value="Villa">Villa</option>
                                </select>
                            </div>
                        </div>
                        <div className={props.colClass}>
                            <div className="select-has-icon icon-black">
                                <select className="select common-input" value={dataLocation} onChange={handleDataLocationChange}>
                                    <option value="Location" disabled defaultValue>Location</option>
                                    <option value="All"> All Provinces</option>
                                    <option value="Alberta" data-location="Alberta">Alberta</option>
                                    <option value="British Columbia" data-location="British Columbia">British Columbia</option>
                                    <option value="Manitoba" data-location="Manitoba">Manitoba</option>
                                    <option value="New Brunswick" data-location="New Brunswick">New Brunswick</option>
                                    <option value="Newfoundland and Labrador" data-location="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                    <option value="Nova Scotia" data-location="Nova Scotia">Nova Scotia</option>
                                    <option value="Ontario" data-location="Ontario">Ontario</option>
                                    <option value="Prince Edward Island" data-location="Prince Edward Island">Prince Edward Island</option>
                                    <option value="Quebec" data-location="Quebec">Quebec</option>
                                    <option value="Saskatchewan" data-location="Saskatchewan">Saskatchewan</option>
                                    <option value="Northwest Territories" data-location="Northwest Territories">Northwest Territories</option>
                                    <option value="Nunavut" data-location="Nunavut">Nunavut</option>
                                    <option value="Yukon" data-location="Yukon">Yukon</option>
                                </select>
                            </div>
                        </div>
                        <div className={props.colClass}>
                            <button type="submit" className="btn btn-main w-100"> 
                                {props.buttonText}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Filter;


