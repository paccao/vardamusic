<script lang="ts">
  import EncryptedEmail from '$components/encrypted-email.svelte'
  import allerthsBageriLogo from '$assets/allerths-bageri-logo.jpeg?enhanced'
  import { events } from '../../lib/constants'
</script>

<footer class="mt-8 border-t border-stone-400 px-4 py-8">
  <div class="mx-auto flex max-w-5xl flex-wrap justify-between">
    <div class="mb-8 w-full text-center sm:mb-0 sm:w-1/2 md:w-1/4 lg:w-1/5">
      <h3 class="mb-4 text-lg font-bold">Site links</h3>
      <ul class="mb-4 list-none gap-y-2">
        <li>
          <a
            href="/#"
            class="text-[#004b47] underline-offset-2 hover:underline focus:underline"
            >Up to the top</a
          >
        </li>
        <li>
          <a
            href="#{events['soundSession'].id}"
            class="text-[#004b47] underline-offset-2 hover:underline focus:underline"
            >{events['soundSession'].title}</a
          >
        </li>
        <li>
          <a
            href="/#{events['saxophonemeditations'].id}"
            class="text-[#004b47] underline-offset-2 hover:underline focus:underline"
            >{events['saxophonemeditations'].title}</a
          >
        </li>
        <li>
          <a
            href="/#{events['saxofonretreat'].id}"
            class="text-[#004b47] underline-offset-2 hover:underline focus:underline"
            >{events['saxofonretreat'].title}</a
          >
        </li>
      </ul>
    </div>
    <div class="mb-8 w-full text-center sm:mb-0 sm:w-1/2 md:w-1/4 lg:w-1/5">
      <h3 class="mb-4 text-lg font-bold">Follow me on instagram</h3>
      <ul class="mb-4 list-none">
        <li>
          <enhanced:img
            src={allerthsBageriLogo}
            alt="Profile picture"
            class="mr-2 inline-block h-8 w-8 rounded-full object-cover shadow-md"
          />
          <a
            href="https://www.instagram.com/vardamusic44/"
            class="inline-block font-medium text-[#004b47] underline-offset-2 hover:underline focus:underline"
          >
            @vardamusic44
          </a>
        </li>
      </ul>
    </div>
    <div class="mb-8 w-full text-center sm:mb-0 md:w-1/4 lg:w-1/5">
      <h3 class="mb-4 text-lg font-bold">Contact me</h3>
      <EncryptedEmail />
    </div>
  </div>
  <div class="mx-auto mt-8 max-w-5xl pt-4 text-center">
    <p>
      © <span id="year">{new Date().getFullYear().toString()}</span>
      Sacred Varda Music
    </p>
  </div>
</footer>
