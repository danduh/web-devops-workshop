import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exponentialStrength' })
export class ParseIntPipe implements PipeTransform {
    async transform(value: any, metadata) {
        const isNumeric = 'string' === typeof value && !isNaN(parseFloat(value));

        if (!isNumeric) {
            throw new Error('Validation failed (numeric string is expected)');
        }
        return parseInt(value, 10);
    }
}


const assignMetadata = (args, paramtype, index, data, ...pipes) => (Object.assign({}, args, {
    [`${paramtype}:${index}`]: {
        index,
        data,
        pipes
    }
}));

enum paramTypes {
    QUERY = 4
}

enum argMEtaData {
    PARAM = '__someype__'
}

export const createParamDecor = (paramtype) => (data, ...pipes) => (target, key, index) => {
    const args = Reflect.getMetadata(argMEtaData.PARAM, target.constructor, key) || {};
    const paramData = !!data ? data : undefined;
    const paramPipes = !!data ? pipes : [data, ...pipes];
    const assignedData = assignMetadata(args, paramtype, index, paramData, paramPipes);
    console.log(assignedData);
    Reflect.defineMetadata(argMEtaData.PARAM,
        assignedData, target.constructor, key);
    console.log(target);
};

export function pol(property, ...pipes) {
    return createParamDecor(paramTypes.QUERY)(property, ...pipes);
}


export const logParam = () => {
    return (target, key, index) => {
        setTimeout(() => {
            const origin = target[key];
            target[key] = function(...args) {
                console.log(`Method ${key} was called with value ${args[index]} on index ${index}`);
                return origin.apply(this, args);
            };
        });
    };
};

function mapDecorator(option?) {
    return () => {

    };
}

