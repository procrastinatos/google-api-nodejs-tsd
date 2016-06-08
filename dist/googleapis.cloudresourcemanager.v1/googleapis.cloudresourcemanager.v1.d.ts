// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        cloudresourcemanager(version: string): any;
        cloudresourcemanager(version: 'v1'): cloudresourcemanager.v1.Cloudresourcemanager;
    }

    namespace cloudresourcemanager {
        namespace v1 {
            export interface Cloudresourcemanager {
                new(options: any): Cloudresourcemanager;

                'projects': {
                    'get': (parameters: {'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'list': (parameters: {'pageToken'?: string, 'pageSize'?: number, 'filter'?: string}, callback: (error: any, body: ListProjectsResponse, response: any) => void) => Request;
                    'update': (parameters: {'projectId': string}, callback: (error: any, body: Project, response: any) => void) => Request;
                    'delete': (parameters: {'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'undelete': (parameters: {'projectId': string}, callback: (error: any, body: Empty, response: any) => void) => Request;
                    'getIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'setIamPolicy': (parameters: {'resource': string}, callback: (error: any, body: Policy, response: any) => void) => Request;
                    'testIamPermissions': (parameters: {'resource': string}, callback: (error: any, body: TestIamPermissionsResponse, response: any) => void) => Request;
                };

            }

            export interface Project {
                'projectNumber': string;
                'projectId': string;
                'lifecycleState': string;
                'name': string;
                'createTime': string;
                'labels': {
                    [name: string]: string
                
                };
                'parent': ResourceId;
            }

            export interface ResourceId {
                'type': string;
                'id': string;
            }

            export interface ListProjectsResponse {
                'projects': Project[];
                'nextPageToken': string;
            }

            export interface Empty {}

            export interface UndeleteProjectRequest {}

            export interface GetIamPolicyRequest {}

            export interface Policy {
                'version': number;
                'bindings': Binding[];
                'etag': string;
            }

            export interface Binding {
                'role': string;
                'members': string[];
            }

            export interface SetIamPolicyRequest {
                'policy': Policy;
            }

            export interface TestIamPermissionsRequest {
                'permissions': string[];
            }

            export interface TestIamPermissionsResponse {
                'permissions': string[];
            }

        }
    }
}