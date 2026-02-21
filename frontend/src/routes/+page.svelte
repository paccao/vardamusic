<script lang="ts">
  import Layout from '$layouts/main-layout.svelte'

  import EncryptedEmail from '$components/encrypted-email.svelte'
  import { instagramProfileLink } from '$lib/constants'
  import Divider from '$components/divider.svelte'

  import allerthsBageriLogo from '$assets/allerths-bageri-logo.jpeg?enhanced'
  import saxophoneRetreat from '$assets/saxofonretreat.jpeg?enhanced'
  import crystalBowlsTuning from '$assets/crystalBowlsTuning.jpeg?enhanced'
  import motherMarySong from '$assets/mother-mary.wav'

  const siteName = 'Varda Music'

  // const bakingCourseDate = new Date('2026-03-21').toLocaleString('sv-SE', {
  //   dateStyle: 'full',
  // })

  /** Map of event HTML ids to event titles */
  const events = {
    saxofonretreat: {
      title: 'Retreats',
      id: 'event-saxophoneretreat',
    },
    saxofonmeditation: {
      title: 'Saxofonmeditation',
      id: 'event-saxophonemeditation',
    },
    soundSession: {
      title: 'Sacred sound 1 on 1',
      id: 'event-sound-session',
    },
  }
</script>

