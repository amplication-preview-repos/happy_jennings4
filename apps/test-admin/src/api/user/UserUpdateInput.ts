import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  age?: number;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
