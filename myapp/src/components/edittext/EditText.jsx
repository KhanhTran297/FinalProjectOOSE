import React, { useState } from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import EditorText from '../common/EditorText';
const EditText = (props) => {
    const {
        control,
        name,
        type = "text",
        error = "",
        placeholder = "",
        children,
        ...rest
      } = props;
      const { field } = useController({
        control,
        name,
        defaultValue: "",
      });
    return (
        <div className="relative">
            <EditorText
                id={name}
                type={type}
                className={`
                "absolute w-full px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent",
                error.length > 0
                    ? "border-error text-error"
                    : "border-strock text-text1 dark:border-darkStroke",
                children ? "pr-16" : ""
                `}
                placeholder={error.length <= 0 ? placeholder : ""}
                {...rest}
                {...field}
            />

            {error.length > 0 && (
                <span className="absolute text-sm font-medium pointer-events-none text-error bottom-2/4 translate-y-12 left-1 error-input w-full">
                {error}
                </span>
            )}
            {children && (
                <span className="absolute cursor-pointer select-none left-[90%] top-2/4 -translate-y-2/4 w-full">
                {children}
                </span>
            )}
        </div>
    );
};
Edit.PropTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    control: PropTypes.any.isRequired,
};

export default EditText;