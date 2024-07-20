// import fs from 'node:fs';

import act from './productionact.json';
import prev from './productionprev.json';

const readFile = (fileName: any) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(fileName)
        } catch (error) {
            reject(error)
        }
    })
}

export const getProductionActData = async (): Promise<any> => {
    return await readFile(act);
};

export const getProductionPrevData = async (): Promise<any> => {
    return await readFile(prev);
};