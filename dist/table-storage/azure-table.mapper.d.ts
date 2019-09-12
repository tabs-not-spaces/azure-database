import azure = require('azure-storage');
export interface PartitionRowKeyValues {
  RowKey: {
    _: string;
    $: string;
  };
  PartitionKey: {
    _: string;
    $: string;
  };
}
export declare class AzureEntityMapper {
  static serializeAll<E>(entriesDescriptor: azure.TableService.EntityMetadata[]): E[];
  static serialize<E>(entryDescriptor: azure.TableService.EntityMetadata): E;
  static createEntity<D>(partialDto: Partial<AzureEntityMapper>, rowKeyValue?: string): D & PartitionRowKeyValues;
}
