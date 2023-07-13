import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  age: number;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
