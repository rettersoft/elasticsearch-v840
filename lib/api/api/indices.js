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
class Indices {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async addBlock(params, options) {
        const acceptedPath = ['index', 'block'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_block/${encodeURIComponent(params.block.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async analyze(params, options) {
        const acceptedPath = ['index'];
        const acceptedBody = ['analyzer', 'attributes', 'char_filter', 'explain', 'field', 'filter', 'normalizer', 'text', 'tokenizer'];
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
        if (params.index != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_analyze`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_analyze';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clearCache(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'POST';
            path = `/${encodeURIComponent(params.index.toString())}/_cache/clear`;
        }
        else {
            method = 'POST';
            path = '/_cache/clear';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async clone(params, options) {
        const acceptedPath = ['index', 'target'];
        const acceptedBody = ['aliases', 'settings'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_clone/${encodeURIComponent(params.target.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async close(params, options) {
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
        const method = 'POST';
        const path = `/${encodeURIComponent(params.index.toString())}/_close`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async create(params, options) {
        const acceptedPath = ['index'];
        const acceptedBody = ['aliases', 'mappings', 'settings'];
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
        const path = `/${encodeURIComponent(params.index.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async createDataStream(params, options) {
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
        const method = 'PUT';
        const path = `/_data_stream/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async dataStreamsStats(params, options) {
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
            path = `/_data_stream/${encodeURIComponent(params.name.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_data_stream/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async delete(params, options) {
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
        const method = 'DELETE';
        const path = `/${encodeURIComponent(params.index.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteAlias(params, options) {
        const acceptedPath = ['index', 'name'];
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
        if (params.index != null && params.name != null) {
            method = 'DELETE';
            path = `/${encodeURIComponent(params.index.toString())}/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'DELETE';
            path = `/${encodeURIComponent(params.index.toString())}/_aliases/${encodeURIComponent(params.name.toString())}`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteDataStream(params, options) {
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
        const path = `/_data_stream/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteIndexTemplate(params, options) {
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
        const path = `/_index_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteTemplate(params, options) {
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
        const path = `/_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async diskUsage(params, options) {
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
        const method = 'POST';
        const path = `/${encodeURIComponent(params.index.toString())}/_disk_usage`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async exists(params, options) {
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
        const method = 'HEAD';
        const path = `/${encodeURIComponent(params.index.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async existsAlias(params, options) {
        const acceptedPath = ['name', 'index'];
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
        if (params.index != null && params.name != null) {
            method = 'HEAD';
            path = `/${encodeURIComponent(params.index.toString())}/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'HEAD';
            path = `/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async existsIndexTemplate(params, options) {
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
        const method = 'HEAD';
        const path = `/_index_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async existsTemplate(params, options) {
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
        const method = 'HEAD';
        const path = `/_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async fieldUsageStats(params, options) {
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
        const path = `/${encodeURIComponent(params.index.toString())}/_field_usage_stats`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async flush(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_flush`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_flush';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async forcemerge(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'POST';
            path = `/${encodeURIComponent(params.index.toString())}/_forcemerge`;
        }
        else {
            method = 'POST';
            path = '/_forcemerge';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async get(params, options) {
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
        const path = `/${encodeURIComponent(params.index.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getAlias(params, options) {
        const acceptedPath = ['name', 'index'];
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
        if (params.index != null && params.name != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        else if (params.name != null) {
            method = 'GET';
            path = `/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        else if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_alias`;
        }
        else {
            method = 'GET';
            path = '/_alias';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getDataStream(params, options) {
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
            path = `/_data_stream/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_data_stream';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getFieldMapping(params, options) {
        const acceptedPath = ['fields', 'index'];
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
        if (params.index != null && params.fields != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_mapping/field/${encodeURIComponent(params.fields.toString())}`;
        }
        else {
            method = 'GET';
            path = `/_mapping/field/${encodeURIComponent(params.fields.toString())}`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getIndexTemplate(params, options) {
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
            path = `/_index_template/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_index_template';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getMapping(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_mapping`;
        }
        else {
            method = 'GET';
            path = '/_mapping';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getSettings(params, options) {
        const acceptedPath = ['index', 'name'];
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
        if (params.index != null && params.name != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_settings/${encodeURIComponent(params.name.toString())}`;
        }
        else if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_settings`;
        }
        else if (params.name != null) {
            method = 'GET';
            path = `/_settings/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_settings';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getTemplate(params, options) {
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
            path = `/_template/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_template';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async migrateToDataStream(params, options) {
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
        const path = `/_data_stream/_migrate/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async modifyDataStream(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['actions'];
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
        const path = '/_data_stream/_modify';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async open(params, options) {
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
        const method = 'POST';
        const path = `/${encodeURIComponent(params.index.toString())}/_open`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async promoteDataStream(params, options) {
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
        const path = `/_data_stream/_promote/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putAlias(params, options) {
        const acceptedPath = ['index', 'name'];
        const acceptedBody = ['filter', 'index_routing', 'is_write_index', 'routing', 'search_routing'];
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
        let method = '';
        let path = '';
        if (params.index != null && params.name != null) {
            method = 'PUT';
            path = `/${encodeURIComponent(params.index.toString())}/_alias/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'PUT';
            path = `/${encodeURIComponent(params.index.toString())}/_aliases/${encodeURIComponent(params.name.toString())}`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putIndexTemplate(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['index_patterns', 'composed_of', 'template', 'data_stream', 'priority', 'version', '_meta'];
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
        const path = `/_index_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putMapping(params, options) {
        const acceptedPath = ['index'];
        const acceptedBody = ['date_detection', 'dynamic', 'dynamic_date_formats', 'dynamic_templates', '_field_names', '_meta', 'numeric_detection', 'properties', '_routing', '_source', 'runtime'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_mapping`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putSettings(params, options) {
        var _a;
        const acceptedPath = ['index'];
        const acceptedBody = ['settings'];
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
        let method = '';
        let path = '';
        if (params.index != null) {
            method = 'PUT';
            path = `/${encodeURIComponent(params.index.toString())}/_settings`;
        }
        else {
            method = 'PUT';
            path = '/_settings';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTemplate(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['aliases', 'index_patterns', 'mappings', 'order', 'settings', 'version'];
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
        const path = `/_template/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async recovery(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_recovery`;
        }
        else {
            method = 'GET';
            path = '/_recovery';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async refresh(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_refresh`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_refresh';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async reloadSearchAnalyzers(params, options) {
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
        const method = body != null ? 'POST' : 'GET';
        const path = `/${encodeURIComponent(params.index.toString())}/_reload_search_analyzers`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async resolveIndex(params, options) {
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
        const method = 'GET';
        const path = `/_resolve/index/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async rollover(params, options) {
        const acceptedPath = ['alias', 'new_index'];
        const acceptedBody = ['aliases', 'conditions', 'mappings', 'settings'];
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
        let method = '';
        let path = '';
        if (params.alias != null && params.new_index != null) {
            method = 'POST';
            path = `/${encodeURIComponent(params.alias.toString())}/_rollover/${encodeURIComponent(params.new_index.toString())}`;
        }
        else {
            method = 'POST';
            path = `/${encodeURIComponent(params.alias.toString())}/_rollover`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async segments(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_segments`;
        }
        else {
            method = 'GET';
            path = '/_segments';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async shardStores(params, options) {
        const acceptedPath = ['index'];
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
        if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_shard_stores`;
        }
        else {
            method = 'GET';
            path = '/_shard_stores';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async shrink(params, options) {
        const acceptedPath = ['index', 'target'];
        const acceptedBody = ['aliases', 'settings'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_shrink/${encodeURIComponent(params.target.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async simulateIndexTemplate(params, options) {
        const acceptedPath = ['name'];
        const acceptedBody = ['allow_auto_create', 'index_patterns', 'composed_of', 'template', 'data_stream', 'priority', 'version', '_meta'];
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
        const path = `/_index_template/_simulate_index/${encodeURIComponent(params.name.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async simulateTemplate(params, options) {
        var _a;
        const acceptedPath = ['name'];
        const acceptedBody = ['template'];
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
        let method = '';
        let path = '';
        if (params.name != null) {
            method = 'POST';
            path = `/_index_template/_simulate/${encodeURIComponent(params.name.toString())}`;
        }
        else {
            method = 'POST';
            path = '/_index_template/_simulate';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async split(params, options) {
        const acceptedPath = ['index', 'target'];
        const acceptedBody = ['aliases', 'settings'];
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
        const path = `/${encodeURIComponent(params.index.toString())}/_split/${encodeURIComponent(params.target.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stats(params, options) {
        const acceptedPath = ['metric', 'index'];
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
        if (params.index != null && params.metric != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else if (params.metric != null) {
            method = 'GET';
            path = `/_stats/${encodeURIComponent(params.metric.toString())}`;
        }
        else if (params.index != null) {
            method = 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async unfreeze(params, options) {
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
        const method = 'POST';
        const path = `/${encodeURIComponent(params.index.toString())}/_unfreeze`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateAliases(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['actions'];
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
        const path = '/_aliases';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async validateQuery(params, options) {
        const acceptedPath = ['index'];
        const acceptedBody = ['query'];
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
        if (params.index != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/${encodeURIComponent(params.index.toString())}/_validate/query`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_validate/query';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Indices;
//# sourceMappingURL=indices.js.map