import React, {useEffect, useState} from 'react';
import {getProductionActData, getProductionPrevData} from '../../../api/data/readData';
import {H1} from "../../shared";

interface ProductionDataItem {
    relativehour: number;
    tons: number;
}

interface DifferencesMap {
    [key: number]: number;
}

export const TonnageDifference: React.FC = () => {
    const [actData, setActData] = useState<ProductionDataItem[]>([]);
    const [prevData, setPrevData] = useState<ProductionDataItem[]>([]);
    const [differences, setDifferences] = useState<DifferencesMap>({});

    useEffect(() => {
        const fetchData = async () => {
            const actResult = await getProductionActData();
            const prevResult = await getProductionPrevData();
            setActData(actResult);
            setPrevData(prevResult);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const calculateDifferences = () => {
            const actMap: { [key: number]: number } = {};
            const prevMap: { [key: number]: number } = {};

            actData.forEach(item => {
                if (!actMap[item.relativehour]) {
                    actMap[item.relativehour] = 0;
                }
                actMap[item.relativehour] += item.tons;
            });

            prevData.forEach(item => {
                if (!prevMap[item.relativehour]) {
                    prevMap[item.relativehour] = 0;
                }
                prevMap[item.relativehour] += item.tons;
            });

            const diffMap: DifferencesMap = {};
            Object.keys(actMap).forEach(hour => {
                const hourNum = parseInt(hour, 10);
                diffMap[hourNum] = (actMap[hourNum] || 0) - (prevMap[hourNum] || 0);
            });

            setDifferences(diffMap);
        };

        if (actData.length > 0 && prevData.length > 0) {
            calculateDifferences();
        }
    }, [actData, prevData]);

    return (
        <div>
            <H1 text={`Diferencia de tonelaje por hora.`} />
            <ul>
                {Object.keys(differences).map(hour => (
                    <li key={hour}>{`Hora ${hour} => ${differences[parseInt(hour, 10)]} tons`}</li>
                ))}
            </ul>
        </div>
    );
};

