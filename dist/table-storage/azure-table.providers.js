"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const azure_table_constant_1 = require("./azure-table.constant");
const azure_table_repository_1 = require("./azure-table.repository");
const azure_table_service_1 = require("./azure-table.service");
function createRepositoryProviders(entity) {
    return [getRepositoryProvider(entity)];
}
exports.createRepositoryProviders = createRepositoryProviders;
function getRepositoryProvider(entity) {
    const provide = getRepositoryToken(entity);
    const o = {
        provide,
        useFactory: (service, tableName) => {
            return new azure_table_repository_1.AzureTableStorageRepository(service, tableName);
        },
        inject: [azure_table_service_1.AzureTableStorageService, azure_table_constant_1.AZURE_TABLE_STORAGE_NAME],
    };
    return o;
}
exports.getRepositoryProvider = getRepositoryProvider;
function getRepositoryToken(entity) {
    return `${entity.name}AzureTableStorageRepository`;
}
exports.getRepositoryToken = getRepositoryToken;
