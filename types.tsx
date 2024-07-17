// types.ts
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
};

export type Alert = {
  type: string;
  description: string;
  date: string;
  image: any; // Adjust this type according to your image handling
};
