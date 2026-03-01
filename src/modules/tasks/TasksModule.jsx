import React, { useState } from 'react';
import RoleGuard from '../../components/guards/RoleGuard';
import Button from '../../components/common/Button';
import FormContainer from '../../components/common/FormContainer';

const MOCK_TASKS = [
    { id: 1, title: 'Setup Authentication', status: 'In Progress', assignee: 'Jane Doe' },
    { id: 2, title: 'Create Database Schema', status: 'Completed', assignee: 'John Smith' },
];

const TasksModule = () => {
    const [tasks] = useState(MOCK_TASKS);

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>

                {/* Only allow non Super Admins to create tasks */}
                <RoleGuard
                    allowedRoles={['Admin', 'Team Lead', 'Project Manager', 'Employee']}
                    type="component"
                >
                    <Button variant="primary">Create New Task</Button>
                </RoleGuard>
            </div>

            <FormContainer title="Task List" description="Overview of all project tasks">
                <div className="col-span-6 w-full">
                    <div className="overflow-x-auto border border-gray-200 rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignee</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tasks.map(task => (
                                    <tr key={task.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.title}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.assignee}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {task.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                            <Button variant="outline" size="sm">View</Button>

                                            {/* Super Admin modification restriction (FR-013) */}
                                            <RoleGuard
                                                allowedRoles={['Admin', 'Team Lead', 'Project Manager', 'Employee']}
                                                type="component"
                                            >
                                                <Button variant="secondary" size="sm">Edit</Button>
                                                <Button variant="danger" size="sm">Delete</Button>
                                            </RoleGuard>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </FormContainer>
        </div>
    );
};

export default TasksModule;
