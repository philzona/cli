const _ = require('lodash');
const { sendHttpRequest } = require('./helper');
const RuntimeEnvironments = require('../entities/RuntimeEnvironments');


const _extractFieldsForRuntimeEnvironmentsEntity = (runtimeEnvironments) => {
    return {
        id: runtimeEnvironments.id,
        name: runtimeEnvironments.name,
        version: runtimeEnvironments.version,
        userName : runtimeEnvironments.userName,
        runtimeEnvironments: runtimeEnvironments.runtimeEnvironments,
        history : runtimeEnvironments.history,
    };
};


const getRuntimeEvironmentsByName = async (option) => {
    const qs = {
        name: option.name,
        version: option.version,
        history: option.history,
    };
    const options = {
        url: '/api/admin/runtime-environment-manager/runtimeEnvironmentsName',
        method: 'GET',
        qs,
    };
    const runtimeEnvironments = await sendHttpRequest(options);
    return runtimeEnvironments;
};

const getRuntimeEvironment = async (runtimeEnvironmentName) => {
    const options = {
        url: `/api/admin/runtime-environment-manager/runtimeEnvironment/${runtimeEnvironmentName}`,
        method: 'GET',
    };
    const runtimeEnvironment = await sendHttpRequest(options);
    return runtimeEnvironment;
};

const replaceByName = async (runtimeEnvironmentName, data) => {
    const body = data;

    const options = {
        url: `/api/admin/runtime-environment-manager/${runtimeEnvironmentName}`,
        method: 'POST',
        body,
    };

    return sendHttpRequest(options);
};


module.exports = {
    getRuntimeEvironmentsByName,
    replaceByName,
    getRuntimeEvironment,
};