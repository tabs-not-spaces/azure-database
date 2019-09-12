import { Provider } from '@nestjs/common';
export declare function createRepositoryProviders(entity: Function): Provider[];
export declare function getRepositoryProvider(entity: Function): Provider;
export declare function getRepositoryToken(entity: Function): string;
