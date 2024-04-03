"use strict";
/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Security {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async activateUserProfile(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['access_token', 'grant_type', 'password', 'username'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/profile/_activate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async authenticate(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/_authenticate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async changePassword(params, options) {
        const acceptedPath = ['username'];
        const acceptedBody = ['password', 'password_hash'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.username != null) {
            method = 'PUT';
            path = `/_security/user/${encodeURIComponent(params.username.toString())}/_password`;
        }
        else {
            method = 'PUT';
            path = '/_security/user/_password';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearApiKeyCache(params, options) {
        const acceptedPath = ['ids'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_security/api_key/${encodeURIComponent(params.ids.toString())}/_clear_cache`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearCachedPrivileges(params, options) {
        const acceptedPath = ['application'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_security/privilege/${encodeURIComponent(params.application.toString())}/_clear_cache`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearCachedRealms(params, options) {
        const acceptedPath = ['realms'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_security/realm/${encodeURIComponent(params.realms.toString())}/_clear_cache`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearCachedRoles(params, options) {
        const acceptedPath = ['name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_security/role/${encodeURIComponent(params.name.toString())}/_clear_cache`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearCachedServiceTokens(params, options) {
        const acceptedPath = ['namespace', 'service', 'name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}/credential/token/${encodeURIComponent(params.name.toString())}/_clear_cache`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async createApiKey(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['expiration', 'name', 'role_descriptors', 'metadata'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = '/_security/api_key';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async createServiceToken(params, options) {
        const acceptedPath = ['namespace', 'service', 'name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.namespace != null && params.service != null && params.name != null) {
            method = 'PUT';
            path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}/credential/token/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'POST';
            path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}/credential/token`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deletePrivileges(params, options) {
        const acceptedPath = ['application', 'name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_security/privilege/${encodeURIComponent(params.application.toString())}/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteRole(params, options) {
        const acceptedPath = ['name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_security/role/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteRoleMapping(params, options) {
        const acceptedPath = ['name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_security/role_mapping/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteServiceToken(params, options) {
        const acceptedPath = ['namespace', 'service', 'name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}/credential/token/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteUser(params, options) {
        const acceptedPath = ['username'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = `/_security/user/${encodeURIComponent(params.username.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async disableUser(params, options) {
        const acceptedPath = ['username'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/user/${encodeURIComponent(params.username.toString())}/_disable`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async disableUserProfile(params, options) {
        const acceptedPath = ['uid'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/profile/${encodeURIComponent(params.uid.toString())}/_disable`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async enableUser(params, options) {
        const acceptedPath = ['username'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/user/${encodeURIComponent(params.username.toString())}/_enable`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async enableUserProfile(params, options) {
        const acceptedPath = ['uid'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/profile/${encodeURIComponent(params.uid.toString())}/_enable`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async enrollKibana(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/enroll/kibana';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async enrollNode(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/enroll/node';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getApiKey(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/api_key';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getBuiltinPrivileges(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/privilege/_builtin';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getPrivileges(params, options) {
        const acceptedPath = ['application', 'name'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.application != null && params.name != null) {
            method = 'GET';
            path = `/_security/privilege/${encodeURIComponent(params.application.toString())}/${encodeURIComponent(params.name.toString())}`;
        }
        else if (params.application != null) {
            method = 'GET';
            path = `/_security/privilege/${encodeURIComponent(params.application.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_security/privilege';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRole(params, options) {
        const acceptedPath = ['name'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.name != null) {
            method = 'GET';
            path = `/_security/role/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_security/role';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRoleMapping(params, options) {
        const acceptedPath = ['name'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.name != null) {
            method = 'GET';
            path = `/_security/role_mapping/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_security/role_mapping';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getServiceAccounts(params, options) {
        const acceptedPath = ['namespace', 'service'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.namespace != null && params.service != null) {
            method = 'GET';
            path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}`;
        }
        else if (params.namespace != null) {
            method = 'GET';
            path = `/_security/service/${encodeURIComponent(params.namespace.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_security/service';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getServiceCredentials(params, options) {
        const acceptedPath = ['namespace', 'service'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_security/service/${encodeURIComponent(params.namespace.toString())}/${encodeURIComponent(params.service.toString())}/credential`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getToken(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['grant_type', 'scope', 'password', 'kerberos_ticket', 'refresh_token', 'username'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/oauth2/token';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getUser(params, options) {
        const acceptedPath = ['username'];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.username != null) {
            method = 'GET';
            path = `/_security/user/${encodeURIComponent(params.username.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_security/user';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getUserPrivileges(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = '/_security/user/_privileges';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getUserProfile(params, options) {
        const acceptedPath = ['uid'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_security/profile/${encodeURIComponent(params.uid.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async grantApiKey(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['api_key', 'grant_type', 'access_token', 'username', 'password'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/api_key/grant';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async hasPrivileges(params, options) {
        const acceptedPath = ['user'];
        const acceptedBody = ['application', 'cluster', 'index'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        let method = '';
        let path = '';
        if (params.user != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_security/user/${encodeURIComponent(params.user.toString())}/_has_privileges`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_security/user/_has_privileges';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async hasPrivilegesUserProfile(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['uids', 'privileges'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = '/_security/profile/_has_privileges';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async invalidateApiKey(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['id', 'ids', 'name', 'owner', 'realm_name', 'username'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = '/_security/api_key';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async invalidateToken(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['token', 'refresh_token', 'realm_name', 'username'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'DELETE';
        const path = '/_security/oauth2/token';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async oidcAuthenticate(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/oidc/authenticate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async oidcLogout(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/oidc/logout';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async oidcPrepareAuthentication(params, options) {
        const acceptedPath = [];
        const querystring = {};
        const body = undefined;
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/oidc/prepare';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putPrivileges(params, options) {
        var _a;
        const acceptedPath = [];
        const acceptedBody = ['privileges'];
        const querystring = {};
        // @ts-expect-error
        let body = (_a = params.body) !== null && _a !== void 0 ? _a : undefined;
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                // @ts-expect-error
                body = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = '/_security/privilege/';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putRole(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['applications', 'cluster', 'global', 'indices', 'metadata', 'run_as', 'transient_metadata'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/role/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putRoleMapping(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['enabled', 'metadata', 'roles', 'rules', 'run_as'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/role_mapping/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putUser(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['username', 'email', 'full_name', 'metadata', 'password', 'password_hash', 'roles', 'enabled'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/user/${encodeURIComponent(params.username.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async queryApiKeys(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['query', 'from', 'sort', 'size', 'search_after'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = '/_security/_query/api_key';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlAuthenticate(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['content', 'ids', 'realm'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/saml/authenticate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlCompleteLogout(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['realm', 'ids', 'query_string', 'content'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/saml/complete_logout';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlInvalidate(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['acs', 'query_string', 'realm'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/saml/invalidate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlLogout(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['token', 'refresh_token'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/saml/logout';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlPrepareAuthentication(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['acs', 'realm', 'relay_state'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'POST';
        const path = '/_security/saml/prepare';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async samlServiceProviderMetadata(params, options) {
        const acceptedPath = ['realm_name'];
        const querystring = {};
        const body = undefined;
        for (const key in params) {
            if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'GET';
        const path = `/_security/saml/metadata/${encodeURIComponent(params.realm_name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async suggestUserProfiles(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['name', 'size', 'data', 'hint'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        params = params !== null && params !== void 0 ? params : {};
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = body != null ? 'POST' : 'GET';
        const path = '/_security/profile/_suggest';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateApiKey(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['role_descriptors', 'metadata'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/api_key/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateUserProfileData(params, options) {
        const acceptedPath = ['uid'];
        const acceptedBody = ['labels', 'data'];
        const querystring = {};
        // @ts-expect-error
        const userBody = params === null || params === void 0 ? void 0 : params.body;
        let body;
        if (typeof userBody === 'string') {
            body = userBody;
        }
        else {
            body = userBody != null ? { ...userBody } : undefined;
        }
        for (const key in params) {
            if (acceptedBody.includes(key)) {
                body = body !== null && body !== void 0 ? body : {};
                // @ts-expect-error
                body[key] = params[key];
            }
            else if (acceptedPath.includes(key)) {
                continue;
            }
            else if (key !== 'body') {
                // @ts-expect-error
                querystring[key] = params[key];
            }
        }
        const method = 'PUT';
        const path = `/_security/profile/${encodeURIComponent(params.uid.toString())}/_data`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Security;
//# sourceMappingURL=security.js.map