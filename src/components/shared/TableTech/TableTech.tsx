import React from 'react';

interface TableProps {
    headers: { displayName: string, fieldName: string }[];
    data: { [key: string]: string | number }[];
}

export const TableTech: React.FC<TableProps> = ({headers, data}) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header.fieldName}>{header.displayName}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {headers.map((header) => (
                            <td key={header.fieldName}>{row[header.fieldName]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
