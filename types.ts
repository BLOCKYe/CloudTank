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