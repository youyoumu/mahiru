export interface paths {
    "/api/v2": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Api Root
         * @description API root.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["api_root_api_v2_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/pow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Pow Challenge
         * @description Get a new proof of work challenge. Optionally specify action for per-action difficulty.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_pow_challenge_api_v2_pow_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/cdn": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Cdn Config
         * @description Get CDN server configuration for media URLs.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_cdn_config_api_v2_cdn_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/config": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Config
         * @description Get app config: CDN servers and current announcement.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_config_api_v2_config_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/captcha": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Captcha Info
         * @description Get CAPTCHA provider info for the frontend widget.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_captcha_info_api_v2_captcha_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get All Galleries
         * @description Get paginated galleries ordered by newest first.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 30/1min per IP
         */
        get: operations["get_all_galleries_api_v2_galleries_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/tagged": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Galleries By Tag
         * @description Get galleries with a specific tag.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 30/1min per IP
         */
        get: operations["get_galleries_by_tag_api_v2_galleries_tagged_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/popular": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Popular Galleries
         * @description Get today's popular galleries.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 20/1min per IP
         */
        get: operations["get_popular_galleries_api_v2_galleries_popular_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/random": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Random Gallery
         * @description Get a random gallery ID.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 60/1min per IP
         */
        get: operations["get_random_gallery_api_v2_galleries_random_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Gallery
         * @description Get a single gallery with full details and optional includes.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 45/1min per IP
         */
        get: operations["get_gallery_api_v2_galleries__gallery_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}/related": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Related Galleries
         * @description Get galleries similar to the specified gallery.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 45/1min per IP
         */
        get: operations["get_related_galleries_api_v2_galleries__gallery_id__related_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}/favorite": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Check Favorite
         * @description Check if a gallery is in the user's favorites.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         */
        get: operations["check_favorite_api_v2_galleries__gallery_id__favorite_get"];
        put?: never;
        /**
         * Add To Favorites
         * @description Add a gallery to the current user's favorites.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Feature Flag:** `allow_favorites` must be enabled
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         *     - 15/1min per IP + user
         *     - 15/1min per IP + API key owner
         */
        post: operations["add_to_favorites_api_v2_galleries__gallery_id__favorite_post"];
        /**
         * Remove From Favorites
         * @description Remove a gallery from the current user's favorites.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Feature Flag:** `allow_favorites` must be enabled
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         *     - 15/1min per IP + user
         *     - 15/1min per IP + API key owner
         */
        delete: operations["remove_from_favorites_api_v2_galleries__gallery_id__favorite_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}/edit": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Submit Gallery Edit
         * @description Submit an edit to a gallery's tags. Staff only — auto-applied immediately.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         */
        post: operations["submit_gallery_edit_api_v2_galleries__gallery_id__edit_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/tags/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tags By Ids
         * @description Look up multiple tags by ID. Max 100 per request.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Rate limits:**
         *     - 15/1min per IP
         */
        get: operations["get_tags_by_ids_api_v2_tags_ids_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/tags/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Search Tags
         * @description Search tags by name prefix.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Rate limits:**
         *     - 30/1min per IP
         */
        post: operations["search_tags_api_v2_tags_search_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/tags/{tag_type}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tags By Type
         * @description Get tags of a specific type with pagination.
         *
         *     Supports both page-based and cursor-based pagination.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Rate limits:**
         *     - 30/1min per IP
         */
        get: operations["get_tags_by_type_api_v2_tags__tag_type__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/tags/{tag_type}/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tag By Slug
         * @description Get a specific tag by type and slug.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Rate limits:**
         *     - 30/1min per IP
         */
        get: operations["get_tag_by_slug_api_v2_tags__tag_type___slug__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Gallery Comments
         * @description Get all comments for a gallery.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         */
        get: operations["get_gallery_comments_api_v2_galleries__gallery_id__comments_get"];
        put?: never;
        /**
         * Create Comment
         * @description Create a new comment on a gallery.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Feature Flag:** `allow_comments` must be enabled
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=comment`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 5/15min per user
         *     - 5/15min per IP + user
         *     - 10/15min per IP
         */
        post: operations["create_comment_api_v2_galleries__gallery_id__comments_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/galleries/{gallery_id}/comments/count": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Gallery Comment Count
         * @description Get the visible comment count for a gallery.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_gallery_comment_count_api_v2_galleries__gallery_id__comments_count_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/comments/{comment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Comment
         * @description Delete a comment.
         *
         *     Only the comment owner or staff can delete comments.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Feature Flag:** `allow_comments` must be enabled
         *
         *     **Rate limits:**
         *     - 5/15min per user
         *     - 5/15min per IP + user
         */
        delete: operations["delete_comment_api_v2_comments__comment_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/comments/{comment_id}/flag": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Flag Comment
         * @description Flag a comment for review.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 10/15min per user
         *     - 10/15min per IP + user
         *     - 15/15min per IP
         */
        post: operations["flag_comment_api_v2_comments__comment_id__flag_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Galleries
         * @description Search galleries.
         *
         *     Supports:
         *     - Keywords: `word`
         *     - Exact phrases: `"exact phrase"`
         *     - Negation: `-word`, `-"exact phrase"`, `-artist:name`
         *     - Tag filters: `artist:name`, `language:english`, `tag:"big breasts"`
         *     - Numeric filters: `pages:>10`, `favorites:>=100`
         *     - Date filters: `uploaded:<7d`, `uploaded:>1m`
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 20/1min per IP
         */
        get: operations["search_galleries_api_v2_search_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/user": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Me
         * @description Get your profile info. Email is hidden for API key auth.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 30/1min per user
         *     - 30/1min per API key owner
         */
        get: operations["get_me_api_v2_user_get"];
        /**
         * Update Profile
         * @description Update your profile.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         *     - 30/15min per IP + user
         */
        put: operations["update_profile_api_v2_user_put"];
        post?: never;
        /**
         * Delete Account
         * @description Delete your account. Requires password and username confirmation.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 3/1h per user
         *     - 3/1h per IP + user
         */
        delete: operations["delete_account_api_v2_user_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/user/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Upload Avatar
         * @description Upload a new avatar image.
         *
         *     ---
         *
         *     **Auth:** User Token required
         */
        post: operations["upload_avatar_api_v2_user_avatar_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/user/keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List Api Keys
         * @description List your API keys.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 30/1min per user
         */
        get: operations["list_api_keys_api_v2_user_keys_get"];
        put?: never;
        /**
         * Create Api Key
         * @description Create a new API key. The raw key is only shown once.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Feature Flag:** `allow_api_keys` must be enabled
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=api_key`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 5/1h per user
         *     - 5/1h per IP + user
         */
        post: operations["create_api_key_api_v2_user_keys_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/user/keys/{key_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Revoke Api Key
         * @description Revoke an API key.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Feature Flag:** `allow_api_keys` must be enabled
         *
         *     **Rate limits:**
         *     - 10/1h per user
         *     - 10/1h per IP + user
         */
        delete: operations["revoke_api_key_api_v2_user_keys__key_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/favorites": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Favorites
         * @description Get the authenticated user's favorite galleries.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         */
        get: operations["get_favorites_api_v2_favorites_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/favorites/random": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Random Favorite
         * @description Get a random gallery ID from the authenticated user's favorites.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         */
        get: operations["get_random_favorite_api_v2_favorites_random_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/blacklist": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Blacklist
         * @description Get the authenticated user's blacklisted tags.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 15/1min per user
         *     - 15/1min per API key owner
         */
        get: operations["get_blacklist_api_v2_blacklist_get"];
        put?: never;
        /**
         * Update Blacklist
         * @description Add or remove tags from the authenticated user's blacklist.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 20/15min per user
         *     - 20/15min per API key owner
         */
        post: operations["update_blacklist_api_v2_blacklist_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/blacklist/ids": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Blacklist Ids
         * @description Get just the tag IDs for the authenticated user's blacklist.
         *
         *     ---
         *
         *     **Auth:** User Token or API Key
         *
         *     **Rate limits:**
         *     - 30/1min per user
         */
        get: operations["get_blacklist_ids_api_v2_blacklist_ids_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/users/{user_id}/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Profile
         * @description Get a user's public profile.
         *
         *     Requires both the user ID and correct username slug.
         *
         *     ---
         *
         *     **Auth:** Public (optional User Token or API Key for personalization)
         *
         *     **Rate limits:**
         *     - 10/1min per IP
         */
        get: operations["get_user_profile_api_v2_users__user_id___slug__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login
         * @description Authenticate with username/email and password.
         *
         *     Returns access token and refresh token.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=login`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 10/15min per IP
         */
        post: operations["login_api_v2_auth_login_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Register
         * @description Create a new account.
         *
         *     Returns access token and refresh token.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Feature Flag:** `allow_register` must be enabled
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=register`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 3/1h per IP
         */
        post: operations["register_api_v2_auth_register_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/refresh": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Refresh
         * @description Exchange a refresh token for new access + refresh tokens.
         *
         *     The old refresh token is revoked (token rotation).
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Rate limits:**
         *     - 15/15min per IP
         */
        post: operations["refresh_api_v2_auth_refresh_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout
         * @description Revoke the refresh token.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 10/15min per user
         *     - 10/15min per IP + user
         */
        post: operations["logout_api_v2_auth_logout_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/logout/all": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout All
         * @description Revoke all sessions for the current user (log out everywhere).
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 5/1h per user
         *     - 5/1h per IP + user
         */
        post: operations["logout_all_api_v2_auth_logout_all_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Sessions
         * @description List all active sessions for the current user.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 30/1min per user
         */
        get: operations["get_sessions_api_v2_auth_sessions_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/sessions/{session_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Revoke Session
         * @description Revoke a specific session by ID.
         *
         *     ---
         *
         *     **Auth:** User Token required
         *
         *     **Rate limits:**
         *     - 10/1min per user
         */
        delete: operations["revoke_session_api_v2_auth_sessions__session_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/reset": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Request Password Reset
         * @description Request a password reset.
         *
         *     Sends a reset link to the user's email if the account exists.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Feature Flag:** `allow_password_reset` must be enabled
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=reset`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 3/15min per IP
         */
        post: operations["request_password_reset_api_v2_auth_reset_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/auth/reset/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Confirm Password Reset
         * @description Confirm a password reset with the token from the reset email.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         *
         *     **Feature Flag:** `allow_password_reset` must be enabled
         *
         *     **Protection:** Proof of Work required (`GET /api/v2/pow?action=reset`)
         *
         *     **Protection:** CAPTCHA required (`GET /api/v2/captcha` for provider info)
         *
         *     **Rate limits:**
         *     - 5/15min per IP
         */
        post: operations["confirm_password_reset_api_v2_auth_reset_confirm_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/users/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Mod Info
         * @description Get moderation info for a user. Staff sees shadowban, admins also see email.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         */
        get: operations["get_user_mod_info_api_v2_moderation_users__user_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/users/{user_id}/shadowban": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Shadowban User
         * @description Shadowban a user. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        put: operations["shadowban_user_api_v2_moderation_users__user_id__shadowban_put"];
        post?: never;
        /**
         * Unshadowban User
         * @description Remove shadowban from a user. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        delete: operations["unshadowban_user_api_v2_moderation_users__user_id__shadowban_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/comments/flags/{flag_id}/review": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Review Comment Flag
         * @description Review a comment flag.
         *
         *     Actions:
         *     - approve: Accept the flag and hide the comment
         *     - reject: Reject the flag, no action taken
         *
         *     Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["review_comment_flag_api_v2_comments_flags__flag_id__review_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/flags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Pending Flags
         * @description Get pending (unreviewed) comment flags. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         */
        get: operations["get_pending_flags_api_v2_moderation_flags_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/edits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Pending Edits
         * @description Get pending gallery edits that the user hasn't voted on.
         *
         *     Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         */
        get: operations["get_pending_edits_api_v2_moderation_edits_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/edits/{edit_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Edit
         * @description Get a single edit by ID.
         *
         *     Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         */
        get: operations["get_edit_api_v2_moderation_edits__edit_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/edits/{edit_id}/vote": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Vote On Edit
         * @description Vote on a pending gallery edit.
         *
         *     Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["vote_on_edit_api_v2_moderation_edits__edit_id__vote_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/edits/{edit_id}/apply": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Apply Edit
         * @description Manually apply a pending edit.
         *
         *     Staff only. Use this to force-apply an edit regardless of votes.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["apply_edit_api_v2_moderation_edits__edit_id__apply_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/edits/{edit_id}/reject": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Reject Edit
         * @description Reject a pending edit.
         *
         *     Staff only. Use this to force-reject an edit regardless of votes.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["reject_edit_api_v2_moderation_edits__edit_id__reject_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/comments/recent": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Recent Comments
         * @description Get recent visible comments. Admin only.
         *
         *     ---
         *
         *     **Auth:** Superuser Token required
         */
        get: operations["get_recent_comments_api_v2_moderation_comments_recent_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/comments/spam": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Spam Comments
         * @description Get spam/hidden comments. Admin only.
         *
         *     ---
         *
         *     **Auth:** Superuser Token required
         */
        get: operations["get_spam_comments_api_v2_moderation_comments_spam_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/comments/{comment_id}/hide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Hide Comment
         * @description Hide a comment. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        put: operations["hide_comment_api_v2_moderation_comments__comment_id__hide_put"];
        post?: never;
        /**
         * Unhide Comment
         * @description Unhide a comment. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        delete: operations["unhide_comment_api_v2_moderation_comments__comment_id__hide_delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/bulk/hide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk Hide
         * @description Hide multiple comments. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["bulk_hide_api_v2_moderation_bulk_hide_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/bulk/unhide": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk Unhide
         * @description Unhide multiple comments. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["bulk_unhide_api_v2_moderation_bulk_unhide_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/bulk/shadowban": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk Shadowban
         * @description Shadowban multiple users. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["bulk_shadowban_api_v2_moderation_bulk_shadowban_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/bulk/unshadowban": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Bulk Unshadowban
         * @description Unshadowban multiple users. Staff only.
         *
         *     ---
         *
         *     **Auth:** Staff Token required
         *
         *     **Rate limits:**
         *     - 30/15min per user
         */
        post: operations["bulk_unshadowban_api_v2_moderation_bulk_unshadowban_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/api-keys": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * List All Api Keys
         * @description List all active API keys with user info. Admin only.
         *
         *     ---
         *
         *     **Auth:** Superuser Token required
         */
        get: operations["list_all_api_keys_api_v2_moderation_api_keys_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/moderation/api-keys/{key_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Revoke Api Key Admin
         * @description Revoke any API key. Admin only.
         *
         *     ---
         *
         *     **Auth:** Superuser Token required
         */
        delete: operations["revoke_api_key_admin_api_v2_moderation_api_keys__key_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Zones
         * @description Get ad HTML for all zones.
         *
         *     Returns:
         *         Dict mapping zone spec to HTML for all active zones.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_zones_api_v2_zones_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/zones/i": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Popunder Inventory
         * @description Get available popunder for current user.
         *
         *     Returns the next popunder to show with timing info.
         *     delta is in milliseconds (0 means ready to show).
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["get_popunder_inventory_api_v2_zones_i_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/zones/h": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Record Popunder Hit
         * @description Record a popunder impression/open event.
         *
         *     Called by frontend when a popunder is triggered.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        post: operations["record_popunder_hit_api_v2_zones_h_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/v2/zones/pu": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Popunder Redirect
         * @description Redirect to popunder ad URL.
         *
         *     Two-step process:
         *     1. First call (without out=1): records "opens" stat, redirects to self with out=1
         *     2. Second call (with out=1): records "redirects" stat, redirects to actual URL
         *
         *     This allows tracking of both opens and actual redirects.
         *
         *     ---
         *
         *     **Auth:** Public (no authentication required)
         */
        get: operations["popunder_redirect_api_v2_zones_pu_get"];
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
        /** Announcement */
        Announcement: {
            /** Message */
            message: string;
            /**
             * Links
             * @default []
             */
            links: components["schemas"]["AnnouncementLink"][];
        };
        /** AnnouncementLink */
        AnnouncementLink: {
            /** Text */
            text: string;
            /** Url */
            url: string;
        };
        /** ApiKeyCreateResponse */
        ApiKeyCreateResponse: {
            /** Id */
            id: string;
            /** Key */
            key: string;
            /** Name */
            name: string;
        };
        /** ApiKeyListItem */
        ApiKeyListItem: {
            /** Id */
            id: string;
            /** Key Prefix */
            key_prefix: string;
            /** Name */
            name: string;
            /** Created At */
            created_at: number;
            /** Last Used At */
            last_used_at?: number | null;
        };
        /** ApiRootResponse */
        ApiRootResponse: {
            /** Version */
            version: string;
            /** Message */
            message: string;
        };
        /**
         * AutocompleteRequest
         * @description Autocomplete request body.
         */
        AutocompleteRequest: {
            /** Type */
            type: string;
            /** Query */
            query?: string | null;
            /**
             * Limit
             * @default 15
             */
            limit: number;
        };
        /**
         * BlacklistListResponse
         * @description Response for listing blacklisted tags.
         */
        BlacklistListResponse: {
            /** Tags */
            tags: components["schemas"]["BlacklistedTagResponse"][];
            /** Count */
            count: number;
        };
        /**
         * BlacklistResponse
         * @description Response for blacklist operations.
         */
        BlacklistResponse: {
            /** Success */
            success: boolean;
            /** Count */
            count: number;
        };
        /**
         * BlacklistUpdateRequest
         * @description Request body for updating blacklist.
         */
        BlacklistUpdateRequest: {
            /**
             * Added
             * @default []
             */
            added: number[];
            /**
             * Removed
             * @default []
             */
            removed: number[];
        };
        /**
         * BlacklistedTagResponse
         * @description Blacklisted tag info.
         */
        BlacklistedTagResponse: {
            /** Id */
            id: number;
            /** Type */
            type: string;
            /** Name */
            name: string;
            /** Slug */
            slug: string;
            /** Count */
            count: number;
        };
        /** Body_confirm_password_reset_api_v2_auth_reset_confirm_post */
        Body_confirm_password_reset_api_v2_auth_reset_confirm_post: {
            /**
             * Token
             * @description Reset token from the email link
             */
            token: string;
            /**
             * Password
             * @description New password
             */
            password: string;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token from the widget
             */
            captcha_response: string;
        };
        /** Body_create_api_key_api_v2_user_keys_post */
        Body_create_api_key_api_v2_user_keys_post: {
            /** Name */
            name: string;
            /**
             * Purpose
             * @default
             */
            purpose: string;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token from the widget
             */
            captcha_response: string;
        };
        /** Body_create_comment_api_v2_galleries__gallery_id__comments_post */
        Body_create_comment_api_v2_galleries__gallery_id__comments_post: {
            /**
             * Body
             * @description Comment text
             */
            body: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token
             */
            captcha_response?: string | null;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
        };
        /** Body_login_api_v2_auth_login_post */
        Body_login_api_v2_auth_login_post: {
            /**
             * Username
             * @description Username or email
             */
            username: string;
            /** Password */
            password: string;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token from the widget
             */
            captcha_response: string;
        };
        /** Body_logout_api_v2_auth_logout_post */
        Body_logout_api_v2_auth_logout_post: {
            /**
             * Refresh Token
             * @description Refresh token to revoke
             */
            refresh_token: string;
        };
        /** Body_refresh_api_v2_auth_refresh_post */
        Body_refresh_api_v2_auth_refresh_post: {
            /**
             * Refresh Token
             * @description Refresh token to exchange
             */
            refresh_token: string;
        };
        /** Body_register_api_v2_auth_register_post */
        Body_register_api_v2_auth_register_post: {
            /** Username */
            username: string;
            /** Email */
            email: string;
            /** Password */
            password: string;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token from the widget
             */
            captcha_response: string;
        };
        /** Body_request_password_reset_api_v2_auth_reset_post */
        Body_request_password_reset_api_v2_auth_reset_post: {
            /**
             * Username Or Email
             * @description Username or email address
             */
            username_or_email: string;
            /**
             * Pow Challenge
             * @description PoW challenge from GET /api/v2/pow
             */
            pow_challenge: string;
            /**
             * Pow Nonce
             * @description Nonce that solves the PoW challenge
             */
            pow_nonce: string;
            /**
             * Captcha Response
             * @description CAPTCHA response token from the widget
             */
            captcha_response: string;
        };
        /**
         * CaptchaErrorResponse
         * @description Error response when CAPTCHA verification fails.
         */
        CaptchaErrorResponse: {
            /** Error */
            error: string;
            /**
             * Captcha Required
             * @default true
             */
            captcha_required: boolean;
            /** Captcha Public Key */
            captcha_public_key: string;
        };
        /** CaptchaInfoResponse */
        CaptchaInfoResponse: {
            /** Provider */
            provider: string;
            /** Site Key */
            site_key: string;
        };
        /** CdnConfigResponse */
        CdnConfigResponse: {
            /** Image Servers */
            image_servers: string[];
            /** Thumb Servers */
            thumb_servers: string[];
        };
        /**
         * CommentResponse
         * @description Comment response matching Django format.
         */
        CommentResponse: {
            /** Id */
            id: number;
            /** Gallery Id */
            gallery_id: number;
            poster: components["schemas"]["UserPublic"];
            /** Post Date */
            post_date: number;
            /** Body */
            body: string;
        };
        /**
         * ConfigResponse
         * @description Combined config: CDN servers + announcement.
         */
        ConfigResponse: {
            /** Image Servers */
            image_servers: string[];
            /** Thumb Servers */
            thumb_servers: string[];
            announcement?: components["schemas"]["Announcement"] | null;
        };
        /**
         * CoverInfo
         * @description Cover/thumbnail image with path and dimensions.
         */
        CoverInfo: {
            /** Path */
            path: string;
            /** Width */
            width: number;
            /** Height */
            height: number;
        };
        /**
         * CreatedTag
         * @description Tag to be created as part of an edit.
         */
        CreatedTag: {
            /** Type */
            type: string;
            /** Name */
            name: string;
        };
        /**
         * DeleteProfileRequest
         * @description Request body for deleting user profile.
         */
        DeleteProfileRequest: {
            /** Password */
            password: string;
            /** Confirmation */
            confirmation: string;
        };
        /**
         * DeleteProfileResponse
         * @description Response for profile deletion.
         */
        DeleteProfileResponse: {
            /** Success */
            success: boolean;
            /** Message */
            message: string;
        };
        /**
         * EditListResponse
         * @description Response for listing edits.
         */
        EditListResponse: {
            /** Edits */
            edits: components["schemas"]["EditResponse"][];
            /** Count */
            count: number;
        };
        /**
         * EditResponse
         * @description Single edit response.
         */
        EditResponse: {
            /** Id */
            id: number;
            /** User Id */
            user_id: number | null;
            /** User Username */
            user_username: string | null;
            /** Gallery Id */
            gallery_id: number;
            /** Gallery Title */
            gallery_title: string | null;
            /** Date */
            date: number;
            /** Accepted */
            accepted: boolean | null;
            /** Added Tags */
            added_tags: components["schemas"]["EditTagInfo"][];
            /** Removed Tags */
            removed_tags: components["schemas"]["EditTagInfo"][];
            /** Created Tags */
            created_tags: components["schemas"]["CreatedTag"][];
            /**
             * Upvotes
             * @default 0
             */
            upvotes: number;
            /**
             * Downvotes
             * @default 0
             */
            downvotes: number;
            /** User Vote */
            user_vote?: boolean | null;
        };
        /**
         * EditTagInfo
         * @description Tag info for edit display.
         */
        EditTagInfo: {
            /** Id */
            id: number;
            /** Type */
            type: string;
            /** Name */
            name: string;
            /** Slug */
            slug: string;
            /** Count */
            count: number;
            /** Action */
            action: string;
        };
        /**
         * ErrorResponse
         * @description Error response.
         */
        ErrorResponse: {
            /** Error */
            error: string;
        };
        /**
         * FavoriteResponse
         * @description Response for favorite/unfavorite actions.
         */
        FavoriteResponse: {
            /** Favorited */
            favorited: boolean;
            /** Num Favorites */
            num_favorites?: number | null;
        };
        /**
         * FlagCommentRequest
         * @description Request body for flagging a comment.
         */
        FlagCommentRequest: {
            /** Reason */
            reason: string;
        };
        /**
         * GalleryDetailResponse
         * @description Gallery detail with optional included data (comments, related, favorite).
         */
        GalleryDetailResponse: {
            /** Id */
            id: number;
            /** Media Id */
            media_id: string;
            title: components["schemas"]["GalleryTitle"];
            cover: components["schemas"]["CoverInfo"];
            thumbnail: components["schemas"]["CoverInfo"];
            /**
             * Scanlator
             * @default
             */
            scanlator: string;
            /** Upload Date */
            upload_date: number;
            /** Tags */
            tags: components["schemas"]["TagResponse"][];
            /** Num Pages */
            num_pages: number;
            /** Num Favorites */
            num_favorites: number;
            /**
             * Pages
             * @default []
             */
            pages: components["schemas"]["PageInfo"][];
            /** Comments */
            comments?: components["schemas"]["CommentResponse"][] | null;
            /** Related */
            related?: components["schemas"]["GalleryListItem"][] | null;
            /** Is Favorited */
            is_favorited?: boolean | null;
        };
        /**
         * GalleryListItem
         * @description Lightweight gallery for list views.
         *     Used in search results, tag listings, homepage.
         */
        GalleryListItem: {
            /** Id */
            id: number;
            /** Media Id */
            media_id: string;
            /** English Title */
            english_title: string;
            /** Japanese Title */
            japanese_title?: string | null;
            /** Thumbnail */
            thumbnail: string;
            /** Thumbnail Width */
            thumbnail_width: number;
            /** Thumbnail Height */
            thumbnail_height: number;
            /**
             * Num Pages
             * @default 0
             */
            num_pages: number;
            /**
             * Tag Ids
             * @default []
             */
            tag_ids: number[];
            /**
             * Blacklisted
             * @default false
             */
            blacklisted: boolean;
        };
        /**
         * GalleryTitle
         * @description Gallery title in multiple languages.
         */
        GalleryTitle: {
            /** English */
            english: string;
            /** Japanese */
            japanese?: string | null;
            /** Pretty */
            pretty: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * ModerationCommentResponse
         * @description Comment info for moderation views.
         */
        ModerationCommentResponse: {
            /** Id */
            id: number;
            /** Gallery Id */
            gallery_id: number;
            /** Gallery Title */
            gallery_title: string | null;
            /** Poster Id */
            poster_id: number;
            /** Poster Username */
            poster_username: string;
            /** Poster Slug */
            poster_slug: string;
            /** Poster Avatar */
            poster_avatar: string;
            /** Poster Is Shadowbanned */
            poster_is_shadowbanned: boolean;
            /** Body */
            body: string;
            /** Post Date */
            post_date: number;
            /** Is Hidden */
            is_hidden: boolean;
        };
        /**
         * ModerationCommentsListResponse
         * @description Response for moderation comment lists.
         */
        ModerationCommentsListResponse: {
            /** Comments */
            comments: components["schemas"]["ModerationCommentResponse"][];
            /** Total */
            total: number;
            /** Page */
            page: number;
            /** Per Page */
            per_page: number;
            /** Num Pages */
            num_pages: number;
        };
        /**
         * PageInfo
         * @description Full page/image details for reader.
         */
        PageInfo: {
            /** Number */
            number: number;
            /** Path */
            path: string;
            /** Width */
            width: number;
            /** Height */
            height: number;
            /** Thumbnail */
            thumbnail: string;
            /** Thumbnail Width */
            thumbnail_width: number;
            /** Thumbnail Height */
            thumbnail_height: number;
        };
        /** PaginatedResponse[GalleryListItem] */
        PaginatedResponse_GalleryListItem_: {
            /** Result */
            result: components["schemas"]["GalleryListItem"][];
            /** Num Pages */
            num_pages: number;
            /**
             * Per Page
             * @default 25
             */
            per_page: number;
            /** Total */
            total?: number | null;
        };
        /** PoWChallengeResponse */
        PoWChallengeResponse: {
            /** Challenge */
            challenge: string;
            /** Difficulty */
            difficulty: number;
        };
        /**
         * PopunderInventoryResponse
         * @description Response for popunder inventory request.
         */
        PopunderInventoryResponse: {
            /** Name */
            name?: string | null;
            /** Delta */
            delta?: number | null;
        };
        /**
         * RecentComment
         * @description Comment preview for profile.
         */
        RecentComment: {
            /** Id */
            id: number;
            /** Gallery Id */
            gallery_id: number;
            /** Body */
            body: string;
            /** Post Date */
            post_date: number;
            /** Gallery Title */
            gallery_title: string;
        };
        /**
         * RecentFavorite
         * @description Gallery info for recent favorites on profile page.
         */
        RecentFavorite: {
            /** Id */
            id: number;
            /** Media Id */
            media_id: string;
            /** Thumbnail */
            thumbnail: string;
            /** Thumbnail Width */
            thumbnail_width: number;
            /** Thumbnail Height */
            thumbnail_height: number;
            /** English Title */
            english_title: string;
            /** Japanese Title */
            japanese_title?: string | null;
            /**
             * Num Pages
             * @default 0
             */
            num_pages: number;
            /**
             * Tag Ids
             * @default []
             */
            tag_ids: number[];
        };
        /**
         * RecordPopunderRequest
         * @description Request to record a popunder event.
         */
        RecordPopunderRequest: {
            /** Name */
            name: string;
            /**
             * Type
             * @default popunder
             * @constant
             */
            type: "popunder";
            /**
             * Record
             * @default true
             */
            record: boolean;
        };
        /**
         * RecordPopunderResponse
         * @description Response for record popunder request.
         */
        RecordPopunderResponse: {
            /**
             * Success
             * @default true
             */
            success: boolean;
        };
        /** RefreshResponse */
        RefreshResponse: {
            /** Access Token */
            access_token: string;
            /** Refresh Token */
            refresh_token: string;
            user: components["schemas"]["UserInfo"];
        };
        /**
         * RelatedGalleriesResponse
         * @description Response for related galleries endpoint.
         */
        RelatedGalleriesResponse: {
            /** Result */
            result: components["schemas"]["GalleryListItem"][];
        };
        /**
         * ReviewFlagRequest
         * @description Request body for reviewing a comment flag.
         */
        ReviewFlagRequest: {
            /**
             * Action
             * @enum {string}
             */
            action: "approve" | "reject";
        };
        /**
         * ReviewFlagResponse
         * @description Response for flag review actions.
         */
        ReviewFlagResponse: {
            /** Success */
            success: boolean;
            /**
             * Is User Shadowbanned
             * @default false
             */
            is_user_shadowbanned: boolean;
        };
        /** SessionListItem */
        SessionListItem: {
            /** Id */
            id: string;
            /** Created At */
            created_at: number;
            /** Expires At */
            expires_at: number;
            /** Ip Address */
            ip_address?: string | null;
            /** User Agent */
            user_agent?: string | null;
            /**
             * Current
             * @default false
             */
            current: boolean;
        };
        /**
         * ShadowbanResponse
         * @description Response for shadowban actions.
         */
        ShadowbanResponse: {
            /** Shadowbanned */
            shadowbanned: boolean;
        };
        /**
         * SubmitEditRequest
         * @description Request body for submitting a gallery edit.
         */
        SubmitEditRequest: {
            /**
             * Created Tags
             * @default []
             */
            created_tags: components["schemas"]["CreatedTag"][];
            /**
             * Added Tags
             * @default []
             */
            added_tags: number[];
            /**
             * Removed Tags
             * @default []
             */
            removed_tags: number[];
        };
        /**
         * SubmitEditResponse
         * @description Response for edit submission.
         */
        SubmitEditResponse: {
            /** Success */
            success: boolean;
            /** Edit Id */
            edit_id: number;
            /** Auto Applied */
            auto_applied: boolean;
        };
        /**
         * SuccessResponse
         * @description Simple success response.
         */
        SuccessResponse: {
            /**
             * Success
             * @default true
             */
            success: boolean;
            /** Message */
            message?: string | null;
        };
        /**
         * TagPaginatedResponse
         * @description Paginated tag response with optional alphabet mapping.
         */
        TagPaginatedResponse: {
            /** Result */
            result: components["schemas"]["TagResponse"][];
            /** Num Pages */
            num_pages: number;
            /**
             * Per Page
             * @default 120
             */
            per_page: number;
            /** Total */
            total?: number | null;
            /** Alphabet */
            alphabet?: {
                [key: string]: number[] | null;
            } | null;
        };
        /**
         * TagResponse
         * @description Tag response matching Django format.
         */
        TagResponse: {
            /** Id */
            id: number;
            /** Type */
            type: string;
            /** Name */
            name: string;
            /** Slug */
            slug: string;
            /** Url */
            url: string;
            /** Count */
            count: number;
        };
        /** TokenResponse */
        TokenResponse: {
            /** Access Token */
            access_token: string;
            /** Refresh Token */
            refresh_token: string;
            user: components["schemas"]["UserInfo"];
        };
        /**
         * UpdateProfileRequest
         * @description Request body for updating user profile.
         */
        UpdateProfileRequest: {
            /** Username */
            username?: string | null;
            /** Email */
            email?: string | null;
            /** About */
            about?: string | null;
            /** Favorite Tags */
            favorite_tags?: string | null;
            /** Theme */
            theme?: string | null;
            /** Current Password */
            current_password?: string | null;
            /** New Password */
            new_password?: string | null;
            /**
             * Remove Avatar
             * @default false
             */
            remove_avatar: boolean;
        };
        /**
         * UpdateProfileResponse
         * @description Response for profile update.
         */
        UpdateProfileResponse: {
            /** Success */
            success: boolean;
            /** Username */
            username: string;
            /** Email */
            email?: string | null;
            /** Avatar Url */
            avatar_url: string;
            /**
             * About
             * @default
             */
            about: string;
            /**
             * Favorite Tags
             * @default
             */
            favorite_tags: string;
            /**
             * Theme
             * @default black
             */
            theme: string;
        };
        /**
         * UserInfo
         * @description User info returned in token responses.
         */
        UserInfo: {
            /** Id */
            id: number;
            /** Username */
            username: string;
            /** Slug */
            slug: string;
            /** Avatar Url */
            avatar_url: string;
            /**
             * Theme
             * @default black
             */
            theme: string;
            /**
             * Is Staff
             * @default false
             */
            is_staff: boolean;
            /**
             * Is Superuser
             * @default false
             */
            is_superuser: boolean;
        };
        /**
         * UserMeResponse
         * @description Full user profile. Email hidden for API key auth.
         */
        UserMeResponse: {
            /** Id */
            id: number;
            /** Username */
            username: string;
            /** Slug */
            slug: string;
            /** Avatar Url */
            avatar_url: string;
            /**
             * Theme
             * @default black
             */
            theme: string;
            /**
             * Is Staff
             * @default false
             */
            is_staff: boolean;
            /**
             * Is Superuser
             * @default false
             */
            is_superuser: boolean;
            /**
             * About
             * @default
             */
            about: string;
            /**
             * Favorite Tags
             * @default
             */
            favorite_tags: string;
            /** Email */
            email?: string | null;
        };
        /**
         * UserProfileResponse
         * @description Full user profile response.
         */
        UserProfileResponse: {
            /** Id */
            id: number;
            /** Username */
            username: string;
            /** Slug */
            slug: string;
            /** Avatar Url */
            avatar_url: string;
            /**
             * Is Superuser
             * @default false
             */
            is_superuser: boolean;
            /**
             * Is Staff
             * @default false
             */
            is_staff: boolean;
            /** Date Joined */
            date_joined: number;
            /**
             * About
             * @default
             */
            about: string;
            /**
             * Favorite Tags
             * @default
             */
            favorite_tags: string;
            /** Recent Favorites */
            recent_favorites: components["schemas"]["RecentFavorite"][];
            /** Recent Comments */
            recent_comments: components["schemas"]["RecentComment"][];
        };
        /**
         * UserPublic
         * @description Public user information (shown in comments, etc.).
         */
        UserPublic: {
            /** Id */
            id: number;
            /** Username */
            username: string;
            /** Slug */
            slug: string;
            /** Avatar Url */
            avatar_url: string;
            /**
             * Is Superuser
             * @default false
             */
            is_superuser: boolean;
            /**
             * Is Staff
             * @default false
             */
            is_staff: boolean;
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
        /**
         * VoteRequest
         * @description Request body for voting on an edit.
         */
        VoteRequest: {
            /** Accept */
            accept: boolean;
        };
        /**
         * VoteResponse
         * @description Response for vote action.
         */
        VoteResponse: {
            /** Success */
            success: boolean;
            /** Upvotes */
            upvotes: number;
            /** Downvotes */
            downvotes: number;
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
    api_root_api_v2_get: {
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
                    "application/json": components["schemas"]["ApiRootResponse"];
                };
            };
        };
    };
    get_pow_challenge_api_v2_pow_get: {
        parameters: {
            query?: {
                action?: string | null;
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
                    "application/json": components["schemas"]["PoWChallengeResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_cdn_config_api_v2_cdn_get: {
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
                    "application/json": components["schemas"]["CdnConfigResponse"];
                };
            };
        };
    };
    get_config_api_v2_config_get: {
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
                    "application/json": components["schemas"]["ConfigResponse"];
                };
            };
        };
    };
    get_captcha_info_api_v2_captcha_get: {
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
                    "application/json": components["schemas"]["CaptchaInfoResponse"];
                };
            };
        };
    };
    get_all_galleries_api_v2_galleries_get: {
        parameters: {
            query?: {
                /** @description Page number */
                page?: number;
                /** @description Items per page */
                per_page?: number;
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
                    "application/json": components["schemas"]["PaginatedResponse_GalleryListItem_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_galleries_by_tag_api_v2_galleries_tagged_get: {
        parameters: {
            query: {
                /** @description Tag ID to filter by */
                tag_id: number;
                sort?: "date" | "popular" | "popular-today" | "popular-week" | "popular-month";
                /** @description Page number */
                page?: number;
                /** @description Items per page */
                per_page?: number;
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
                    "application/json": components["schemas"]["PaginatedResponse_GalleryListItem_"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_popular_galleries_api_v2_galleries_popular_get: {
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
                    "application/json": components["schemas"]["GalleryListItem"][];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_random_gallery_api_v2_galleries_random_get: {
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
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_gallery_api_v2_galleries__gallery_id__get: {
        parameters: {
            query?: {
                /** @description Comma-separated: comments,related,favorite */
                include?: string;
            };
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["GalleryDetailResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_related_galleries_api_v2_galleries__gallery_id__related_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["RelatedGalleriesResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    check_favorite_api_v2_galleries__gallery_id__favorite_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["FavoriteResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    add_to_favorites_api_v2_galleries__gallery_id__favorite_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["FavoriteResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    remove_from_favorites_api_v2_galleries__gallery_id__favorite_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["FavoriteResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    submit_gallery_edit_api_v2_galleries__gallery_id__edit_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["SubmitEditRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SubmitEditResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tags_by_ids_api_v2_tags_ids_get: {
        parameters: {
            query: {
                /** @description Comma-separated tag IDs */
                ids: string;
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
                    "application/json": components["schemas"]["TagResponse"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    search_tags_api_v2_tags_search_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AutocompleteRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TagResponse"][];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_tags_by_type_api_v2_tags__tag_type__get: {
        parameters: {
            query?: {
                sort?: "name" | "popular";
                /** @description Page number */
                page?: number;
                /** @description Items per page */
                per_page?: number;
            };
            header?: never;
            path: {
                tag_type: string;
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
                    "application/json": components["schemas"]["TagPaginatedResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_tag_by_slug_api_v2_tags__tag_type___slug__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                tag_type: string;
                slug: string;
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
                    "application/json": components["schemas"]["TagResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_gallery_comments_api_v2_galleries__gallery_id__comments_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": components["schemas"]["CommentResponse"][];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_comment_api_v2_galleries__gallery_id__comments_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_create_comment_api_v2_galleries__gallery_id__comments_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommentResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CaptchaErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_gallery_comment_count_api_v2_galleries__gallery_id__comments_count_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                gallery_id: number;
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
                    "application/json": number;
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_comment_api_v2_comments__comment_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                comment_id: number;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    flag_comment_api_v2_comments__comment_id__flag_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                comment_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["FlagCommentRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    search_galleries_api_v2_search_get: {
        parameters: {
            query: {
                /** @description Search query */
                query: string;
                /** @description Sort order */
                sort?: "date" | "popular" | "popular-today" | "popular-week" | "popular-month";
                /** @description Page number */
                page?: number;
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
                    "application/json": components["schemas"]["PaginatedResponse_GalleryListItem_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_me_api_v2_user_get: {
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
                    "application/json": components["schemas"]["UserMeResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    update_profile_api_v2_user_put: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateProfileRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UpdateProfileResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    delete_account_api_v2_user_delete: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["DeleteProfileRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["DeleteProfileResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    upload_avatar_api_v2_user_avatar_post: {
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    list_api_keys_api_v2_user_keys_get: {
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
                    "application/json": components["schemas"]["ApiKeyListItem"][];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    create_api_key_api_v2_user_keys_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_create_api_key_api_v2_user_keys_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ApiKeyCreateResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    revoke_api_key_api_v2_user_keys__key_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                key_id: string;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_favorites_api_v2_favorites_get: {
        parameters: {
            query?: {
                /** @description Search within favorites */
                q?: string | null;
                page?: number;
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
                    "application/json": components["schemas"]["PaginatedResponse_GalleryListItem_"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_random_favorite_api_v2_favorites_random_get: {
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
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_blacklist_api_v2_blacklist_get: {
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
                    "application/json": components["schemas"]["BlacklistListResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    update_blacklist_api_v2_blacklist_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["BlacklistUpdateRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["BlacklistResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_blacklist_ids_api_v2_blacklist_ids_get: {
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
                    "application/json": number[];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_user_profile_api_v2_users__user_id___slug__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: number;
                slug: string;
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
                    "application/json": components["schemas"]["UserProfileResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    login_api_v2_auth_login_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_login_api_v2_auth_login_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    register_api_v2_auth_register_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_register_api_v2_auth_register_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Conflict */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    refresh_api_v2_auth_refresh_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_refresh_api_v2_auth_refresh_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RefreshResponse"];
                };
            };
            /** @description Unauthorized */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    logout_api_v2_auth_logout_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_logout_api_v2_auth_logout_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    logout_all_api_v2_auth_logout_all_post: {
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_sessions_api_v2_auth_sessions_get: {
        parameters: {
            query?: never;
            header?: {
                "x-refresh-token"?: string | null;
            };
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
                    "application/json": components["schemas"]["SessionListItem"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    revoke_session_api_v2_auth_sessions__session_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                session_id: string;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    request_password_reset_api_v2_auth_reset_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_request_password_reset_api_v2_auth_reset_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    confirm_password_reset_api_v2_auth_reset_confirm_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Body_confirm_password_reset_api_v2_auth_reset_confirm_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Feature is currently disabled */
            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_user_mod_info_api_v2_moderation_users__user_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: number;
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
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    shadowban_user_api_v2_moderation_users__user_id__shadowban_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: number;
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
                    "application/json": components["schemas"]["ShadowbanResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    unshadowban_user_api_v2_moderation_users__user_id__shadowban_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: number;
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
                    "application/json": components["schemas"]["ShadowbanResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    review_comment_flag_api_v2_comments_flags__flag_id__review_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                flag_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["ReviewFlagRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ReviewFlagResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_pending_flags_api_v2_moderation_flags_get: {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
                /** @description Search by username or comment body */
                q?: string | null;
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
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_pending_edits_api_v2_moderation_edits_get: {
        parameters: {
            query?: {
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
                    "application/json": components["schemas"]["EditListResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_edit_api_v2_moderation_edits__edit_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                edit_id: number;
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
                    "application/json": components["schemas"]["EditResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    vote_on_edit_api_v2_moderation_edits__edit_id__vote_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                edit_id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["VoteRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["VoteResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    apply_edit_api_v2_moderation_edits__edit_id__apply_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                edit_id: number;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    reject_edit_api_v2_moderation_edits__edit_id__reject_post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                edit_id: number;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Bad Request */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    get_recent_comments_api_v2_moderation_comments_recent_get: {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
                /** @description Search by username or comment body */
                q?: string | null;
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
                    "application/json": components["schemas"]["ModerationCommentsListResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_spam_comments_api_v2_moderation_comments_spam_get: {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
                /** @description Search by username or comment body */
                q?: string | null;
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
                    "application/json": components["schemas"]["ModerationCommentsListResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    hide_comment_api_v2_moderation_comments__comment_id__hide_put: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                comment_id: number;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    unhide_comment_api_v2_moderation_comments__comment_id__hide_delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                comment_id: number;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    bulk_hide_api_v2_moderation_bulk_hide_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": number[];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    bulk_unhide_api_v2_moderation_bulk_unhide_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": number[];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    bulk_shadowban_api_v2_moderation_bulk_shadowban_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": number[];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    bulk_unshadowban_api_v2_moderation_bulk_unshadowban_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": number[];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
            /** @description Too many requests */
            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
        };
    };
    list_all_api_keys_api_v2_moderation_api_keys_get: {
        parameters: {
            query?: {
                page?: number;
                per_page?: number;
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
                    "application/json": {
                        [key: string]: unknown;
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    revoke_api_key_admin_api_v2_moderation_api_keys__key_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                key_id: string;
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
                    "application/json": components["schemas"]["SuccessResponse"];
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Not Found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ErrorResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_zones_api_v2_zones_get: {
        parameters: {
            query?: never;
            header?: {
                "user-agent"?: string;
            };
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
                        [key: string]: string;
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
    get_popunder_inventory_api_v2_zones_i_get: {
        parameters: {
            query?: never;
            header?: {
                "user-agent"?: string;
                "cf-ipcountry"?: string;
            };
            path?: never;
            cookie?: {
                tor_session?: string | null;
            };
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PopunderInventoryResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    record_popunder_hit_api_v2_zones_h_post: {
        parameters: {
            query?: never;
            header?: {
                "user-agent"?: string;
            };
            path?: never;
            cookie?: {
                tor_session?: string | null;
            };
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["RecordPopunderRequest"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RecordPopunderResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    popunder_redirect_api_v2_zones_pu_get: {
        parameters: {
            query: {
                name: string;
                out?: string | null;
            };
            header?: {
                "user-agent"?: string;
            };
            path?: never;
            cookie?: {
                tor_session?: string | null;
            };
        };
        requestBody?: never;
        responses: {
            /** @description Close window on error */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": unknown;
                    "text/html": unknown;
                };
            };
            /** @description Redirect to popunder URL */
            302: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Validation Error */
            422: {
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
