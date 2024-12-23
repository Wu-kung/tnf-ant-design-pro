import type {
  ActivitiesType,
  AnalysisData,
  BasicGood,
  BasicListItemDataType,
  BasicProgress,
  CardListItemDataType,
  CurrentUser,
  GeographicItemType,
  ListItemDataType,
  MonitorTagType,
  NoticeType,
  Params,
} from '@/types';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  const response = await fetch('/api/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
  return await response.json();
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return fetch('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any },
) {
  const response = await fetch('/api/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...(options || {}),
  });
  return await response.json();
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  const response = await fetch('/api/rule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
    ...(options || {}),
  });
  return await response.json();
}

/** 更新规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return fetch('/api/rule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'update',
      ...(options || {}),
    }),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return fetch('/api/rule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'post',
      ...(options || {}),
    }),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return fetch('/api/rule', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      method: 'delete',
      ...(options || {}),
    }),
  });
}

export async function queryBasicProfile(): Promise<{
  data: {
    basicProgress: BasicProgress[];
    basicGoods: BasicGood[];
  };
}> {
  const response = await fetch('/api/profile/basic');
  return await response.json();
}

export async function queryAdvancedProfile() {
  const response = await fetch('/api/profile/advanced');
  return await response.json();
}

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  const response = await fetch(
    `/api/fake_list?${new URLSearchParams({ count: params.count.toString() })}`,
  );
  return await response.json();
}

export async function queryBasicList(
  params: Params,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch(
    `/api/get_list?${new URLSearchParams({ count: params.count.toString() })}`,
  );
  return await response.json();
}

type ParamsType = {
  count?: number;
} & Partial<BasicListItemDataType>;

export async function removeFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch('/api/post_fake_list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...params,
      method: 'delete',
    }),
  });
  return await response.json();
}

export async function addFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch('/api/post_fake_list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...params,
      method: 'post',
    }),
  });
  return await response.json();
}

export async function updateFakeList(
  params: ParamsType,
): Promise<{ data: { list: BasicListItemDataType[] } }> {
  const response = await fetch('/api/post_fake_list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...params,
      method: 'update',
    }),
  });
  return await response.json();
}

export async function queryCardList(
  params: Params,
): Promise<{ data: { list: CardListItemDataType[] } }> {
  const response = await fetch(
    `/api/card_fake_list?${new URLSearchParams({ count: params.count.toString() })}`,
  );
  return await response.json();
}

export async function queryAccountCenterCurrent(): Promise<{
  data: CurrentUser;
}> {
  const response = await fetch('/api/currentUserDetail');
  return await response.json();
}

export async function queryAccountCenterFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  const newparams = new URLSearchParams({
    count: params.count.toString(),
  });
  const response = await fetch(`/api/fake_list_Detail?${newparams}`);
  return await response.json();
}

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  const response = await fetch('/api/accountSettingCurrentUser');
  return await response.json();
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  const response = await fetch('/api/geographic/province');
  return await response.json();
}

export async function queryCity(
  province: string,
): Promise<{ data: GeographicItemType[] }> {
  const response = await fetch(`/api/geographic/city/${province}`);
  return await response.json();
}

export async function query() {
  const response = await fetch('/api/users');
  return await response.json();
}

export async function fakeDashboardAnalysisChartData(): Promise<{
  data: AnalysisData;
}> {
  const response = await fetch('/api/fake_analysis_chart_data');
  return await response.json();
}

export async function queryTags(): Promise<{
  data: { list: MonitorTagType[] };
}> {
  const response = await fetch('/api/tags');
  return await response.json();
}

export async function queryProjectNotice(): Promise<{ data: NoticeType[] }> {
  const response = await fetch('/api/project/notice');
  return await response.json();
}

export async function queryActivities(): Promise<{ data: ActivitiesType[] }> {
  const response = await fetch('/api/activities');
  return await response.json();
}

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  const response = await fetch('/api/fake_workplace_chart_data');
  return await response.json();
}

export async function fakeFormAdvancedSubmitForm(params: any) {
  const response = await fetch('/api/advancedForm', {
    method: 'POST',
    body: JSON.stringify(params),
  });
  return await response.json();
}

export async function fakeSubmitForm(params: any) {
  const response = await fetch('/api/basicForm', {
    method: 'POST',
    body: JSON.stringify(params),
  });
  return await response.json();
}
