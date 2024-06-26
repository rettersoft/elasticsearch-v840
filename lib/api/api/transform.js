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
class Transform {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async deleteTransform(params, options) {
        const acceptedPath = ['transform_id'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getTransform(params, options) {
        const acceptedPath = ['transform_id'];
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
        if (params.transform_id != null) {
            method = 'GET';
            path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_transform';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getTransformStats(params, options) {
        const acceptedPath = ['transform_id'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stats`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async previewTransform(params, options) {
        const acceptedPath = ['transform_id'];
        const acceptedBody = ['dest', 'description', 'frequency', 'pivot', 'source', 'settings', 'sync', 'retention_policy', 'latest'];
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
        if (params.transform_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_transform/_preview';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTransform(params, options) {
        const acceptedPath = ['transform_id'];
        const acceptedBody = ['dest', 'description', 'frequency', 'latest', '_meta', 'pivot', 'retention_policy', 'settings', 'source', 'sync'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async resetTransform(params, options) {
        const acceptedPath = ['transform_id'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_reset`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async startTransform(params, options) {
        const acceptedPath = ['transform_id'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_start`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stopTransform(params, options) {
        const acceptedPath = ['transform_id'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_stop`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateTransform(params, options) {
        const acceptedPath = ['transform_id'];
        const acceptedBody = ['dest', 'description', 'frequency', '_meta', 'source', 'settings', 'sync', 'retention_policy'];
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
        const path = `/_transform/${encodeURIComponent(params.transform_id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async upgradeTransforms(params, options) {
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
        const method = 'POST';
        const path = '/_transform/_upgrade';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Transform;
//# sourceMappingURL=transform.js.map