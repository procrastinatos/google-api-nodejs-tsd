// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        identitytoolkit(version: string): any;
        identitytoolkit(version: 'v3'): identitytoolkit.v3.Identitytoolkit;
    }

    namespace identitytoolkit {
        namespace v3 {
            export interface Identitytoolkit {
                new(options: any): Identitytoolkit;

                'relyingparty': {
                    'createAuthUri': (parameters: any, callback: (error: any, body: CreateAuthUriResponse, response: any) => void) => Request;
                    'deleteAccount': (parameters: any, callback: (error: any, body: DeleteAccountResponse, response: any) => void) => Request;
                    'downloadAccount': (parameters: any, callback: (error: any, body: DownloadAccountResponse, response: any) => void) => Request;
                    'getAccountInfo': (parameters: any, callback: (error: any, body: GetAccountInfoResponse, response: any) => void) => Request;
                    'getOobConfirmationCode': (parameters: any, callback: (error: any, body: GetOobConfirmationCodeResponse, response: any) => void) => Request;
                    'getProjectConfig': (parameters: {'delegatedProjectNumber'?: string, 'projectNumber'?: string}, callback: (error: any, body: IdentitytoolkitRelyingpartyGetProjectConfigResponse, response: any) => void) => Request;
                    'getPublicKeys': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartyGetPublicKeysResponse, response: any) => void) => Request;
                    'getRecaptchaParam': (parameters: any, callback: (error: any, body: GetRecaptchaParamResponse, response: any) => void) => Request;
                    'resetPassword': (parameters: any, callback: (error: any, body: ResetPasswordResponse, response: any) => void) => Request;
                    'setAccountInfo': (parameters: any, callback: (error: any, body: SetAccountInfoResponse, response: any) => void) => Request;
                    'setProjectConfig': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySetProjectConfigResponse, response: any) => void) => Request;
                    'signOutUser': (parameters: any, callback: (error: any, body: IdentitytoolkitRelyingpartySignOutUserResponse, response: any) => void) => Request;
                    'signupNewUser': (parameters: any, callback: (error: any, body: SignupNewUserResponse, response: any) => void) => Request;
                    'uploadAccount': (parameters: any, callback: (error: any, body: UploadAccountResponse, response: any) => void) => Request;
                    'verifyAssertion': (parameters: any, callback: (error: any, body: VerifyAssertionResponse, response: any) => void) => Request;
                    'verifyCustomToken': (parameters: any, callback: (error: any, body: VerifyCustomTokenResponse, response: any) => void) => Request;
                    'verifyPassword': (parameters: any, callback: (error: any, body: VerifyPasswordResponse, response: any) => void) => Request;
                };

            }

            export interface CreateAuthUriResponse {
                'allProviders': string[];
                'authUri': string;
                'captchaRequired': boolean;
                'forExistingProvider': boolean;
                'kind': string;
                'providerId': string;
                'registered': boolean;
                'sessionId': string;
            }

            export interface DeleteAccountResponse {
                'kind': string;
            }

            export interface DownloadAccountResponse {
                'kind': string;
                'nextPageToken': string;
                'users': UserInfo[];
            }

            export interface EmailTemplate {
                'body': string;
                'format': string;
                'from': string;
                'fromDisplayName': string;
                'replyTo': string;
                'subject': string;
            }

            export interface GetAccountInfoResponse {
                'kind': string;
                'users': UserInfo[];
            }

            export interface GetOobConfirmationCodeResponse {
                'email': string;
                'kind': string;
                'oobCode': string;
            }

            export interface GetRecaptchaParamResponse {
                'kind': string;
                'recaptchaSiteKey': string;
                'recaptchaStoken': string;
            }

            export interface IdentitytoolkitRelyingpartyCreateAuthUriRequest {
                'appId': string;
                'clientId': string;
                'context': string;
                'continueUri': string;
                'identifier': string;
                'oauthConsumerKey': string;
                'oauthScope': string;
                'openidRealm': string;
                'otaApp': string;
                'providerId': string;
            }

            export interface IdentitytoolkitRelyingpartyDeleteAccountRequest {
                'delegatedProjectNumber': string;
                'idToken': string;
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartyDownloadAccountRequest {
                'delegatedProjectNumber': string;
                'maxResults': number;
                'nextPageToken': string;
            }

            export interface IdentitytoolkitRelyingpartyGetAccountInfoRequest {
                'delegatedProjectNumber': string;
                'email': string[];
                'idToken': string;
                'localId': string[];
            }

            export interface IdentitytoolkitRelyingpartyGetProjectConfigResponse {
                'allowPasswordUser': boolean;
                'apiKey': string;
                'authorizedDomains': string[];
                'changeEmailTemplate': EmailTemplate;
                'enableAnonymousUser': boolean;
                'idpConfig': IdpConfig[];
                'legacyResetPasswordTemplate': EmailTemplate;
                'projectId': string;
                'resetPasswordTemplate': EmailTemplate;
                'useEmailSending': boolean;
                'verifyEmailTemplate': EmailTemplate;
            }

            export interface IdentitytoolkitRelyingpartyGetPublicKeysResponse {
                [name: string]: string
            
            }

            export interface IdentitytoolkitRelyingpartyResetPasswordRequest {
                'email': string;
                'newPassword': string;
                'oldPassword': string;
                'oobCode': string;
            }

            export interface IdentitytoolkitRelyingpartySetAccountInfoRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'createdAt': string;
                'delegatedProjectNumber': string;
                'deleteAttribute': string[];
                'deleteProvider': string[];
                'disableUser': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'idToken': string;
                'instanceId': string;
                'lastLoginAt': string;
                'localId': string;
                'oobCode': string;
                'password': string;
                'photoUrl': string;
                'provider': string[];
                'returnSecureToken': boolean;
                'upgradeToFederatedLogin': boolean;
                'validSince': string;
            }

            export interface IdentitytoolkitRelyingpartySetProjectConfigRequest {
                'allowPasswordUser': boolean;
                'apiKey': string;
                'authorizedDomains': string[];
                'changeEmailTemplate': EmailTemplate;
                'delegatedProjectNumber': string;
                'enableAnonymousUser': boolean;
                'idpConfig': IdpConfig[];
                'legacyResetPasswordTemplate': EmailTemplate;
                'resetPasswordTemplate': EmailTemplate;
                'useEmailSending': boolean;
                'verifyEmailTemplate': EmailTemplate;
            }

            export interface IdentitytoolkitRelyingpartySetProjectConfigResponse {
                'projectId': string;
            }

            export interface IdentitytoolkitRelyingpartySignOutUserRequest {
                'instanceId': string;
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartySignOutUserResponse {
                'localId': string;
            }

            export interface IdentitytoolkitRelyingpartySignupNewUserRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'displayName': string;
                'email': string;
                'idToken': string;
                'instanceId': string;
                'password': string;
            }

            export interface IdentitytoolkitRelyingpartyUploadAccountRequest {
                'delegatedProjectNumber': string;
                'hashAlgorithm': string;
                'memoryCost': number;
                'rounds': number;
                'saltSeparator': string;
                'signerKey': string;
                'users': UserInfo[];
            }

            export interface IdentitytoolkitRelyingpartyVerifyAssertionRequest {
                'delegatedProjectNumber': string;
                'idToken': string;
                'instanceId': string;
                'pendingIdToken': string;
                'postBody': string;
                'requestUri': string;
                'returnRefreshToken': boolean;
                'returnSecureToken': boolean;
                'sessionId': string;
            }

            export interface IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
                'delegatedProjectNumber': string;
                'instanceId': string;
                'returnSecureToken': boolean;
                'token': string;
            }

            export interface IdentitytoolkitRelyingpartyVerifyPasswordRequest {
                'captchaChallenge': string;
                'captchaResponse': string;
                'delegatedProjectNumber': string;
                'email': string;
                'idToken': string;
                'instanceId': string;
                'password': string;
                'pendingIdToken': string;
                'returnSecureToken': boolean;
            }

            export interface IdpConfig {
                'clientId': string;
                'enabled': boolean;
                'experimentPercent': number;
                'provider': string;
                'secret': string;
                'whitelistedAudiences': string[];
            }

            export interface Relyingparty {
                'captchaResp': string;
                'challenge': string;
                'email': string;
                'idToken': string;
                'kind': string;
                'newEmail': string;
                'requestType': string;
                'userIp': string;
            }

            export interface ResetPasswordResponse {
                'email': string;
                'kind': string;
            }

            export interface SetAccountInfoResponse {
                'displayName': string;
                'email': string;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'newEmail': string;
                'passwordHash': string;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'federatedId': string;
                    'photoUrl': string;
                    'providerId': string;
                }[];
                'refreshToken': string;
            }

            export interface SignupNewUserResponse {
                'displayName': string;
                'email': string;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'refreshToken': string;
            }

            export interface UploadAccountResponse {
                'error': {
                    'index': number;
                    'message': string;
                }[];
                'kind': string;
            }

            export interface UserInfo {
                'createdAt': string;
                'disabled': boolean;
                'displayName': string;
                'email': string;
                'emailVerified': boolean;
                'lastLoginAt': string;
                'localId': string;
                'passwordHash': string;
                'passwordUpdatedAt': number;
                'photoUrl': string;
                'providerUserInfo': {
                    'displayName': string;
                    'email': string;
                    'federatedId': string;
                    'photoUrl': string;
                    'providerId': string;
                    'rawId': string;
                }[];
                'salt': string;
                'validSince': string;
                'version': number;
            }

            export interface VerifyAssertionResponse {
                'action': string;
                'appInstallationUrl': string;
                'appScheme': string;
                'context': string;
                'dateOfBirth': string;
                'displayName': string;
                'email': string;
                'emailRecycled': boolean;
                'emailVerified': boolean;
                'expiresIn': string;
                'federatedId': string;
                'firstName': string;
                'fullName': string;
                'idToken': string;
                'inputEmail': string;
                'kind': string;
                'language': string;
                'lastName': string;
                'localId': string;
                'needConfirmation': boolean;
                'needEmail': boolean;
                'nickName': string;
                'oauthAccessToken': string;
                'oauthAuthorizationCode': string;
                'oauthExpireIn': number;
                'oauthIdToken': string;
                'oauthRequestToken': string;
                'oauthScope': string;
                'oauthTokenSecret': string;
                'originalEmail': string;
                'photoUrl': string;
                'providerId': string;
                'refreshToken': string;
                'timeZone': string;
                'verifiedProvider': string[];
            }

            export interface VerifyCustomTokenResponse {
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'refreshToken': string;
            }

            export interface VerifyPasswordResponse {
                'displayName': string;
                'email': string;
                'expiresIn': string;
                'idToken': string;
                'kind': string;
                'localId': string;
                'oauthAccessToken': string;
                'oauthAuthorizationCode': string;
                'oauthExpireIn': number;
                'photoUrl': string;
                'refreshToken': string;
                'registered': boolean;
            }

        }
    }
}