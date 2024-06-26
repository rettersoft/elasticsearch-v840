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
class Rollup {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async deleteJob(params, options) {
        const acceptedPath = ['id'];
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
        const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getJobs(params, options) {
        const acceptedPath = ['id'];
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
        if (params.id != null) {
            method = 'GET';
            path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_rollup/job/';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRollupCaps(params, options) {
        const acceptedPath = ['id'];
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
        if (params.id != null) {
            method = 'GET';
            path = `/_rollup/data/${encodeURIComponent(params.id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_rollup/data/';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRollupIndexCaps(params, options) {
        const acceptedPath = ['index'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_rollup/data`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putJob(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['cron', 'groups', 'index_pattern', 'metrics', 'page_size', 'rollup_index', 'timeout', 'headers'];
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
        const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async rollup(params, options) {
        var _a;
        const acceptedPath = ['index', 'rollup_index'];
        const acceptedBody = ['config'];
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
        const method = 'POST';
        const path = `/${encodeURIComponent(params.index.toString())}/_rollup/${encodeURIComponent(params.rollup_index.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async rollupSearch(params, options) {
        const acceptedPath = ['index'];
        const acceptedBody = ['aggregations', 'aggs', 'query', 'size'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_rollup_search`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async startJob(params, options) {
        const acceptedPath = ['id'];
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
        const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}/_start`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stopJob(params, options) {
        const acceptedPath = ['id'];
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
        const path = `/_rollup/job/${encodeURIComponent(params.id.toString())}/_stop`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Rollup;
//# sourceMappingURL=rollup.js.map