// {"abbreviation":"CEST","client_ip":"2001:4c3c:6403:6d00:9962:a474:f0b8:3267","datetime":"2024-05-27T22:18:55.840791+02:00","day_of_week":1,"day_of_year":148,"dst":true,"dst_from":"2024-03-31T01:00:00+00:00","dst_offset":3600,"dst_until":"2024-10-27T01:00:00+00:00","raw_offset":3600,"timezone":"Europe/Amsterdam","unixtime":1716841135,"utc_datetime":"2024-05-27T20:18:55.840791+00:00","utc_offset":"+02:00","week_number":22}

export type DateModel = {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: string;
  utc_offset: string;
  week_number: number;
};
