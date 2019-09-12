"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ms_rest_js_1 = require("@azure/ms-rest-js");
const common_1 = require("@nestjs/common");
const azure_table_decorators_1 = require("./azure-table.decorators");
const logger = new common_1.Logger(`AzureEntityMapper`);
class AzureEntityMapper {
    static serializeAll(entriesDescriptor) {
        return entriesDescriptor.map(entry => {
            return AzureEntityMapper.serialize(entry);
        });
    }
    static serialize(entryDescriptor) {
        const result = {};
        for (const key in entryDescriptor) {
            if (key !== '.metadata') {
                result[key] = entryDescriptor[key]._;
            }
        }
        return result;
    }
    static createEntity(partialDto, rowKeyValue = ms_rest_js_1.generateUuid()) {
        const entityDescriptor = Reflect.getMetadata(azure_table_decorators_1.AZURE_TABLE_ENTITY, partialDto.constructor);
        for (const key in partialDto) {
            if (entityDescriptor[key]) {
                entityDescriptor[key]._ = partialDto[key];
            }
        }
        entityDescriptor.RowKey._ = rowKeyValue;
        logger.debug(`Mapped Entity from DTO:`);
        logger.debug(`- PartitionKey=${entityDescriptor.PartitionKey._}`);
        logger.debug(`- RowKey=${rowKeyValue}`);
        return entityDescriptor;
    }
}
exports.AzureEntityMapper = AzureEntityMapper;
