<script lang="ts">
  type Props = {
    src: string
    alt: string
    class: string
    caption?: string
  }
  let {
    src,
    alt = 'Bilden kunde inte laddas in',
    class:
      className = 'mx-auto my-6 h-auto w-full max-w-[350px] rounded-md object-cover', // default value, keystatic.config.ts
    caption,
  }: Props = $props()
</script>

{#if src}
  {#if caption}
    <figure>
      <enhanced:img class={className} {src} {alt} />
      <figcaption class="mb-4 text-center text-[10px]">{caption}</figcaption>
    </figure>
  {:else}
    <enhanced:img class={className} {src} {alt} />
  {/if}
{/if}
