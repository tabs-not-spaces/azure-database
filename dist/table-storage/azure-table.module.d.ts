import { DynamicModule } from '@nestjs/common';
import { AzureTableStorageOptions } from './azure-table.interface';
export declare class AzureTableStorageModule {
  static forRoot(options?: AzureTableStorageOptions): DynamicModule;
  static forFeature(
    entity: Function,
    {
      table,
      createTableIfNotExists,
    }: {
      table?: string;
      createTableIfNotExists?: boolean;
    },
  ): DynamicModule;
}
