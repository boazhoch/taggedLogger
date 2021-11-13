import { ISendMessage } from '@atz/sender';
import { IContextLogger } from '../ContextLogger/types';

export type ILogger = Pick<
  Console,
  'error' | 'info' | 'debug' | 'log' | 'warn'
> &
  IContextLogger &
  Pick<ISendMessage, 'flush'>;
