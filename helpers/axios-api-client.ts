import { axiosClient } from './axios-instance';

export async function getPriortiy() {
  const { data } = await axiosClient.get('getPriority');
  return data;
}
