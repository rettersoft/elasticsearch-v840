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
class Ml {
    constructor(transport) {
        Object.defineProperty(this, "transport", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.transport = transport;
    }
    async closeJob(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['allow_no_match', 'force', 'timeout'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_close`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteCalendar(params, options) {
        const acceptedPath = ['calendar_id'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteCalendarEvent(params, options) {
        const acceptedPath = ['calendar_id', 'event_id'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events/${encodeURIComponent(params.event_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteCalendarJob(params, options) {
        const acceptedPath = ['calendar_id', 'job_id'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/jobs/${encodeURIComponent(params.job_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteDataFrameAnalytics(params, options) {
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
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
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
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteExpiredData(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['requests_per_second', 'timeout'];
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
        if (params.job_id != null) {
            method = 'DELETE';
            path = `/_ml/_delete_expired_data/${encodeURIComponent(params.job_id.toString())}`;
        }
        else {
            method = 'DELETE';
            path = '/_ml/_delete_expired_data';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteFilter(params, options) {
        const acceptedPath = ['filter_id'];
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
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteForecast(params, options) {
        const acceptedPath = ['job_id', 'forecast_id'];
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
        if (params.job_id != null && params.forecast_id != null) {
            method = 'DELETE';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast/${encodeURIComponent(params.forecast_id.toString())}`;
        }
        else {
            method = 'DELETE';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteJob(params, options) {
        const acceptedPath = ['job_id'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteModelSnapshot(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteTrainedModel(params, options) {
        const acceptedPath = ['model_id'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async deleteTrainedModelAlias(params, options) {
        const acceptedPath = ['model_alias', 'model_id'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/model_aliases/${encodeURIComponent(params.model_alias.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async estimateModelMemory(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['analysis_config', 'max_bucket_cardinality', 'overall_cardinality'];
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
        const path = '/_ml/anomaly_detectors/_estimate_model_memory';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async evaluateDataFrame(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['evaluation', 'index', 'query'];
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
        const path = '/_ml/data_frame/_evaluate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async explainDataFrameAnalytics(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['source', 'dest', 'analysis', 'description', 'model_memory_limit', 'max_num_threads', 'analyzed_fields', 'allow_lazy_start'];
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
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_explain`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/data_frame/analytics/_explain';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async flushJob(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['advance_time', 'calc_interim', 'end', 'skip_time', 'start'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_flush`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async forecast(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['duration', 'expires_in', 'max_model_memory'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_forecast`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getBuckets(params, options) {
        const acceptedPath = ['job_id', 'timestamp'];
        const acceptedBody = ['anomaly_score', 'desc', 'end', 'exclude_interim', 'expand', 'page', 'sort', 'start'];
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
        if (params.job_id != null && params.timestamp != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/buckets/${encodeURIComponent(params.timestamp.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/buckets`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getCalendarEvents(params, options) {
        const acceptedPath = ['calendar_id'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getCalendars(params, options) {
        const acceptedPath = ['calendar_id'];
        const acceptedBody = ['page'];
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
        if (params.calendar_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/calendars';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getCategories(params, options) {
        const acceptedPath = ['job_id', 'category_id'];
        const acceptedBody = ['page'];
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
        if (params.job_id != null && params.category_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/categories/${encodeURIComponent(params.category_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/categories/`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getDataFrameAnalytics(params, options) {
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
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/data_frame/analytics';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getDataFrameAnalyticsStats(params, options) {
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
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/data_frame/analytics/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getDatafeedStats(params, options) {
        const acceptedPath = ['datafeed_id'];
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
        if (params.datafeed_id != null) {
            method = 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/datafeeds/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getDatafeeds(params, options) {
        const acceptedPath = ['datafeed_id'];
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
        if (params.datafeed_id != null) {
            method = 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/datafeeds';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getFilters(params, options) {
        const acceptedPath = ['filter_id'];
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
        if (params.filter_id != null) {
            method = 'GET';
            path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/filters';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getInfluencers(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['page'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/influencers`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getJobStats(params, options) {
        const acceptedPath = ['job_id'];
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
        if (params.job_id != null) {
            method = 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/anomaly_detectors/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getJobs(params, options) {
        const acceptedPath = ['job_id'];
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
        if (params.job_id != null) {
            method = 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/anomaly_detectors';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getMemoryStats(params, options) {
        const acceptedPath = ['node_id'];
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
        if (params.node_id != null) {
            method = 'GET';
            path = `/_ml/memory/${encodeURIComponent(params.node_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/memory/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getModelSnapshotUpgradeStats(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_upgrade/_stats`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getModelSnapshots(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
        const acceptedBody = ['desc', 'end', 'page', 'sort', 'start'];
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
        if (params.job_id != null && params.snapshot_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots`;
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getOverallBuckets(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['allow_no_match', 'bucket_span', 'end', 'exclude_interim', 'overall_score', 'start', 'top_n'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/overall_buckets`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getRecords(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['desc', 'end', 'exclude_interim', 'page', 'record_score', 'sort', 'start'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/results/records`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getTrainedModels(params, options) {
        const acceptedPath = ['model_id'];
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
        if (params.model_id != null) {
            method = 'GET';
            path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        }
        else {
            method = 'GET';
            path = '/_ml/trained_models';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async getTrainedModelsStats(params, options) {
        const acceptedPath = ['model_id'];
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
        if (params.model_id != null) {
            method = 'GET';
            path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/_stats`;
        }
        else {
            method = 'GET';
            path = '/_ml/trained_models/_stats';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async inferTrainedModel(params, options) {
        const acceptedPath = ['model_id'];
        const acceptedBody = ['docs', 'inference_config'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/_infer`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async info(params, options) {
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
        const path = '/_ml/info';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async openJob(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['timeout'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_open`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async postCalendarEvents(params, options) {
        const acceptedPath = ['calendar_id'];
        const acceptedBody = ['events'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/events`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async postData(params, options) {
        var _a;
        const acceptedPath = ['job_id'];
        const acceptedBody = ['data'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_data`;
        return await this.transport.request({ path, method, querystring, bulkBody: body }, options);
    }
    async previewDataFrameAnalytics(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['config'];
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
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/data_frame/analytics/_preview';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async previewDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
        const acceptedBody = ['datafeed_config', 'job_config'];
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
        if (params.datafeed_id != null) {
            method = body != null ? 'POST' : 'GET';
            path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_preview`;
        }
        else {
            method = body != null ? 'POST' : 'GET';
            path = '/_ml/datafeeds/_preview';
        }
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putCalendar(params, options) {
        const acceptedPath = ['calendar_id'];
        const acceptedBody = ['job_ids', 'description'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putCalendarJob(params, options) {
        const acceptedPath = ['calendar_id', 'job_id'];
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
        const path = `/_ml/calendars/${encodeURIComponent(params.calendar_id.toString())}/jobs/${encodeURIComponent(params.job_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putDataFrameAnalytics(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['allow_lazy_start', 'analysis', 'analyzed_fields', 'description', 'dest', 'max_num_threads', 'model_memory_limit', 'source', 'headers', 'version'];
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
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
        const acceptedBody = ['aggregations', 'chunking_config', 'delayed_data_check_config', 'frequency', 'indices', 'indexes', 'indices_options', 'job_id', 'max_empty_searches', 'query', 'query_delay', 'runtime_mappings', 'script_fields', 'scroll_size', 'headers'];
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
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putFilter(params, options) {
        const acceptedPath = ['filter_id'];
        const acceptedBody = ['description', 'items'];
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
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putJob(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['allow_lazy_open', 'analysis_config', 'analysis_limits', 'background_persist_interval', 'custom_settings', 'daily_model_snapshot_retention_after_days', 'data_description', 'datafeed_config', 'description', 'groups', 'model_plot_config', 'model_snapshot_retention_days', 'renormalization_window_days', 'results_index_name', 'results_retention_days'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTrainedModel(params, options) {
        const acceptedPath = ['model_id'];
        const acceptedBody = ['compressed_definition', 'definition', 'description', 'inference_config', 'input', 'metadata', 'model_type', 'model_size_bytes', 'tags'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTrainedModelAlias(params, options) {
        const acceptedPath = ['model_alias', 'model_id'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/model_aliases/${encodeURIComponent(params.model_alias.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTrainedModelDefinitionPart(params, options) {
        const acceptedPath = ['model_id', 'part'];
        const acceptedBody = ['definition', 'total_definition_length', 'total_parts'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/definition/${encodeURIComponent(params.part.toString())}`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async putTrainedModelVocabulary(params, options) {
        const acceptedPath = ['model_id'];
        const acceptedBody = ['vocabulary', 'merges'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/vocabulary`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async resetJob(params, options) {
        const acceptedPath = ['job_id'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_reset`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async revertModelSnapshot(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
        const acceptedBody = ['delete_intervening_results'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_revert`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async setUpgradeMode(params, options) {
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
        const path = '/_ml/set_upgrade_mode';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async startDataFrameAnalytics(params, options) {
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
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_start`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async startDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
        const acceptedBody = ['end', 'start', 'timeout'];
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
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_start`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async startTrainedModelDeployment(params, options) {
        const acceptedPath = ['model_id'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/_start`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stopDataFrameAnalytics(params, options) {
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
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_stop`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stopDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
        const acceptedBody = ['allow_no_match', 'force', 'timeout'];
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
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_stop`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async stopTrainedModelDeployment(params, options) {
        const acceptedPath = ['model_id'];
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
        const path = `/_ml/trained_models/${encodeURIComponent(params.model_id.toString())}/deployment/_stop`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateDataFrameAnalytics(params, options) {
        const acceptedPath = ['id'];
        const acceptedBody = ['description', 'model_memory_limit', 'max_num_threads', 'allow_lazy_start'];
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
        const path = `/_ml/data_frame/analytics/${encodeURIComponent(params.id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateDatafeed(params, options) {
        const acceptedPath = ['datafeed_id'];
        const acceptedBody = ['aggregations', 'chunking_config', 'delayed_data_check_config', 'frequency', 'indices', 'indexes', 'indices_options', 'max_empty_searches', 'query', 'query_delay', 'runtime_mappings', 'script_fields', 'scroll_size'];
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
        const path = `/_ml/datafeeds/${encodeURIComponent(params.datafeed_id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateFilter(params, options) {
        const acceptedPath = ['filter_id'];
        const acceptedBody = ['add_items', 'description', 'remove_items'];
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
        const path = `/_ml/filters/${encodeURIComponent(params.filter_id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateJob(params, options) {
        const acceptedPath = ['job_id'];
        const acceptedBody = ['allow_lazy_open', 'analysis_limits', 'background_persist_interval', 'custom_settings', 'categorization_filters', 'description', 'model_plot_config', 'daily_model_snapshot_retention_after_days', 'model_snapshot_retention_days', 'renormalization_window_days', 'results_retention_days', 'groups', 'detectors', 'per_partition_categorization'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async updateModelSnapshot(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
        const acceptedBody = ['description', 'retain'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_update`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async upgradeJobSnapshot(params, options) {
        const acceptedPath = ['job_id', 'snapshot_id'];
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
        const path = `/_ml/anomaly_detectors/${encodeURIComponent(params.job_id.toString())}/model_snapshots/${encodeURIComponent(params.snapshot_id.toString())}/_upgrade`;
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async validate(params, options) {
        const acceptedPath = [];
        const acceptedBody = ['job_id', 'analysis_config', 'analysis_limits', 'data_description', 'description', 'model_plot', 'model_snapshot_id', 'model_snapshot_retention_days', 'results_index_name'];
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
        const path = '/_ml/anomaly_detectors/_validate';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
    async validateDetector(params, options) {
        var _a;
        const acceptedPath = [];
        const acceptedBody = ['detector'];
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
        const path = '/_ml/anomaly_detectors/_validate/detector';
        return await this.transport.request({ path, method, querystring, body }, options);
    }
}
exports.default = Ml;
//# sourceMappingURL=ml.js.map