<script lang="ts">
  type Props = {
    textAlign: 'text-left' | 'text-center'
    type: any
    children?: any
  }
  const { textAlign, children }: Props = $props()
</script>

<div class={`mx-auto max-w-sm ${textAlign} AlignedTextBlock text-balance`}>
  {@render children?.()}
</div>
