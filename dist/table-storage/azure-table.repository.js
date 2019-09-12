"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const azure_table_constant_1 = require("./azure-table.constant");
const azure_table_mapper_1 = require("./azure-table.mapper");
const azure_table_service_1 = require("./azure-table.service");
const logger = new common_1.Logger(`AzureStorageRepository`);
let AzureTableStorageRepository = class AzureTableStorageRepository {
    constructor(manager, tableName) {
        this.manager = manager;
        this.tableName = tableName;
    }
    findAll(tableQuery, currentToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.manager.queryEntities(this.tableName, tableQuery, currentToken);
            const numberOfEntities = (result.entries || []).length;
            if (numberOfEntities <= 0) {
                logger.debug(`No Entities found in table ${this.tableName}`);
            }
            else {
                if (numberOfEntities === 1) {
                    logger.debug(`Found 1 Entity in table ${this.tableName}`);
                }
                else {
                    logger.debug(`Found ${numberOfEntities} Entities in table ${this.tableName}`);
                }
            }
            return Object.assign({}, result, { entries: azure_table_mapper_1.AzureEntityMapper.serializeAll(result.entries) });
        });
    }
    find(rowKey, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug(`Looking for Entity RowKey=${rowKey} in ${this.tableName}`);
            const partitionKey = azure_table_mapper_1.AzureEntityMapper.createEntity(entity, rowKey).PartitionKey._;
            const result = yield this.manager.retrieveEntity(this.tableName, partitionKey, rowKey);
            console.table(result, ['(index)', '$', '_']);
            return azure_table_mapper_1.AzureEntityMapper.serialize(result);
        });
    }
    create(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug(`Inserting Entity in ${this.tableName}:`);
            entity = azure_table_mapper_1.AzureEntityMapper.createEntity(entity);
            console.table(entity);
            const result = yield this.manager.insertEntity(this.tableName, entity);
            logger.debug(`Entity stored successfuly`);
            console.table(result, ['(index)', '$', '_']);
            return azure_table_mapper_1.AzureEntityMapper.serialize(result);
        });
    }
    update(rowKey, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            logger.debug(`Inserting Entity in ${this.tableName}:`);
            entity = azure_table_mapper_1.AzureEntityMapper.createEntity(entity, rowKey);
            const result = yield this.manager.replaceEntity(this.tableName, entity);
            logger.debug(`Entity updated successfuly`);
            console.table(entity);
            return azure_table_mapper_1.AzureEntityMapper.serialize(result);
        });
    }
    delete(rowKey, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            entity = azure_table_mapper_1.AzureEntityMapper.createEntity(entity, rowKey);
            const result = yield this.manager.deleteEntity(this.tableName, entity);
            logger.debug(`Deleted Entity RowKey=${rowKey} in ${this.tableName} (${result.isSuccessful})`);
            console.table(result, ['(index)', '$', '_']);
            return result;
        });
    }
};
AzureTableStorageRepository = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(azure_table_constant_1.AZURE_TABLE_STORAGE_NAME)),
    __metadata("design:paramtypes", [azure_table_service_1.AzureTableStorageService, Object])
], AzureTableStorageRepository);
exports.AzureTableStorageRepository = AzureTableStorageRepository;
