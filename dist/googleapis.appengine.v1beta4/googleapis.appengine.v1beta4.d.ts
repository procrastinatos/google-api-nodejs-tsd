// Type definitions for Google APIs Node.js Client
// Project: https://github.com/google/google-api-nodejs-client
// Definitions by: Robby Cornelissen <https://github.com/procrastinatos/>
// Definitions: https://github.com/procrastinatos/google-api-node-tsd

/// <reference path="../googleapis/googleapis.d.ts" />
declare module google {
    export interface GoogleApis {
        appengine(version: string): any;
        appengine(version: 'v1beta4'): appengine.v1beta4.Appengine;
    }

    namespace appengine {
        namespace v1beta4 {
            export interface Appengine {
                new(options: any): Appengine;

                'apps': {
                    'get': (parameters: {'appsId': string, 'ensureResourcesExist'?: boolean}, callback: (error: any, body: Application, response: any) => void) => Request;
                
                    'modules': {
                        'delete': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'get': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Module, response: any) => void) => Request;
                        'list': (parameters: {'appsId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListModulesResponse, response: any) => void) => Request;
                        'patch': (parameters: {'appsId': string, 'modulesId': string, 'mask'?: string, 'migrateTraffic'?: boolean}, callback: (error: any, body: Operation, response: any) => void) => Request;
                    
                        'versions': {
                            'create': (parameters: {'appsId': string, 'modulesId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'delete': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                            'get': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string, 'view'?: string}, callback: (error: any, body: Version, response: any) => void) => Request;
                            'list': (parameters: {'appsId': string, 'modulesId': string, 'view'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListVersionsResponse, response: any) => void) => Request;
                            'patch': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string, 'mask'?: string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        
                            'instances': {
                                'list': (parameters: {'appsId': string, 'modulesId': string, 'versionsId': string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListInstancesResponse, response: any) => void) => Request;
                            };
                        };
                    };
                    'operations': {
                        'get': (parameters: {'appsId': string, 'operationsId': string}, callback: (error: any, body: Operation, response: any) => void) => Request;
                        'list': (parameters: {'appsId': string, 'filter'?: string, 'pageSize'?: number, 'pageToken'?: string}, callback: (error: any, body: ListOperationsResponse, response: any) => void) => Request;
                    };
                };

            }

            export interface Application {
                'name': string;
                'id': string;
                'dispatchRules': UrlDispatchRule[];
                'authDomain': string;
                'location': string;
                'codeBucket': string;
                'defaultCookieExpiration': string;
                'defaultHostname': string;
                'defaultBucket': string;
            }

            export interface UrlDispatchRule {
                'domain': string;
                'path': string;
                'module': string;
            }

            export interface Version {
                'name': string;
                'id': string;
                'automaticScaling': AutomaticScaling;
                'basicScaling': BasicScaling;
                'manualScaling': ManualScaling;
                'inboundServices': string[];
                'instanceClass': string;
                'network': Network;
                'resources': Resources;
                'runtime': string;
                'threadsafe': boolean;
                'vm': boolean;
                'betaSettings': {
                    [name: string]: string
                
                };
                'env': string;
                'servingStatus': string;
                'deployer': string;
                'creationTime': string;
                'handlers': UrlMap[];
                'errorHandlers': ErrorHandler[];
                'libraries': Library[];
                'apiConfig': ApiConfigHandler;
                'envVariables': {
                    [name: string]: string
                
                };
                'defaultExpiration': string;
                'healthCheck': HealthCheck;
                'nobuildFilesRegex': string;
                'deployment': Deployment;
            }

            export interface AutomaticScaling {
                'coolDownPeriod': string;
                'cpuUtilization': CpuUtilization;
                'maxConcurrentRequests': number;
                'maxIdleInstances': number;
                'maxTotalInstances': number;
                'maxPendingLatency': string;
                'minIdleInstances': number;
                'minTotalInstances': number;
                'minPendingLatency': string;
                'requestUtilization': RequestUtilization;
                'diskUtilization': DiskUtilization;
                'networkUtilization': NetworkUtilization;
            }

            export interface CpuUtilization {
                'aggregationWindowLength': string;
                'targetUtilization': number;
            }

            export interface RequestUtilization {
                'targetRequestCountPerSec': number;
                'targetConcurrentRequests': number;
            }

            export interface DiskUtilization {
                'targetWriteBytesPerSec': number;
                'targetWriteOpsPerSec': number;
                'targetReadBytesPerSec': number;
                'targetReadOpsPerSec': number;
            }

            export interface NetworkUtilization {
                'targetSentBytesPerSec': number;
                'targetSentPacketsPerSec': number;
                'targetReceivedBytesPerSec': number;
                'targetReceivedPacketsPerSec': number;
            }

            export interface BasicScaling {
                'idleTimeout': string;
                'maxInstances': number;
            }

            export interface ManualScaling {
                'instances': number;
            }

            export interface Network {
                'forwardedPorts': string[];
                'instanceTag': string;
                'name': string;
            }

            export interface Resources {
                'cpu': number;
                'diskGb': number;
                'memoryGb': number;
            }

            export interface UrlMap {
                'urlRegex': string;
                'staticFiles': StaticFilesHandler;
                'staticDirectory': StaticDirectoryHandler;
                'script': ScriptHandler;
                'apiEndpoint': ApiEndpointHandler;
                'securityLevel': string;
                'login': string;
                'authFailAction': string;
                'redirectHttpResponseCode': string;
            }

            export interface StaticFilesHandler {
                'path': string;
                'uploadPathRegex': string;
                'httpHeaders': {
                    [name: string]: string
                
                };
                'mimeType': string;
                'expiration': string;
                'requireMatchingFile': boolean;
                'applicationReadable': boolean;
            }

            export interface StaticDirectoryHandler {
                'directory': string;
                'httpHeaders': {
                    [name: string]: string
                
                };
                'mimeType': string;
                'expiration': string;
                'requireMatchingFile': boolean;
                'applicationReadable': boolean;
            }

            export interface ScriptHandler {
                'scriptPath': string;
            }

            export interface ApiEndpointHandler {
                'scriptPath': string;
            }

            export interface ErrorHandler {
                'errorCode': string;
                'staticFile': string;
                'mimeType': string;
            }

            export interface Library {
                'name': string;
                'version': string;
            }

            export interface ApiConfigHandler {
                'authFailAction': string;
                'login': string;
                'script': string;
                'securityLevel': string;
                'url': string;
            }

            export interface HealthCheck {
                'disableHealthCheck': boolean;
                'host': string;
                'healthyThreshold': number;
                'unhealthyThreshold': number;
                'restartThreshold': number;
                'checkInterval': string;
                'timeout': string;
            }

            export interface Deployment {
                'files': {
                    [name: string]: FileInfo
                
                };
                'container': ContainerInfo;
                'sourceReferences': SourceReference[];
            }

            export interface FileInfo {
                'sourceUrl': string;
                'sha1Sum': string;
                'mimeType': string;
            }

            export interface ContainerInfo {
                'image': string;
            }

            export interface SourceReference {
                'repository': string;
                'revisionId': string;
            }

            export interface Operation {
                'name': string;
                'metadata': {
                    [name: string]: any
                
                };
                'done': boolean;
                'error': Status;
                'response': {
                    [name: string]: any
                
                };
            }

            export interface Status {
                'code': number;
                'message': string;
                'details': {
                    [name: string]: any
                
                }[];
            }

            export interface ListVersionsResponse {
                'versions': Version[];
                'nextPageToken': string;
            }

            export interface Module {
                'name': string;
                'id': string;
                'split': TrafficSplit;
            }

            export interface TrafficSplit {
                'shardBy': string;
                'allocations': {
                    [name: string]: number
                
                };
            }

            export interface ListModulesResponse {
                'modules': Module[];
                'nextPageToken': string;
            }

            export interface ListInstancesResponse {
                'instances': Instance[];
                'nextPageToken': string;
            }

            export interface Instance {
                'name': string;
                'id': string;
                'appEngineRelease': string;
                'availability': string;
                'vmName': string;
                'vmZoneName': string;
                'vmId': string;
                'startTimestamp': string;
                'requests': number;
                'errors': number;
                'qps': number;
                'averageLatency': number;
                'memoryUsage': string;
                'vmStatus': string;
                'vmUnlocked': boolean;
            }

            export interface ListOperationsResponse {
                'operations': Operation[];
                'nextPageToken': string;
            }

            export interface OperationMetadata {
                'operationType': string;
                'insertTime': string;
                'endTime': string;
                'user': string;
                'target': string;
                'method': string;
            }

            export interface OperationMetadataV1Beta5 {
                'method': string;
                'insertTime': string;
                'endTime': string;
                'user': string;
                'target': string;
            }

        }
    }
}