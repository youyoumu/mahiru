export type JwtPayload = {
  user_id: string;
  admin: boolean;
  exp: number;
};
