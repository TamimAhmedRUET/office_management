import React from 'react';

const FormContainer = ({ title, description, onSubmit, children }) => {
    return (
        <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6 border border-gray-100">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
                    {description && (
                        <p className="mt-1 text-sm text-gray-500">
                            {description}
                        </p>
                    )}
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form onSubmit={onSubmit}>
                        <div className="grid grid-cols-6 gap-6">
                            {children}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;
