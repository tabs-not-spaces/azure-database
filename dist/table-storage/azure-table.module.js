"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var AzureTableStorageModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const azure_table_constant_1 = require("./azure-table.constant");
const azure_table_providers_1 = require("./azure-table.providers");
const azure_table_repository_1 = require("./azure-table.repository");
const azure_table_service_1 = require("./azure-table.service");
const PROVIDERS = [azure_table_service_1.AzureTableStorageService, azure_table_repository_1.AzureTableStorageRepository];
const EXPORTS = [...PROVIDERS];
let AzureTableStorageModule = AzureTableStorageModule_1 = class AzureTableStorageModule {
    static forRoot(options) {
        return {
            module: AzureTableStorageModule_1,
            providers: [...PROVIDERS, { provide: azure_table_constant_1.AZURE_TABLE_STORAGE_MODULE_OPTIONS, useValue: options }],
            exports: [...EXPORTS, azure_table_constant_1.AZURE_TABLE_STORAGE_MODULE_OPTIONS],
        };
    }
    static forFeature(entity, { table = entity.name, createTableIfNotExists = false, }) {
        const repositoryProviders = azure_table_providers_1.createRepositoryProviders(entity);
        return {
            module: AzureTableStorageModule_1,
            providers: [
                ...PROVIDERS,
                ...repositoryProviders,
                {
                    provide: azure_table_constant_1.AZURE_TABLE_STORAGE_NAME,
                    useFactory: (azureTableStorageService) => __awaiter(this, void 0, void 0, function* () {
                        if (createTableIfNotExists) {
                            return (yield azureTableStorageService.createTableIfNotExists(table)).TableName;
                        }
                        return table;
                    }),
                    inject: [azure_table_service_1.AzureTableStorageService],
                },
            ],
            exports: [...EXPORTS, ...repositoryProviders],
        };
    }
};
AzureTableStorageModule = AzureTableStorageModule_1 = __decorate([
    common_1.Module({})
], AzureTableStorageModule);
exports.AzureTableStorageModule = AzureTableStorageModule;
