import { defineSuperStatus, SuperStatusBox } from '@mimi-utils/super-status-box';

const definedErrorCodeStatus = defineSuperStatus([
  { alias: '登录-用户名或密码错误', key: 20001, unifyLabel: '用户名或密码有误，请重试' },
  { alias: '注册-用户名已存在', key: 20100, unifyLabel: '用户名已存在，请重试' }
] as const);

export const errorCodeStatus = new SuperStatusBox(definedErrorCodeStatus);

export type ErrorCode = typeof definedErrorCodeStatus[number]['key'];
