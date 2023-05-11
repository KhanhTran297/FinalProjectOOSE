import React from 'react';
import useCallApi from '@/hook/useCallApi';

const { useGet, usePost, useEdit, useDelete } = useCallApi();

export const getListPostApi = () => {
    const url = "/v1/post/list";
    return useGet({ url})
};

export const createPostApi = (params) => {
    const url = "/v1/post/create";
    return usePost({ url, requiredToken: true, params })
};

export const deletePostApi = (id) => {
    const url = `/v1/post/delete/${id}`;
    return useDelete({ url, requiredToken: true });
    
};

export const updatePostApi = (params) => {
    const url = "/v1/post/update";
    return useEdit({ url, requiredToken: true, params });
};