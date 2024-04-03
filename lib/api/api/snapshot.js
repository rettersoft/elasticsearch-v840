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
class Snapshot {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async cleanupRepository(params, options) {
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
        const path = `/_snapshot/${encodeURIComponent(params.name.toString())}/_cleanup`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clone(params, options) {
        const acceptedPath = ['repository', 'snapshot', 'target_snapshot'];
        const acceptedBody = ['indices'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_clone/${encodeURIComponent(params.target_snapshot.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async create(params, options) {
        const acceptedPath = ['repository', 'snapshot'];
        const acceptedBody = ['ignore_unavailable', 'include_global_state', 'indices', 'feature_states', 'metadata', 'partial'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async createRepository(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['repository', 'type', 'settings'];
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
        const path = `/_snapshot/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async delete(params, options) {
        const acceptedPath = ['repository', 'snapshot'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteRepository(params, options) {
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
        const path = `/_snapshot/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async get(params, options) {
        const acceptedPath = ['repository', 'snapshot'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRepository(params, options) {
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
            path = `/_snapshot/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_snapshot';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async repositoryAnalyze(params, options) {
        const acceptedPath = ['repository'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/_analyze`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async restore(params, options) {
        const acceptedPath = ['repository', 'snapshot'];
        const acceptedBody = ['ignore_index_settings', 'ignore_unavailable', 'include_aliases', 'include_global_state', 'index_settings', 'indices', 'partial', 'rename_pattern', 'rename_replacement'];
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
        const path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_restore`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async status(params, options) {
        const acceptedPath = ['repository', 'snapshot'];
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
        if (params.repository != null && params.snapshot != null) {
            method = 'GET';
            path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/${encodeURIComponent(params.snapshot.toString())}/_status`;
        }
        else if (params.repository != null) {
            method = 'GET';
            path = `/_snapshot/${encodeURIComponent(params.repository.toString())}/_status`;
        }
        else {
            method = 'GET';
            path = '/_snapshot/_status';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async verifyRepository(params, options) {
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
        const path = `/_snapshot/${encodeURIComponent(params.name.toString())}/_verify`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Snapshot;
//# sourceMappingURL=snapshot.js.map