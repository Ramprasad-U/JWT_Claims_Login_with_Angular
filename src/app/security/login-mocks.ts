import { AppUserAuth } from "./app-user-auth";
import { AppUserClaim } from "./app-user-claim";

export const LoginMocks: AppUserAuth[] = [
    {
    Userid:"u1",
    userName: "user1",
    bearerToken: "abi393kdkd9393ikd",
    isAuthenticated: true,
    //canAccessResponseMsg: true,
    claims:[{
        claimId :"claim1",
        userId: "u1",
        claimType:"canAccessResponseMsg",
        claimValue: "true"        
    }]
    },
    {
        Userid:"u2",
        userName: "user2",
        bearerToken: "abi393kdkd9393ikd",
        isAuthenticated: true,
        //canAccessResponseMsg: false,
        claims:[{
            claimId :"claim2",
            userId: "u2",
            claimType:"canAccessResponseMsg",
            claimValue: "false"        
        }]
        
    }
];