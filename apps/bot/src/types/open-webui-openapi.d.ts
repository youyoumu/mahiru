export interface paths {
    "/ollama/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Status */
        get: operations["get_status_ollama__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        /** Get Status */
        head: operations["get_status_ollama__head_head"];
        patch?: never;
        trace?: never;
    };
    "/ollama/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verify Connection */
        post: operations["verify_connection_ollama_verify_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Config */
        get: operations["get_config_ollama_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Config */
        post: operations["update_config_ollama_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/tags/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ollama Tags */
        get: operations["get_ollama_tags_ollama_api_tags__url_idx__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ollama Tags */
        get: operations["get_ollama_tags_ollama_api_tags_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/ps": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Ollama Loaded Models
         * @description List models that are currently loaded into Ollama memory, and which node they are loaded on.
         */
        get: operations["get_ollama_loaded_models_ollama_api_ps_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/version/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ollama Versions */
        get: operations["get_ollama_versions_ollama_api_version__url_idx__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ollama Versions */
        get: operations["get_ollama_versions_ollama_api_version_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/unload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unload Model */
        post: operations["unload_model_ollama_api_unload_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/pull/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pull Model */
        post: operations["pull_model_ollama_api_pull__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/pull": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pull Model */
        post: operations["pull_model_ollama_api_pull_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/push/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Push Model */
        delete: operations["push_model_ollama_api_push__url_idx__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/push": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Push Model */
        delete: operations["push_model_ollama_api_push_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/create/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Model */
        post: operations["create_model_ollama_api_create__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Model */
        post: operations["create_model_ollama_api_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/copy/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy Model */
        post: operations["copy_model_ollama_api_copy__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/copy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Copy Model */
        post: operations["copy_model_ollama_api_copy_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/delete/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Model */
        delete: operations["delete_model_ollama_api_delete__url_idx__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Model */
        delete: operations["delete_model_ollama_api_delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/show": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Show Model Info */
        post: operations["show_model_info_ollama_api_show_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/embed/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Embed */
        post: operations["embed_ollama_api_embed__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/embed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Embed */
        post: operations["embed_ollama_api_embed_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/embeddings/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Embeddings */
        post: operations["embeddings_ollama_api_embeddings__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/embeddings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Embeddings */
        post: operations["embeddings_ollama_api_embeddings_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/generate/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Completion */
        post: operations["generate_completion_ollama_api_generate__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/generate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Completion */
        post: operations["generate_completion_ollama_api_generate_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/chat/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Chat Completion */
        post: operations["generate_chat_completion_ollama_api_chat__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/api/chat": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Chat Completion */
        post: operations["generate_chat_completion_ollama_api_chat_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/completions/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Openai Completion */
        post: operations["generate_openai_completion_ollama_v1_completions__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Openai Completion */
        post: operations["generate_openai_completion_ollama_v1_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/chat/completions/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Openai Chat Completion */
        post: operations["generate_openai_chat_completion_ollama_v1_chat_completions__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Openai Chat Completion */
        post: operations["generate_openai_chat_completion_ollama_v1_chat_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/messages/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Anthropic Messages
         * @description Proxy for Ollama's Anthropic-compatible /v1/messages endpoint.
         *
         *     Forwards the request as-is to the Ollama backend, applying the same
         *     model resolution, access control, and prefix_id handling used by
         *     the OpenAI-compatible /v1/chat/completions proxy.
         *
         *     See https://docs.ollama.com/api/anthropic-compatibility
         */
        post: operations["generate_anthropic_messages_ollama_v1_messages__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Anthropic Messages
         * @description Proxy for Ollama's Anthropic-compatible /v1/messages endpoint.
         *
         *     Forwards the request as-is to the Ollama backend, applying the same
         *     model resolution, access control, and prefix_id handling used by
         *     the OpenAI-compatible /v1/chat/completions proxy.
         *
         *     See https://docs.ollama.com/api/anthropic-compatibility
         */
        post: operations["generate_anthropic_messages_ollama_v1_messages_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/models/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Openai Models */
        get: operations["get_openai_models_ollama_v1_models__url_idx__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/v1/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Openai Models */
        get: operations["get_openai_models_ollama_v1_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/models/download/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Download Model */
        post: operations["download_model_ollama_models_download__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/models/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Download Model */
        post: operations["download_model_ollama_models_download_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/models/upload/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload Model */
        post: operations["upload_model_ollama_models_upload__url_idx__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ollama/models/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload Model */
        post: operations["upload_model_ollama_models_upload_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Config */
        get: operations["get_config_openai_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Config */
        post: operations["update_config_openai_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/audio/speech": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Speech */
        post: operations["speech_openai_audio_speech_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/models/{url_idx}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_openai_models__url_idx__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_openai_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Verify Connection */
        post: operations["verify_connection_openai_verify_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Chat Completion */
        post: operations["generate_chat_completion_openai_chat_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/responses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Responses
         * @description Forward requests to the OpenAI Responses API endpoint.
         *     Routes to the correct upstream backend based on the model field.
         */
        post: operations["responses_openai_responses_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Proxy
         * @description Deprecated: proxy all requests to OpenAI API
         */
        get: operations["proxy_openai__path__get_get"];
        /**
         * Proxy
         * @description Deprecated: proxy all requests to OpenAI API
         */
        put: operations["proxy_openai__path__get_put"];
        /**
         * Proxy
         * @description Deprecated: proxy all requests to OpenAI API
         */
        post: operations["proxy_openai__path__get_post"];
        /**
         * Proxy
         * @description Deprecated: proxy all requests to OpenAI API
         */
        delete: operations["proxy_openai__path__get_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pipelines List */
        get: operations["get_pipelines_list_api_v1_pipelines_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/upload": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload Pipeline */
        post: operations["upload_pipeline_api_v1_pipelines_upload_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Pipeline */
        post: operations["add_pipeline_api_v1_pipelines_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Pipeline */
        delete: operations["delete_pipeline_api_v1_pipelines_delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pipelines */
        get: operations["get_pipelines_api_v1_pipelines__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/{pipeline_id}/valves": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pipeline Valves */
        get: operations["get_pipeline_valves_api_v1_pipelines__pipeline_id__valves_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/{pipeline_id}/valves/spec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pipeline Valves Spec */
        get: operations["get_pipeline_valves_spec_api_v1_pipelines__pipeline_id__valves_spec_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/pipelines/{pipeline_id}/valves/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Pipeline Valves */
        post: operations["update_pipeline_valves_api_v1_pipelines__pipeline_id__valves_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/active/chats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Check Active Chats
         * @description Check which chat IDs have active tasks.
         */
        post: operations["check_active_chats_api_v1_tasks_active_chats_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Task Config */
        get: operations["get_task_config_api_v1_tasks_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Task Config */
        post: operations["update_task_config_api_v1_tasks_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/title/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Title */
        post: operations["generate_title_api_v1_tasks_title_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/follow_up/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Follow Ups */
        post: operations["generate_follow_ups_api_v1_tasks_follow_up_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/tags/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Chat Tags */
        post: operations["generate_chat_tags_api_v1_tasks_tags_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/image_prompt/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Image Prompt */
        post: operations["generate_image_prompt_api_v1_tasks_image_prompt_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/queries/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Queries */
        post: operations["generate_queries_api_v1_tasks_queries_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/auto/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Autocompletion */
        post: operations["generate_autocompletion_api_v1_tasks_auto_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/emoji/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Emoji */
        post: operations["generate_emoji_api_v1_tasks_emoji_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tasks/moa/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Moa Response */
        post: operations["generate_moa_response_api_v1_tasks_moa_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Config */
        get: operations["get_config_api_v1_images_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Config */
        post: operations["update_config_api_v1_images_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/config/url/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Verify Url */
        get: operations["verify_url_api_v1_images_config_url_verify_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_api_v1_images_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/generations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Generate Images */
        post: operations["generate_images_api_v1_images_generations_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/images/edit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Image Edits */
        post: operations["image_edits_api_v1_images_edit_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Audio Config */
        get: operations["get_audio_config_api_v1_audio_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Audio Config */
        post: operations["update_audio_config_api_v1_audio_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/speech": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Speech */
        post: operations["speech_api_v1_audio_speech_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/transcriptions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Transcription */
        post: operations["transcription_api_v1_audio_transcriptions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_api_v1_audio_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/audio/voices": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Voices */
        get: operations["get_voices_api_v1_audio_voices_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Status */
        get: operations["get_status_api_v1_retrieval__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/embedding": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Embedding Config */
        get: operations["get_embedding_config_api_v1_retrieval_embedding_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/embedding/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Embedding Config */
        post: operations["update_embedding_config_api_v1_retrieval_embedding_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Rag Config */
        get: operations["get_rag_config_api_v1_retrieval_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/config/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Rag Config */
        post: operations["update_rag_config_api_v1_retrieval_config_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Process File
         * @description Process a file and save its content to the vector database.
         *     Process a file and save its content to the vector database.
         *     Note: granular session management is used to prevent connection pool exhaustion.
         *     The session is committed before external API calls, and updates use a fresh session.
         */
        post: operations["process_file_api_v1_retrieval_process_file_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/text": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Process Text */
        post: operations["process_text_api_v1_retrieval_process_text_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/web": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Process Web */
        post: operations["process_web_api_v1_retrieval_process_web_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/youtube": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Process Web */
        post: operations["process_web_api_v1_retrieval_process_youtube_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/web/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Process Web Search */
        post: operations["process_web_search_api_v1_retrieval_process_web_search_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/query/doc": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Query Doc Handler */
        post: operations["query_doc_handler_api_v1_retrieval_query_doc_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/query/collection": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Query Collection Handler */
        post: operations["query_collection_handler_api_v1_retrieval_query_collection_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Delete Entries From Collection */
        post: operations["delete_entries_from_collection_api_v1_retrieval_delete_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/reset/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reset Vector Db */
        post: operations["reset_vector_db_api_v1_retrieval_reset_db_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/reset/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reset Upload Dir */
        post: operations["reset_upload_dir_api_v1_retrieval_reset_uploads_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/ef/{text}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Embeddings */
        get: operations["get_embeddings_api_v1_retrieval_ef__text__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/retrieval/process/files/batch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Process Files Batch
         * @description Process a batch of files and save them to the vector database.
         *
         *     NOTE: We intentionally do NOT use Depends(get_session) here.
         *     The save_docs_to_vector_db() call makes external embedding API calls which
         *     can take 5-60+ seconds for batch operations. Database operations after
         *     embedding (Files.update_file_by_id) manage their own short-lived sessions.
         */
        post: operations["process_files_batch_api_v1_retrieval_process_files_batch_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Import Config */
        post: operations["import_config_api_v1_configs_import_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Config */
        get: operations["export_config_api_v1_configs_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/connections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Connections Config */
        get: operations["get_connections_config_api_v1_configs_connections_get_get"];
        put?: never;
        /** Set Connections Config */
        post: operations["set_connections_config_api_v1_configs_connections_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/oauth/clients/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register Oauth Client */
        post: operations["register_oauth_client_api_v1_configs_oauth_clients_register_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/tool_servers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tool Servers Config */
        get: operations["get_tool_servers_config_api_v1_configs_tool_servers_get_get"];
        put?: never;
        /** Set Tool Servers Config */
        post: operations["set_tool_servers_config_api_v1_configs_tool_servers_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/terminal_servers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Terminal Servers Config */
        get: operations["get_terminal_servers_config_api_v1_configs_terminal_servers_get_get"];
        put?: never;
        /** Set Terminal Servers Config */
        post: operations["set_terminal_servers_config_api_v1_configs_terminal_servers_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/terminal_servers/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify Terminal Server Connection
         * @description Verify the connection to a terminal server by detecting its type.
         *
         *     Tries GET {url}/api/v1/policies (orchestrator) then GET {url}/api/config
         *     (plain terminal).  Returns ``{status: true, type: "orchestrator"|"terminal"}``.
         */
        post: operations["verify_terminal_server_connection_api_v1_configs_terminal_servers_verify_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/terminal_servers/policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Put Terminal Server Policy
         * @description Proxy a policy PUT to an orchestrator terminal server.
         */
        post: operations["put_terminal_server_policy_api_v1_configs_terminal_servers_policy_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/tool_servers/verify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Verify Tool Servers Config
         * @description Verify the connection to the tool server.
         */
        post: operations["verify_tool_servers_config_api_v1_configs_tool_servers_verify_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/code_execution": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Code Execution Config */
        get: operations["get_code_execution_config_api_v1_configs_code_execution_get_get"];
        put?: never;
        /** Set Code Execution Config */
        post: operations["set_code_execution_config_api_v1_configs_code_execution_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/models/defaults": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models Defaults */
        get: operations["get_models_defaults_api_v1_configs_models_defaults_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models Config */
        get: operations["get_models_config_api_v1_configs_models_get_get"];
        put?: never;
        /** Set Models Config */
        post: operations["set_models_config_api_v1_configs_models_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/suggestions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set Default Suggestions */
        post: operations["set_default_suggestions_api_v1_configs_suggestions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/configs/banners": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Banners */
        get: operations["get_banners_api_v1_configs_banners_get_get"];
        put?: never;
        /** Set Banners */
        post: operations["set_banners_api_v1_configs_banners_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Session User */
        get: operations["get_session_user_api_v1_auths__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/update/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Profile */
        post: operations["update_profile_api_v1_auths_update_profile_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/update/timezone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Timezone */
        post: operations["update_timezone_api_v1_auths_update_timezone_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/update/password": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Password */
        post: operations["update_password_api_v1_auths_update_password_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/ldap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Ldap Auth */
        post: operations["ldap_auth_api_v1_auths_ldap_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/signin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Signin */
        post: operations["signin_api_v1_auths_signin_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Signup */
        post: operations["signup_api_v1_auths_signup_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/signout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Signout */
        get: operations["signout_api_v1_auths_signout_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add User */
        post: operations["add_user_api_v1_auths_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/admin/details": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Admin Details */
        get: operations["get_admin_details_api_v1_auths_admin_details_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/admin/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Admin Config */
        get: operations["get_admin_config_api_v1_auths_admin_config_get_get"];
        put?: never;
        /** Update Admin Config */
        post: operations["update_admin_config_api_v1_auths_admin_config_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/admin/config/ldap/server": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ldap Server */
        get: operations["get_ldap_server_api_v1_auths_admin_config_ldap_server_get_get"];
        put?: never;
        /** Update Ldap Server */
        post: operations["update_ldap_server_api_v1_auths_admin_config_ldap_server_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/admin/config/ldap": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Ldap Config */
        get: operations["get_ldap_config_api_v1_auths_admin_config_ldap_get_get"];
        put?: never;
        /** Update Ldap Config */
        post: operations["update_ldap_config_api_v1_auths_admin_config_ldap_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/api_key": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Api Key */
        get: operations["get_api_key_api_v1_auths_api_key_get_get"];
        put?: never;
        /** Generate Api Key */
        post: operations["generate_api_key_api_v1_auths_api_key_post_post"];
        /** Delete Api Key */
        delete: operations["delete_api_key_api_v1_auths_api_key_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/auths/oauth/{provider}/token/exchange": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Token Exchange
         * @description Exchange an external OAuth provider token for an OpenWebUI JWT.
         *     This endpoint is disabled by default. Set ENABLE_OAUTH_TOKEN_EXCHANGE=True to enable.
         */
        post: operations["token_exchange_api_v1_auths_oauth__provider__token_exchange_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Users */
        get: operations["get_users_api_v1_users__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Users */
        get: operations["get_all_users_api_v1_users_all_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Users */
        get: operations["search_users_api_v1_users_search_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Groups */
        get: operations["get_user_groups_api_v1_users_groups_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Permissisions */
        get: operations["get_user_permissisions_api_v1_users_permissions_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/default/permissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Default User Permissions */
        get: operations["get_default_user_permissions_api_v1_users_default_permissions_get_get"];
        put?: never;
        /** Update Default User Permissions */
        post: operations["update_default_user_permissions_api_v1_users_default_permissions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Settings By Session User */
        get: operations["get_user_settings_by_session_user_api_v1_users_user_settings_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/settings/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update User Settings By Session User */
        post: operations["update_user_settings_by_session_user_api_v1_users_user_settings_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Status By Session User */
        get: operations["get_user_status_by_session_user_api_v1_users_user_status_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/status/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update User Status By Session User */
        post: operations["update_user_status_by_session_user_api_v1_users_user_status_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Info By Session User */
        get: operations["get_user_info_by_session_user_api_v1_users_user_info_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/user/info/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update User Info By Session User */
        post: operations["update_user_info_by_session_user_api_v1_users_user_info_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User By Id */
        get: operations["get_user_by_id_api_v1_users__user_id__get_get"];
        put?: never;
        post?: never;
        /** Delete User By Id */
        delete: operations["delete_user_by_id_api_v1_users__user_id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Info By Id */
        get: operations["get_user_info_by_id_api_v1_users__user_id__info_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/oauth/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Oauth Sessions By Id */
        get: operations["get_user_oauth_sessions_by_id_api_v1_users__user_id__oauth_sessions_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/profile/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Profile Image By Id */
        get: operations["get_user_profile_image_by_id_api_v1_users__user_id__profile_image_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/active": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Active Status By Id */
        get: operations["get_user_active_status_by_id_api_v1_users__user_id__active_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update User By Id */
        post: operations["update_user_by_id_api_v1_users__user_id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/users/{user_id}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Groups By Id */
        get: operations["get_user_groups_by_id_api_v1_users__user_id__groups_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channels */
        get: operations["get_channels_api_v1_channels__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Channels */
        get: operations["get_all_channels_api_v1_channels_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Dm Channel By User Id */
        get: operations["get_dm_channel_by_user_id_api_v1_channels_users__user_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Channel */
        post: operations["create_new_channel_api_v1_channels_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel By Id */
        get: operations["get_channel_by_id_api_v1_channels__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/members": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Members By Id */
        get: operations["get_channel_members_by_id_api_v1_channels__id__members_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/members/active": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Is Active Member By Id And User Id */
        post: operations["update_is_active_member_by_id_and_user_id_api_v1_channels__id__members_active_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/update/members/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Members By Id */
        post: operations["add_members_by_id_api_v1_channels__id__update_members_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/update/members/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Remove Members By Id */
        post: operations["remove_members_by_id_api_v1_channels__id__update_members_remove_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Channel By Id */
        post: operations["update_channel_by_id_api_v1_channels__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Channel By Id */
        delete: operations["delete_channel_by_id_api_v1_channels__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Messages */
        get: operations["get_channel_messages_api_v1_channels__id__messages_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/pinned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pinned Channel Messages */
        get: operations["get_pinned_channel_messages_api_v1_channels__id__messages_pinned_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/post": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Post New Message */
        post: operations["post_new_message_api_v1_channels__id__messages_post_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Message */
        get: operations["get_channel_message_api_v1_channels__id__messages__message_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/data": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Message Data */
        get: operations["get_channel_message_data_api_v1_channels__id__messages__message_id__data_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/pin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pin Channel Message */
        post: operations["pin_channel_message_api_v1_channels__id__messages__message_id__pin_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/thread": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Thread Messages */
        get: operations["get_channel_thread_messages_api_v1_channels__id__messages__message_id__thread_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Message By Id */
        post: operations["update_message_by_id_api_v1_channels__id__messages__message_id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/reactions/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Reaction To Message */
        post: operations["add_reaction_to_message_api_v1_channels__id__messages__message_id__reactions_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/reactions/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Remove Reaction By Id And User Id And Name */
        post: operations["remove_reaction_by_id_and_user_id_and_name_api_v1_channels__id__messages__message_id__reactions_remove_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/messages/{message_id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Message By Id */
        delete: operations["delete_message_by_id_api_v1_channels__id__messages__message_id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/webhooks/{webhook_id}/profile/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Webhook Profile Image
         * @description Get webhook profile image by webhook ID.
         */
        get: operations["get_webhook_profile_image_api_v1_channels_webhooks__webhook_id__profile_image_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/webhooks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Channel Webhooks */
        get: operations["get_channel_webhooks_api_v1_channels__id__webhooks_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/webhooks/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Channel Webhook */
        post: operations["create_channel_webhook_api_v1_channels__id__webhooks_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/webhooks/{webhook_id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Channel Webhook */
        post: operations["update_channel_webhook_api_v1_channels__id__webhooks__webhook_id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/{id}/webhooks/{webhook_id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Channel Webhook */
        delete: operations["delete_channel_webhook_api_v1_channels__id__webhooks__webhook_id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/channels/webhooks/{webhook_id}/{token}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Post Webhook Message
         * @description Public endpoint to post messages via webhook. No authentication required.
         */
        post: operations["post_webhook_message_api_v1_channels_webhooks__webhook_id___token__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Session User Chat List */
        get: operations["get_session_user_chat_list_api_v1_chats_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Session User Chat List */
        get: operations["get_session_user_chat_list_api_v1_chats__get_get"];
        put?: never;
        post?: never;
        /** Delete All User Chats */
        delete: operations["delete_all_user_chats_api_v1_chats__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/stats/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Session User Chat Usage Stats */
        get: operations["get_session_user_chat_usage_stats_api_v1_chats_stats_usage_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/stats/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Chat Stats */
        get: operations["export_chat_stats_api_v1_chats_stats_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/stats/export/{chat_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export Single Chat Stats
         * @description Export stats for exactly one chat by ID.
         *     Returns ChatStatsExport for the specified chat.
         */
        get: operations["export_single_chat_stats_api_v1_chats_stats_export__chat_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/list/user/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Chat List By User Id */
        get: operations["get_user_chat_list_by_user_id_api_v1_chats_list_user__user_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/new": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Chat */
        post: operations["create_new_chat_api_v1_chats_new_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Import Chats */
        post: operations["import_chats_api_v1_chats_import_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search User Chats */
        get: operations["search_user_chats_api_v1_chats_search_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/folder/{folder_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Chats By Folder Id */
        get: operations["get_chats_by_folder_id_api_v1_chats_folder__folder_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/folder/{folder_id}/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Chat List By Folder Id */
        get: operations["get_chat_list_by_folder_id_api_v1_chats_folder__folder_id__list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/pinned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Pinned Chats */
        get: operations["get_user_pinned_chats_api_v1_chats_pinned_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Chats */
        get: operations["get_user_chats_api_v1_chats_all_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/all/archived": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get User Archived Chats */
        get: operations["get_user_archived_chats_api_v1_chats_all_archived_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/all/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All User Tags */
        get: operations["get_all_user_tags_api_v1_chats_all_tags_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/all/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All User Chats In Db */
        get: operations["get_all_user_chats_in_db_api_v1_chats_all_db_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/archived": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Archived Session User Chat List */
        get: operations["get_archived_session_user_chat_list_api_v1_chats_archived_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/archive/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Archive All Chats */
        post: operations["archive_all_chats_api_v1_chats_archive_all_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/unarchive/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Unarchive All Chats */
        post: operations["unarchive_all_chats_api_v1_chats_unarchive_all_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/shared": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Shared Session User Chat List */
        get: operations["get_shared_session_user_chat_list_api_v1_chats_shared_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/share/{share_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Shared Chat By Id */
        get: operations["get_shared_chat_by_id_api_v1_chats_share__share_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get User Chat List By Tag Name */
        post: operations["get_user_chat_list_by_tag_name_api_v1_chats_tags_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Chat By Id */
        get: operations["get_chat_by_id_api_v1_chats__id__get_get"];
        put?: never;
        /** Update Chat By Id */
        post: operations["update_chat_by_id_api_v1_chats__id__post_post"];
        /** Delete Chat By Id */
        delete: operations["delete_chat_by_id_api_v1_chats__id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/messages/{message_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Chat Message By Id */
        post: operations["update_chat_message_by_id_api_v1_chats__id__messages__message_id__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/messages/{message_id}/event": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Send Chat Message Event By Id */
        post: operations["send_chat_message_event_by_id_api_v1_chats__id__messages__message_id__event_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/pinned": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Pinned Status By Id */
        get: operations["get_pinned_status_by_id_api_v1_chats__id__pinned_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/pin": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Pin Chat By Id */
        post: operations["pin_chat_by_id_api_v1_chats__id__pin_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/clone": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone Chat By Id */
        post: operations["clone_chat_by_id_api_v1_chats__id__clone_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/clone/shared": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Clone Shared Chat By Id */
        post: operations["clone_shared_chat_by_id_api_v1_chats__id__clone_shared_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Archive Chat By Id */
        post: operations["archive_chat_by_id_api_v1_chats__id__archive_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/share": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Share Chat By Id */
        post: operations["share_chat_by_id_api_v1_chats__id__share_post_post"];
        /** Delete Shared Chat By Id */
        delete: operations["delete_shared_chat_by_id_api_v1_chats__id__share_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/folder": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Chat Folder Id By Id */
        post: operations["update_chat_folder_id_by_id_api_v1_chats__id__folder_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Chat Tags By Id */
        get: operations["get_chat_tags_by_id_api_v1_chats__id__tags_get_get"];
        put?: never;
        /** Add Tag By Id And Tag Name */
        post: operations["add_tag_by_id_and_tag_name_api_v1_chats__id__tags_post_post"];
        /** Delete Tag By Id And Tag Name */
        delete: operations["delete_tag_by_id_and_tag_name_api_v1_chats__id__tags_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chats/{id}/tags/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete All Tags By Id */
        delete: operations["delete_all_tags_by_id_api_v1_chats__id__tags_all_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Notes */
        get: operations["get_notes_api_v1_notes__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Notes */
        get: operations["search_notes_api_v1_notes_search_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Note */
        post: operations["create_new_note_api_v1_notes_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Note By Id */
        get: operations["get_note_by_id_api_v1_notes__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Note By Id */
        post: operations["update_note_by_id_api_v1_notes__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/{id}/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Note Access By Id */
        post: operations["update_note_access_by_id_api_v1_notes__id__access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/notes/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Note By Id */
        delete: operations["delete_note_by_id_api_v1_notes__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_api_v1_models_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Base Models */
        get: operations["get_base_models_api_v1_models_base_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Model Tags */
        get: operations["get_model_tags_api_v1_models_tags_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Model */
        post: operations["create_new_model_api_v1_models_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Models */
        get: operations["export_models_api_v1_models_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/import": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Import Models */
        post: operations["import_models_api_v1_models_import_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Sync Models */
        post: operations["sync_models_api_v1_models_sync_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Model By Id */
        get: operations["get_model_by_id_api_v1_models_model_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model/profile/image": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Model Profile Image */
        get: operations["get_model_profile_image_api_v1_models_model_profile_image_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model/toggle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Toggle Model By Id */
        post: operations["toggle_model_by_id_api_v1_models_model_toggle_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Model By Id */
        post: operations["update_model_by_id_api_v1_models_model_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Model Access By Id */
        post: operations["update_model_access_by_id_api_v1_models_model_access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/model/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Delete Model By Id */
        post: operations["delete_model_by_id_api_v1_models_model_delete_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/models/delete/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete All Models */
        delete: operations["delete_all_models_api_v1_models_delete_all_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Knowledge Bases */
        get: operations["get_knowledge_bases_api_v1_knowledge__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Knowledge Bases */
        get: operations["search_knowledge_bases_api_v1_knowledge_search_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/search/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Search Knowledge Files */
        get: operations["search_knowledge_files_api_v1_knowledge_search_files_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Knowledge */
        post: operations["create_new_knowledge_api_v1_knowledge_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/reindex": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reindex Knowledge Files */
        post: operations["reindex_knowledge_files_api_v1_knowledge_reindex_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/metadata/reindex": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reindex Knowledge Base Metadata Embeddings
         * @description Batch embed all existing knowledge bases. Admin only.
         *
         *     NOTE: We intentionally do NOT use Depends(get_session) here.
         *     This endpoint loops through ALL knowledge bases and calls embed_knowledge_base_metadata()
         *     for each one, making N external embedding API calls. Holding a session during
         *     this entire operation would exhaust the connection pool.
         */
        post: operations["reindex_knowledge_base_metadata_embeddings_api_v1_knowledge_metadata_reindex_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Knowledge By Id */
        get: operations["get_knowledge_by_id_api_v1_knowledge__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Knowledge By Id */
        post: operations["update_knowledge_by_id_api_v1_knowledge__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Knowledge Access By Id */
        post: operations["update_knowledge_access_by_id_api_v1_knowledge__id__access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/files": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Knowledge Files By Id */
        get: operations["get_knowledge_files_by_id_api_v1_knowledge__id__files_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/file/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add File To Knowledge By Id */
        post: operations["add_file_to_knowledge_by_id_api_v1_knowledge__id__file_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/file/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update File From Knowledge By Id */
        post: operations["update_file_from_knowledge_by_id_api_v1_knowledge__id__file_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/file/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Remove File From Knowledge By Id */
        post: operations["remove_file_from_knowledge_by_id_api_v1_knowledge__id__file_remove_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Knowledge By Id */
        delete: operations["delete_knowledge_by_id_api_v1_knowledge__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Reset Knowledge By Id */
        post: operations["reset_knowledge_by_id_api_v1_knowledge__id__reset_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/files/batch/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Add Files To Knowledge Batch
         * @description Add multiple files to a knowledge base
         */
        post: operations["add_files_to_knowledge_batch_api_v1_knowledge__id__files_batch_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/knowledge/{id}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Export Knowledge By Id
         * @description Export a knowledge base as a zip file containing .txt files.
         *     Admin only.
         */
        get: operations["export_knowledge_by_id_api_v1_knowledge__id__export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompts */
        get: operations["get_prompts_api_v1_prompts__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompt Tags */
        get: operations["get_prompt_tags_api_v1_prompts_tags_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompt List */
        get: operations["get_prompt_list_api_v1_prompts_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Prompt */
        post: operations["create_new_prompt_api_v1_prompts_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/command/{command}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompt By Command */
        get: operations["get_prompt_by_command_api_v1_prompts_command__command__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Prompt By Id */
        get: operations["get_prompt_by_id_api_v1_prompts_id__prompt_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Prompt By Id */
        post: operations["update_prompt_by_id_api_v1_prompts_id__prompt_id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/update/meta": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Prompt Metadata
         * @description Update prompt name and command only (no history created).
         */
        post: operations["update_prompt_metadata_api_v1_prompts_id__prompt_id__update_meta_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/update/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Set Prompt Version */
        post: operations["set_prompt_version_api_v1_prompts_id__prompt_id__update_version_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Prompt Access By Id */
        post: operations["update_prompt_access_by_id_api_v1_prompts_id__prompt_id__access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/toggle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Toggle Prompt Active */
        post: operations["toggle_prompt_active_api_v1_prompts_id__prompt_id__toggle_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Prompt By Id */
        delete: operations["delete_prompt_by_id_api_v1_prompts_id__prompt_id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Prompt History
         * @description Get version history for a prompt.
         */
        get: operations["get_prompt_history_api_v1_prompts_id__prompt_id__history_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/history/{history_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Prompt History Entry
         * @description Get a specific version from history.
         */
        get: operations["get_prompt_history_entry_api_v1_prompts_id__prompt_id__history__history_id__get_get"];
        put?: never;
        post?: never;
        /**
         * Delete Prompt History Entry
         * @description Delete a history entry. Cannot delete the active production version.
         */
        delete: operations["delete_prompt_history_entry_api_v1_prompts_id__prompt_id__history__history_id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/prompts/id/{prompt_id}/history/diff": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Prompt Diff
         * @description Get diff between two versions.
         */
        get: operations["get_prompt_diff_api_v1_prompts_id__prompt_id__history_diff_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools */
        get: operations["get_tools_api_v1_tools__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tool List */
        get: operations["get_tool_list_api_v1_tools_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/load/url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Load Tool From Url */
        post: operations["load_tool_from_url_api_v1_tools_load_url_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Tools */
        get: operations["export_tools_api_v1_tools_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Tools */
        post: operations["create_new_tools_api_v1_tools_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools By Id */
        get: operations["get_tools_by_id_api_v1_tools_id__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Tools By Id */
        post: operations["update_tools_by_id_api_v1_tools_id__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Tool Access By Id */
        post: operations["update_tool_access_by_id_api_v1_tools_id__id__access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Tools By Id */
        delete: operations["delete_tools_by_id_api_v1_tools_id__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools Valves By Id */
        get: operations["get_tools_valves_by_id_api_v1_tools_id__id__valves_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves/spec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools Valves Spec By Id */
        get: operations["get_tools_valves_spec_by_id_api_v1_tools_id__id__valves_spec_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Tools Valves By Id */
        post: operations["update_tools_valves_by_id_api_v1_tools_id__id__valves_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools User Valves By Id */
        get: operations["get_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves/user/spec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Tools User Valves Spec By Id */
        get: operations["get_tools_user_valves_spec_by_id_api_v1_tools_id__id__valves_user_spec_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/tools/id/{id}/valves/user/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Tools User Valves By Id */
        post: operations["update_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Skills */
        get: operations["get_skills_api_v1_skills__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Skill List */
        get: operations["get_skill_list_api_v1_skills_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Skills */
        get: operations["export_skills_api_v1_skills_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Skill */
        post: operations["create_new_skill_api_v1_skills_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Skill By Id */
        get: operations["get_skill_by_id_api_v1_skills_id__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/id/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Skill By Id */
        post: operations["update_skill_by_id_api_v1_skills_id__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/id/{id}/access/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Skill Access By Id */
        post: operations["update_skill_access_by_id_api_v1_skills_id__id__access_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/id/{id}/toggle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Toggle Skill By Id */
        post: operations["toggle_skill_by_id_api_v1_skills_id__id__toggle_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/skills/id/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Skill By Id */
        delete: operations["delete_skill_by_id_api_v1_skills_id__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Memories */
        get: operations["get_memories_api_v1_memories__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add Memory */
        post: operations["add_memory_api_v1_memories_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Query Memory */
        post: operations["query_memory_api_v1_memories_query_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reset Memory From Vector Db
         * @description Reset user's memory vector embeddings.
         *
         *     CRITICAL: We intentionally do NOT use Depends(get_session) here.
         *     This endpoint generates embeddings for ALL user memories in parallel using
         *     asyncio.gather(). A user with 100 memories would trigger 100 embedding API
         *     calls simultaneously. With a session held, this could block a connection
         *     for MINUTES, completely exhausting the connection pool.
         */
        post: operations["reset_memory_from_vector_db_api_v1_memories_reset_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/delete/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Memory By User Id */
        delete: operations["delete_memory_by_user_id_api_v1_memories_delete_user_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/{memory_id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Memory By Id */
        post: operations["update_memory_by_id_api_v1_memories__memory_id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/memories/{memory_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Memory By Id */
        delete: operations["delete_memory_by_id_api_v1_memories__memory_id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Folders */
        get: operations["get_folders_api_v1_folders__get_get"];
        put?: never;
        /** Create Folder */
        post: operations["create_folder_api_v1_folders__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Folder By Id */
        get: operations["get_folder_by_id_api_v1_folders__id__get_get"];
        put?: never;
        post?: never;
        /** Delete Folder By Id */
        delete: operations["delete_folder_by_id_api_v1_folders__id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Folder Name By Id */
        post: operations["update_folder_name_by_id_api_v1_folders__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/{id}/update/parent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Folder Parent Id By Id */
        post: operations["update_folder_parent_id_by_id_api_v1_folders__id__update_parent_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/folders/{id}/update/expanded": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Folder Is Expanded By Id */
        post: operations["update_folder_is_expanded_by_id_api_v1_folders__id__update_expanded_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Groups */
        get: operations["get_groups_api_v1_groups__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Group */
        post: operations["create_new_group_api_v1_groups_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Group By Id */
        get: operations["get_group_by_id_api_v1_groups_id__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/info": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Group Info By Id */
        get: operations["get_group_info_by_id_api_v1_groups_id__id__info_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export Group By Id */
        get: operations["export_group_by_id_api_v1_groups_id__id__export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get Users In Group */
        post: operations["get_users_in_group_api_v1_groups_id__id__users_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Group By Id */
        post: operations["update_group_by_id_api_v1_groups_id__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/users/add": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Add User To Group */
        post: operations["add_user_to_group_api_v1_groups_id__id__users_add_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/users/remove": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Remove Users From Group */
        post: operations["remove_users_from_group_api_v1_groups_id__id__users_remove_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/groups/id/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Group By Id */
        delete: operations["delete_group_by_id_api_v1_groups_id__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Files */
        get: operations["list_files_api_v1_files__get_get"];
        put?: never;
        /** Upload File */
        post: operations["upload_file_api_v1_files__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Files
         * @description Search for files by filename with support for wildcard patterns.
         *     Uses SQL-based filtering with pagination for better performance.
         */
        get: operations["search_files_api_v1_files_search_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete All Files */
        delete: operations["delete_all_files_api_v1_files_all_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File By Id */
        get: operations["get_file_by_id_api_v1_files__id__get_get"];
        put?: never;
        post?: never;
        /** Delete File By Id */
        delete: operations["delete_file_by_id_api_v1_files__id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/process/status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File Process Status */
        get: operations["get_file_process_status_api_v1_files__id__process_status_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/data/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File Data Content By Id */
        get: operations["get_file_data_content_by_id_api_v1_files__id__data_content_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/data/content/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update File Data Content By Id */
        post: operations["update_file_data_content_by_id_api_v1_files__id__data_content_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File Content By Id */
        get: operations["get_file_content_by_id_api_v1_files__id__content_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/content/html": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Html File Content By Id */
        get: operations["get_html_file_content_by_id_api_v1_files__id__content_html_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/files/{id}/content/{file_name}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get File Content By Id */
        get: operations["get_file_content_by_id_api_v1_files__id__content__file_name__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Functions */
        get: operations["get_functions_api_v1_functions__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function List */
        get: operations["get_function_list_api_v1_functions_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Functions */
        get: operations["get_functions_api_v1_functions_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/load/url": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Load Function From Url */
        post: operations["load_function_from_url_api_v1_functions_load_url_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/sync": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Sync Functions */
        post: operations["sync_functions_api_v1_functions_sync_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create New Function */
        post: operations["create_new_function_api_v1_functions_create_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function By Id */
        get: operations["get_function_by_id_api_v1_functions_id__id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/toggle": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Toggle Function By Id */
        post: operations["toggle_function_by_id_api_v1_functions_id__id__toggle_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/toggle/global": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Toggle Global By Id */
        post: operations["toggle_global_by_id_api_v1_functions_id__id__toggle_global_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Function By Id */
        post: operations["update_function_by_id_api_v1_functions_id__id__update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/delete": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Function By Id */
        delete: operations["delete_function_by_id_api_v1_functions_id__id__delete_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function Valves By Id */
        get: operations["get_function_valves_by_id_api_v1_functions_id__id__valves_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves/spec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function Valves Spec By Id */
        get: operations["get_function_valves_spec_by_id_api_v1_functions_id__id__valves_spec_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Function Valves By Id */
        post: operations["update_function_valves_by_id_api_v1_functions_id__id__valves_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function User Valves By Id */
        get: operations["get_function_user_valves_by_id_api_v1_functions_id__id__valves_user_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves/user/spec": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Function User Valves Spec By Id */
        get: operations["get_function_user_valves_spec_by_id_api_v1_functions_id__id__valves_user_spec_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/functions/id/{id}/valves/user/update": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Update Function User Valves By Id */
        post: operations["update_function_user_valves_by_id_api_v1_functions_id__id__valves_user_update_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/leaderboard": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Leaderboard
         * @description Get model leaderboard with Elo ratings. Query filters by tag similarity.
         */
        get: operations["get_leaderboard_api_v1_evaluations_leaderboard_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/leaderboard/{model_id}/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Model History
         * @description Get daily win/loss history for a specific model.
         */
        get: operations["get_model_history_api_v1_evaluations_leaderboard__model_id__history_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Config */
        get: operations["get_config_api_v1_evaluations_config_get_get"];
        put?: never;
        /** Update Config */
        post: operations["update_config_api_v1_evaluations_config_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Feedbacks */
        get: operations["get_all_feedbacks_api_v1_evaluations_feedbacks_all_get_get"];
        put?: never;
        post?: never;
        /** Delete All Feedbacks */
        delete: operations["delete_all_feedbacks_api_v1_evaluations_feedbacks_all_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks/all/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Feedback Ids */
        get: operations["get_all_feedback_ids_api_v1_evaluations_feedbacks_all_ids_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks/all/export": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Export All Feedbacks */
        get: operations["export_all_feedbacks_api_v1_evaluations_feedbacks_all_export_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Feedbacks */
        get: operations["get_feedbacks_api_v1_evaluations_feedbacks_user_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /** Delete Feedbacks */
        delete: operations["delete_feedbacks_api_v1_evaluations_feedbacks_delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedbacks/list": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Feedbacks */
        get: operations["get_feedbacks_api_v1_evaluations_feedbacks_list_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Feedback */
        post: operations["create_feedback_api_v1_evaluations_feedback_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/evaluations/feedback/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Feedback By Id */
        get: operations["get_feedback_by_id_api_v1_evaluations_feedback__id__get_get"];
        put?: never;
        /** Update Feedback By Id */
        post: operations["update_feedback_by_id_api_v1_evaluations_feedback__id__post_post"];
        /** Delete Feedback By Id */
        delete: operations["delete_feedback_by_id_api_v1_evaluations_feedback__id__delete_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Model Analytics
         * @description Get message counts per model.
         */
        get: operations["get_model_analytics_api_v1_analytics_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/users": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Analytics
         * @description Get message counts and token usage per user with user info.
         */
        get: operations["get_user_analytics_api_v1_analytics_users_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Messages
         * @description Query messages with filters.
         */
        get: operations["get_messages_api_v1_analytics_messages_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/summary": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Summary
         * @description Get summary statistics for the dashboard.
         */
        get: operations["get_summary_api_v1_analytics_summary_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/daily": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Daily Stats
         * @description Get message counts grouped by model for time-series chart.
         */
        get: operations["get_daily_stats_api_v1_analytics_daily_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/tokens": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Token Usage
         * @description Get token usage aggregated by model.
         */
        get: operations["get_token_usage_api_v1_analytics_tokens_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/models/{model_id}/chats": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Model Chats
         * @description Get chats that used a specific model, with preview and feedback info.
         */
        get: operations["get_model_chats_api_v1_analytics_models__model_id__chats_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/analytics/models/{model_id}/overview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Model Overview
         * @description Get model overview with feedback history and chat tags.
         */
        get: operations["get_model_overview_api_v1_analytics_models__model_id__overview_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/gravatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Gravatar */
        get: operations["get_gravatar_api_v1_utils_gravatar_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/code/format": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Format Code */
        post: operations["format_code_api_v1_utils_code_format_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/code/execute": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Execute Code */
        post: operations["execute_code_api_v1_utils_code_execute_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/markdown": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Get Html From Markdown */
        post: operations["get_html_from_markdown_api_v1_utils_markdown_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Download Chat As Pdf */
        post: operations["download_chat_as_pdf_api_v1_utils_pdf_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/utils/db/download": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Download Db */
        get: operations["download_db_api_v1_utils_db_download_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/terminals/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Terminal Servers
         * @description Return terminal servers the authenticated user has access to.
         */
        get: operations["list_terminal_servers_api_v1_terminals__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/terminals/{server_id}/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        get: operations["proxy_terminal_api_v1_terminals__server_id___path__head_get"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        put: operations["proxy_terminal_api_v1_terminals__server_id___path__head_put"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        post: operations["proxy_terminal_api_v1_terminals__server_id___path__head_post"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        delete: operations["proxy_terminal_api_v1_terminals__server_id___path__head_delete"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        options: operations["proxy_terminal_api_v1_terminals__server_id___path__head_options"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        head: operations["proxy_terminal_api_v1_terminals__server_id___path__head_head"];
        /**
         * Proxy Terminal
         * @description Proxy a request to the admin terminal server identified by *server_id*.
         */
        patch: operations["proxy_terminal_api_v1_terminals__server_id___path__head_patch"];
        trace?: never;
    };
    "/api/v1/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_api_v1_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/models": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Models */
        get: operations["get_models_api_models_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/models/base": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Base Models */
        get: operations["get_base_models_api_models_base_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/embeddings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Embeddings
         * @description OpenAI-compatible embeddings endpoint.
         *
         *     This handler:
         *       - Performs user/model checks and dispatches to the correct backend.
         *       - Supports OpenAI, Ollama, arena models, pipelines, and any compatible provider.
         *
         *     Args:
         *         request (Request): Request context.
         *         form_data (dict): OpenAI-like payload (e.g., {"model": "...", "input": [...]})
         *         user (UserModel): Authenticated user.
         *
         *     Returns:
         *         dict: OpenAI-compatible embeddings response.
         */
        post: operations["embeddings_api_v1_embeddings_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/embeddings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Embeddings
         * @description OpenAI-compatible embeddings endpoint.
         *
         *     This handler:
         *       - Performs user/model checks and dispatches to the correct backend.
         *       - Supports OpenAI, Ollama, arena models, pipelines, and any compatible provider.
         *
         *     Args:
         *         request (Request): Request context.
         *         form_data (dict): OpenAI-like payload (e.g., {"model": "...", "input": [...]})
         *         user (UserModel): Authenticated user.
         *
         *     Returns:
         *         dict: OpenAI-compatible embeddings response.
         */
        post: operations["embeddings_api_embeddings_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Chat Completion */
        post: operations["chat_completion_api_v1_chat_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/chat/completions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Chat Completion */
        post: operations["chat_completion_api_chat_completions_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v1/messages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Messages
         * @description Anthropic Messages API compatible endpoint.
         *
         *     Accepts the Anthropic Messages API format, converts internally to OpenAI
         *     Chat Completions format, routes through the existing chat completion
         *     pipeline, then converts the response back to Anthropic Messages format.
         *
         *     Supports both streaming and non-streaming requests.
         *     All models configured in Open WebUI are accessible via this endpoint.
         *
         *     Authentication: Supports both standard Authorization header and
         *     Anthropic's x-api-key header (via middleware translation).
         */
        post: operations["generate_messages_api_v1_messages_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/message": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Generate Messages
         * @description Anthropic Messages API compatible endpoint.
         *
         *     Accepts the Anthropic Messages API format, converts internally to OpenAI
         *     Chat Completions format, routes through the existing chat completion
         *     pipeline, then converts the response back to Anthropic Messages format.
         *
         *     Supports both streaming and non-streaming requests.
         *     All models configured in Open WebUI are accessible via this endpoint.
         *
         *     Authentication: Supports both standard Authorization header and
         *     Anthropic's x-api-key header (via middleware translation).
         */
        post: operations["generate_messages_api_message_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/chat/completed": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Chat Completed */
        post: operations["chat_completed_api_chat_completed_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/chat/actions/{action_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Chat Action */
        post: operations["chat_action_api_chat_actions__action_id__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/tasks/stop/{task_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Stop Task Endpoint */
        post: operations["stop_task_endpoint_api_tasks_stop__task_id__post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/tasks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Tasks Endpoint */
        get: operations["list_tasks_endpoint_api_tasks_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/tasks/chat/{chat_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List Tasks By Chat Id Endpoint */
        get: operations["list_tasks_by_chat_id_endpoint_api_tasks_chat__chat_id__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get App Config */
        get: operations["get_app_config_api_config_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/webhook": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Webhook Url */
        get: operations["get_webhook_url_api_webhook_get_get"];
        put?: never;
        /** Update Webhook Url */
        post: operations["update_webhook_url_api_webhook_post_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/version": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get App Version */
        get: operations["get_app_version_api_version_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/version/updates": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get App Latest Release Version */
        get: operations["get_app_latest_release_version_api_version_updates_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/changelog": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get App Changelog */
        get: operations["get_app_changelog_api_changelog_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/usage": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Current Usage
         * @description Get current usage statistics for Open WebUI.
         *     This is an experimental endpoint and subject to change.
         */
        get: operations["get_current_usage_api_usage_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/clients/{client_id}/authorize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Client Authorize */
        get: operations["oauth_client_authorize_oauth_clients__client_id__authorize_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/clients/{client_id}/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Client Callback */
        get: operations["oauth_client_callback_oauth_clients__client_id__callback_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/{provider}/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Login */
        get: operations["oauth_login_oauth__provider__login_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/{provider}/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Login Callback */
        get: operations["oauth_login_callback_oauth__provider__callback_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/oauth/{provider}/login/callback": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Oauth Login Callback */
        get: operations["oauth_login_callback_oauth__provider__login_callback_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/manifest.json": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Manifest Json */
        get: operations["get_manifest_json_manifest_json_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/opensearch.xml": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Opensearch Xml */
        get: operations["get_opensearch_xml_opensearch_xml_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Healthcheck */
        get: operations["healthcheck_health_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Readiness Check
         * @description Returns 200 only when the application is ready to accept traffic.
         */
        get: operations["readiness_check_ready_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/health/db": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Healthcheck With Db */
        get: operations["healthcheck_with_db_health_db_get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cache/{path}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Serve Cache File */
        get: operations["serve_cache_file_cache__path__get_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AccessGrantModel */
        AccessGrantModel: {
            /** Id */
            id: string;
            /** Resource Type */
            resource_type: string;
            /** Resource Id */
            resource_id: string;
            /** Principal Type */
            principal_type: string;
            /** Principal Id */
            principal_id: string;
            /** Permission */
            permission: string;
            /** Created At */
            created_at: number;
        };
        /** AccessGrantsPermissions */
        AccessGrantsPermissions: {
            /**
             * Allow Users
             * @default true
             */
            allow_users: boolean;
        };
        /** ActiveChatsForm */
        ActiveChatsForm: {
            /** Chat Ids */
            chat_ids: string[];
        };
        /** AddMemoryForm */
        AddMemoryForm: {
            /** Content */
            content: string;
        };
        /** AddPipelineForm */
        AddPipelineForm: {
            /** Url */
            url: string;
            /** Urlidx */
            urlIdx: number;
        };
        /** AddUserForm */
        AddUserForm: {
            /** Name */
            name: string;
            /** Email */
            email: string;
            /** Password */
            password: string;
            /**
             * Profile Image Url
             * @default /user.png
             */
            profile_image_url: string | null;
            /**
             * Role
             * @default pending
             */
            role: string | null;
        };
        /** AdminConfig */
        AdminConfig: {
            /** Show Admin Details */
            SHOW_ADMIN_DETAILS: boolean;
            /** Admin Email */
            ADMIN_EMAIL?: string | null;
            /** Webui Url */
            WEBUI_URL: string;
            /** Enable Signup */
            ENABLE_SIGNUP: boolean;
            /** Enable Api Keys */
            ENABLE_API_KEYS: boolean;
            /** Enable Api Keys Endpoint Restrictions */
            ENABLE_API_KEYS_ENDPOINT_RESTRICTIONS: boolean;
            /** Api Keys Allowed Endpoints */
            API_KEYS_ALLOWED_ENDPOINTS: string;
            /** Default User Role */
            DEFAULT_USER_ROLE: string;
            /** Default Group Id */
            DEFAULT_GROUP_ID: string;
            /** Jwt Expires In */
            JWT_EXPIRES_IN: string;
            /** Enable Community Sharing */
            ENABLE_COMMUNITY_SHARING: boolean;
            /** Enable Message Rating */
            ENABLE_MESSAGE_RATING: boolean;
            /** Enable Folders */
            ENABLE_FOLDERS: boolean;
            /** Folder Max File Count */
            FOLDER_MAX_FILE_COUNT?: number | string | null;
            /** Enable Channels */
            ENABLE_CHANNELS: boolean;
            /** Enable Memories */
            ENABLE_MEMORIES: boolean;
            /** Enable Notes */
            ENABLE_NOTES: boolean;
            /** Enable User Webhooks */
            ENABLE_USER_WEBHOOKS: boolean;
            /** Enable User Status */
            ENABLE_USER_STATUS: boolean;
            /** Pending User Overlay Title */
            PENDING_USER_OVERLAY_TITLE?: string | null;
            /** Pending User Overlay Content */
            PENDING_USER_OVERLAY_CONTENT?: string | null;
            /** Response Watermark */
            RESPONSE_WATERMARK?: string | null;
        };
        /** AggregateChatStats */
        AggregateChatStats: {
            /** Average Response Time */
            average_response_time: number;
            /** Average User Message Content Length */
            average_user_message_content_length: number;
            /** Average Assistant Message Content Length */
            average_assistant_message_content_length: number;
            /** Models */
            models: {
                [key: string]: number;
            };
            /** Message Count */
            message_count: number;
            /** History Models */
            history_models: {
                [key: string]: number;
            };
            /** History Message Count */
            history_message_count: number;
            /** History User Message Count */
            history_user_message_count: number;
            /** History Assistant Message Count */
            history_assistant_message_count: number;
        };
        /** ApiKey */
        ApiKey: {
            /** Api Key */
            api_key?: string | null;
        };
        /** AudioConfigUpdateForm */
        AudioConfigUpdateForm: {
            tts: components["schemas"]["TTSConfigForm"];
            stt: components["schemas"]["STTConfigForm"];
        };
        /** AzureOpenAIConfigForm */
        AzureOpenAIConfigForm: {
            /** Url */
            url: string;
            /** Key */
            key: string;
            /** Version */
            version: string;
        };
        /** BannerModel */
        BannerModel: {
            /** Id */
            id: string;
            /** Type */
            type: string;
            /** Title */
            title?: string | null;
            /** Content */
            content: string;
            /** Dismissible */
            dismissible: boolean;
            /** Timestamp */
            timestamp: number;
        };
        /** BatchProcessFilesForm */
        BatchProcessFilesForm: {
            /** Files */
            files: components["schemas"]["FileModel"][];
            /** Collection Name */
            collection_name: string;
        };
        /** BatchProcessFilesResponse */
        BatchProcessFilesResponse: {
            /** Results */
            results: components["schemas"]["BatchProcessFilesResult"][];
            /** Errors */
            errors: components["schemas"]["BatchProcessFilesResult"][];
        };
        /** BatchProcessFilesResult */
        BatchProcessFilesResult: {
            /** File Id */
            file_id: string;
            /** Status */
            status: string;
            /** Error */
            error?: string | null;
        };
        /** Body_image_edits_api_v1_images_edit_post */
        Body_image_edits_api_v1_images_edit_post: {
            form_data: components["schemas"]["EditImageForm"];
            /** Metadata */
            metadata?: {
                [key: string]: unknown;
            } | null;
        };
        /** Body_transcription_api_v1_audio_transcriptions_post */
        Body_transcription_api_v1_audio_transcriptions_post: {
            /** File */
            file: string;
            /** Language */
            language?: string | null;
        };
        /** Body_upload_file_api_v1_files__post */
        Body_upload_file_api_v1_files__post: {
            /** File */
            file: string;
            /** Metadata */
            metadata?: {
                [key: string]: unknown;
            } | string | null;
        };
        /** Body_upload_model_ollama_models_upload__url_idx__post */
        Body_upload_model_ollama_models_upload__url_idx__post: {
            /** File */
            file: string;
        };
        /** Body_upload_model_ollama_models_upload_post */
        Body_upload_model_ollama_models_upload_post: {
            /** File */
            file: string;
        };
        /** Body_upload_pipeline_api_v1_pipelines_upload_post */
        Body_upload_pipeline_api_v1_pipelines_upload_post: {
            /** Urlidx */
            urlIdx: number;
            /** File */
            file: string;
        };
        /** ChannelForm */
        ChannelForm: {
            /**
             * Name
             * @default
             */
            name: string;
            /** Description */
            description?: string | null;
            /** Is Private */
            is_private?: boolean | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
            /** Group Ids */
            group_ids?: string[] | null;
            /** User Ids */
            user_ids?: string[] | null;
        };
        /** ChannelFullResponse */
        ChannelFullResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Type */
            type?: string | null;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Is Private */
            is_private?: boolean | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Updated By */
            updated_by?: string | null;
            /** Archived At */
            archived_at?: number | null;
            /** Archived By */
            archived_by?: string | null;
            /** Deleted At */
            deleted_at?: number | null;
            /** Deleted By */
            deleted_by?: string | null;
            /**
             * Is Manager
             * @default false
             */
            is_manager: boolean;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean;
            /** User Count */
            user_count?: number | null;
            /** User Ids */
            user_ids?: string[] | null;
            /** Users */
            users?: components["schemas"]["UserIdNameStatusResponse"][] | null;
            /** Last Read At */
            last_read_at?: number | null;
            /**
             * Unread Count
             * @default 0
             */
            unread_count: number;
        };
        /** ChannelListItemResponse */
        ChannelListItemResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Type */
            type?: string | null;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Is Private */
            is_private?: boolean | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Updated By */
            updated_by?: string | null;
            /** Archived At */
            archived_at?: number | null;
            /** Archived By */
            archived_by?: string | null;
            /** Deleted At */
            deleted_at?: number | null;
            /** Deleted By */
            deleted_by?: string | null;
            /** User Ids */
            user_ids?: string[] | null;
            /** Users */
            users?: components["schemas"]["UserIdNameStatusResponse"][] | null;
            /** Last Message At */
            last_message_at?: number | null;
            /**
             * Unread Count
             * @default 0
             */
            unread_count: number;
        };
        /** ChannelModel */
        ChannelModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Type */
            type?: string | null;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Is Private */
            is_private?: boolean | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Updated By */
            updated_by?: string | null;
            /** Archived At */
            archived_at?: number | null;
            /** Archived By */
            archived_by?: string | null;
            /** Deleted At */
            deleted_at?: number | null;
            /** Deleted By */
            deleted_by?: string | null;
        };
        /** ChannelWebhookForm */
        ChannelWebhookForm: {
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
        };
        /** ChannelWebhookModel */
        ChannelWebhookModel: {
            /** Id */
            id: string;
            /** Channel Id */
            channel_id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
            /** Token */
            token: string;
            /** Last Used At */
            last_used_at?: number | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** ChatBody */
        ChatBody: {
            history: components["schemas"]["ChatHistoryStats"];
        };
        /** ChatFolderIdForm */
        ChatFolderIdForm: {
            /** Folder Id */
            folder_id?: string | null;
        };
        /** ChatForm */
        ChatForm: {
            /** Chat */
            chat: {
                [key: string]: unknown;
            };
            /** Folder Id */
            folder_id?: string | null;
        };
        /** ChatHistoryStats */
        ChatHistoryStats: {
            /** Messages */
            messages: {
                [key: string]: components["schemas"]["MessageStats"];
            };
            /** Currentid */
            currentId?: string | null;
        };
        /** ChatImportForm */
        ChatImportForm: {
            /** Chat */
            chat: {
                [key: string]: unknown;
            };
            /** Folder Id */
            folder_id?: string | null;
            /**
             * Meta
             * @default {}
             */
            meta: {
                [key: string]: unknown;
            } | null;
            /**
             * Pinned
             * @default false
             */
            pinned: boolean | null;
            /** Created At */
            created_at?: number | null;
            /** Updated At */
            updated_at?: number | null;
        };
        /** ChatMessageModel */
        ChatMessageModel: {
            /** Id */
            id: string;
            /** Chat Id */
            chat_id: string;
            /** User Id */
            user_id: string;
            /** Role */
            role: string;
            /** Parent Id */
            parent_id?: string | null;
            /** Content */
            content?: unknown | null;
            /** Output */
            output?: unknown[] | null;
            /** Model Id */
            model_id?: string | null;
            /** Files */
            files?: unknown[] | null;
            /** Sources */
            sources?: unknown[] | null;
            /** Embeds */
            embeds?: unknown[] | null;
            /**
             * Done
             * @default true
             */
            done: boolean;
            /** Status History */
            status_history?: unknown[] | null;
            /** Error */
            error?: {
                [key: string]: unknown;
            } | string | null;
            /** Usage */
            usage?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** ChatPermissions */
        ChatPermissions: {
            /**
             * Controls
             * @default true
             */
            controls: boolean;
            /**
             * Valves
             * @default true
             */
            valves: boolean;
            /**
             * System Prompt
             * @default true
             */
            system_prompt: boolean;
            /**
             * Params
             * @default true
             */
            params: boolean;
            /**
             * File Upload
             * @default true
             */
            file_upload: boolean;
            /**
             * Web Upload
             * @default true
             */
            web_upload: boolean;
            /**
             * Delete
             * @default true
             */
            delete: boolean;
            /**
             * Delete Message
             * @default true
             */
            delete_message: boolean;
            /**
             * Continue Response
             * @default true
             */
            continue_response: boolean;
            /**
             * Regenerate Response
             * @default true
             */
            regenerate_response: boolean;
            /**
             * Rate Response
             * @default true
             */
            rate_response: boolean;
            /**
             * Edit
             * @default true
             */
            edit: boolean;
            /**
             * Share
             * @default true
             */
            share: boolean;
            /**
             * Export
             * @default true
             */
            export: boolean;
            /**
             * Stt
             * @default true
             */
            stt: boolean;
            /**
             * Tts
             * @default true
             */
            tts: boolean;
            /**
             * Call
             * @default true
             */
            call: boolean;
            /**
             * Multiple Models
             * @default true
             */
            multiple_models: boolean;
            /**
             * Temporary
             * @default true
             */
            temporary: boolean;
            /**
             * Temporary Enforced
             * @default false
             */
            temporary_enforced: boolean;
        };
        /** ChatResponse */
        ChatResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Title */
            title: string;
            /** Chat */
            chat: {
                [key: string]: unknown;
            };
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            /** Share Id */
            share_id?: string | null;
            /** Archived */
            archived: boolean;
            /**
             * Pinned
             * @default false
             */
            pinned: boolean | null;
            /**
             * Meta
             * @default {}
             */
            meta: {
                [key: string]: unknown;
            };
            /** Folder Id */
            folder_id?: string | null;
        };
        /** ChatStatsExport */
        ChatStatsExport: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            stats: components["schemas"]["AggregateChatStats"];
            chat: components["schemas"]["ChatBody"];
        };
        /** ChatStatsExportList */
        ChatStatsExportList: {
            /**
             * Type
             * @default chats
             */
            type: string;
            /** Items */
            items: components["schemas"]["ChatStatsExport"][];
            /** Total */
            total: number;
            /** Page */
            page: number;
        };
        /** ChatTitleIdResponse */
        ChatTitleIdResponse: {
            /** Id */
            id: string;
            /** Title */
            title: string;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** ChatTitleMessagesForm */
        ChatTitleMessagesForm: {
            /** Title */
            title: string;
            /** Messages */
            messages: {
                [key: string]: unknown;
            }[];
        };
        /** ChatUsageStatsListResponse */
        ChatUsageStatsListResponse: {
            /** Items */
            items: components["schemas"]["ChatUsageStatsResponse"][];
            /** Total */
            total: number;
        } & {
            [key: string]: unknown;
        };
        /** ChatUsageStatsResponse */
        ChatUsageStatsResponse: {
            /** Id */
            id: string;
            /**
             * Models
             * @default {}
             */
            models: {
                [key: string]: unknown;
            };
            /** Message Count */
            message_count: number;
            /**
             * History Models
             * @default {}
             */
            history_models: {
                [key: string]: unknown;
            };
            /** History Message Count */
            history_message_count: number;
            /** History User Message Count */
            history_user_message_count: number;
            /** History Assistant Message Count */
            history_assistant_message_count: number;
            /** Average Response Time */
            average_response_time: number;
            /** Average User Message Content Length */
            average_user_message_content_length: number;
            /** Average Assistant Message Content Length */
            average_assistant_message_content_length: number;
            /**
             * Tags
             * @default []
             */
            tags: string[];
            /** Last Message At */
            last_message_at: number;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        } & {
            [key: string]: unknown;
        };
        /** ChatsImportForm */
        ChatsImportForm: {
            /** Chats */
            chats: components["schemas"]["ChatImportForm"][];
        };
        /** CloneForm */
        CloneForm: {
            /** Title */
            title?: string | null;
        };
        /** CodeForm */
        CodeForm: {
            /** Code */
            code: string;
        };
        /** CodeInterpreterConfigForm */
        CodeInterpreterConfigForm: {
            /** Enable Code Execution */
            ENABLE_CODE_EXECUTION: boolean;
            /** Code Execution Engine */
            CODE_EXECUTION_ENGINE: string;
            /** Code Execution Jupyter Url */
            CODE_EXECUTION_JUPYTER_URL: string | null;
            /** Code Execution Jupyter Auth */
            CODE_EXECUTION_JUPYTER_AUTH: string | null;
            /** Code Execution Jupyter Auth Token */
            CODE_EXECUTION_JUPYTER_AUTH_TOKEN: string | null;
            /** Code Execution Jupyter Auth Password */
            CODE_EXECUTION_JUPYTER_AUTH_PASSWORD: string | null;
            /** Code Execution Jupyter Timeout */
            CODE_EXECUTION_JUPYTER_TIMEOUT: number | null;
            /** Enable Code Interpreter */
            ENABLE_CODE_INTERPRETER: boolean;
            /** Code Interpreter Engine */
            CODE_INTERPRETER_ENGINE: string;
            /** Code Interpreter Prompt Template */
            CODE_INTERPRETER_PROMPT_TEMPLATE: string | null;
            /** Code Interpreter Jupyter Url */
            CODE_INTERPRETER_JUPYTER_URL: string | null;
            /** Code Interpreter Jupyter Auth */
            CODE_INTERPRETER_JUPYTER_AUTH: string | null;
            /** Code Interpreter Jupyter Auth Token */
            CODE_INTERPRETER_JUPYTER_AUTH_TOKEN: string | null;
            /** Code Interpreter Jupyter Auth Password */
            CODE_INTERPRETER_JUPYTER_AUTH_PASSWORD: string | null;
            /** Code Interpreter Jupyter Timeout */
            CODE_INTERPRETER_JUPYTER_TIMEOUT: number | null;
        };
        /** ConfigForm */
        ConfigForm: {
            /** Rag Template */
            RAG_TEMPLATE?: string | null;
            /** Top K */
            TOP_K?: number | null;
            /** Bypass Embedding And Retrieval */
            BYPASS_EMBEDDING_AND_RETRIEVAL?: boolean | null;
            /** Rag Full Context */
            RAG_FULL_CONTEXT?: boolean | null;
            /** Enable Rag Hybrid Search */
            ENABLE_RAG_HYBRID_SEARCH?: boolean | null;
            /** Enable Rag Hybrid Search Enriched Texts */
            ENABLE_RAG_HYBRID_SEARCH_ENRICHED_TEXTS?: boolean | null;
            /** Top K Reranker */
            TOP_K_RERANKER?: number | null;
            /** Relevance Threshold */
            RELEVANCE_THRESHOLD?: number | null;
            /** Hybrid Bm25 Weight */
            HYBRID_BM25_WEIGHT?: number | null;
            /** Content Extraction Engine */
            CONTENT_EXTRACTION_ENGINE?: string | null;
            /** Pdf Extract Images */
            PDF_EXTRACT_IMAGES?: boolean | null;
            /** Pdf Loader Mode */
            PDF_LOADER_MODE?: string | null;
            /** Datalab Marker Api Key */
            DATALAB_MARKER_API_KEY?: string | null;
            /** Datalab Marker Api Base Url */
            DATALAB_MARKER_API_BASE_URL?: string | null;
            /** Datalab Marker Additional Config */
            DATALAB_MARKER_ADDITIONAL_CONFIG?: string | null;
            /** Datalab Marker Skip Cache */
            DATALAB_MARKER_SKIP_CACHE?: boolean | null;
            /** Datalab Marker Force Ocr */
            DATALAB_MARKER_FORCE_OCR?: boolean | null;
            /** Datalab Marker Paginate */
            DATALAB_MARKER_PAGINATE?: boolean | null;
            /** Datalab Marker Strip Existing Ocr */
            DATALAB_MARKER_STRIP_EXISTING_OCR?: boolean | null;
            /** Datalab Marker Disable Image Extraction */
            DATALAB_MARKER_DISABLE_IMAGE_EXTRACTION?: boolean | null;
            /** Datalab Marker Format Lines */
            DATALAB_MARKER_FORMAT_LINES?: boolean | null;
            /** Datalab Marker Use Llm */
            DATALAB_MARKER_USE_LLM?: boolean | null;
            /** Datalab Marker Output Format */
            DATALAB_MARKER_OUTPUT_FORMAT?: string | null;
            /** External Document Loader Url */
            EXTERNAL_DOCUMENT_LOADER_URL?: string | null;
            /** External Document Loader Api Key */
            EXTERNAL_DOCUMENT_LOADER_API_KEY?: string | null;
            /** Tika Server Url */
            TIKA_SERVER_URL?: string | null;
            /** Docling Server Url */
            DOCLING_SERVER_URL?: string | null;
            /** Docling Api Key */
            DOCLING_API_KEY?: string | null;
            /** Docling Params */
            DOCLING_PARAMS?: {
                [key: string]: unknown;
            } | null;
            /** Document Intelligence Endpoint */
            DOCUMENT_INTELLIGENCE_ENDPOINT?: string | null;
            /** Document Intelligence Key */
            DOCUMENT_INTELLIGENCE_KEY?: string | null;
            /** Document Intelligence Model */
            DOCUMENT_INTELLIGENCE_MODEL?: string | null;
            /** Mistral Ocr Api Base Url */
            MISTRAL_OCR_API_BASE_URL?: string | null;
            /** Mistral Ocr Api Key */
            MISTRAL_OCR_API_KEY?: string | null;
            /** Mineru Api Mode */
            MINERU_API_MODE?: string | null;
            /** Mineru Api Url */
            MINERU_API_URL?: string | null;
            /** Mineru Api Key */
            MINERU_API_KEY?: string | null;
            /** Mineru Api Timeout */
            MINERU_API_TIMEOUT?: string | null;
            /** Mineru Params */
            MINERU_PARAMS?: {
                [key: string]: unknown;
            } | null;
            /** Rag Reranking Model */
            RAG_RERANKING_MODEL?: string | null;
            /** Rag Reranking Engine */
            RAG_RERANKING_ENGINE?: string | null;
            /** Rag External Reranker Url */
            RAG_EXTERNAL_RERANKER_URL?: string | null;
            /** Rag External Reranker Api Key */
            RAG_EXTERNAL_RERANKER_API_KEY?: string | null;
            /** Rag External Reranker Timeout */
            RAG_EXTERNAL_RERANKER_TIMEOUT?: string | null;
            /** Text Splitter */
            TEXT_SPLITTER?: string | null;
            /** Enable Markdown Header Text Splitter */
            ENABLE_MARKDOWN_HEADER_TEXT_SPLITTER?: boolean | null;
            /** Chunk Size */
            CHUNK_SIZE?: number | null;
            /** Chunk Min Size Target */
            CHUNK_MIN_SIZE_TARGET?: number | null;
            /** Chunk Overlap */
            CHUNK_OVERLAP?: number | null;
            /** File Max Size */
            FILE_MAX_SIZE?: number | string | null;
            /** File Max Count */
            FILE_MAX_COUNT?: number | string | null;
            /** File Image Compression Width */
            FILE_IMAGE_COMPRESSION_WIDTH?: number | string | null;
            /** File Image Compression Height */
            FILE_IMAGE_COMPRESSION_HEIGHT?: number | string | null;
            /** Allowed File Extensions */
            ALLOWED_FILE_EXTENSIONS?: string[] | null;
            /** Enable Google Drive Integration */
            ENABLE_GOOGLE_DRIVE_INTEGRATION?: boolean | null;
            /** Enable Onedrive Integration */
            ENABLE_ONEDRIVE_INTEGRATION?: boolean | null;
            web?: components["schemas"]["WebConfig"] | null;
        };
        /** ConnectionsConfigForm */
        ConnectionsConfigForm: {
            /** Enable Direct Connections */
            ENABLE_DIRECT_CONNECTIONS: boolean;
            /** Enable Base Models Cache */
            ENABLE_BASE_MODELS_CACHE: boolean;
        };
        /** ContentForm */
        ContentForm: {
            /** Content */
            content: string;
        };
        /** CopyModelForm */
        CopyModelForm: {
            /** Source */
            source: string;
            /** Destination */
            destination: string;
        };
        /** CreateChannelForm */
        CreateChannelForm: {
            /**
             * Name
             * @default
             */
            name: string;
            /** Description */
            description?: string | null;
            /** Is Private */
            is_private?: boolean | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
            /** Group Ids */
            group_ids?: string[] | null;
            /** User Ids */
            user_ids?: string[] | null;
            /** Type */
            type?: string | null;
        };
        /** CreateImageForm */
        CreateImageForm: {
            /** Model */
            model?: string | null;
            /** Prompt */
            prompt: string;
            /** Size */
            size?: string | null;
            /**
             * N
             * @default 1
             */
            n: number;
            /** Steps */
            steps?: number | null;
            /** Negative Prompt */
            negative_prompt?: string | null;
        };
        /** CreateModelForm */
        CreateModelForm: {
            /** Model */
            model?: string | null;
            /** Stream */
            stream?: boolean | null;
            /** Path */
            path?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** DailyStatsEntry */
        DailyStatsEntry: {
            /** Date */
            date: string;
            /** Models */
            models: {
                [key: string]: number;
            };
        };
        /** DailyStatsResponse */
        DailyStatsResponse: {
            /** Data */
            data: components["schemas"]["DailyStatsEntry"][];
        };
        /** DeleteForm */
        DeleteForm: {
            /** Collection Name */
            collection_name: string;
            /** File Id */
            file_id: string;
        };
        /** DeletePipelineForm */
        DeletePipelineForm: {
            /** Id */
            id: string;
            /** Urlidx */
            urlIdx: number;
        };
        /** EditImageForm */
        EditImageForm: {
            /** Image */
            image: string | string[];
            /** Prompt */
            prompt: string;
            /** Model */
            model?: string | null;
            /** Size */
            size?: string | null;
            /** N */
            n?: number | null;
            /** Negative Prompt */
            negative_prompt?: string | null;
            /** Background */
            background?: string | null;
        };
        /** EmbeddingModelUpdateForm */
        EmbeddingModelUpdateForm: {
            openai_config?: components["schemas"]["open_webui__routers__retrieval__OpenAIConfigForm"] | null;
            ollama_config?: components["schemas"]["open_webui__routers__retrieval__OllamaConfigForm"] | null;
            azure_openai_config?: components["schemas"]["AzureOpenAIConfigForm"] | null;
            /** Rag Embedding Engine */
            RAG_EMBEDDING_ENGINE: string;
            /** Rag Embedding Model */
            RAG_EMBEDDING_MODEL: string;
            /**
             * Rag Embedding Batch Size
             * @default 1
             */
            RAG_EMBEDDING_BATCH_SIZE: number | null;
            /**
             * Enable Async Embedding
             * @default true
             */
            ENABLE_ASYNC_EMBEDDING: boolean | null;
            /**
             * Rag Embedding Concurrent Requests
             * @default 0
             */
            RAG_EMBEDDING_CONCURRENT_REQUESTS: number | null;
        };
        /** EventForm */
        EventForm: {
            /** Type */
            type: string;
            /** Data */
            data: {
                [key: string]: unknown;
            };
        };
        /** FeaturesPermissions */
        FeaturesPermissions: {
            /**
             * Api Keys
             * @default false
             */
            api_keys: boolean;
            /**
             * Notes
             * @default true
             */
            notes: boolean;
            /**
             * Channels
             * @default true
             */
            channels: boolean;
            /**
             * Folders
             * @default true
             */
            folders: boolean;
            /**
             * Direct Tool Servers
             * @default false
             */
            direct_tool_servers: boolean;
            /**
             * Web Search
             * @default true
             */
            web_search: boolean;
            /**
             * Image Generation
             * @default true
             */
            image_generation: boolean;
            /**
             * Code Interpreter
             * @default true
             */
            code_interpreter: boolean;
            /**
             * Memories
             * @default true
             */
            memories: boolean;
        };
        /** FeedbackForm */
        FeedbackForm: {
            /** Type */
            type: string;
            data?: components["schemas"]["RatingData"] | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            snapshot?: components["schemas"]["SnapshotData"] | null;
        } & {
            [key: string]: unknown;
        };
        /** FeedbackIdResponse */
        FeedbackIdResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FeedbackListResponse */
        FeedbackListResponse: {
            /** Items */
            items: components["schemas"]["FeedbackUserResponse"][];
            /** Total */
            total: number;
        };
        /** FeedbackModel */
        FeedbackModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Version */
            version: number;
            /** Type */
            type: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Snapshot */
            snapshot?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FeedbackResponse */
        FeedbackResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Version */
            version: number;
            /** Type */
            type: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FeedbackUserResponse */
        FeedbackUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Version */
            version: number;
            /** Type */
            type: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["open_webui__models__feedbacks__UserResponse"] | null;
        };
        /** FileListResponse */
        FileListResponse: {
            /** Items */
            items: components["schemas"]["FileModelResponse"][];
            /** Total */
            total: number;
        };
        /** FileMeta */
        FileMeta: {
            /** Name */
            name?: string | null;
            /** Content Type */
            content_type?: string | null;
            /** Size */
            size?: number | null;
        } & {
            [key: string]: unknown;
        };
        /** FileMetadataResponse */
        FileMetadataResponse: {
            /** Id */
            id: string;
            /** Hash */
            hash?: string | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FileModel */
        FileModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Hash */
            hash?: string | null;
            /** Filename */
            filename: string;
            /** Path */
            path?: string | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number | null;
            /** Updated At */
            updated_at: number | null;
        };
        /** FileModelResponse */
        FileModelResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Hash */
            hash?: string | null;
            /** Filename */
            filename: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            meta?: components["schemas"]["FileMeta"] | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at?: number | null;
        } & {
            [key: string]: unknown;
        };
        /** FileUserResponse */
        FileUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Hash */
            hash?: string | null;
            /** Filename */
            filename: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            meta?: components["schemas"]["FileMeta"] | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at?: number | null;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        } & {
            [key: string]: unknown;
        };
        /** FolderForm */
        FolderForm: {
            /** Name */
            name: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Parent Id */
            parent_id?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** FolderIsExpandedForm */
        FolderIsExpandedForm: {
            /** Is Expanded */
            is_expanded: boolean;
        };
        /** FolderMetadataResponse */
        FolderMetadataResponse: {
            /** Icon */
            icon?: string | null;
        };
        /** FolderModel */
        FolderModel: {
            /** Id */
            id: string;
            /** Parent Id */
            parent_id?: string | null;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Items */
            items?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Expanded
             * @default false
             */
            is_expanded: boolean;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FolderNameIdResponse */
        FolderNameIdResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            meta?: components["schemas"]["FolderMetadataResponse"] | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Expanded
             * @default false
             */
            is_expanded: boolean;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** FolderParentIdForm */
        FolderParentIdForm: {
            /** Parent Id */
            parent_id?: string | null;
        };
        /** FolderUpdateForm */
        FolderUpdateForm: {
            /** Name */
            name?: string | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** FunctionForm */
        FunctionForm: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            meta: components["schemas"]["FunctionMeta"];
        };
        /** FunctionMeta */
        FunctionMeta: {
            /** Description */
            description?: string | null;
            /**
             * Manifest
             * @default {}
             */
            manifest: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** FunctionModel */
        FunctionModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Type */
            type: string;
            /** Content */
            content: string;
            meta: components["schemas"]["FunctionMeta"];
            /**
             * Is Active
             * @default false
             */
            is_active: boolean;
            /**
             * Is Global
             * @default false
             */
            is_global: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** FunctionResponse */
        FunctionResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Type */
            type: string;
            /** Name */
            name: string;
            meta: components["schemas"]["FunctionMeta"];
            /** Is Active */
            is_active: boolean;
            /** Is Global */
            is_global: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** FunctionUserResponse */
        FunctionUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Type */
            type: string;
            /** Name */
            name: string;
            meta: components["schemas"]["FunctionMeta"];
            /** Is Active */
            is_active: boolean;
            /** Is Global */
            is_global: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        };
        /** FunctionWithValvesModel */
        FunctionWithValvesModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Type */
            type: string;
            /** Content */
            content: string;
            meta: components["schemas"]["FunctionMeta"];
            /** Valves */
            valves?: {
                [key: string]: unknown;
            } | null;
            /**
             * Is Active
             * @default false
             */
            is_active: boolean;
            /**
             * Is Global
             * @default false
             */
            is_global: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** GenerateCompletionForm */
        GenerateCompletionForm: {
            /** Model */
            model: string;
            /** Prompt */
            prompt?: string | null;
            /** Suffix */
            suffix?: string | null;
            /** Images */
            images?: string[] | null;
            /** Format */
            format?: {
                [key: string]: unknown;
            } | string | null;
            /** Options */
            options?: {
                [key: string]: unknown;
            } | null;
            /** System */
            system?: string | null;
            /** Template */
            template?: string | null;
            /** Context */
            context?: number[] | null;
            /**
             * Stream
             * @default true
             */
            stream: boolean | null;
            /** Raw */
            raw?: boolean | null;
            /** Keep Alive */
            keep_alive?: number | string | null;
        };
        /** GenerateEmbedForm */
        GenerateEmbedForm: {
            /** Model */
            model: string;
            /** Input */
            input: string[] | string;
            /** Truncate */
            truncate?: boolean | null;
            /** Options */
            options?: {
                [key: string]: unknown;
            } | null;
            /** Keep Alive */
            keep_alive?: number | string | null;
        } & {
            [key: string]: unknown;
        };
        /** GenerateEmbeddingsForm */
        GenerateEmbeddingsForm: {
            /** Model */
            model: string;
            /** Prompt */
            prompt: string;
            /** Options */
            options?: {
                [key: string]: unknown;
            } | null;
            /** Keep Alive */
            keep_alive?: number | string | null;
        };
        /** GroupExportResponse */
        GroupExportResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Member Count */
            member_count?: number | null;
            /**
             * User Ids
             * @default []
             */
            user_ids: string[];
        };
        /** GroupForm */
        GroupForm: {
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
        };
        /** GroupInfoResponse */
        GroupInfoResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Member Count */
            member_count?: number | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** GroupResponse */
        GroupResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Member Count */
            member_count?: number | null;
        };
        /** GroupUpdateForm */
        GroupUpdateForm: {
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** HistoryEntry */
        HistoryEntry: {
            /** Date */
            date: string;
            /**
             * Won
             * @default 0
             */
            won: number;
            /**
             * Lost
             * @default 0
             */
            lost: number;
        };
        /** ImagesConfig */
        ImagesConfig: {
            /** Enable Image Generation */
            ENABLE_IMAGE_GENERATION: boolean;
            /** Enable Image Prompt Generation */
            ENABLE_IMAGE_PROMPT_GENERATION: boolean;
            /** Image Generation Engine */
            IMAGE_GENERATION_ENGINE: string;
            /** Image Generation Model */
            IMAGE_GENERATION_MODEL: string;
            /** Image Size */
            IMAGE_SIZE: string | null;
            /** Image Steps */
            IMAGE_STEPS: number | null;
            /** Images Openai Api Base Url */
            IMAGES_OPENAI_API_BASE_URL: string;
            /** Images Openai Api Key */
            IMAGES_OPENAI_API_KEY: string;
            /** Images Openai Api Version */
            IMAGES_OPENAI_API_VERSION: string;
            /** Images Openai Api Params */
            IMAGES_OPENAI_API_PARAMS: {
                [key: string]: unknown;
            } | string | null;
            /** Automatic1111 Base Url */
            AUTOMATIC1111_BASE_URL: string;
            /** Automatic1111 Api Auth */
            AUTOMATIC1111_API_AUTH: {
                [key: string]: unknown;
            } | string | null;
            /** Automatic1111 Params */
            AUTOMATIC1111_PARAMS: {
                [key: string]: unknown;
            } | string | null;
            /** Comfyui Base Url */
            COMFYUI_BASE_URL: string;
            /** Comfyui Api Key */
            COMFYUI_API_KEY: string;
            /** Comfyui Workflow */
            COMFYUI_WORKFLOW: string;
            /** Comfyui Workflow Nodes */
            COMFYUI_WORKFLOW_NODES: {
                [key: string]: unknown;
            }[];
            /** Images Gemini Api Base Url */
            IMAGES_GEMINI_API_BASE_URL: string;
            /** Images Gemini Api Key */
            IMAGES_GEMINI_API_KEY: string;
            /** Images Gemini Endpoint Method */
            IMAGES_GEMINI_ENDPOINT_METHOD: string;
            /** Enable Image Edit */
            ENABLE_IMAGE_EDIT: boolean;
            /** Image Edit Engine */
            IMAGE_EDIT_ENGINE: string;
            /** Image Edit Model */
            IMAGE_EDIT_MODEL: string;
            /** Image Edit Size */
            IMAGE_EDIT_SIZE: string | null;
            /** Images Edit Openai Api Base Url */
            IMAGES_EDIT_OPENAI_API_BASE_URL: string;
            /** Images Edit Openai Api Key */
            IMAGES_EDIT_OPENAI_API_KEY: string;
            /** Images Edit Openai Api Version */
            IMAGES_EDIT_OPENAI_API_VERSION: string;
            /** Images Edit Gemini Api Base Url */
            IMAGES_EDIT_GEMINI_API_BASE_URL: string;
            /** Images Edit Gemini Api Key */
            IMAGES_EDIT_GEMINI_API_KEY: string;
            /** Images Edit Comfyui Base Url */
            IMAGES_EDIT_COMFYUI_BASE_URL: string;
            /** Images Edit Comfyui Api Key */
            IMAGES_EDIT_COMFYUI_API_KEY: string;
            /** Images Edit Comfyui Workflow */
            IMAGES_EDIT_COMFYUI_WORKFLOW: string;
            /** Images Edit Comfyui Workflow Nodes */
            IMAGES_EDIT_COMFYUI_WORKFLOW_NODES: {
                [key: string]: unknown;
            }[];
        };
        /** ImportConfigForm */
        ImportConfigForm: {
            /** Config */
            config: {
                [key: string]: unknown;
            };
        };
        /** KnowledgeAccessGrantsForm */
        KnowledgeAccessGrantsForm: {
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** KnowledgeAccessListResponse */
        KnowledgeAccessListResponse: {
            /** Items */
            items: components["schemas"]["KnowledgeAccessResponse"][];
            /** Total */
            total: number;
        };
        /** KnowledgeAccessResponse */
        KnowledgeAccessResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        };
        /** KnowledgeFileIdForm */
        KnowledgeFileIdForm: {
            /** File Id */
            file_id: string;
        };
        /** KnowledgeFileListResponse */
        KnowledgeFileListResponse: {
            /** Items */
            items: components["schemas"]["FileUserResponse"][];
            /** Total */
            total: number;
        };
        /** KnowledgeFilesResponse */
        KnowledgeFilesResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Files */
            files?: components["schemas"]["FileMetadataResponse"][] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        };
        /** KnowledgeForm */
        KnowledgeForm: {
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
        };
        /** KnowledgeResponse */
        KnowledgeResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description: string;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /** Files */
            files?: (components["schemas"]["FileMetadataResponse"] | {
                [key: string]: unknown;
            })[] | null;
        };
        /** LdapConfigForm */
        LdapConfigForm: {
            /** Enable Ldap */
            enable_ldap?: boolean | null;
        };
        /** LdapForm */
        LdapForm: {
            /** User */
            user: string;
            /** Password */
            password: string;
        };
        /** LdapServerConfig */
        LdapServerConfig: {
            /** Label */
            label: string;
            /** Host */
            host: string;
            /** Port */
            port?: number | null;
            /**
             * Attribute For Mail
             * @default mail
             */
            attribute_for_mail: string;
            /**
             * Attribute For Username
             * @default uid
             */
            attribute_for_username: string;
            /** App Dn */
            app_dn: string;
            /** App Dn Password */
            app_dn_password: string;
            /** Search Base */
            search_base: string;
            /**
             * Search Filters
             * @default
             */
            search_filters: string;
            /**
             * Use Tls
             * @default true
             */
            use_tls: boolean;
            /** Certificate Path */
            certificate_path?: string | null;
            /**
             * Validate Cert
             * @default true
             */
            validate_cert: boolean;
            /**
             * Ciphers
             * @default ALL
             */
            ciphers: string | null;
        };
        /** LeaderboardEntry */
        LeaderboardEntry: {
            /** Model Id */
            model_id: string;
            /** Rating */
            rating: number;
            /** Won */
            won: number;
            /** Lost */
            lost: number;
            /** Count */
            count: number;
            /** Top Tags */
            top_tags: {
                [key: string]: unknown;
            }[];
        };
        /** LeaderboardResponse */
        LeaderboardResponse: {
            /** Entries */
            entries: components["schemas"]["LeaderboardEntry"][];
        };
        /** LoadUrlForm */
        LoadUrlForm: {
            /**
             * Url
             * Format: uri
             */
            url: string;
        };
        /** MarkdownForm */
        MarkdownForm: {
            /** Md */
            md: string;
        };
        /** MemoryModel */
        MemoryModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Content */
            content: string;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** MemoryUpdateModel */
        MemoryUpdateModel: {
            /** Content */
            content?: string | null;
        };
        /** MessageModel */
        MessageModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Channel Id */
            channel_id?: string | null;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Pinned
             * @default false
             */
            is_pinned: boolean;
            /** Pinned By */
            pinned_by?: string | null;
            /** Pinned At */
            pinned_at?: number | null;
            /** Content */
            content: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** MessageResponse */
        MessageResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Channel Id */
            channel_id?: string | null;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Pinned
             * @default false
             */
            is_pinned: boolean;
            /** Pinned By */
            pinned_by?: string | null;
            /** Pinned At */
            pinned_at?: number | null;
            /** Content */
            content: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["UserNameResponse"] | null;
            reply_to_message?: components["schemas"]["MessageUserSlimResponse"] | null;
            /** Latest Reply At */
            latest_reply_at: number | null;
            /** Reply Count */
            reply_count: number;
            /** Reactions */
            reactions: components["schemas"]["Reactions"][];
        };
        /** MessageStats */
        MessageStats: {
            /** Id */
            id: string;
            /** Role */
            role: string;
            /** Model */
            model?: string | null;
            /** Content Length */
            content_length: number;
            /** Token Count */
            token_count?: number | null;
            /** Timestamp */
            timestamp?: number | null;
            /** Rating */
            rating?: number | null;
            /** Tags */
            tags?: string[] | null;
        };
        /** MessageUserResponse */
        MessageUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Channel Id */
            channel_id?: string | null;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Pinned
             * @default false
             */
            is_pinned: boolean;
            /** Pinned By */
            pinned_by?: string | null;
            /** Pinned At */
            pinned_at?: number | null;
            /** Content */
            content: string;
            /** Data */
            data?: boolean | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["UserNameResponse"] | null;
            reply_to_message?: components["schemas"]["MessageUserSlimResponse"] | null;
            /** Latest Reply At */
            latest_reply_at: number | null;
            /** Reply Count */
            reply_count: number;
            /** Reactions */
            reactions: components["schemas"]["Reactions"][];
        };
        /** MessageUserSlimResponse */
        MessageUserSlimResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Channel Id */
            channel_id?: string | null;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Pinned
             * @default false
             */
            is_pinned: boolean;
            /** Pinned By */
            pinned_by?: string | null;
            /** Pinned At */
            pinned_at?: number | null;
            /** Content */
            content: string;
            /** Data */
            data?: boolean | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["UserNameResponse"] | null;
        };
        /** MessageWithReactionsResponse */
        MessageWithReactionsResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Channel Id */
            channel_id?: string | null;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /**
             * Is Pinned
             * @default false
             */
            is_pinned: boolean;
            /** Pinned By */
            pinned_by?: string | null;
            /** Pinned At */
            pinned_at?: number | null;
            /** Content */
            content: string;
            /** Data */
            data?: boolean | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["UserNameResponse"] | null;
            /** Reactions */
            reactions: components["schemas"]["Reactions"][];
        };
        /** ModelAccessGrantsForm */
        ModelAccessGrantsForm: {
            /** Id */
            id: string;
            /** Name */
            name?: string | null;
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** ModelAccessListResponse */
        ModelAccessListResponse: {
            /** Items */
            items: components["schemas"]["ModelAccessResponse"][];
            /** Total */
            total: number;
        };
        /** ModelAccessResponse */
        ModelAccessResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Base Model Id */
            base_model_id?: string | null;
            /** Name */
            name: string;
            params: components["schemas"]["ModelParams"];
            meta: components["schemas"]["ModelMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Is Active */
            is_active: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        };
        /** ModelAnalyticsEntry */
        ModelAnalyticsEntry: {
            /** Model Id */
            model_id: string;
            /** Count */
            count: number;
        };
        /** ModelAnalyticsResponse */
        ModelAnalyticsResponse: {
            /** Models */
            models: components["schemas"]["ModelAnalyticsEntry"][];
        };
        /** ModelChatEntry */
        ModelChatEntry: {
            /** Chat Id */
            chat_id: string;
            /** User Id */
            user_id?: string | null;
            /** User Name */
            user_name?: string | null;
            /** First Message */
            first_message?: string | null;
            /** Updated At */
            updated_at: number;
        };
        /** ModelChatsResponse */
        ModelChatsResponse: {
            /** Chats */
            chats: components["schemas"]["ModelChatEntry"][];
            /** Total */
            total: number;
        };
        /** ModelForm */
        ModelForm: {
            /** Id */
            id: string;
            /** Base Model Id */
            base_model_id?: string | null;
            /** Name */
            name: string;
            meta: components["schemas"]["ModelMeta"];
            params: components["schemas"]["ModelParams"];
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
        };
        /** ModelHistoryEntry */
        ModelHistoryEntry: {
            /** Date */
            date: string;
            /** Won */
            won: number;
            /** Lost */
            lost: number;
        };
        /** ModelHistoryResponse */
        ModelHistoryResponse: {
            /** Model Id */
            model_id: string;
            /** History */
            history: components["schemas"]["ModelHistoryEntry"][];
        };
        /** ModelIdForm */
        ModelIdForm: {
            /** Id */
            id: string;
        };
        /** ModelMeta */
        ModelMeta: {
            /**
             * Profile Image Url
             * @default /static/favicon.png
             */
            profile_image_url: string | null;
            /** Description */
            description?: string | null;
            /** Capabilities */
            capabilities?: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** ModelModel */
        ModelModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Base Model Id */
            base_model_id?: string | null;
            /** Name */
            name: string;
            params: components["schemas"]["ModelParams"];
            meta: components["schemas"]["ModelMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Is Active */
            is_active: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** ModelNameForm */
        ModelNameForm: {
            /** Model */
            model?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** ModelOverviewResponse */
        ModelOverviewResponse: {
            /** History */
            history: components["schemas"]["HistoryEntry"][];
            /** Tags */
            tags: components["schemas"]["TagEntry"][];
        };
        /** ModelParams */
        ModelParams: {
            [key: string]: unknown;
        };
        /** ModelResponse */
        ModelResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Base Model Id */
            base_model_id?: string | null;
            /** Name */
            name: string;
            params: components["schemas"]["ModelParams"];
            meta: components["schemas"]["ModelMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Is Active */
            is_active: boolean;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** ModelsConfigForm */
        ModelsConfigForm: {
            /** Default Models */
            DEFAULT_MODELS: string | null;
            /** Default Pinned Models */
            DEFAULT_PINNED_MODELS: string | null;
            /** Model Order List */
            MODEL_ORDER_LIST: string[] | null;
            /** Default Model Metadata */
            DEFAULT_MODEL_METADATA?: {
                [key: string]: unknown;
            } | null;
            /** Default Model Params */
            DEFAULT_MODEL_PARAMS?: {
                [key: string]: unknown;
            } | null;
        };
        /** ModelsImportForm */
        ModelsImportForm: {
            /** Models */
            models: {
                [key: string]: unknown;
            }[];
        };
        /** NoteAccessGrantsForm */
        NoteAccessGrantsForm: {
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** NoteForm */
        NoteForm: {
            /** Title */
            title: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
        };
        /** NoteItemResponse */
        NoteItemResponse: {
            /** Id */
            id: string;
            /** Title */
            title: string;
            /** Data */
            data: {
                [key: string]: unknown;
            } | null;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        };
        /** NoteListResponse */
        NoteListResponse: {
            /** Items */
            items: components["schemas"]["NoteUserResponse"][];
            /** Total */
            total: number;
        };
        /** NoteModel */
        NoteModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Title */
            title: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
        };
        /** NoteResponse */
        NoteResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Title */
            title: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean;
        };
        /** NoteUserResponse */
        NoteUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Title */
            title: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Created At */
            created_at: number;
            /** Updated At */
            updated_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        };
        /** OAuthClientRegistrationForm */
        OAuthClientRegistrationForm: {
            /** Url */
            url: string;
            /** Client Id */
            client_id: string;
            /** Client Name */
            client_name?: string | null;
            /** Client Secret */
            client_secret?: string | null;
        };
        /** PinMessageForm */
        PinMessageForm: {
            /** Is Pinned */
            is_pinned: boolean;
        };
        /** ProcessFileForm */
        ProcessFileForm: {
            /** File Id */
            file_id: string;
            /** Content */
            content?: string | null;
            /** Collection Name */
            collection_name?: string | null;
        };
        /** ProcessTextForm */
        ProcessTextForm: {
            /** Name */
            name: string;
            /** Content */
            content: string;
            /** Collection Name */
            collection_name?: string | null;
        };
        /** ProcessUrlForm */
        ProcessUrlForm: {
            /** Collection Name */
            collection_name?: string | null;
            /** Url */
            url: string;
        };
        /** PromptAccessGrantsForm */
        PromptAccessGrantsForm: {
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** PromptAccessListResponse */
        PromptAccessListResponse: {
            /** Items */
            items: components["schemas"]["PromptAccessResponse"][];
            /** Total */
            total: number;
        };
        /** PromptAccessResponse */
        PromptAccessResponse: {
            /** Id */
            id?: string | null;
            /** Command */
            command: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Tags */
            tags?: string[] | null;
            /**
             * Is Active
             * @default true
             */
            is_active: boolean | null;
            /** Version Id */
            version_id?: string | null;
            /** Created At */
            created_at?: number | null;
            /** Updated At */
            updated_at?: number | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        };
        /** PromptForm */
        PromptForm: {
            /** Command */
            command: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Tags */
            tags?: string[] | null;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
            /** Version Id */
            version_id?: string | null;
            /** Commit Message */
            commit_message?: string | null;
            /**
             * Is Production
             * @default true
             */
            is_production: boolean | null;
        };
        /** PromptHistoryModel */
        PromptHistoryModel: {
            /** Id */
            id: string;
            /** Prompt Id */
            prompt_id: string;
            /** Parent Id */
            parent_id?: string | null;
            /** Snapshot */
            snapshot: {
                [key: string]: unknown;
            };
            /** User Id */
            user_id: string;
            /** Commit Message */
            commit_message?: string | null;
            /** Created At */
            created_at: number;
        };
        /**
         * PromptHistoryResponse
         * @description Response model with user info.
         */
        PromptHistoryResponse: {
            /** Id */
            id: string;
            /** Prompt Id */
            prompt_id: string;
            /** Parent Id */
            parent_id?: string | null;
            /** Snapshot */
            snapshot: {
                [key: string]: unknown;
            };
            /** User Id */
            user_id: string;
            /** Commit Message */
            commit_message?: string | null;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        };
        /** PromptMetadataForm */
        PromptMetadataForm: {
            /** Name */
            name: string;
            /** Command */
            command: string;
            /** Tags */
            tags?: string[] | null;
        };
        /** PromptModel */
        PromptModel: {
            /** Id */
            id?: string | null;
            /** Command */
            command: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
            /** Tags */
            tags?: string[] | null;
            /**
             * Is Active
             * @default true
             */
            is_active: boolean | null;
            /** Version Id */
            version_id?: string | null;
            /** Created At */
            created_at?: number | null;
            /** Updated At */
            updated_at?: number | null;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
        };
        /** PromptSuggestion */
        PromptSuggestion: {
            /** Title */
            title: string[];
            /** Content */
            content: string;
        };
        /** PromptVersionUpdateForm */
        PromptVersionUpdateForm: {
            /** Version Id */
            version_id: string;
        };
        /** PushModelForm */
        PushModelForm: {
            /** Model */
            model: string;
            /** Insecure */
            insecure?: boolean | null;
            /** Stream */
            stream?: boolean | null;
        };
        /** QueryCollectionsForm */
        QueryCollectionsForm: {
            /** Collection Names */
            collection_names: string[];
            /** Query */
            query: string;
            /** K */
            k?: number | null;
            /** K Reranker */
            k_reranker?: number | null;
            /** R */
            r?: number | null;
            /** Hybrid */
            hybrid?: boolean | null;
            /** Hybrid Bm25 Weight */
            hybrid_bm25_weight?: number | null;
            /** Enable Enriched Texts */
            enable_enriched_texts?: boolean | null;
        };
        /** QueryDocForm */
        QueryDocForm: {
            /** Collection Name */
            collection_name: string;
            /** Query */
            query: string;
            /** K */
            k?: number | null;
            /** K Reranker */
            k_reranker?: number | null;
            /** R */
            r?: number | null;
            /** Hybrid */
            hybrid?: boolean | null;
        };
        /** QueryMemoryForm */
        QueryMemoryForm: {
            /** Content */
            content: string;
            /**
             * K
             * @default 1
             */
            k: number | null;
        };
        /** RatingData */
        RatingData: {
            /** Rating */
            rating?: string | number | null;
            /** Model Id */
            model_id?: string | null;
            /** Sibling Model Ids */
            sibling_model_ids?: string[] | null;
            /** Reason */
            reason?: string | null;
            /** Comment */
            comment?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** ReactionForm */
        ReactionForm: {
            /** Name */
            name: string;
        };
        /** Reactions */
        Reactions: {
            /** Name */
            name: string;
            /** Users */
            users: {
                [key: string]: unknown;
            }[];
            /** Count */
            count: number;
        };
        /** RemoveMembersForm */
        RemoveMembersForm: {
            /**
             * User Ids
             * @default []
             */
            user_ids: string[];
        };
        /** ResponsesForm */
        ResponsesForm: {
            /** Model */
            model: string;
            /** Input */
            input?: unknown[] | string | null;
            /** Instructions */
            instructions?: string | null;
            /** Stream */
            stream?: boolean | null;
            /** Temperature */
            temperature?: number | null;
            /** Max Output Tokens */
            max_output_tokens?: number | null;
            /** Top P */
            top_p?: number | null;
            /** Tools */
            tools?: unknown[] | null;
            /** Tool Choice */
            tool_choice?: {
                [key: string]: unknown;
            } | string | null;
            /** Text */
            text?: {
                [key: string]: unknown;
            } | null;
            /** Truncation */
            truncation?: string | null;
            /** Metadata */
            metadata?: {
                [key: string]: unknown;
            } | null;
            /** Store */
            store?: boolean | null;
            /** Reasoning */
            reasoning?: {
                [key: string]: unknown;
            } | null;
            /** Previous Response Id */
            previous_response_id?: string | null;
        } & {
            [key: string]: unknown;
        };
        /** STTConfigForm */
        STTConfigForm: {
            /** Openai Api Base Url */
            OPENAI_API_BASE_URL: string;
            /** Openai Api Key */
            OPENAI_API_KEY: string;
            /** Engine */
            ENGINE: string;
            /** Model */
            MODEL: string;
            /**
             * Supported Content Types
             * @default []
             */
            SUPPORTED_CONTENT_TYPES: string[];
            /** Whisper Model */
            WHISPER_MODEL: string;
            /** Deepgram Api Key */
            DEEPGRAM_API_KEY: string;
            /** Azure Api Key */
            AZURE_API_KEY: string;
            /** Azure Region */
            AZURE_REGION: string;
            /** Azure Locales */
            AZURE_LOCALES: string;
            /** Azure Base Url */
            AZURE_BASE_URL: string;
            /** Azure Max Speakers */
            AZURE_MAX_SPEAKERS: string;
            /** Mistral Api Key */
            MISTRAL_API_KEY: string;
            /** Mistral Api Base Url */
            MISTRAL_API_BASE_URL: string;
            /** Mistral Use Chat Completions */
            MISTRAL_USE_CHAT_COMPLETIONS: boolean;
        };
        /** SearchForm */
        SearchForm: {
            /** Queries */
            queries: string[];
        };
        /** SessionUserInfoResponse */
        SessionUserInfoResponse: {
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
            /** Email */
            email: string;
            /** Profile Image Url */
            profile_image_url: string;
            /** Token */
            token: string;
            /** Token Type */
            token_type: string;
            /** Expires At */
            expires_at?: number | null;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
            /** Bio */
            bio?: string | null;
            /** Gender */
            gender?: string | null;
            /** Date Of Birth */
            date_of_birth?: string | null;
        };
        /** SessionUserResponse */
        SessionUserResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
            /** Email */
            email: string;
            /** Profile Image Url */
            profile_image_url: string;
            /** Token */
            token: string;
            /** Token Type */
            token_type: string;
            /** Expires At */
            expires_at?: number | null;
            /** Permissions */
            permissions?: {
                [key: string]: unknown;
            } | null;
        };
        /** SetBannersForm */
        SetBannersForm: {
            /** Banners */
            banners: components["schemas"]["BannerModel"][];
        };
        /** SetDefaultSuggestionsForm */
        SetDefaultSuggestionsForm: {
            /** Suggestions */
            suggestions: components["schemas"]["PromptSuggestion"][];
        };
        /** SettingsPermissions */
        SettingsPermissions: {
            /**
             * Interface
             * @default true
             */
            interface: boolean;
        };
        /** SharedChatResponse */
        SharedChatResponse: {
            /** Id */
            id: string;
            /** Title */
            title: string;
            /** Share Id */
            share_id?: string | null;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** SharingPermissions */
        SharingPermissions: {
            /**
             * Models
             * @default false
             */
            models: boolean;
            /**
             * Public Models
             * @default false
             */
            public_models: boolean;
            /**
             * Knowledge
             * @default false
             */
            knowledge: boolean;
            /**
             * Public Knowledge
             * @default false
             */
            public_knowledge: boolean;
            /**
             * Prompts
             * @default false
             */
            prompts: boolean;
            /**
             * Public Prompts
             * @default false
             */
            public_prompts: boolean;
            /**
             * Tools
             * @default false
             */
            tools: boolean;
            /**
             * Public Tools
             * @default true
             */
            public_tools: boolean;
            /**
             * Skills
             * @default false
             */
            skills: boolean;
            /**
             * Public Skills
             * @default false
             */
            public_skills: boolean;
            /**
             * Notes
             * @default false
             */
            notes: boolean;
            /**
             * Public Notes
             * @default true
             */
            public_notes: boolean;
        };
        /** SigninForm */
        SigninForm: {
            /** Email */
            email: string;
            /** Password */
            password: string;
        };
        /** SigninResponse */
        SigninResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
            /** Email */
            email: string;
            /** Profile Image Url */
            profile_image_url: string;
            /** Token */
            token: string;
            /** Token Type */
            token_type: string;
        };
        /** SignupForm */
        SignupForm: {
            /** Name */
            name: string;
            /** Email */
            email: string;
            /** Password */
            password: string;
            /**
             * Profile Image Url
             * @default /user.png
             */
            profile_image_url: string | null;
        };
        /** SkillAccessGrantsForm */
        SkillAccessGrantsForm: {
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** SkillAccessListResponse */
        SkillAccessListResponse: {
            /**
             * Items
             * @default []
             */
            items: components["schemas"]["SkillAccessResponse"][];
            /**
             * Total
             * @default 0
             */
            total: number;
        };
        /** SkillAccessResponse */
        SkillAccessResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            meta: components["schemas"]["SkillMeta"];
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        } & {
            [key: string]: unknown;
        };
        /** SkillForm */
        SkillForm: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Content */
            content: string;
            /**
             * @default {
             *       "tags": []
             *     }
             */
            meta: components["schemas"]["SkillMeta"];
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
        };
        /** SkillMeta */
        SkillMeta: {
            /**
             * Tags
             * @default []
             */
            tags: string[] | null;
        };
        /** SkillModel */
        SkillModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            /** Content */
            content: string;
            meta: components["schemas"]["SkillMeta"];
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** SkillResponse */
        SkillResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            meta: components["schemas"]["SkillMeta"];
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** SkillUserResponse */
        SkillUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Description */
            description?: string | null;
            meta: components["schemas"]["SkillMeta"];
            /**
             * Is Active
             * @default true
             */
            is_active: boolean;
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        } & {
            [key: string]: unknown;
        };
        /** SnapshotData */
        SnapshotData: {
            /** Chat */
            chat?: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** SummaryResponse */
        SummaryResponse: {
            /** Total Messages */
            total_messages: number;
            /** Total Chats */
            total_chats: number;
            /** Total Models */
            total_models: number;
            /** Total Users */
            total_users: number;
        };
        /** SyncFunctionsForm */
        SyncFunctionsForm: {
            /**
             * Functions
             * @default []
             */
            functions: components["schemas"]["FunctionWithValvesModel"][];
        };
        /** SyncModelsForm */
        SyncModelsForm: {
            /**
             * Models
             * @default []
             */
            models: components["schemas"]["ModelModel"][];
        };
        /** TTSConfigForm */
        TTSConfigForm: {
            /** Openai Api Base Url */
            OPENAI_API_BASE_URL: string;
            /** Openai Api Key */
            OPENAI_API_KEY: string;
            /** Openai Params */
            OPENAI_PARAMS?: {
                [key: string]: unknown;
            } | null;
            /** Api Key */
            API_KEY: string;
            /** Engine */
            ENGINE: string;
            /** Model */
            MODEL: string;
            /** Voice */
            VOICE: string;
            /** Split On */
            SPLIT_ON: string;
            /** Azure Speech Region */
            AZURE_SPEECH_REGION: string;
            /** Azure Speech Base Url */
            AZURE_SPEECH_BASE_URL: string;
            /** Azure Speech Output Format */
            AZURE_SPEECH_OUTPUT_FORMAT: string;
        };
        /** TagEntry */
        TagEntry: {
            /** Tag */
            tag: string;
            /** Count */
            count: number;
        };
        /** TagFilterForm */
        TagFilterForm: {
            /** Name */
            name: string;
            /**
             * Skip
             * @default 0
             */
            skip: number | null;
            /**
             * Limit
             * @default 50
             */
            limit: number | null;
        };
        /** TagForm */
        TagForm: {
            /** Name */
            name: string;
        };
        /** TagModel */
        TagModel: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** User Id */
            user_id: string;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
        };
        /** TaskConfigForm */
        TaskConfigForm: {
            /** Task Model */
            TASK_MODEL: string | null;
            /** Task Model External */
            TASK_MODEL_EXTERNAL: string | null;
            /** Enable Title Generation */
            ENABLE_TITLE_GENERATION: boolean;
            /** Title Generation Prompt Template */
            TITLE_GENERATION_PROMPT_TEMPLATE: string;
            /** Image Prompt Generation Prompt Template */
            IMAGE_PROMPT_GENERATION_PROMPT_TEMPLATE: string;
            /** Enable Autocomplete Generation */
            ENABLE_AUTOCOMPLETE_GENERATION: boolean;
            /** Autocomplete Generation Input Max Length */
            AUTOCOMPLETE_GENERATION_INPUT_MAX_LENGTH: number;
            /** Tags Generation Prompt Template */
            TAGS_GENERATION_PROMPT_TEMPLATE: string;
            /** Follow Up Generation Prompt Template */
            FOLLOW_UP_GENERATION_PROMPT_TEMPLATE: string;
            /** Enable Follow Up Generation */
            ENABLE_FOLLOW_UP_GENERATION: boolean;
            /** Enable Tags Generation */
            ENABLE_TAGS_GENERATION: boolean;
            /** Enable Search Query Generation */
            ENABLE_SEARCH_QUERY_GENERATION: boolean;
            /** Enable Retrieval Query Generation */
            ENABLE_RETRIEVAL_QUERY_GENERATION: boolean;
            /** Query Generation Prompt Template */
            QUERY_GENERATION_PROMPT_TEMPLATE: string;
            /** Tools Function Calling Prompt Template */
            TOOLS_FUNCTION_CALLING_PROMPT_TEMPLATE: string;
            /** Voice Mode Prompt Template */
            VOICE_MODE_PROMPT_TEMPLATE: string | null;
        };
        /** TerminalServerConnection */
        TerminalServerConnection: {
            /**
             * Id
             * @default
             */
            id: string | null;
            /**
             * Name
             * @default
             */
            name: string | null;
            /**
             * Enabled
             * @default true
             */
            enabled: boolean | null;
            /** Url */
            url: string;
            /**
             * Path
             * @default /openapi.json
             */
            path: string | null;
            /**
             * Key
             * @default
             */
            key: string | null;
            /**
             * Auth Type
             * @default bearer
             */
            auth_type: string | null;
            /** Config */
            config?: {
                [key: string]: unknown;
            } | null;
            /** Server Type */
            server_type?: string | null;
            /** Policy Id */
            policy_id?: string | null;
            /** Policy */
            policy?: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** TerminalServerPolicyForm */
        TerminalServerPolicyForm: {
            /** Url */
            url: string;
            /**
             * Key
             * @default
             */
            key: string | null;
            /**
             * Auth Type
             * @default bearer
             */
            auth_type: string | null;
            /** Policy Id */
            policy_id: string;
            /** Policy Data */
            policy_data: {
                [key: string]: unknown;
            };
        };
        /** TerminalServersConfigForm */
        TerminalServersConfigForm: {
            /** Terminal Server Connections */
            TERMINAL_SERVER_CONNECTIONS: components["schemas"]["TerminalServerConnection"][];
        };
        /** TokenExchangeForm */
        TokenExchangeForm: {
            /** Token */
            token: string;
        };
        /** TokenUsageEntry */
        TokenUsageEntry: {
            /** Model Id */
            model_id: string;
            /** Input Tokens */
            input_tokens: number;
            /** Output Tokens */
            output_tokens: number;
            /** Total Tokens */
            total_tokens: number;
            /** Message Count */
            message_count: number;
        };
        /** TokenUsageResponse */
        TokenUsageResponse: {
            /** Models */
            models: components["schemas"]["TokenUsageEntry"][];
            /** Total Input Tokens */
            total_input_tokens: number;
            /** Total Output Tokens */
            total_output_tokens: number;
            /** Total Tokens */
            total_tokens: number;
        };
        /** ToolAccessGrantsForm */
        ToolAccessGrantsForm: {
            /** Access Grants */
            access_grants: {
                [key: string]: unknown;
            }[];
        };
        /** ToolAccessResponse */
        ToolAccessResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            meta: components["schemas"]["ToolMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
            /**
             * Write Access
             * @default false
             */
            write_access: boolean | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolForm */
        ToolForm: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            meta: components["schemas"]["ToolMeta"];
            /** Access Grants */
            access_grants?: {
                [key: string]: unknown;
            }[] | null;
        };
        /** ToolMeta */
        ToolMeta: {
            /** Description */
            description?: string | null;
            /**
             * Manifest
             * @default {}
             */
            manifest: {
                [key: string]: unknown;
            } | null;
        };
        /** ToolModel */
        ToolModel: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            /** Content */
            content: string;
            /** Specs */
            specs: {
                [key: string]: unknown;
            }[];
            meta: components["schemas"]["ToolMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** ToolResponse */
        ToolResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            meta: components["schemas"]["ToolMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** ToolServerConnection */
        ToolServerConnection: {
            /** Url */
            url: string;
            /** Path */
            path: string;
            /**
             * Type
             * @default openapi
             */
            type: string | null;
            /** Auth Type */
            auth_type: string | null;
            /** Headers */
            headers?: {
                [key: string]: unknown;
            } | string | null;
            /** Key */
            key: string | null;
            /** Config */
            config: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** ToolServersConfigForm */
        ToolServersConfigForm: {
            /** Tool Server Connections */
            TOOL_SERVER_CONNECTIONS: components["schemas"]["ToolServerConnection"][];
        };
        /** ToolUserResponse */
        ToolUserResponse: {
            /** Id */
            id: string;
            /** User Id */
            user_id: string;
            /** Name */
            name: string;
            meta: components["schemas"]["ToolMeta"];
            /** Access Grants */
            access_grants?: components["schemas"]["AccessGrantModel"][];
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            user?: components["schemas"]["open_webui__models__users__UserResponse"] | null;
        } & {
            [key: string]: unknown;
        };
        /** UpdateActiveMemberForm */
        UpdateActiveMemberForm: {
            /** Is Active */
            is_active: boolean;
        };
        /** UpdateConfigForm */
        UpdateConfigForm: {
            /** Enable Evaluation Arena Models */
            ENABLE_EVALUATION_ARENA_MODELS?: boolean | null;
            /** Evaluation Arena Models */
            EVALUATION_ARENA_MODELS?: {
                [key: string]: unknown;
            }[] | null;
        };
        /** UpdateMembersForm */
        UpdateMembersForm: {
            /**
             * User Ids
             * @default []
             */
            user_ids: string[];
            /**
             * Group Ids
             * @default []
             */
            group_ids: string[];
        };
        /** UpdatePasswordForm */
        UpdatePasswordForm: {
            /** Password */
            password: string;
            /** New Password */
            new_password: string;
        };
        /** UpdateProfileForm */
        UpdateProfileForm: {
            /** Profile Image Url */
            profile_image_url: string;
            /** Name */
            name: string;
            /** Bio */
            bio?: string | null;
            /** Gender */
            gender?: string | null;
            /** Date Of Birth */
            date_of_birth?: string | null;
        };
        /** UpdateTimezoneForm */
        UpdateTimezoneForm: {
            /** Timezone */
            timezone: string;
        };
        /** UrlForm */
        UrlForm: {
            /** Url */
            url: string;
        };
        /** UserActiveResponse */
        UserActiveResponse: {
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
            /**
             * Groups
             * @default []
             */
            groups: unknown[] | null;
            /** Is Active */
            is_active: boolean;
        } & {
            [key: string]: unknown;
        };
        /** UserAnalyticsEntry */
        UserAnalyticsEntry: {
            /** User Id */
            user_id: string;
            /** Name */
            name?: string | null;
            /** Email */
            email?: string | null;
            /** Count */
            count: number;
            /**
             * Input Tokens
             * @default 0
             */
            input_tokens: number;
            /**
             * Output Tokens
             * @default 0
             */
            output_tokens: number;
            /**
             * Total Tokens
             * @default 0
             */
            total_tokens: number;
        };
        /** UserAnalyticsResponse */
        UserAnalyticsResponse: {
            /** Users */
            users: components["schemas"]["UserAnalyticsEntry"][];
        };
        /** UserGroupIdsListResponse */
        UserGroupIdsListResponse: {
            /** Users */
            users: components["schemas"]["UserGroupIdsModel"][];
            /** Total */
            total: number;
        };
        /** UserGroupIdsModel */
        UserGroupIdsModel: {
            /** Id */
            id: string;
            /** Email */
            email: string;
            /** Username */
            username?: string | null;
            /**
             * Role
             * @default pending
             */
            role: string;
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
            /** Profile Banner Image Url */
            profile_banner_image_url?: string | null;
            /** Bio */
            bio?: string | null;
            /** Gender */
            gender?: string | null;
            /** Date Of Birth */
            date_of_birth?: string | null;
            /** Timezone */
            timezone?: string | null;
            /** Presence State */
            presence_state?: string | null;
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Info */
            info?: {
                [key: string]: unknown;
            } | null;
            settings?: components["schemas"]["UserSettings"] | null;
            /** Oauth */
            oauth?: {
                [key: string]: unknown;
            } | null;
            /** Scim */
            scim?: {
                [key: string]: unknown;
            } | null;
            /** Last Active At */
            last_active_at: number;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
            /**
             * Group Ids
             * @default []
             */
            group_ids: string[];
        };
        /** UserIdNameStatusResponse */
        UserIdNameStatusResponse: {
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Is Active */
            is_active?: boolean | null;
        };
        /** UserIdsForm */
        UserIdsForm: {
            /** User Ids */
            user_ids?: string[] | null;
        };
        /** UserInfoListResponse */
        UserInfoListResponse: {
            /** Users */
            users: components["schemas"]["UserInfoResponse"][];
            /** Total */
            total: number;
        };
        /** UserInfoResponse */
        UserInfoResponse: {
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Email */
            email: string;
            /** Role */
            role: string;
            /** Bio */
            bio?: string | null;
            /**
             * Groups
             * @default []
             */
            groups: unknown[] | null;
            /**
             * Is Active
             * @default false
             */
            is_active: boolean;
        };
        /** UserListResponse */
        UserListResponse: {
            /** Users */
            users: components["schemas"]["UserModelResponse"][];
            /** Total */
            total: number;
        };
        /** UserModel */
        UserModel: {
            /** Id */
            id: string;
            /** Email */
            email: string;
            /** Username */
            username?: string | null;
            /**
             * Role
             * @default pending
             */
            role: string;
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
            /** Profile Banner Image Url */
            profile_banner_image_url?: string | null;
            /** Bio */
            bio?: string | null;
            /** Gender */
            gender?: string | null;
            /** Date Of Birth */
            date_of_birth?: string | null;
            /** Timezone */
            timezone?: string | null;
            /** Presence State */
            presence_state?: string | null;
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Info */
            info?: {
                [key: string]: unknown;
            } | null;
            settings?: components["schemas"]["UserSettings"] | null;
            /** Oauth */
            oauth?: {
                [key: string]: unknown;
            } | null;
            /** Scim */
            scim?: {
                [key: string]: unknown;
            } | null;
            /** Last Active At */
            last_active_at: number;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** UserModelResponse */
        UserModelResponse: {
            /** Id */
            id: string;
            /** Email */
            email: string;
            /** Username */
            username?: string | null;
            /**
             * Role
             * @default pending
             */
            role: string;
            /** Name */
            name: string;
            /** Profile Image Url */
            profile_image_url?: string | null;
            /** Profile Banner Image Url */
            profile_banner_image_url?: string | null;
            /** Bio */
            bio?: string | null;
            /** Gender */
            gender?: string | null;
            /** Date Of Birth */
            date_of_birth?: string | null;
            /** Timezone */
            timezone?: string | null;
            /** Presence State */
            presence_state?: string | null;
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
            /** Info */
            info?: {
                [key: string]: unknown;
            } | null;
            settings?: components["schemas"]["UserSettings"] | null;
            /** Oauth */
            oauth?: {
                [key: string]: unknown;
            } | null;
            /** Scim */
            scim?: {
                [key: string]: unknown;
            } | null;
            /** Last Active At */
            last_active_at: number;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        } & {
            [key: string]: unknown;
        };
        /** UserNameResponse */
        UserNameResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
        };
        /** UserPermissions */
        UserPermissions: {
            workspace: components["schemas"]["WorkspacePermissions"];
            sharing: components["schemas"]["SharingPermissions"];
            access_grants: components["schemas"]["AccessGrantsPermissions"];
            chat: components["schemas"]["ChatPermissions"];
            features: components["schemas"]["FeaturesPermissions"];
            settings: components["schemas"]["SettingsPermissions"];
        };
        /** UserProfileImageResponse */
        UserProfileImageResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
            /** Email */
            email: string;
            /** Profile Image Url */
            profile_image_url: string;
        };
        /** UserSettings */
        UserSettings: {
            /**
             * Ui
             * @default {}
             */
            ui: {
                [key: string]: unknown;
            } | null;
        } & {
            [key: string]: unknown;
        };
        /** UserStatus */
        UserStatus: {
            /** Status Emoji */
            status_emoji?: string | null;
            /** Status Message */
            status_message?: string | null;
            /** Status Expires At */
            status_expires_at?: number | null;
        };
        /** UserUpdateForm */
        UserUpdateForm: {
            /** Role */
            role: string;
            /** Name */
            name: string;
            /** Email */
            email: string;
            /** Profile Image Url */
            profile_image_url: string;
            /** Password */
            password?: string | null;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
            /** Input */
            input?: unknown;
            /** Context */
            ctx?: Record<string, never>;
        };
        /** WebConfig */
        WebConfig: {
            /** Enable Web Search */
            ENABLE_WEB_SEARCH?: boolean | null;
            /** Web Search Engine */
            WEB_SEARCH_ENGINE?: string | null;
            /** Web Search Trust Env */
            WEB_SEARCH_TRUST_ENV?: boolean | null;
            /** Web Search Result Count */
            WEB_SEARCH_RESULT_COUNT?: number | null;
            /** Web Search Concurrent Requests */
            WEB_SEARCH_CONCURRENT_REQUESTS?: number | null;
            /** Web Fetch Max Content Length */
            WEB_FETCH_MAX_CONTENT_LENGTH?: number | null;
            /** Web Loader Concurrent Requests */
            WEB_LOADER_CONCURRENT_REQUESTS?: number | null;
            /**
             * Web Search Domain Filter List
             * @default []
             */
            WEB_SEARCH_DOMAIN_FILTER_LIST: string[] | null;
            /** Bypass Web Search Embedding And Retrieval */
            BYPASS_WEB_SEARCH_EMBEDDING_AND_RETRIEVAL?: boolean | null;
            /** Bypass Web Search Web Loader */
            BYPASS_WEB_SEARCH_WEB_LOADER?: boolean | null;
            /** Ollama Cloud Web Search Api Key */
            OLLAMA_CLOUD_WEB_SEARCH_API_KEY?: string | null;
            /** Searxng Query Url */
            SEARXNG_QUERY_URL?: string | null;
            /** Searxng Language */
            SEARXNG_LANGUAGE?: string | null;
            /** Yacy Query Url */
            YACY_QUERY_URL?: string | null;
            /** Yacy Username */
            YACY_USERNAME?: string | null;
            /** Yacy Password */
            YACY_PASSWORD?: string | null;
            /** Google Pse Api Key */
            GOOGLE_PSE_API_KEY?: string | null;
            /** Google Pse Engine Id */
            GOOGLE_PSE_ENGINE_ID?: string | null;
            /** Brave Search Api Key */
            BRAVE_SEARCH_API_KEY?: string | null;
            /** Kagi Search Api Key */
            KAGI_SEARCH_API_KEY?: string | null;
            /** Mojeek Search Api Key */
            MOJEEK_SEARCH_API_KEY?: string | null;
            /** Bocha Search Api Key */
            BOCHA_SEARCH_API_KEY?: string | null;
            /** Serpstack Api Key */
            SERPSTACK_API_KEY?: string | null;
            /** Serpstack Https */
            SERPSTACK_HTTPS?: boolean | null;
            /** Serper Api Key */
            SERPER_API_KEY?: string | null;
            /** Serply Api Key */
            SERPLY_API_KEY?: string | null;
            /** Ddgs Backend */
            DDGS_BACKEND?: string | null;
            /** Tavily Api Key */
            TAVILY_API_KEY?: string | null;
            /** Searchapi Api Key */
            SEARCHAPI_API_KEY?: string | null;
            /** Searchapi Engine */
            SEARCHAPI_ENGINE?: string | null;
            /** Serpapi Api Key */
            SERPAPI_API_KEY?: string | null;
            /** Serpapi Engine */
            SERPAPI_ENGINE?: string | null;
            /** Jina Api Key */
            JINA_API_KEY?: string | null;
            /** Jina Api Base Url */
            JINA_API_BASE_URL?: string | null;
            /** Bing Search V7 Endpoint */
            BING_SEARCH_V7_ENDPOINT?: string | null;
            /** Bing Search V7 Subscription Key */
            BING_SEARCH_V7_SUBSCRIPTION_KEY?: string | null;
            /** Exa Api Key */
            EXA_API_KEY?: string | null;
            /** Perplexity Api Key */
            PERPLEXITY_API_KEY?: string | null;
            /** Perplexity Model */
            PERPLEXITY_MODEL?: string | null;
            /** Perplexity Search Context Usage */
            PERPLEXITY_SEARCH_CONTEXT_USAGE?: string | null;
            /** Perplexity Search Api Url */
            PERPLEXITY_SEARCH_API_URL?: string | null;
            /** Sougou Api Sid */
            SOUGOU_API_SID?: string | null;
            /** Sougou Api Sk */
            SOUGOU_API_SK?: string | null;
            /** Web Loader Engine */
            WEB_LOADER_ENGINE?: string | null;
            /** Web Loader Timeout */
            WEB_LOADER_TIMEOUT?: string | null;
            /** Enable Web Loader Ssl Verification */
            ENABLE_WEB_LOADER_SSL_VERIFICATION?: boolean | null;
            /** Playwright Ws Url */
            PLAYWRIGHT_WS_URL?: string | null;
            /** Playwright Timeout */
            PLAYWRIGHT_TIMEOUT?: number | null;
            /** Firecrawl Api Key */
            FIRECRAWL_API_KEY?: string | null;
            /** Firecrawl Api Base Url */
            FIRECRAWL_API_BASE_URL?: string | null;
            /** Firecrawl Timeout */
            FIRECRAWL_TIMEOUT?: string | null;
            /** Tavily Extract Depth */
            TAVILY_EXTRACT_DEPTH?: string | null;
            /** External Web Search Url */
            EXTERNAL_WEB_SEARCH_URL?: string | null;
            /** External Web Search Api Key */
            EXTERNAL_WEB_SEARCH_API_KEY?: string | null;
            /** External Web Loader Url */
            EXTERNAL_WEB_LOADER_URL?: string | null;
            /** External Web Loader Api Key */
            EXTERNAL_WEB_LOADER_API_KEY?: string | null;
            /** Youtube Loader Language */
            YOUTUBE_LOADER_LANGUAGE?: string[] | null;
            /** Youtube Loader Proxy Url */
            YOUTUBE_LOADER_PROXY_URL?: string | null;
            /** Youtube Loader Translation */
            YOUTUBE_LOADER_TRANSLATION?: string | null;
            /** Yandex Web Search Url */
            YANDEX_WEB_SEARCH_URL?: string | null;
            /** Yandex Web Search Api Key */
            YANDEX_WEB_SEARCH_API_KEY?: string | null;
            /** Yandex Web Search Config */
            YANDEX_WEB_SEARCH_CONFIG?: string | null;
            /** Youcom Api Key */
            YOUCOM_API_KEY?: string | null;
        };
        /** WebhookMessageForm */
        WebhookMessageForm: {
            /** Content */
            content: string;
        };
        /** WorkspacePermissions */
        WorkspacePermissions: {
            /**
             * Models
             * @default false
             */
            models: boolean;
            /**
             * Knowledge
             * @default false
             */
            knowledge: boolean;
            /**
             * Prompts
             * @default false
             */
            prompts: boolean;
            /**
             * Tools
             * @default false
             */
            tools: boolean;
            /**
             * Skills
             * @default false
             */
            skills: boolean;
            /**
             * Models Import
             * @default false
             */
            models_import: boolean;
            /**
             * Models Export
             * @default false
             */
            models_export: boolean;
            /**
             * Prompts Import
             * @default false
             */
            prompts_import: boolean;
            /**
             * Prompts Export
             * @default false
             */
            prompts_export: boolean;
            /**
             * Tools Import
             * @default false
             */
            tools_import: boolean;
            /**
             * Tools Export
             * @default false
             */
            tools_export: boolean;
        };
        /** UserResponse */
        open_webui__models__feedbacks__UserResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Email */
            email: string;
            /**
             * Role
             * @default pending
             */
            role: string;
            /** Last Active At */
            last_active_at: number;
            /** Updated At */
            updated_at: number;
            /** Created At */
            created_at: number;
        };
        /** MessageForm */
        open_webui__models__messages__MessageForm: {
            /** Temp Id */
            temp_id?: string | null;
            /** Content */
            content: string;
            /** Reply To Id */
            reply_to_id?: string | null;
            /** Parent Id */
            parent_id?: string | null;
            /** Data */
            data?: {
                [key: string]: unknown;
            } | null;
            /** Meta */
            meta?: {
                [key: string]: unknown;
            } | null;
        };
        /** UserResponse */
        open_webui__models__users__UserResponse: {
            /** Id */
            id: string;
            /** Name */
            name: string;
            /** Role */
            role: string;
            /** Email */
            email: string;
        };
        /** MessageForm */
        open_webui__routers__chats__MessageForm: {
            /** Content */
            content: string;
        };
        /** ConnectionVerificationForm */
        open_webui__routers__ollama__ConnectionVerificationForm: {
            /** Url */
            url: string;
            /** Key */
            key?: string | null;
        };
        /** OllamaConfigForm */
        open_webui__routers__ollama__OllamaConfigForm: {
            /** Enable Ollama Api */
            ENABLE_OLLAMA_API?: boolean | null;
            /** Ollama Base Urls */
            OLLAMA_BASE_URLS: string[];
            /** Ollama Api Configs */
            OLLAMA_API_CONFIGS: {
                [key: string]: unknown;
            };
        };
        /** ConnectionVerificationForm */
        open_webui__routers__openai__ConnectionVerificationForm: {
            /** Url */
            url: string;
            /** Key */
            key: string;
            /** Config */
            config?: {
                [key: string]: unknown;
            } | null;
        };
        /** OpenAIConfigForm */
        open_webui__routers__openai__OpenAIConfigForm: {
            /** Enable Openai Api */
            ENABLE_OPENAI_API?: boolean | null;
            /** Openai Api Base Urls */
            OPENAI_API_BASE_URLS: string[];
            /** Openai Api Keys */
            OPENAI_API_KEYS: string[];
            /** Openai Api Configs */
            OPENAI_API_CONFIGS: {
                [key: string]: unknown;
            };
        };
        /** OllamaConfigForm */
        open_webui__routers__retrieval__OllamaConfigForm: {
            /** Url */
            url: string;
            /** Key */
            key: string;
        };
        /** OpenAIConfigForm */
        open_webui__routers__retrieval__OpenAIConfigForm: {
            /** Url */
            url: string;
            /** Key */
            key: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_status_ollama__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_status_ollama__head_head: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    verify_connection_ollama_verify_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__routers__ollama__ConnectionVerificationForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_config_ollama_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_config_ollama_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__routers__ollama__OllamaConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ollama_tags_ollama_api_tags__url_idx__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ollama_tags_ollama_api_tags_get_get: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ollama_loaded_models_ollama_api_ps_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_ollama_versions_ollama_api_version__url_idx__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ollama_versions_ollama_api_version_get_get: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    unload_model_ollama_api_unload_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    pull_model_ollama_api_pull__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    pull_model_ollama_api_pull_post_post: {
        parameters: {
            query?: {
                url_idx?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    push_model_ollama_api_push__url_idx__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PushModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    push_model_ollama_api_push_delete_delete: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PushModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_model_ollama_api_create__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_model_ollama_api_create_post_post: {
        parameters: {
            query?: {
                url_idx?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    copy_model_ollama_api_copy__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CopyModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    copy_model_ollama_api_copy_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CopyModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_model_ollama_api_delete__url_idx__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_model_ollama_api_delete_delete_delete: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    show_model_info_ollama_api_show_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelNameForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    embed_ollama_api_embed__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateEmbedForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    embed_ollama_api_embed_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateEmbedForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    embeddings_ollama_api_embeddings__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateEmbeddingsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    embeddings_ollama_api_embeddings_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateEmbeddingsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_completion_ollama_api_generate__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateCompletionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_completion_ollama_api_generate_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GenerateCompletionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_chat_completion_ollama_api_chat__url_idx__post_post: {
        parameters: {
            query?: {
                bypass_system_prompt?: boolean;
            };
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_chat_completion_ollama_api_chat_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
                bypass_system_prompt?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_openai_completion_ollama_v1_completions__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_openai_completion_ollama_v1_completions_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_openai_chat_completion_ollama_v1_chat_completions__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_openai_chat_completion_ollama_v1_chat_completions_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_anthropic_messages_ollama_v1_messages__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_anthropic_messages_ollama_v1_messages_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_openai_models_ollama_v1_models__url_idx__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_openai_models_ollama_v1_models_get_get: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    download_model_ollama_models_download__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    download_model_ollama_models_download_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_model_ollama_models_upload__url_idx__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_model_ollama_models_upload__url_idx__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_model_ollama_models_upload_post_post: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_model_ollama_models_upload_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_config_openai_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_config_openai_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__routers__openai__OpenAIConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    speech_openai_audio_speech_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_models_openai_models__url_idx__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                url_idx: number | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_openai_models_get_get: {
        parameters: {
            query?: {
                url_idx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    verify_connection_openai_verify_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__routers__openai__ConnectionVerificationForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_chat_completion_openai_chat_completions_post_post: {
        parameters: {
            query?: {
                bypass_system_prompt?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    responses_openai_responses_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ResponsesForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_openai__path__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_openai__path__get_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_openai__path__get_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_openai__path__get_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pipelines_list_api_v1_pipelines_list_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    upload_pipeline_api_v1_pipelines_upload_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_pipeline_api_v1_pipelines_upload_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_pipeline_api_v1_pipelines_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddPipelineForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_pipeline_api_v1_pipelines_delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeletePipelineForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pipelines_api_v1_pipelines__get_get: {
        parameters: {
            query?: {
                urlIdx?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pipeline_valves_api_v1_pipelines__pipeline_id__valves_get_get: {
        parameters: {
            query: {
                urlIdx: number | null;
            };
            header?: never;
            path: {
                pipeline_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pipeline_valves_spec_api_v1_pipelines__pipeline_id__valves_spec_get_get: {
        parameters: {
            query: {
                urlIdx: number | null;
            };
            header?: never;
            path: {
                pipeline_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_pipeline_valves_api_v1_pipelines__pipeline_id__valves_update_post_post: {
        parameters: {
            query: {
                urlIdx: number | null;
            };
            header?: never;
            path: {
                pipeline_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    check_active_chats_api_v1_tasks_active_chats_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ActiveChatsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_task_config_api_v1_tasks_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_task_config_api_v1_tasks_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TaskConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_title_api_v1_tasks_title_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_follow_ups_api_v1_tasks_follow_up_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_chat_tags_api_v1_tasks_tags_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_image_prompt_api_v1_tasks_image_prompt_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_queries_api_v1_tasks_queries_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_autocompletion_api_v1_tasks_auto_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_emoji_api_v1_tasks_emoji_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_moa_response_api_v1_tasks_moa_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_config_api_v1_images_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ImagesConfig"];
                };
            };
        };
    };
    update_config_api_v1_images_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImagesConfig"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    verify_url_api_v1_images_config_url_verify_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_models_api_v1_images_models_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    generate_images_api_v1_images_generations_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateImageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    image_edits_api_v1_images_edit_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_image_edits_api_v1_images_edit_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_audio_config_api_v1_audio_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_audio_config_api_v1_audio_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AudioConfigUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    speech_api_v1_audio_speech_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    transcription_api_v1_audio_transcriptions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_transcription_api_v1_audio_transcriptions_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_api_v1_audio_models_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_voices_api_v1_audio_voices_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_status_api_v1_retrieval__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_embedding_config_api_v1_retrieval_embedding_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_embedding_config_api_v1_retrieval_embedding_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EmbeddingModelUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_rag_config_api_v1_retrieval_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_rag_config_api_v1_retrieval_config_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_file_api_v1_retrieval_process_file_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProcessFileForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_text_api_v1_retrieval_process_text_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProcessTextForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_web_api_v1_retrieval_process_web_post_post: {
        parameters: {
            query?: {
                /** @description Whether to process and save the content */
                process?: boolean;
                /** @description Whether to overwrite existing collection */
                overwrite?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProcessUrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_web_api_v1_retrieval_process_youtube_post_post: {
        parameters: {
            query?: {
                /** @description Whether to process and save the content */
                process?: boolean;
                /** @description Whether to overwrite existing collection */
                overwrite?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ProcessUrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_web_search_api_v1_retrieval_process_web_search_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SearchForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    query_doc_handler_api_v1_retrieval_query_doc_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QueryDocForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    query_collection_handler_api_v1_retrieval_query_collection_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QueryCollectionsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_entries_from_collection_api_v1_retrieval_delete_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    reset_vector_db_api_v1_retrieval_reset_db_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    reset_upload_dir_api_v1_retrieval_reset_uploads_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    get_embeddings_api_v1_retrieval_ef__text__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                text: string | null;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    process_files_batch_api_v1_retrieval_process_files_batch_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BatchProcessFilesForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BatchProcessFilesResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    import_config_api_v1_configs_import_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ImportConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_config_api_v1_configs_export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    get_connections_config_api_v1_configs_connections_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConnectionsConfigForm"];
                };
            };
        };
    };
    set_connections_config_api_v1_configs_connections_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ConnectionsConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConnectionsConfigForm"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    register_oauth_client_api_v1_configs_oauth_clients_register_post_post: {
        parameters: {
            query?: {
                type?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["OAuthClientRegistrationForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tool_servers_config_api_v1_configs_tool_servers_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolServersConfigForm"];
                };
            };
        };
    };
    set_tool_servers_config_api_v1_configs_tool_servers_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ToolServersConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolServersConfigForm"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_terminal_servers_config_api_v1_configs_terminal_servers_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    set_terminal_servers_config_api_v1_configs_terminal_servers_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TerminalServersConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    verify_terminal_server_connection_api_v1_configs_terminal_servers_verify_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TerminalServerConnection"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    put_terminal_server_policy_api_v1_configs_terminal_servers_policy_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TerminalServerPolicyForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    verify_tool_servers_config_api_v1_configs_tool_servers_verify_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ToolServerConnection"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_code_execution_config_api_v1_configs_code_execution_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CodeInterpreterConfigForm"];
                };
            };
        };
    };
    set_code_execution_config_api_v1_configs_code_execution_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CodeInterpreterConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CodeInterpreterConfigForm"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_defaults_api_v1_configs_models_defaults_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_models_config_api_v1_configs_models_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelsConfigForm"];
                };
            };
        };
    };
    set_models_config_api_v1_configs_models_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelsConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelsConfigForm"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_default_suggestions_api_v1_configs_suggestions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetDefaultSuggestionsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptSuggestion"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_banners_api_v1_configs_banners_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BannerModel"][];
                };
            };
        };
    };
    set_banners_api_v1_configs_banners_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SetBannersForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BannerModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_session_user_api_v1_auths__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionUserInfoResponse"];
                };
            };
        };
    };
    update_profile_api_v1_auths_update_profile_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateProfileForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserProfileImageResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_timezone_api_v1_auths_update_timezone_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateTimezoneForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_password_api_v1_auths_update_password_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdatePasswordForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    ldap_auth_api_v1_auths_ldap_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LdapForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionUserResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    signin_api_v1_auths_signin_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SigninForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionUserResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    signup_api_v1_auths_signup_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SignupForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionUserResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    signout_api_v1_auths_signout_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    add_user_api_v1_auths_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddUserForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SigninResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_admin_details_api_v1_auths_admin_details_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_admin_config_api_v1_auths_admin_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_admin_config_api_v1_auths_admin_config_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AdminConfig"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ldap_server_api_v1_auths_admin_config_ldap_server_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LdapServerConfig"];
                };
            };
        };
    };
    update_ldap_server_api_v1_auths_admin_config_ldap_server_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LdapServerConfig"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_ldap_config_api_v1_auths_admin_config_ldap_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_ldap_config_api_v1_auths_admin_config_ldap_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LdapConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_api_key_api_v1_auths_api_key_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"];
                };
            };
        };
    };
    generate_api_key_api_v1_auths_api_key_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKey"];
                };
            };
        };
    };
    delete_api_key_api_v1_auths_api_key_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    token_exchange_api_v1_auths_oauth__provider__token_exchange_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                provider: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TokenExchangeForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SessionUserResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_users_api_v1_users__get_get: {
        parameters: {
            query?: {
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserGroupIdsListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_all_users_api_v1_users_all_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoListResponse"];
                };
            };
        };
    };
    search_users_api_v1_users_search_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_groups_api_v1_users_groups_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_user_permissisions_api_v1_users_permissions_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_default_user_permissions_api_v1_users_default_permissions_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPermissions"];
                };
            };
        };
    };
    update_default_user_permissions_api_v1_users_default_permissions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserPermissions"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_settings_by_session_user_api_v1_users_user_settings_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSettings"] | null;
                };
            };
        };
    };
    update_user_settings_by_session_user_api_v1_users_user_settings_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserSettings"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserSettings"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_status_by_session_user_api_v1_users_user_status_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_user_status_by_session_user_api_v1_users_user_status_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserStatus"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_info_by_session_user_api_v1_users_user_info_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
        };
    };
    update_user_info_by_session_user_api_v1_users_user_info_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_by_id_api_v1_users__user_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserActiveResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_user_by_id_api_v1_users__user_id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_info_by_id_api_v1_users__user_id__info_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_oauth_sessions_by_id_api_v1_users__user_id__oauth_sessions_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_profile_image_by_id_api_v1_users__user_id__profile_image_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_active_status_by_id_api_v1_users__user_id__active_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_user_by_id_api_v1_users__user_id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_groups_by_id_api_v1_users__user_id__groups_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channels_api_v1_channels__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelListItemResponse"][];
                };
            };
        };
    };
    get_all_channels_api_v1_channels_list_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelModel"][];
                };
            };
        };
    };
    get_dm_channel_by_user_id_api_v1_channels_users__user_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_channel_api_v1_channels_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateChannelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_by_id_api_v1_channels__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelFullResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_members_by_id_api_v1_channels__id__members_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_is_active_member_by_id_and_user_id_api_v1_channels__id__members_active_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateActiveMemberForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_members_by_id_api_v1_channels__id__update_members_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateMembersForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_members_by_id_api_v1_channels__id__update_members_remove_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RemoveMembersForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_channel_by_id_api_v1_channels__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChannelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_channel_by_id_api_v1_channels__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_messages_api_v1_channels__id__messages_get_get: {
        parameters: {
            query?: {
                skip?: number;
                limit?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageUserResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pinned_channel_messages_api_v1_channels__id__messages_pinned_get_get: {
        parameters: {
            query?: {
                page?: number;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageWithReactionsResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    post_new_message_api_v1_channels__id__messages_post_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__models__messages__MessageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_message_api_v1_channels__id__messages__message_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_message_data_api_v1_channels__id__messages__message_id__data_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    pin_channel_message_api_v1_channels__id__messages__message_id__pin_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PinMessageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageUserResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_thread_messages_api_v1_channels__id__messages__message_id__thread_get_get: {
        parameters: {
            query?: {
                skip?: number;
                limit?: number;
            };
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageUserResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_message_by_id_api_v1_channels__id__messages__message_id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__models__messages__MessageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_reaction_to_message_api_v1_channels__id__messages__message_id__reactions_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReactionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_reaction_by_id_and_user_id_and_name_api_v1_channels__id__messages__message_id__reactions_remove_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReactionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_message_by_id_api_v1_channels__id__messages__message_id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_webhook_profile_image_api_v1_channels_webhooks__webhook_id__profile_image_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_channel_webhooks_api_v1_channels__id__webhooks_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelWebhookModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_channel_webhook_api_v1_channels__id__webhooks_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChannelWebhookForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelWebhookModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_channel_webhook_api_v1_channels__id__webhooks__webhook_id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhook_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChannelWebhookForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChannelWebhookModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_channel_webhook_api_v1_channels__id__webhooks__webhook_id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                webhook_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    post_webhook_message_api_v1_channels_webhooks__webhook_id___token__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                webhook_id: string;
                token: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WebhookMessageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_session_user_chat_list_api_v1_chats_list_get_get: {
        parameters: {
            query?: {
                page?: number | null;
                include_pinned?: boolean | null;
                include_folders?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_session_user_chat_list_api_v1_chats__get_get: {
        parameters: {
            query?: {
                page?: number | null;
                include_pinned?: boolean | null;
                include_folders?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_all_user_chats_api_v1_chats__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    get_session_user_chat_usage_stats_api_v1_chats_stats_usage_get_get: {
        parameters: {
            query?: {
                items_per_page?: number | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatUsageStatsListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_chat_stats_api_v1_chats_stats_export_get_get: {
        parameters: {
            query?: {
                updated_at?: number | null;
                page?: number | null;
                stream?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatStatsExportList"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_single_chat_stats_api_v1_chats_stats_export__chat_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chat_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatStatsExport"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_chat_list_by_user_id_api_v1_chats_list_user__user_id__get_get: {
        parameters: {
            query?: {
                page?: number | null;
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
            };
            header?: never;
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_chat_api_v1_chats_new_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    import_chats_api_v1_chats_import_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatsImportForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_user_chats_api_v1_chats_search_get_get: {
        parameters: {
            query: {
                text: string;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_chats_by_folder_id_api_v1_chats_folder__folder_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                folder_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_chat_list_by_folder_id_api_v1_chats_folder__folder_id__list_get_get: {
        parameters: {
            query?: {
                page?: number | null;
            };
            header?: never;
            path: {
                folder_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_pinned_chats_api_v1_chats_pinned_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
        };
    };
    get_user_chats_api_v1_chats_all_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"][];
                };
            };
        };
    };
    get_user_archived_chats_api_v1_chats_all_archived_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"][];
                };
            };
        };
    };
    get_all_user_tags_api_v1_chats_all_tags_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagModel"][];
                };
            };
        };
    };
    get_all_user_chats_in_db_api_v1_chats_all_db_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"][];
                };
            };
        };
    };
    get_archived_session_user_chat_list_api_v1_chats_archived_get_get: {
        parameters: {
            query?: {
                page?: number | null;
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    archive_all_chats_api_v1_chats_archive_all_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    unarchive_all_chats_api_v1_chats_unarchive_all_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    get_shared_session_user_chat_list_api_v1_chats_shared_get_get: {
        parameters: {
            query?: {
                page?: number | null;
                query?: string | null;
                order_by?: string | null;
                direction?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SharedChatResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_shared_chat_by_id_api_v1_chats_share__share_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                share_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_chat_list_by_tag_name_api_v1_chats_tags_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TagFilterForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatTitleIdResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_chat_by_id_api_v1_chats__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_chat_by_id_api_v1_chats__id__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_chat_by_id_api_v1_chats__id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_chat_message_by_id_api_v1_chats__id__messages__message_id__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["open_webui__routers__chats__MessageForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    send_chat_message_event_by_id_api_v1_chats__id__messages__message_id__event_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                message_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["EventForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pinned_status_by_id_api_v1_chats__id__pinned_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    pin_chat_by_id_api_v1_chats__id__pin_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    clone_chat_by_id_api_v1_chats__id__clone_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CloneForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    clone_shared_chat_by_id_api_v1_chats__id__clone_shared_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    archive_chat_by_id_api_v1_chats__id__archive_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    share_chat_by_id_api_v1_chats__id__share_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_shared_chat_by_id_api_v1_chats__id__share_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_chat_folder_id_by_id_api_v1_chats__id__folder_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatFolderIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_chat_tags_by_id_api_v1_chats__id__tags_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_tag_by_id_and_tag_name_api_v1_chats__id__tags_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TagForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_tag_by_id_and_tag_name_api_v1_chats__id__tags_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TagForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_all_tags_by_id_api_v1_chats__id__tags_all_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_notes_api_v1_notes__get_get: {
        parameters: {
            query?: {
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteItemResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_notes_api_v1_notes_search_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                permission?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_note_api_v1_notes_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NoteForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_note_by_id_api_v1_notes__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_note_by_id_api_v1_notes__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NoteForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_note_access_by_id_api_v1_notes__id__access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["NoteAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["NoteModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_note_by_id_api_v1_notes__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_api_v1_models_list_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                tag?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelAccessListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_base_models_api_v1_models_base_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelResponse"][];
                };
            };
        };
    };
    get_model_tags_api_v1_models_tags_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    create_new_model_api_v1_models_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_models_api_v1_models_export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelModel"][];
                };
            };
        };
    };
    import_models_api_v1_models_import_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelsImportForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    sync_models_api_v1_models_sync_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SyncModelsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_by_id_api_v1_models_model_get_get: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelAccessResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_profile_image_api_v1_models_model_profile_image_get_get: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_model_by_id_api_v1_models_model_toggle_post_post: {
        parameters: {
            query: {
                id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_model_by_id_api_v1_models_model_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_model_access_by_id_api_v1_models_model_access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_model_by_id_api_v1_models_model_delete_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ModelIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_all_models_api_v1_models_delete_all_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    get_knowledge_bases_api_v1_knowledge__get_get: {
        parameters: {
            query?: {
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeAccessListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_knowledge_bases_api_v1_knowledge_search_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeAccessListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_knowledge_files_api_v1_knowledge_search_files_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFileListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_knowledge_api_v1_knowledge_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    reindex_knowledge_files_api_v1_knowledge_reindex_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    reindex_knowledge_base_metadata_embeddings_api_v1_knowledge_metadata_reindex_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
        };
    };
    get_knowledge_by_id_api_v1_knowledge__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_knowledge_by_id_api_v1_knowledge__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_knowledge_access_by_id_api_v1_knowledge__id__access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_knowledge_files_by_id_api_v1_knowledge__id__files_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFileListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_file_to_knowledge_by_id_api_v1_knowledge__id__file_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeFileIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_file_from_knowledge_by_id_api_v1_knowledge__id__file_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeFileIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_file_from_knowledge_by_id_api_v1_knowledge__id__file_remove_post_post: {
        parameters: {
            query?: {
                delete_file?: boolean;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeFileIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_knowledge_by_id_api_v1_knowledge__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    reset_knowledge_by_id_api_v1_knowledge__id__reset_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_files_to_knowledge_batch_api_v1_knowledge__id__files_batch_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["KnowledgeFileIdForm"][];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["KnowledgeFilesResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_knowledge_by_id_api_v1_knowledge__id__export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompts_api_v1_prompts__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"][];
                };
            };
        };
    };
    get_prompt_tags_api_v1_prompts_tags_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": string[];
                };
            };
        };
    };
    get_prompt_list_api_v1_prompts_list_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                tag?: string | null;
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptAccessListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_prompt_api_v1_prompts_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_by_command_api_v1_prompts_command__command__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                command: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptAccessResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_by_id_api_v1_prompts_id__prompt_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptAccessResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_prompt_by_id_api_v1_prompts_id__prompt_id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_prompt_metadata_api_v1_prompts_id__prompt_id__update_meta_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptMetadataForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    set_prompt_version_api_v1_prompts_id__prompt_id__update_version_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptVersionUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_prompt_access_by_id_api_v1_prompts_id__prompt_id__access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PromptAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_prompt_active_api_v1_prompts_id__prompt_id__toggle_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_prompt_by_id_api_v1_prompts_id__prompt_id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_history_api_v1_prompts_id__prompt_id__history_get_get: {
        parameters: {
            query?: {
                page?: number;
            };
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptHistoryResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_history_entry_api_v1_prompts_id__prompt_id__history__history_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
                history_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PromptHistoryModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_prompt_history_entry_api_v1_prompts_id__prompt_id__history__history_id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                prompt_id: string;
                history_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_prompt_diff_api_v1_prompts_id__prompt_id__history_diff_get_get: {
        parameters: {
            query: {
                from_id: string;
                to_id: string;
            };
            header?: never;
            path: {
                prompt_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_api_v1_tools__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolUserResponse"][];
                };
            };
        };
    };
    get_tool_list_api_v1_tools_list_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolAccessResponse"][];
                };
            };
        };
    };
    load_tool_from_url_api_v1_tools_load_url_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoadUrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_tools_api_v1_tools_export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolModel"][];
                };
            };
        };
    };
    create_new_tools_api_v1_tools_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ToolForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_by_id_api_v1_tools_id__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolAccessResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tools_by_id_api_v1_tools_id__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ToolForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tool_access_by_id_api_v1_tools_id__id__access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ToolAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ToolModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_tools_by_id_api_v1_tools_id__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_valves_by_id_api_v1_tools_id__id__valves_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_valves_spec_by_id_api_v1_tools_id__id__valves_spec_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tools_valves_by_id_api_v1_tools_id__id__valves_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tools_user_valves_spec_by_id_api_v1_tools_id__id__valves_user_spec_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_tools_user_valves_by_id_api_v1_tools_id__id__valves_user_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_skills_api_v1_skills__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillUserResponse"][];
                };
            };
        };
    };
    get_skill_list_api_v1_skills_list_get_get: {
        parameters: {
            query?: {
                query?: string | null;
                view_option?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillAccessListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_skills_api_v1_skills_export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillModel"][];
                };
            };
        };
    };
    create_new_skill_api_v1_skills_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SkillForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_skill_by_id_api_v1_skills_id__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillAccessResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_skill_by_id_api_v1_skills_id__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SkillForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_skill_access_by_id_api_v1_skills_id__id__access_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SkillAccessGrantsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_skill_by_id_api_v1_skills_id__id__toggle_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SkillModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_skill_by_id_api_v1_skills_id__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_memories_api_v1_memories__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MemoryModel"][];
                };
            };
        };
    };
    add_memory_api_v1_memories_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AddMemoryForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MemoryModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    query_memory_api_v1_memories_query_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["QueryMemoryForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    reset_memory_from_vector_db_api_v1_memories_reset_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    delete_memory_by_user_id_api_v1_memories_delete_user_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    update_memory_by_id_api_v1_memories__memory_id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                memory_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MemoryUpdateModel"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MemoryModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_memory_by_id_api_v1_memories__memory_id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                memory_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_folders_api_v1_folders__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FolderNameIdResponse"][];
                };
            };
        };
    };
    create_folder_api_v1_folders__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FolderForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_folder_by_id_api_v1_folders__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FolderModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_folder_by_id_api_v1_folders__id__delete_delete: {
        parameters: {
            query?: {
                delete_contents?: boolean | null;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_folder_name_by_id_api_v1_folders__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FolderUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_folder_parent_id_by_id_api_v1_folders__id__update_parent_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FolderParentIdForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_folder_is_expanded_by_id_api_v1_folders__id__update_expanded_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FolderIsExpandedForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_groups_api_v1_groups__get_get: {
        parameters: {
            query?: {
                share?: boolean | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_group_api_v1_groups_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GroupForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_group_by_id_api_v1_groups_id__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_group_info_by_id_api_v1_groups_id__id__info_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupInfoResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    export_group_by_id_api_v1_groups_id__id__export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupExportResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_users_in_group_api_v1_groups_id__id__users_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserInfoResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_group_by_id_api_v1_groups_id__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["GroupUpdateForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    add_user_to_group_api_v1_groups_id__id__users_add_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserIdsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    remove_users_from_group_api_v1_groups_id__id__users_remove_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserIdsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_group_by_id_api_v1_groups_id__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_files_api_v1_files__get_get: {
        parameters: {
            query?: {
                /** @description Page number (1-indexed) */
                page?: number;
                content?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_file_api_v1_files__post_post: {
        parameters: {
            query?: {
                process?: boolean;
                process_in_background?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_file_api_v1_files__post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileModelResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_files_api_v1_files_search_get_get: {
        parameters: {
            query: {
                /** @description Filename pattern to search for. Supports wildcards such as '*.txt' */
                filename: string;
                content?: boolean;
                /** @description Number of files to skip */
                skip?: number;
                /** @description Maximum number of files to return */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileModelResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_all_files_api_v1_files_all_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_file_by_id_api_v1_files__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FileModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_file_by_id_api_v1_files__id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_process_status_api_v1_files__id__process_status_get_get: {
        parameters: {
            query?: {
                stream?: boolean;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_data_content_by_id_api_v1_files__id__data_content_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_file_data_content_by_id_api_v1_files__id__data_content_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ContentForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_content_by_id_api_v1_files__id__content_get_get: {
        parameters: {
            query?: {
                attachment?: boolean;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_html_file_content_by_id_api_v1_files__id__content_html_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_file_content_by_id_api_v1_files__id__content__file_name__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_functions_api_v1_functions__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionResponse"][];
                };
            };
        };
    };
    get_function_list_api_v1_functions_list_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionUserResponse"][];
                };
            };
        };
    };
    get_functions_api_v1_functions_export_get_get: {
        parameters: {
            query?: {
                include_valves?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": (components["schemas"]["FunctionModel"] | components["schemas"]["FunctionWithValvesModel"])[];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    load_function_from_url_api_v1_functions_load_url_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LoadUrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    sync_functions_api_v1_functions_sync_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SyncFunctionsForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionWithValvesModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_new_function_api_v1_functions_create_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FunctionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionResponse"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_function_by_id_api_v1_functions_id__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_function_by_id_api_v1_functions_id__id__toggle_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    toggle_global_by_id_api_v1_functions_id__id__toggle_global_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_function_by_id_api_v1_functions_id__id__update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FunctionForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FunctionModel"] | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_function_by_id_api_v1_functions_id__id__delete_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_function_valves_by_id_api_v1_functions_id__id__valves_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_function_valves_spec_by_id_api_v1_functions_id__id__valves_spec_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_function_valves_by_id_api_v1_functions_id__id__valves_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_function_user_valves_by_id_api_v1_functions_id__id__valves_user_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_function_user_valves_spec_by_id_api_v1_functions_id__id__valves_user_spec_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_function_user_valves_by_id_api_v1_functions_id__id__valves_user_update_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: unknown;
                    } | null;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_leaderboard_api_v1_evaluations_leaderboard_get_get: {
        parameters: {
            query?: {
                query?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LeaderboardResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_history_api_v1_evaluations_leaderboard__model_id__history_get_get: {
        parameters: {
            query?: {
                days?: number;
            };
            header?: never;
            path: {
                model_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelHistoryResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_config_api_v1_evaluations_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_config_api_v1_evaluations_config_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateConfigForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_all_feedbacks_api_v1_evaluations_feedbacks_all_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackResponse"][];
                };
            };
        };
    };
    delete_all_feedbacks_api_v1_evaluations_feedbacks_all_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_all_feedback_ids_api_v1_evaluations_feedbacks_all_ids_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackIdResponse"][];
                };
            };
        };
    };
    export_all_feedbacks_api_v1_evaluations_feedbacks_all_export_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackModel"][];
                };
            };
        };
    };
    get_feedbacks_api_v1_evaluations_feedbacks_user_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackUserResponse"][];
                };
            };
        };
    };
    delete_feedbacks_api_v1_evaluations_feedbacks_delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": boolean;
                };
            };
        };
    };
    get_feedbacks_api_v1_evaluations_feedbacks_list_get_get: {
        parameters: {
            query?: {
                order_by?: string | null;
                direction?: string | null;
                page?: number | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackListResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_feedback_api_v1_evaluations_feedback_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FeedbackForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_feedback_by_id_api_v1_evaluations_feedback__id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    update_feedback_by_id_api_v1_evaluations_feedback__id__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FeedbackForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_feedback_by_id_api_v1_evaluations_feedback__id__delete_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_analytics_api_v1_analytics_models_get_get: {
        parameters: {
            query?: {
                /** @description Start timestamp (epoch) */
                start_date?: number | null;
                /** @description End timestamp (epoch) */
                end_date?: number | null;
                /** @description Filter by user group ID */
                group_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelAnalyticsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_analytics_api_v1_analytics_users_get_get: {
        parameters: {
            query?: {
                /** @description Start timestamp (epoch) */
                start_date?: number | null;
                /** @description End timestamp (epoch) */
                end_date?: number | null;
                /** @description Filter by user group ID */
                group_id?: string | null;
                /** @description Max users to return */
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserAnalyticsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_messages_api_v1_analytics_messages_get_get: {
        parameters: {
            query?: {
                /** @description Filter by model ID */
                model_id?: string | null;
                /** @description Filter by user ID */
                user_id?: string | null;
                /** @description Filter by chat ID */
                chat_id?: string | null;
                /** @description Start timestamp (epoch) */
                start_date?: number | null;
                /** @description End timestamp (epoch) */
                end_date?: number | null;
                skip?: number;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ChatMessageModel"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_summary_api_v1_analytics_summary_get_get: {
        parameters: {
            query?: {
                /** @description Start timestamp (epoch) */
                start_date?: number | null;
                /** @description End timestamp (epoch) */
                end_date?: number | null;
                /** @description Filter by user group ID */
                group_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SummaryResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_daily_stats_api_v1_analytics_daily_get_get: {
        parameters: {
            query?: {
                /** @description Start timestamp (epoch) */
                start_date?: number | null;
                /** @description End timestamp (epoch) */
                end_date?: number | null;
                /** @description Filter by user group ID */
                group_id?: string | null;
                /** @description Granularity: 'hourly' or 'daily' */
                granularity?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DailyStatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_token_usage_api_v1_analytics_tokens_get_get: {
        parameters: {
            query?: {
                start_date?: number | null;
                end_date?: number | null;
                /** @description Filter by user group ID */
                group_id?: string | null;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenUsageResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_chats_api_v1_analytics_models__model_id__chats_get_get: {
        parameters: {
            query?: {
                start_date?: number | null;
                end_date?: number | null;
                skip?: number;
                limit?: number;
            };
            header?: never;
            path: {
                model_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelChatsResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_model_overview_api_v1_analytics_models__model_id__overview_get_get: {
        parameters: {
            query?: {
                /** @description Number of days of history (0 for all) */
                days?: number;
            };
            header?: never;
            path: {
                model_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ModelOverviewResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_gravatar_api_v1_utils_gravatar_get_get: {
        parameters: {
            query: {
                email: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    format_code_api_v1_utils_code_format_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CodeForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    execute_code_api_v1_utils_code_execute_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CodeForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_html_from_markdown_api_v1_utils_markdown_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["MarkdownForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    download_chat_as_pdf_api_v1_utils_pdf_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ChatTitleMessagesForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    download_db_api_v1_utils_db_download_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    list_terminal_servers_api_v1_terminals__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_options: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_head: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    proxy_terminal_api_v1_terminals__server_id___path__head_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                server_id: string;
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_api_v1_models_get_get: {
        parameters: {
            query?: {
                refresh?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_models_api_models_get_get: {
        parameters: {
            query?: {
                refresh?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_base_models_api_models_base_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    embeddings_api_v1_embeddings_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    embeddings_api_embeddings_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    chat_completion_api_v1_chat_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    chat_completion_api_chat_completions_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_messages_api_v1_messages_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    generate_messages_api_message_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    chat_completed_api_chat_completed_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    chat_action_api_chat_actions__action_id__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                action_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    stop_task_endpoint_api_tasks_stop__task_id__post_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                task_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    list_tasks_endpoint_api_tasks_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    list_tasks_by_chat_id_endpoint_api_tasks_chat__chat_id__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                chat_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_app_config_api_config_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_webhook_url_api_webhook_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    update_webhook_url_api_webhook_post_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UrlForm"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_app_version_api_version_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_app_latest_release_version_api_version_updates_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_app_changelog_api_changelog_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_current_usage_api_usage_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    oauth_client_authorize_oauth_clients__client_id__authorize_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                client_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_client_callback_oauth_clients__client_id__callback_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                client_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_login_oauth__provider__login_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                provider: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_login_callback_oauth__provider__callback_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                provider: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    oauth_login_callback_oauth__provider__login_callback_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                provider: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_manifest_json_manifest_json_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    get_opensearch_xml_opensearch_xml_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    healthcheck_health_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    readiness_check_ready_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    healthcheck_with_db_health_db_get_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
        };
    };
    serve_cache_file_cache__path__get_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                path: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
