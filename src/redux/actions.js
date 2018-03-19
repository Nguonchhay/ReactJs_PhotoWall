import { REMOVE_POST,  ADD_POST } from './action_types'

// Remove post
export function removePost(index) {
    return {
        type: REMOVE_POST,
        index
    }
}

// Add post
export function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}