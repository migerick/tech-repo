import React, {useEffect, useState} from 'react';
import {getProductionActData} from '../../../api/data/readData';
import {H1, TableTech} from "../../shared";

// Define the type for the data items
interface ProductionActItem {
    dim_name_material: string;
    hour: number;
    tons: number;
}

interface TableData {
    material: string;
    hour: number;
    tons: number;
}

export const TonnageByMaterial: React.FC = () => {
    const [data, setData] = useState<ProductionActItem[]>([]);
    const [tableData, setTableData] = useState<TableData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProductionActData();
            setData(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const calculateTableData = () => {
            const materialHourMap: { [key: string]: number } = {};

            data.forEach(item => {
                const key = `${item.dim_name_material}-${item.hour}`;
                if (!materialHourMap[key]) {
                    materialHourMap[key] = 0;
                }
                materialHourMap[key] += item.tons;
            });

            const sortedTableData = Object.keys(materialHourMap).map(key => {
                const [material, hour] = key.split('-');
                return {material, hour: parseInt(hour, 10), tons: materialHourMap[key]};
            }).sort((a, b) => b.hour - a.hour);

            setTableData(sortedTableData);
        };

        if (data.length > 0) {
            calculateTableData();
        }
    }, [data]);

    const headers = [
        {displayName: 'Hora', fieldName: 'hour'},
        {displayName: 'Material', fieldName: 'material'},
        {displayName: 'Tonelaje', fieldName: 'tons'}
    ]

    return (
        <div>
            <H1 text={`Tonelaje por material para cada hora del turno.`} />
            <TableTech headers={headers} data={tableData}/>
        </div>
    );
};

