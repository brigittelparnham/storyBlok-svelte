<script>
    import Icon from '@iconify/svelte';

	export let header;
    let showNav = false;

</script>

<header class="w-full h-24 bg-[#f7f6fd] bg-blue-200">
    <div class="container h-full mx-auto flex items-center justify-between bg-blue-200">
        <a href="/home">
            <h1 class=" text-3xl font-bold">Octopus fact</h1>
        </a>
        {#if header}

              <div class="navIcon bg-blue-200" on:click="{function(){showNav = !showNav}}">
                <Icon icon="ci:hamburger-md" width="50" height="50"/>
              </div>

                {#if showNav}
                  <div id="fic--menu">
                     <ul class=" text-lg font-bold">
                        {#each header as blok}
                            <li class="hover:text-[#50b0ae]">
                                <a href=/{blok.link.story.slug} on:click="{function(){showNav = !showNav}}"> {blok.link.story.name}</a>
                            </li>
                        {/each}
                    </ul>
                  </div>
                {/if}

          
        {/if}
    </div>
</header>