<script lang="ts">
  import '@fontsource/italianno'
  import '@fontsource/quattrocento'
  import '../app.css'

  let { children } = $props()
</script>

<svelte:head>
  <title>Sacred Varda Music</title>
</svelte:head>

{@render children?.()}
