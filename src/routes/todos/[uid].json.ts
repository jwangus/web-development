import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const get = (request) => {
    return {
        status: 200,
        body: request.params.uid
    }
}

export const del = (request) => {
    api(request)
}