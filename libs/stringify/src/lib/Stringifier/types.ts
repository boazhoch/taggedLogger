export interface IStringify {
  stringify(value?: StringValue): string;
}

export type StringValue = string | Record<string | number, any>;
