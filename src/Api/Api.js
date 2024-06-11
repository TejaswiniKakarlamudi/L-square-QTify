import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch top albums');
    }
}

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch new albums');
    }
}

export const AlbumSlug = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/album/:slug`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch album link');
    }
}

export const FetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/songs`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch songs');
    }
}

export const FetchFAQ = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/faq`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch FAQs');
    }
}

export const FetchGenres = async () => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        let data = await response.data;
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch genre songs');
    }
}