import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../wayfinder'
/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
export const carsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carsIndex.url(options),
    method: 'get',
})

carsIndex.definition = {
    methods: ["get","head"],
    url: '/cars',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
carsIndex.url = (options?: RouteQueryOptions) => {
    return carsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
carsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: carsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
carsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: carsIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
const carsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
carsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CarController::carsIndex
* @see app/Http/Controllers/CarController.php:15
* @route '/cars'
*/
carsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: carsIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

carsIndex.form = carsIndexForm

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
export const partsIndex = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partsIndex.url(options),
    method: 'get',
})

partsIndex.definition = {
    methods: ["get","head"],
    url: '/parts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
partsIndex.url = (options?: RouteQueryOptions) => {
    return partsIndex.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
partsIndex.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: partsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
partsIndex.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: partsIndex.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
const partsIndexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
partsIndexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partsIndex.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PartController::partsIndex
* @see app/Http/Controllers/PartController.php:15
* @route '/parts'
*/
partsIndexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: partsIndex.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

partsIndex.form = partsIndexForm
