export declare const AZURE_TABLE_ENTITY = 'azure-table-storage:entity';
export declare function EntityPartitionKey(value: string): (target: object, propertyKey?: string) => void;
export declare function EntityRowKey(value: string): (target: object, propertyKey?: string) => void;
export declare function EntityInt32(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityInt64(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityBinary(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityBoolean(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityString(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityGuid(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityDouble(value?: string): (target: object, propertyKey?: string) => void;
export declare function EntityDateTime(value?: string): (target: object, propertyKey?: string) => void;
export declare const InjectRepository: (
  entity: Function,
) => (target: Object, key: string | symbol, index?: number) => void;
