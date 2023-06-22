<script>
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

  export let blok;

</script>

<div
  use:storyblokEditable={blok}
>
<ul class="list-disc">
  {#each blok.element as blok}
	<li>{blok.text}</li>
  {/each}
  </ul>
</div>
