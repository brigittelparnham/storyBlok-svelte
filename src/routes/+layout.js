import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import Hero from "../components/Hero.svelte";
import List from "../components/List.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

/** @type {import('./$types').LayoutLoad} */
export async function load() {
    storyblokInit({
        accessToken: "GngNrstzQWBf6caJVzzMpQtt",
        use: [apiPlugin],
        components: {
            feature: Feature,
            grid: Grid,
            page: Page,
            teaser: Teaser,
            hero: Hero,
            list: List
        },
        https: true,
        apiOptions: {
            region: ''
        }
    });
    let storyblokApi = await useStoryblokApi();
    const dataConfig = await storyblokApi.get('cdn/stories/config/', {
        version: 'draft',
        resolve_links: 'url'
    });

    return {
        storyblokApi: storyblokApi,
        header: dataConfig.data.story.content.header_menu
    };
}