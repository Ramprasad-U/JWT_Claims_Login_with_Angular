import { AppUserClaim } from "./app-user-claim";

export class AppUserAuth {
    Userid: string = "";
    userName: string = "";
    bearerToken: string = "";
    isAuthenticated: boolean = false;
    claims: AppUserClaim[] = [];

    //canAccessResponseMsg: boolean = false;
   
}
