import React, {useEffect, useState} from 'react';
import {getProductionActData, getProductionPrevData} from '../../../api/data/readData';
import {H1} from "../../shared";

interface ProductionDataItem {
    shift: number;
    tons: number;
}

export const TonnageByShift = () => {
    const [actData, setActData] = useState<ProductionDataItem[]>([]);
    const [prevData, setPrevData] = useState<ProductionDataItem[]>([]);
    const [shift1, setShift1] = useState(0);
    const [shift2, setShift2] = useState(0);

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
        const calculateShiftTotals = () => {
            let totalShift1 = 0;
            let totalShift2 = 0;

            actData.forEach(item => {
                if (item.shift === 1) {
                    totalShift1 += item.tons;
                } else {
                    totalShift2 += item.tons;
                }
            });

            prevData.forEach(item => {
                if (item.shift === 1) {
                    totalShift1 += item.tons;
                } else {
                    totalShift2 += item.tons;
                }
            });

            setShift1(totalShift1);
            setShift2(totalShift2);
        };

        if (actData.length > 0 && prevData.length > 0) {
            calculateShiftTotals();
        }
    }, [actData, prevData]);

    return (
        <div>
            <H1 text={`(Bonus): Tonelaje por turno`}/>
            <p>Turno 1: {shift1} tons</p>
            <p>Turno 2: {shift2} tons</p>
        </div>
    );
};

