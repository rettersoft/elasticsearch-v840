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
class Watcher {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async ackWatch(params, options) {
        const acceptedPath = ['watch_id', 'action_id'];
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
        if (params.watch_id != null && params.action_id != null) {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack/${encodeURIComponent(params.action_id.toString())}`;
        }
        else {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_ack`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async activateWatch(params, options) {
        const acceptedPath = ['watch_id'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_activate`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deactivateWatch(params, options) {
        const acceptedPath = ['watch_id'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.watch_id.toString())}/_deactivate`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteWatch(params, options) {
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
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async executeWatch(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['action_modes', 'alternative_input', 'ignore_condition', 'record_execution', 'simulated_actions', 'trigger_data', 'watch'];
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
        if (params.id != null) {
            method = 'PUT';
            path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}/_execute`;
        }
        else {
            method = 'PUT';
            path = '/_watcher/watch/_execute';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getWatch(params, options) {
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
        const method = 'GET';
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putWatch(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['actions', 'condition', 'input', 'metadata', 'throttle_period', 'transform', 'trigger'];
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
        const path = `/_watcher/watch/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async queryWatches(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['from', 'size', 'query', 'sort', 'search_after'];
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
        const path = '/_watcher/_query/watches';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async start(params, options) {
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
        const path = '/_watcher/_start';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stats(params, options) {
        const acceptedPath = ['metric'];
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
        if (params.metric != null) {
            method = 'GET';
            path = `/_watcher/stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_watcher/stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stop(params, options) {
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
        const path = '/_watcher/_stop';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Watcher;
//# sourceMappingURL=watcher.js.map