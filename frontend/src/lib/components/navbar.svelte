<script lang="ts">
  import allerthsBageriLogo from '$assets/allerths-bageri-logo.jpeg?enhanced'
  import { cn } from '$lib/utils'
  import { buttonVariants } from '$components/ui/button'
  import { page } from '$app/state'
</script>

<nav class="flex items-center justify-between px-4 py-2 shadow-sm">
  <a class="flex items-center gap-4" href="/">
    <enhanced:img
      src={allerthsBageriLogo}
      alt="Profilbild för Allerths Bageri"
      class="size-12 rounded-full object-cover shadow-md"
      loading="eager"
      fetchpriority="high"
    />
    <h1 class="pt-2 font-display text-3xl font-bold xs:text-4xl">
      Varda Music
    </h1>
  </a>
</nav>
