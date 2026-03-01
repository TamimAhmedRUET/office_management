import React, { forwardRef } from 'react';

const Input = forwardRef(({
    label,
    error,
    id,
    className = '',
    wrapperClassName = '',
    required,
    ...props
}, ref) => {
    return (
        <div className={`space-y-1 ${wrapperClassName}`}>
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative rounded-md shadow-sm">
                <input
                    id={id}
                    ref={ref}
                    className={`
            block w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm
            ${error ? 'border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500' : 'border-gray-300'}
            ${className}
          `}
                    {...props}
                />
                {error && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </div>
                )}
            </div>
            {error && (
                <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
                    {error}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
