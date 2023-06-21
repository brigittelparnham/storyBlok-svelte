import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    storyblokInit({
        accessToken: "KNKFZcCuH9zVGYqUd3cvtQtt",
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser
        },
        https: true,
        apiOptions: {
            region: ''
        }
    });
    let storyblokApi = await useStoryblokApi();

    return {
        storyblokApi: storyblokApi,
    };
}