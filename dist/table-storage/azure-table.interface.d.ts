import azure = require('azure-storage');
export interface AzureTableStorageOptions {
  accountName?: string;
  sasKey?: string;
  connectionString?: string;
}
export interface AzureTableStorageResponse extends azure.ServiceResponse {}
export interface AzureTableStorageQuery extends azure.TableQuery {}
export interface AzureTableContinuationToken extends azure.TableService.TableContinuationToken {}
export interface AzureTableStorageResultList<T> extends azure.TableService.QueryEntitiesResult<T> {}
export interface Repository<T> {
  findAll(
    tableQuery?: AzureTableStorageQuery,
    currentToken?: AzureTableContinuationToken,
  ): Promise<AzureTableStorageResultList<T>>;
  find(rowKey: string, entity: Partial<T>): Promise<T>;
  create(entity: T): Promise<T>;
  update(rowKey: string, entity: Partial<T>): Promise<T>;
  delete(rowKey: string, entity: T): Promise<AzureTableStorageResponse>;
}
