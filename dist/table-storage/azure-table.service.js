"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const azure = require("azure-storage");
const logger = new common_1.Logger('AzureTableStorage');
const SHOW_ERROR_STACKTRACE = true;
let AzureTableStorageService = class AzureTableStorageService {
    get tableServiceInstance() {
        if (this.tableService) {
            return this.tableService;
        }
        logger.debug(`Create new TableService instance`);
        this.tableService = azure.createTableService();
        return this.tableService;
    }
    get queryInstance() {
        return new azure.TableQuery();
    }
    printError(error) {
        logger.error(error.message.split('\n').shift(), SHOW_ERROR_STACKTRACE && error.stack);
    }
    withFilter(newFilter) {
        throw new Error('Method not implemented.');
    }
    getServiceStats(options) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.getServiceStats(options, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }
    getServiceProperties(options, callback) {
        throw new Error('Method not implemented.');
    }
    setServiceProperties(serviceProperties, options, callback) {
        throw new Error('Method not implemented.');
    }
    listTablesSegmented(currentToken, options, callback) {
        throw new Error('Method not implemented.');
    }
    listTablesSegmentedWithPrefix(prefix, currentToken, options, callback) {
        throw new Error('Method not implemented.');
    }
    getTableAcl(table, options, callback) {
        throw new Error('Method not implemented.');
    }
    setTableAcl(table, signedIdentifiers, options, callback) {
        throw new Error('Method not implemented.');
    }
    generateSharedAccessSignature(table, sharedAccessPolicy) {
        throw new Error('Method not implemented.');
    }
    generateSharedAccessSignatureWithVersion(table, sharedAccessPolicy, sasVersion) {
        throw new Error('Method not implemented.');
    }
    doesTableExist(table, options, callback) {
        throw new Error('Method not implemented.');
    }
    createTable(table, options, callback) {
        throw new Error('Method not implemented.');
    }
    createTableIfNotExists(table) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.createTableIfNotExists(table, (error, result) => {
                if (error) {
                    logger.debug(`Table ${result.TableName} exists`);
                    reject(error);
                }
                if (result.statusCode === 204) {
                    logger.debug(`Table ${result.TableName} created`);
                }
                else if (result.statusCode === 200) {
                    logger.debug(`Table ${result.TableName} already available`);
                }
                resolve(result);
            });
        });
    }
    deleteTable(table, options, callback) {
        throw new Error('Method not implemented.');
    }
    deleteTableIfExists(table, options, callback) {
        throw new Error('Method not implemented.');
    }
    queryEntities(table, tableQuery, currentToken) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.queryEntities(table, tableQuery, currentToken, (error, result) => {
                if (error) {
                    reject(error);
                    this.printError(error);
                }
                resolve(result);
            });
        });
    }
    retrieveEntity(table, partitionKey, rowKey, options) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.retrieveEntity(table, partitionKey, rowKey, options, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }
    insertEntity(table, entityDescriptor) {
        return new Promise((resolve, reject) => {
            const returnCreatedEntityOptions = { echoContent: true };
            this.tableServiceInstance.insertEntity(table, entityDescriptor, returnCreatedEntityOptions, (error, result) => {
                if (error) {
                    this.printError(error);
                    reject(error);
                }
                resolve(result);
            });
        });
    }
    insertOrReplaceEntity(table, entityDescriptor, options, callback) {
        throw new Error('Method not implemented.');
    }
    replaceEntity(table, entityDescriptor, options) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.replaceEntity(table, entityDescriptor, options, (error, result) => {
                if (error) {
                    this.printError(error);
                    reject(error);
                }
                resolve(result);
            });
        });
    }
    mergeEntity(table, entityDescriptor, options, callback) {
        throw new Error('Method not implemented.');
    }
    insertOrMergeEntity(table, entityDescriptor, options, callback) {
        throw new Error('Method not implemented.');
    }
    deleteEntity(table, entityDescriptor, options) {
        return new Promise((resolve, reject) => {
            this.tableServiceInstance.deleteEntity(table, entityDescriptor, options, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }
    executeBatch(table, batch, options, callback) {
        throw new Error('Method not implemented.');
    }
    get defaultLocationMode() {
        return this.tableServiceInstance.defaultLocationMode;
    }
    get defaultMaximumExecutionTimeInMs() {
        return this.tableServiceInstance.defaultMaximumExecutionTimeInMs;
    }
    get defaultTimeoutIntervalInMs() {
        return this.tableServiceInstance.defaultTimeoutIntervalInMs;
    }
    get defaultClientRequestTimeoutInMs() {
        return this.tableServiceInstance.defaultClientRequestTimeoutInMs;
    }
    get useNagleAlgorithm() {
        return this.tableServiceInstance.useNagleAlgorithm;
    }
    get enableGlobalHttpAgent() {
        return this.tableServiceInstance.enableGlobalHttpAgent;
    }
    get proxy() {
        return this.tableServiceInstance.proxy;
    }
    get logger() {
        return this.tableServiceInstance.logger;
    }
    setProxy(proxy) {
        this.tableServiceInstance.setProxy(proxy);
    }
    addListener(event, listener) {
        this.tableServiceInstance.addListener(event, listener);
        return this;
    }
    on(event, listener) {
        this.tableServiceInstance.on(event, listener);
        return this;
    }
    once(event, listener) {
        this.tableServiceInstance.once(event, listener);
        return this;
    }
    prependListener(event, listener) {
        this.tableServiceInstance.prependListener(event, listener);
        return this;
    }
    prependOnceListener(event, listener) {
        this.tableServiceInstance.prependOnceListener(event, listener);
        return this;
    }
    removeListener(event, listener) {
        this.tableServiceInstance.removeListener(event, listener);
        return this;
    }
    off(event, listener) {
        this.tableServiceInstance.off(event, listener);
        return this;
    }
    removeAllListeners(event) {
        this.tableServiceInstance.removeAllListeners(event);
        return this;
    }
    setMaxListeners(n) {
        this.tableServiceInstance.setMaxListeners(n);
        return this;
    }
    getMaxListeners() {
        return this.tableServiceInstance.getMaxListeners();
    }
    listeners(event) {
        return this.tableServiceInstance.listeners(event);
    }
    rawListeners(event) {
        return this.tableServiceInstance.rawListeners(event);
    }
    emit(event, ...args) {
        return this.tableServiceInstance.emit(event, args);
    }
    eventNames() {
        return this.tableServiceInstance.eventNames();
    }
    listenerCount(type) {
        return this.tableServiceInstance.listenerCount(type);
    }
    getUrl(table, sasToken, primary) {
        return this.tableServiceInstance.getUrl(table, sasToken, primary);
    }
};
AzureTableStorageService = __decorate([
    common_1.Injectable()
], AzureTableStorageService);
exports.AzureTableStorageService = AzureTableStorageService;
