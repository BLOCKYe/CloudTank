export interface Props {
  data: Data;
}

export interface Data {
  _id: string;
  published_at: Date;
  header: Header;
  requiredTanks: RequiredTank[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  Missions: Mission[];
  id: string;
}

export interface Mission {
  __component: string;
  _id: string;
  missions: MissionElement[];
  __v: number;
  id: string;
}

export interface MissionElement {
  _id: string;
  name: string;
  price: number;
  __v: number;
  id: string;
}

export interface Header {
  color: string;
  _id: string;
  title: string;
  description: string;
  label: string;
  requirements: string;
  __v: number;
  image: string;
  id: string;
}

export interface RequiredTank {
  __component: string;
  _id: string;
  lights: MissionElement[];
  mediums: MissionElement[];
  heavies: MissionElement[];
  arty: MissionElement[];
  tankName: MissionElement[];
  __v: number;
  id: string;
}

export interface Promotion {
  color?: string;
  _id?: string;
  title?: string;
  description?: string;
  label?: string;
  published_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}

export interface Feedback {
  _id?: string;
  name: string;
  content: string;
  rating: number;
  date?: Date;
  published_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}

export interface FAQs {
  _id?: string;
  title?: string;
  content?: string;
  published_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
  index: number;
  items?: number;
}

export interface Wn8 {
  _id: string;
  published_at: Date;
  header: Header;
  prices: Prices;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  id: string;
}

export interface Prices {
  _id?: string;
  Standard: number;
  High: number;
  Extreme: number;
  __v?: number;
  id?: string;
}

export interface TankList {
  status?: string;
  meta?: Meta;
  data?: { [key: string]: Datum };
}

export interface Datum {
  tier?: number;
  name?: string;
}

export interface Meta {
  count?: number;
  page_total?: number;
  total?: number;
  limit?: number;
  page?: null;
}

export interface MoeType {
  _id?: string;
  published_at?: Date;
  header: Header;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number;
  id?: string;
}
