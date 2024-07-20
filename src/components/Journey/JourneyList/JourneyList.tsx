import React, {useEffect, useState} from 'react';
import {getProductionActData} from '../../../api/data/readData';
import {H1, P, TableTech} from "../../shared";

interface DataItem {
    loadingequipmentname: string;
    locationdump: string;
    tons: number;
}

interface Totals {
    equipment: string;
    download: string;
    tons: number;
}

type TotalArrays = Totals[];

interface TotalsMap {
    [key: string]: number;
}

export const JourneyList: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([]);
    const [totals, setTotals] = useState<TotalArrays>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getProductionActData();
            setData(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const calculateTotals = () => {
            const totalsMap: TotalsMap = {};
            const totalArray: TotalArrays = [];
            data.forEach(item => {
                const key = `${item.loadingequipmentname} - ${item.locationdump}`;
                if (!totalsMap[key]) {
                    totalsMap[key] = 0;
                }
                totalsMap[key] += item.tons;
            });

            Object.keys(totalsMap).forEach(key => {
                const splitKey = key.split(' - ');
                const payload = {
                    equipment: splitKey[0],
                    download: splitKey[1],
                    tons: totalsMap[key]
                };
                totalArray.push(payload);
            })

            setTotals(totalArray);
        };

        if (data.length > 0) {
            calculateTotals();
        }
    }, [data]);

    const headers = [
        {displayName: "Equipo", fieldName: "equipment"},
        {displayName: "Fase", fieldName: "download"},
        {displayName: "Toneladas", fieldName: "tons"}
    ]

    return (
        <div>
            <H1 text={"Tonelaje de cada equipo de carga a zona de descarga."}/>
            <TableTech headers={headers} data={totals}/>
        </div>
    );
};