<Layout class="max-w-3xl xs:px-4" footer>
  <header class="py-8 text-center">
    <div>
      <span class="text-sm font-light tracking-widest">Välkommen till</span>
      <div class="flex items-center justify-center gap-4">
        <!-- <enhanced:img
          src={allerthsBageriLogo}
          alt="Profilbild för Allerths Bageri"
          class="aspect-square size-20 rounded-full object-cover shadow-md"
          loading="eager"
          fetchpriority="high"
        /> -->
        <h1
          class="inline-flex pt-2 font-display text-4xl font-bold sm:text-6xl"
        >
          {siteName}
        </h1>
      </div>
    </div>
  </header>

  <!-- <enhanced:img
    class="max-h-[400px] w-full object-cover shadow-md xs:rounded-md"
    src={breadMarketPlace}
    alt="Surdegsbröd från Allerths Bageri"
    loading="eager"
    fetchpriority="high"
  /> -->

  <section class="relative">
    <section id="main-content">
      <section class="flex items-center justify-center">
        <div class="mx-auto w-full">
          <Divider class="my-8" />
          <div class="mx-auto max-w-sm text-center text-balance" id="intro">
            <h2 class="font-display text-3xl font-bold">Beloved, welcome!</h2>
            <p class="pt-4">
              We breath life into this moment here and now. There is no right or
              wrong way. When your heart feels joy - celebrate! When your heart
              feels quiet - honor that. Here and now everything is perfect.
            </p>
            <p class="my-8">With love, Maggan/Varda</p>
          </div>
          <audio controls class="mx-auto mb-8">
            <source src={motherMarySong} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p class="mx-auto max-w-sm text-center text-balance">
            Mother Mary holds you in a pale blue light of belonging. Take a deep
            breath, relax and listen to this free short meditation at last 3
            times.
          </p>
          <Divider class="my-8" />
          <p class="mx-auto max-w-sm text-center text-balance">
            I don't know how you found me, but I know that you are here for a
            reason. Enjoy all of this website, Me and the other angels have made
            it especially for You🤍🪽
          </p>
          <Divider class="my-8" />

          <section class="mb-8 flex flex-col">
            <!-- <a
              href="#news"
              class="px-6 py-2 text-center text-xl text-green-500 underline underline-offset-2 hover:underline focus:text-green-500 focus:underline"
              >Se <span class="whitespace-nowrap">nyheter</span></a
            > -->
            <h2 class="mt-8 text-center font-display text-3xl font-bold">
              Site navigation
            </h2>
            <a
              href="#{events['saxofonretreat'].id}"
              class="px-6 py-2 text-center text-xl text-green-500 underline underline-offset-2 hover:underline focus:text-green-500 focus:underline"
              >{events['saxofonretreat'].title}</a
            >
            <a
              href="#{events['saxofonmeditation'].id}"
              class="px-6 py-2 text-center text-xl text-green-500 underline underline-offset-2 hover:underline focus:text-green-500 focus:underline"
              >{events['saxofonmeditation'].title}</a
            >
            <a
              href="#{events['soundSession'].id}"
              class="px-6 py-2 text-center text-xl text-green-500 underline underline-offset-2 hover:underline focus:text-green-500 focus:underline"
              >{events['soundSession'].title}</a
            >
            <p class="py-4 text-center text-2xl text-gray-200">♫</p>
            <EncryptedEmail />
            <ul class="flex justify-center pt-4">
              <li>
                <enhanced:img
                  src={allerthsBageriLogo}
                  alt="Profilbild"
                  class="mr-2 inline-block h-8 w-8 rounded-full object-cover shadow-md"
                />
                <a
                  href={instagramProfileLink}
                  class="inline-block font-medium underline-offset-2 hover:text-green-500 hover:underline focus:text-green-500 focus:underline"
                >
                  @allerthsbageri
                </a>
              </li>
            </ul>
          </section>

          <div class="mx-4 flex justify-center" id="historia">
            <!-- <enhanced:img
              class="h-auto w-full max-w-[400px] rounded-md object-cover shadow-md xs:rounded-md"
              src={boxWithGoodies}
              loading="eager"
              alt="Låda med bakverk, örter och växter."
            /> -->
          </div>

          <article class="my-8 w-full px-4">
            <h3 class="text-center font-display text-3xl font-bold">
              Who am I?
            </h3>
            <p class="mt-4">
              I got a call from my heart, something shifted in me. I tried to
              neglete it for a looong time but finally I could not do that
              anymore. So I quit my job and started to develope my new
              business-my bakery. But pretty soon I felt that there is more for
              me.
            </p>
            <!-- TODO: Add picture of Maggan -->
          </article>

          <!-- <div class="gap my-8 grid columns-2 grid-cols-2 grid-rows-2 gap-2">
            <enhanced:img
              class="aspect-square h-auto w-full rounded-md object-cover shadow-md"
              src={allerthsBageriLogo}
              alt="Kulturbröd uppställt för försäljning"
            />
            <enhanced:img
              class="aspect-square h-auto w-full rounded-md object-cover shadow-md"
              src={sixthHantverksbrod}
              alt="Kulturbröd uppställt för försäljning"
            />
            <enhanced:img
              class="aspect-square h-auto w-full rounded-md object-cover shadow-md"
              src={pumpabrod}
              alt="Kulturbröd uppställt för försäljning"
            />
            <enhanced:img
              class="aspect-square h-auto w-full rounded-md object-cover shadow-md"
              src={breadMarketPlace}
              alt="Kulturbröd uppställt för försäljning"
            />
          </div> -->

          <Divider />

          <section id="news">
            <!-- <h4 class="mb-4 text-center font-display text-2xl">Nyheter!</h4> -->

            <!-- <article class="grid justify-center gap-2 xs:grid-cols-2 xs:px-4">
              <enhanced:img
                class="mx-auto h-auto max-h-[500px] min-h-60 w-full max-w-[300px] items-center rounded-r-md object-cover shadow-md xs:rounded-md"
                src={breadPrenumeration}
                alt="Hantverksbröd"
              />
              <div class="mt-4 pr-4">
                <p class="mb-4 text-center font-display text-4xl font-bold">
                  Nu lanserar Allerths bageri brödprenumeration!
                </p>
                <p class="mt-4 px-4 text-center">
                  Du har nu möjlighet att starta en brödprenumeration: 2 till
                  10/15 bröd per månad eller varannan månad så du är säker på
                  att alltid ha tillgång till goda hantverksbröd.
                </p>
              </div>
            </article> -->

            <!-- <p class="mt-8 px-4 text-center">
              Du kan just nu välja mellan ett ljusare surdegsbröd eller rågkraft
              som bakas på enbart råg. Du kan avsluta din prenumeration när du
              önskar dock senast tre hela arbetsdagar innan nästa leverans.
            </p>

            <p class="mt-8 px-4 text-center">
              Boka din prenumeration via mejl: <EncryptedEmail />
            </p>

            <div class="mt-8 flex justify-center">
              <enhanced:img
                class="h-auto w-full rounded-l-md object-cover shadow-md"
                src={kakaobrod}
                alt="Surdegsbröd med kakao som dekoration för halloween."
              />
              <enhanced:img
                class="aspect-square h-full w-full rounded-r-md object-cover shadow-md"
                src={kladdkakekakor}
                alt="Kakor gjorda på kladdkaka"
              />
            </div> -->

            <!-- <Divider /> -->

            <!-- <p class="mt-8 px-4 text-center font-display text-3xl font-bold">
              Erbjudande: Designade hantverksbröd
            </p>

            <p class="mt-8 px-4 text-center">
              Skulle du vilja ha en unik gåva att ge till den där, du vet, som
              "redan har allt". Vad ska vi ge som present? Ett exklusivt
              hantverksbröd, designat för just den/de personerna kan vara något
              alldeles extra att ge till dina vänner.
            </p>

            <p class="mt-8 px-4 text-center">
              Jag specialdesignar gärna ditt bröd med det utseende vi kommer
              fram till tillsammans. Hör av dig via mail så tar vi det därifrån: <EncryptedEmail
              />
            </p>

            <enhanced:img
              class="mx-auto my-8 mt-8 h-auto w-full max-w-[500px] object-cover"
              src={specialdesignatBrod}
              alt="En bild på mitt specialdesignade bröd som du kan beställa"
            />

            <Divider /> -->

            <!-- <p class="mt-8 px-4 text-center">
              Allerths bageri har tilldelats ett microstöd från Leader Sjuhärad
              "förstudie i entreprenörskap" för att kunna utöka bageriets
              verksamhet. Dessutom fokus på miljö och hållbarhet.
            </p>

            <div class="mt-8 flex justify-center">
              <enhanced:img
                class="h-auto w-full rounded-md object-cover p-4 shadow-md"
                src={leaderSjuharad}
                alt="Logotyp Leader Sjuhärad"
              />
            </div>

            <Divider /> -->

            <!-- <h3 class="mb-8 text-center font-display text-3xl font-bold">
              Kommande marknader där du träffar Allerths bageri:
            </h3>

            <article class="grid gap-4 xs:grid-cols-2">
              <enhanced:img
                class="mx-auto h-auto max-h-[500px] min-h-60 w-full max-w-[300px] items-center rounded-r-md object-cover shadow-md xs:rounded-md"
                src={breadMarket}
                alt="Hantverksbröd till försäljning på marknad"
              />

              <ul class="list-inside list-disc space-y-2 px-4 xs:pl-0">
                <li>
                  Torsdagar från kl 09.30 finns färskt surdegsbröd vid Tolkabro
                  handel. Kolla instagram för eventuella ändringar <a
                    href={instagramProfileLink}
                    target="_blank"
                    class="text-green-500 underline-offset-2 hover:text-green-500 hover:underline focus:underline"
                    >@allerthsbageri</a
                  >
                </li>
                <li>REKO-ringen Ulricehamn - jämna veckor</li>
                <li>REKO-ringen Borås - ojämna veckor</li>
                <li>7/2 Alboga blommor & jord i Od kl 10-14</li>
                <li>28/3 Vårmarknad Bogastugan Hökerum</li>
                <li>11/4 Vårmarknad Västanå, Varnum</li>
              </ul>
            </article>
          </section>

          <Divider /> -->

            <article class="my-4 w-full px-4 pt-4" id="event">
              <!-- <h4 class="mb-4 text-center font-display text-2xl">
                Kommande event:
              </h4> -->

              <section id={events.soundSession.id}>
                <!-- <h2
                  class="mb-4 text-center font-display text-4xl font-bold"
                  id={events.soundSession.id}
                >
                  {events.soundSession.title}
                </h2> -->
                <div class="mx-auto max-w-screen-sm">
                  <enhanced:img
                    class="mx-auto my-8 h-auto w-full max-w-[350px] object-cover"
                    src={crystalBowlsTuning}
                    alt="Bild på Maggan som spelar på kristallskålar"
                  />
                  <div class="mx-auto mb-2 max-w-screen-sm">
                    <p class="my-2">
                      With help from sound, our own voice and in combination
                      with my voice you can start to regulate your nerver system
                      to calm and peace. And through tuning we feel more in
                      balance and start to heal things in our body. We can once
                      again feel that inner stillness. I also use my crystal
                      bowls when we meet.
                    </p>
                  </div>

                  <p class="text-center">
                    I now invite you to try this for yourself and book a 1 on 1
                    session with me. I would love to hear from you. Send me an
                    email and I give you some suggestions when we can meet, in
                    person or online.
                  </p>
                  <div class="flex justify-center text-center">
                    <EncryptedEmail />
                  </div>
                </div>
              </section>

              <Divider />

              <section>
                <h2
                  class="mb-4 text-center font-display text-4xl font-bold"
                  id={events.saxofonmeditation.id}
                >
                  {events.saxofonmeditation.title}
                </h2>
                <div class="mx-auto mb-2 max-w-screen-sm">
                  <p class="my-2">
                    Nästa saxofonmeditation blir den 1/3 kl 16.
                  </p>

                  <p class="my-2">
                    Vintertid är vi i Equmeniakyrkan i Hökerum. När våren kommer
                    flyttar meditationen ut i skogen igen.
                  </p>

                  <p class="my-2">
                    Efteråt fikar vi tillsammans, surdegsmacka från <a
                      href={instagramProfileLink}
                      target="_blank"
                      class="text-green-500 underline-offset-2 hover:text-green-500 hover:underline focus:underline"
                      >@allerthsbageri</a
                    > och örtte.
                  </p>
                </div>

                <Divider class="my-5" />

                <div class="mx-auto max-w-screen-sm">
                  <p class="my-2">
                    <span class="font-bold">När:</span>
                    Kommande meditiationer: 21/9, 19/10, 2/11, 16/11, 7/12, 4/1, 1/2,
                    1/3, 29/3
                  </p>
                  <p class="my-2">
                    <span class="font-bold">Kostnad:</span>
                    220 kr
                  </p>
                  <p class="my-2">
                    <span class="font-bold">Var: </span>
                    Grovare Spången 101, utanför Hökerum.
                    <span class="font-bold">Vintertid:</span> Equmeniakyrkan, Hökerum.
                  </p>

                  <p class="text-center font-bold">
                    ✨ Välkommen med din anmälan till:
                  </p>
                  <div class="flex justify-center text-center">
                    <EncryptedEmail />
                  </div>
                </div>
              </section>

              <Divider />

              <section>
                <h2
                  class="mb-4 text-center font-display text-4xl font-bold"
                  id={events.saxofonretreat.id}
                >
                  Är du redo för positiv förändring?
                </h2>
                <div class="flex justify-center">
                  <p class="my-2 max-w-screen-sm text-2xl">
                    SAXOFONRETREAT 14/3 kl 9.30 - ca 17.00
                  </p>
                </div>

                <div class="flex justify-center">
                  <p class="my-2 max-w-screen-sm">
                    Välkommen till en kravlös och magisk dag där du får chans
                    att släppa vardagens stress och måsten och istället påbörja
                    din inre resa mot ett sannare jag.
                  </p>
                </div>

                <enhanced:img
                  class="mx-auto my-8 mt-8 h-auto w-full max-w-[500px] object-cover"
                  src={saxophoneRetreat}
                  alt="Välkommen till en saxofonretreat"
                />

                <div class="flex justify-center">
                  <p class="my-2 max-w-screen-sm">
                    I denna endagsretreat får du nya insikter, du får möta andra
                    likasinnade och om du själv vill så öppnas nya dörrar för
                    dig, du får växa som människa.
                  </p>
                </div>

                <div class="flex justify-center">
                  <p class="my-2 max-w-screen-sm">
                    Maggan Allerth heter jag som leder dagen. Du får del av mina
                    saxofoners rogivande toners musik, kristallskålarnas milda
                    mjuka helande, läkande sång, tuning och rörelse. Du får med
                    dig nya verktyg hem som du kan använda i din vardag. Ett
                    yogapass med Lotta Andersson som yogainstruktör och gongspel
                    ingår också.
                  </p>
                </div>

                <!-- <enhanced:img
                  class="mx-auto my-8 h-auto w-full max-w-[350px] object-cover"
                  src={saxophoneRetreatBread}
                  alt="Bild på bröd vid saxofonretreat"
                /> -->

                <div class="mx-auto mb-2 max-w-screen-sm">
                  Vi kommer jobba med Tuning-vårdande ljud, som är som näring
                  för rösten. Vilket också kan påbörja en läkningsprocess i din
                  kropp. Jag utgår ifrån Marie Bergmans metod.
                </div>

                <div class="mx-auto mb-2 max-w-screen-sm">
                  Denna dag är för dig som vill uppnå en djupare avslappning. Vi
                  jobbar med ärkeänglarna, bland annat med avslappning på
                  cellnivå.
                </div>

                <div class="mx-auto mb-2 max-w-screen-sm">
                  Min intention med dagen är att du ska få ta emot, få vila i
                  dig själv, känna glädje och stilla ro mitt i allt det du står
                  i just nu och upptäcka nya sidor hos dig själv.
                </div>

                <div class="mx-auto my-2 max-w-screen-sm">
                  <p>
                    Denna heldag inkluderar mat, <a
                      href={instagramProfileLink}
                      target="_blank"
                      class="text-green-500 underline-offset-2 hover:text-green-500 hover:underline focus:underline"
                      >@allerthsbageri</a
                    > står för surdegsbröd till lunchen & även något gott till eftermiddagsfikat.
                  </p>
                  <p>
                    Investeringen i dig själv kostar 1990 kr, anmälan senast den
                    11/3 kl 18.00.
                  </p>
                  <p>
                    Det finns möjlighet till rabatt vid tidig bokning, senast
                    1/2. Priset blir då 1700kr.
                  </p>
                </div>

                <Divider class="my-5" />

                <div class="mx-auto my-2 max-w-screen-sm">
                  <p>Betalning sker vid ankomst. Swish eller kontant.</p>
                  <p>Meddela gärna allergier i god tid.</p>
                </div>

                <div class="mx-auto max-w-screen-sm">
                  <p class="my-2">
                    <span class="font-bold">Var:</span>
                    Hällstads bygdegård. HÄLLSTAD 142, 523 95 Älmestad.
                  </p>

                  <p class="my-2">
                    <span class="font-bold">Att ta med:</span>
                    Yogamatta eller liggunderlag. Kudde och mjuka kläder.
                  </p>

                  <p class="text-center font-bold">
                    Välkommen med din anmälan eller frågor till:
                  </p>
                  <div class="flex justify-center text-center">
                    <EncryptedEmail />
                  </div>
                </div>
              </section>
            </article>

            <Divider />

            <p class="text-center font-bold">
              If you live in Sweden I also offer lessions in how to play
              saxophone. 🎷🎶
            </p>

            <Divider />
          </section>
        </div>
      </section>
    </section>
  </section>
</Layout>
