import azure = require('azure-storage');
export declare class AzureTableStorageService implements azure.TableService {
  defaultPayloadFormat: string;
  private tableService;
  readonly tableServiceInstance: azure.TableService;
  readonly queryInstance: azure.TableQuery;
  private printError;
  withFilter(newFilter: azure.common.filters.IFilter): azure.TableService;
  getServiceStats(options?: any): Promise<azure.common.models.ServiceStats>;
  getServiceProperties(
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.common.models.ServicePropertiesResult.ServiceProperties>,
  ): void;
  getServiceProperties(
    callback: azure.ErrorOrResult<azure.common.models.ServicePropertiesResult.ServiceProperties>,
  ): void;
  setServiceProperties(
    serviceProperties: azure.common.models.ServicePropertiesResult.ServiceProperties,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResponse,
  ): void;
  setServiceProperties(
    serviceProperties: azure.common.models.ServicePropertiesResult.ServiceProperties,
    callback: azure.ErrorOrResponse,
  ): void;
  listTablesSegmented(
    currentToken: azure.TableService.ListTablesContinuationToken,
    options: azure.TableService.ListTablesRequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.ListTablesResponse>,
  ): void;
  listTablesSegmented(
    currentToken: azure.TableService.ListTablesContinuationToken,
    callback: azure.ErrorOrResult<azure.TableService.ListTablesResponse>,
  ): void;
  listTablesSegmentedWithPrefix(
    prefix: string,
    currentToken: azure.TableService.ListTablesContinuationToken,
    options: azure.TableService.ListTablesRequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.ListTablesResponse>,
  ): void;
  listTablesSegmentedWithPrefix(
    prefix: string,
    currentToken: azure.TableService.ListTablesContinuationToken,
    callback: azure.ErrorOrResult<azure.TableService.ListTablesResponse>,
  ): void;
  getTableAcl(
    table: string,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.GetTableAclResult>,
  ): void;
  getTableAcl(table: string, callback: azure.ErrorOrResult<azure.TableService.GetTableAclResult>): void;
  setTableAcl(
    table: string,
    signedIdentifiers: {
      [key: string]: azure.common.AccessPolicy;
    },
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<{
      TableName: string;
      signedIdentifiers: {
        [key: string]: azure.common.AccessPolicy;
      };
    }>,
  ): void;
  setTableAcl(
    table: string,
    signedIdentifiers: {
      [key: string]: azure.common.AccessPolicy;
    },
    callback: azure.ErrorOrResult<{
      TableName: string;
      signedIdentifiers: {
        [key: string]: azure.common.AccessPolicy;
      };
    }>,
  ): void;
  generateSharedAccessSignature(table: string, sharedAccessPolicy: azure.TableService.TableSharedAccessPolicy): string;
  generateSharedAccessSignatureWithVersion(
    table: string,
    sharedAccessPolicy: azure.TableService.TableSharedAccessPolicy,
    sasVersion: string,
  ): string;
  doesTableExist(
    table: string,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.TableResult>,
  ): void;
  doesTableExist(table: string, callback: azure.ErrorOrResult<azure.TableService.TableResult>): void;
  createTable(
    table: string,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.TableResult>,
  ): void;
  createTable(table: string, callback: azure.ErrorOrResult<azure.TableService.TableResult>): void;
  createTableIfNotExists(table: string): Promise<azure.TableService.TableResult>;
  deleteTable(table: string, options: azure.common.RequestOptions, callback: azure.ErrorOrResponse): void;
  deleteTable(table: string, callback: azure.ErrorOrResponse): void;
  deleteTableIfExists(
    table: string,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<boolean>,
  ): void;
  deleteTableIfExists(table: string, callback: azure.ErrorOrResult<boolean>): void;
  queryEntities<Entity>(
    table: string,
    tableQuery: azure.TableQuery,
    currentToken: azure.TableService.TableContinuationToken,
  ): Promise<azure.TableService.QueryEntitiesResult<Entity>>;
  retrieveEntity<T>(table: string, partitionKey: string, rowKey: string, options?: any): Promise<T>;
  insertEntity<T>(table: string, entityDescriptor: T): Promise<azure.TableService.EntityMetadata>;
  insertOrReplaceEntity<T>(
    table: string,
    entityDescriptor: T,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  insertOrReplaceEntity<T>(
    table: string,
    entityDescriptor: T,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  replaceEntity<T>(table: string, entityDescriptor: T, options?: any): Promise<azure.TableService.EntityMetadata>;
  mergeEntity<T>(
    table: string,
    entityDescriptor: T,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  mergeEntity<T>(
    table: string,
    entityDescriptor: T,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  insertOrMergeEntity<T>(
    table: string,
    entityDescriptor: T,
    options: azure.common.RequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  insertOrMergeEntity<T>(
    table: string,
    entityDescriptor: T,
    callback: azure.ErrorOrResult<azure.TableService.EntityMetadata>,
  ): void;
  deleteEntity<T>(table: string, entityDescriptor: Partial<T>, options?: any): Promise<azure.ServiceResponse>;
  executeBatch(
    table: string,
    batch: azure.TableBatch,
    options: azure.TableService.TableEntityRequestOptions,
    callback: azure.ErrorOrResult<azure.TableService.BatchResult[]>,
  ): void;
  executeBatch(
    table: string,
    batch: azure.TableBatch,
    callback: azure.ErrorOrResult<azure.TableService.BatchResult[]>,
  ): void;
  readonly defaultLocationMode: azure.StorageUtilities.LocationMode;
  readonly defaultMaximumExecutionTimeInMs: number;
  readonly defaultTimeoutIntervalInMs: number;
  readonly defaultClientRequestTimeoutInMs: number;
  readonly useNagleAlgorithm: boolean;
  readonly enableGlobalHttpAgent: boolean;
  readonly proxy: azure.common.services.storageserviceclient.Proxy;
  readonly logger: azure.Logger;
  setProxy(proxy: azure.common.services.storageserviceclient.Proxy): void;
  addListener(event: string | symbol, listener: (...args: any[]) => void): this;
  on(event: string | symbol, listener: (...args: any[]) => void): this;
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
  prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;
  removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
  off(event: string | symbol, listener: (...args: any[]) => void): this;
  removeAllListeners(event?: string | symbol): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(event: string | symbol): Function[];
  rawListeners(event: string | symbol): Function[];
  emit(event: string | symbol, ...args: any[]): boolean;
  eventNames(): Array<string | symbol>;
  listenerCount(type: string | symbol): number;
  getUrl(table: string, sasToken: string, primary: boolean): string;
}
