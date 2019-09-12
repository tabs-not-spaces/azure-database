import {
  AzureTableContinuationToken,
  AzureTableStorageQuery,
  AzureTableStorageResponse,
  AzureTableStorageResultList,
  Repository,
} from './azure-table.interface';
import { AzureTableStorageService } from './azure-table.service';
export declare class AzureTableStorageRepository<T> implements Repository<T> {
  private readonly manager;
  private readonly tableName;
  constructor(manager: AzureTableStorageService, tableName: any);
  findAll(
    tableQuery?: AzureTableStorageQuery,
    currentToken?: AzureTableContinuationToken,
  ): Promise<AzureTableStorageResultList<T>>;
  find(rowKey: string, entity: Partial<T>): Promise<T>;
  create(entity: T): Promise<T>;
  update(rowKey: string, entity: Partial<T>): Promise<T>;
  delete(rowKey: string, entity: T): Promise<AzureTableStorageResponse>;
}
