"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const azure_table_providers_1 = require("./azure-table.providers");
exports.AZURE_TABLE_ENTITY = 'azure-table-storage:entity';
function validateType(edmType, target, propertyKey) {
    if (propertyKey) {
        const propertyType = Reflect.getMetadata('design:type', target, propertyKey);
        let edmTypeName = '';
        if (edmType === 'Edm.Int32' || edmType === 'Edm.Int64' || edmType === 'Edm.Double') {
            edmTypeName = Number.name;
        }
        else if (edmType === 'Edm.Boolean') {
            edmTypeName = Boolean.name;
        }
        else if (edmType === 'Edm.DateTime') {
            edmTypeName = Date.name;
        }
        else if (edmType === 'Edm.String' || edmType === 'Edm.Guid') {
            edmTypeName = String.name;
        }
        else if (edmType === 'Edm.Binary') {
            edmTypeName = Blob.name;
        }
        else {
            throw new Error(`Type ${edmType} is not supported.`);
        }
        if (edmTypeName.toLowerCase().includes(propertyType.name.toLocaleLowerCase()) === false) {
            throw new Error(`EDM type of "${target.constructor.name}.${propertyKey}" is ${edmType}. The equivalent of ${edmType} is ${edmTypeName}. ` +
                `"${propertyKey}" should be of type ${edmTypeName}. Got ${propertyType.name}`);
        }
    }
}
function annotate(value, type) {
    return (target, propertyKey) => {
        validateType(type, target, propertyKey);
        const isPropertyAnnotation = typeof propertyKey === 'string';
        target = isPropertyAnnotation ? target.constructor : target;
        const storedEntityDescriptor = Reflect.getMetadata(exports.AZURE_TABLE_ENTITY, target) || {};
        let entityDescriptor = Object.assign({}, storedEntityDescriptor);
        if (isPropertyAnnotation) {
            entityDescriptor = Object.assign({ [propertyKey]: { _: value, $: type } }, entityDescriptor);
        }
        else {
            const isPartitionKey = type === 'PartitionKey';
            const isRowKey = type === 'RowKey';
            if (isPartitionKey || isRowKey) {
                entityDescriptor = Object.assign({}, entityDescriptor, { [type]: { _: value || propertyKey, $: 'Edm.String' } });
            }
        }
        Reflect.defineMetadata(exports.AZURE_TABLE_ENTITY, entityDescriptor, target);
    };
}
function EntityPartitionKey(value) {
    return annotate(value, 'PartitionKey');
}
exports.EntityPartitionKey = EntityPartitionKey;
function EntityRowKey(value) {
    return annotate(value, 'RowKey');
}
exports.EntityRowKey = EntityRowKey;
function EntityInt32(value) {
    return annotate(value, 'Edm.Int32');
}
exports.EntityInt32 = EntityInt32;
function EntityInt64(value) {
    return annotate(value, 'Edm.Int64');
}
exports.EntityInt64 = EntityInt64;
function EntityBinary(value) {
    return annotate(value, 'Edm.Binary');
}
exports.EntityBinary = EntityBinary;
function EntityBoolean(value) {
    return annotate(value, 'Edm.Boolean');
}
exports.EntityBoolean = EntityBoolean;
function EntityString(value) {
    return annotate(value, 'Edm.String');
}
exports.EntityString = EntityString;
function EntityGuid(value) {
    return annotate(value, 'Edm.Guid');
}
exports.EntityGuid = EntityGuid;
function EntityDouble(value) {
    return annotate(value, 'Edm.Double');
}
exports.EntityDouble = EntityDouble;
function EntityDateTime(value) {
    return annotate(value, 'Edm.DateTime');
}
exports.EntityDateTime = EntityDateTime;
exports.InjectRepository = (entity) => common_1.Inject(azure_table_providers_1.getRepositoryToken(entity));
