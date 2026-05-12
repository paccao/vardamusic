<script lang="ts">
  let { data } = $props()
  import { markdocComponents } from '$lib/markdoc/components/index.ts'
</script>

<article>
  <data.post.Content components={markdocComponents} />
</article>
