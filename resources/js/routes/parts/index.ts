import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/parts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::index
* @see app/Http/Controllers/PartController.php:16
* @route '/parts'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/parts/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::create
* @see app/Http/Controllers/PartController.php:26
* @route '/parts/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\PartController::store
* @see app/Http/Controllers/PartController.php:34
* @route '/parts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/parts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PartController::store
* @see app/Http/Controllers/PartController.php:34
* @route '/parts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::store
* @see app/Http/Controllers/PartController.php:34
* @route '/parts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartController::store
* @see app/Http/Controllers/PartController.php:34
* @route '/parts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartController::store
* @see app/Http/Controllers/PartController.php:34
* @route '/parts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
export const edit = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/parts/{part}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
edit.url = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { part: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { part: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        part: typeof args.part === 'object'
        ? args.part.id
        : args.part,
    }

    return edit.definition.url
            .replace('{part}', parsedArgs.part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
edit.get = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
edit.head = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
const editForm = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
editForm.get = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::edit
* @see app/Http/Controllers/PartController.php:52
* @route '/parts/{part}/edit'
*/
editForm.head = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
export const update = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/parts/{part}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
update.url = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { part: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { part: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        part: typeof args.part === 'object'
        ? args.part.id
        : args.part,
    }

    return update.definition.url
            .replace('{part}', parsedArgs.part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
update.put = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
update.patch = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
const updateForm = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
updateForm.put = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartController::update
* @see app/Http/Controllers/PartController.php:62
* @route '/parts/{part}'
*/
updateForm.patch = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\PartController::destroy
* @see app/Http/Controllers/PartController.php:72
* @route '/parts/{part}'
*/
export const destroy = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/parts/{part}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PartController::destroy
* @see app/Http/Controllers/PartController.php:72
* @route '/parts/{part}'
*/
destroy.url = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { part: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { part: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            part: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        part: typeof args.part === 'object'
        ? args.part.id
        : args.part,
    }

    return destroy.definition.url
            .replace('{part}', parsedArgs.part.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::destroy
* @see app/Http/Controllers/PartController.php:72
* @route '/parts/{part}'
*/
destroy.delete = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PartController::destroy
* @see app/Http/Controllers/PartController.php:72
* @route '/parts/{part}'
*/
const destroyForm = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PartController::destroy
* @see app/Http/Controllers/PartController.php:72
* @route '/parts/{part}'
*/
destroyForm.delete = (args: { part: number | { id: number } } | [part: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const parts = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default parts