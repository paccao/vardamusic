<script lang="ts">
  import Layout from '$layouts/main-layout.svelte'

  import EncryptedEmail from '$components/encrypted-email.svelte'
  import { instagramProfileLink } from '$lib/constants'
  import Divider from '$components/divider.svelte'

  import allerthsBageriLogo from '$assets/tree-of-varda.jpeg?enhanced'
  import saxophoneRetreat from '$assets/saxofonretreat.jpeg?enhanced'
  import crystalBowlsTuning from '$assets/crystalBowlsTuning.jpeg?enhanced'
  import treeOfVarda from '$assets/tree-of-varda.jpeg?enhanced'
  import treeOfVardaWithText from '$assets/tree-of-varda-with-text.jpeg?enhanced'
  import magganPlayingSaxophone from '$assets/maggan-playing-the-saxophone.png?enhanced'
  import motherMarySong from '$assets/mother-mary-1.wav'
  import trolleboSaxophoneMeditations from '$assets/trollebo-saxophone-meditations.jpeg?enhanced'
  import { events } from '../lib/constants'
  const siteName = 'Sacred Varda Music'

  // const bakingCourseDate = new Date('2026-03-21').toLocaleString('sv-SE', {
  //   dateStyle: 'full',
  // })
</script>

<Layout class="max-w-3xl xs:px-4" footer>
  <header class="py-8 text-center">
    <div>
      <div class="flex items-center justify-center gap-4">
        <h1
          class="inline-flex pt-2 font-display text-4xl font-bold sm:text-6xl"
        >
          {siteName}
        </h1>
      </div>
    </div>
  </header>

  <section class="relative">
    <section id="main-content">
      <section class="flex items-center justify-center">
        <div class="mx-auto w-full">
          <Divider class="my-8" />
          <div class="mx-auto max-w-sm text-center text-balance" id="intro">
            <h2 class="font-display text-3xl font-bold">Beloved, welcome!</h2>
            <p class="pt-4">
              This is a sacred website and it is activated and loaded with pure
              Christ conciousness, ancient wisdom, unconditional love. It's a
              sanctuary for those that are here to remember.
            </p>
            <p class="pt-4">
              We breath life into this moment here and now. There is no right or
              wrong way. When your heart feels joy - celebrate! When your heart
              feels quiet - honor that. Here and now everything is perfect.
            </p>
            <p class="my-8">With love, Maggan/Varda</p>
            <enhanced:img
              src={treeOfVarda}
              alt="A picture of a tree that represents Varda"
              class="mx-auto my-8 h-auto w-full max-w-[350px] rounded-md object-cover"
            />
            <p>
              Varda - she rescues the elves from danger to a safe place with
              sacred soundhealing, retreats, meditations, crystal bowl- &
              saxophone-music.
            </p>
          </div>
          <audio controls class="mx-auto my-8">
            <source src={motherMarySong} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <p class="mx-auto max-w-sm text-center text-balance">
            Mother Mary holds you in a pale blue light of belonging. Take a deep
            breath, relax and listen to this free short meditation at least 3
            times.
          </p>

          <Divider class="my-4" />

          <p class="mx-auto max-w-sm py-2 text-center text-balance">
            I have just started building a library of my meditation music, to
            help you raise your frequency, and also calm your nervous system.
            Some of them has a text file included so that you can fully anchor.
          </p>
          <p class="mx-auto max-w-sm py-2 text-center">
            You can buy some of my music already, just send me an email. You can
            also listen to my music on instagram <a
              href={instagramProfileLink}
              class="inline-block font-medium text-[#004b47] underline-offset-2 hover:text-[#004b47] hover:underline focus:text-[#004b47] focus:underline"
            >
              @vardamusic44
            </a>
          </p>

          <Divider class="my-8" />

          <div class="mx-auto max-w-screen-sm px-4">
            <p class="py-2">
              I don't know how you found me, but I know that you are here for a
              reason. Just by start reading here you begin to activate your
              Female Divine within you. By reading this you will start
              remembering who you truly are.
            </p>
            <p class="py-2">
              If you can feel a YES in your body then this is your home. You
              have felt the call and right now you don't know what you shall do
              with it. <a
                href="#read-more"
                class=" text-[#004b47] underline underline-offset-2 hover:underline focus:text-[#004b47] focus:underline"
                >Read more here</a
              >
            </p>
            <p class="py-2">
              Enjoy all of this website. Me and all the other angels have made
              it especially for you. 🤍🪽
            </p>
          </div>
          <Divider class="my-8" />

          <section class="mb-8 flex flex-col">
            <h2 class="mt-8 text-center font-display text-3xl font-bold">
              Site navigation
            </h2>
            <a
              href="#{events['soundSession'].id}"
              class="px-6 py-2 text-center text-xl text-[#004b47] underline underline-offset-2 hover:underline focus:text-[#004b47] focus:underline"
              >{events['soundSession'].title}</a
            >
            <a
              href="#{events['saxophonemeditations'].id}"
              class="px-6 py-2 text-center text-xl text-[#004b47] underline underline-offset-2 hover:underline focus:text-[#004b47] focus:underline"
              >{events['saxophonemeditations'].title}</a
            >
            <a
              href="#{events['saxofonretreat'].id}"
              class="px-6 py-2 text-center text-xl text-[#004b47] underline underline-offset-2 hover:underline focus:text-[#004b47] focus:underline"
              >{events['saxofonretreat'].title}</a
            >
            <p class="py-4 text-center text-2xl text-gray-200">♫</p>
            <EncryptedEmail />
            <ul class="flex justify-center pt-4">
              <li>
                <enhanced:img
                  src={allerthsBageriLogo}
                  alt="Allerths bageri profile picture"
                  class="mr-2 inline-block h-8 w-8 rounded-full object-cover shadow-md"
                />
                <a
                  href={instagramProfileLink}
                  class="inline-block font-medium text-[#004b47] underline-offset-2 hover:text-[#004b47] hover:underline focus:text-[#004b47] focus:underline"
                >
                  @vardamusic44
                </a>
              </li>
            </ul>
          </section>

          <Divider />

          <article class="my-8 w-full px-4">
            <h3 class="text-center font-display text-3xl font-bold">
              Who am I?
            </h3>
            <div class="mx-auto mb-2 max-w-screen-sm">
              <p class="pt-2">
                I got a call from my heart, something shifted in me. I tried to
                neglect it for a looong time but finally I could not do that
                anymore. So I quit my job and started to develop my new
                business-my bakery. But pretty soon I felt that there is more
                for me.
              </p>
              <p class="py-4">
                My life has shifted totally, sometimes it has been hard but it
                has been so worth it. To just trust in God, source or what you
                want to call it, it is Divine. I'm so grateful!
              </p>
              <p>
                So now I also work with healing sounds in different wonderful
                ways. I am so happy and honored to meet you all and provide a
                supportive and nourishing space so that your rose within you can
                grow into full bloom at it's own pace, and find your true path
                the soul always longed for. I work with The Archangels, Mother
                Mary, Jesus and Mary Magdalene.
              </p>
            </div>

            <enhanced:img
              class="mx-auto h-auto w-full max-w-[350px] rounded-md object-cover"
              src={crystalBowlsTuning}
              alt="A picture of Maggan playing the crystal bowls."
            />
          </article>

          <Divider />

          <article class="my-8 w-full px-4">
            <section id={events.soundConcerts.id}>
              <div class="mx-auto max-w-screen-sm">
                <h2
                  class="mb-4 text-center font-display text-4xl font-bold"
                  id={events.soundConcerts.id}
                >
                  {events.soundConcerts.title} - 10:th may 17.00
                </h2>
                <div class="mx-auto my-2 mb-2 max-w-screen-sm">
                  <h3 class="text-center">Maggan Allerth med vänner</h3>
                  <p class="text-center">Lotta Andersson - Gong</p>
                  <p class="text-center">Emilia Andersson - Gitarr</p>
                  <p class="text-center">Madeleine Fjärilsdotter - Dikt</p>
                  <p class="text-center">Colin Lindén - Shakers</p>
                  <p class="text-center">
                    Maggan Allerth - Saxofon, piano, sång & kristallskålar
                  </p>
                  <p class="pt-4">
                    I was inspired to make a concert with sounds, saxophone,
                    piano, crystal bowls and my voice. This concert will include
                    songs that I have written, as well as poems written by both
                    Madeleine and myself. It will be a calming, peaceful but
                    also activating experience for you.
                  </p>

                  <p class="my-2">
                    <span class="font-bold">Where: </span> Equmeniakyrkan, Hökerum.
                    Vallvägen 2, 523 74 Hökerum.
                  </p>

                  <p class="my-2">
                    <span class="font-bold">Cost: </span> 200 SEK, pay on site
                  </p>
                </div>

                <p class="my-2 text-center">I would love to see you there.</p>

                <div class="flex justify-center text-center">
                  <EncryptedEmail />
                </div>
              </div>
            </section>

            <Divider />

            <section id={events.soundSession.id}>
              <div class="mx-auto max-w-screen-sm">
                <h2
                  class="mb-4 text-center font-display text-4xl font-bold"
                  id={events.soundSession.id}
                >
                  {events.soundSession.title}
                </h2>
                <div class="mx-auto my-2 mb-2 max-w-screen-sm">
                  <p class="pt-2">
                    With the help of sound, your own voice and in combination
                    with my voice you can start to regulate your nervous system
                    into calm and peace. Through tuning we feel more in balance
                    and can start to heal things in our body. We can once again
                    feel that inner stillness. A personal sound healing session
                    is included.
                  </p>

                  <p class="pt-2">
                    I invite you to try this for yourself and book a 1 on 1
                    session with me. I would love to hear from you. Send me an
                    email and I will give you some suggestions when we can meet,
                    in person or online. This can also be done in smaller
                    groups. We work together for one hour.
                  </p>

                  <p class="pt-4">Comments about sacred sound sessions:</p>
                  <p class="pt-2 italic">
                    🤍 "Att komma ned i varv, bara vara, jorda sig och dels få
                    sjunga efter lugnande pianotoner och sedan få lyssna till
                    klangskålarna ger energi & lugn. Tack Maggan!" /Marie
                  </p>
                  <p class="pt-2 italic">
                    🤍 "Jag känner mej starkare och har mer energi, mer
                    motiverad till att göra saker som jag vill göra" /Anna
                  </p>
                  <p class="pt-2 italic">
                    🤍 "Så fridfullt och välgörande. Jag fick chills all over my
                    body" /Stina
                  </p>
                </div>
                <div class="flex justify-center text-center">
                  <EncryptedEmail />
                </div>
              </div>
            </section>

            <Divider />

            <section id={events.saxophonemeditations.id}>
              <enhanced:img
                class="mx-auto h-auto w-full max-w-[350px] rounded-md object-cover"
                src={trolleboSaxophoneMeditations}
                alt="Saxophone meditations in the forest, a picture of a mystical creature in Rångedala"
              />
              <h2 class="mt-8 mb-4 text-center font-display text-4xl font-bold">
                {events.saxophonemeditations.title}
              </h2>
              <div class="mx-auto mb-2 max-w-screen-sm">
                <p class="my-2">
                  The next saxophone meditation will be on the 31st of May 16:00
                  swedish time.
                </p>

                <p class="my-2">
                  And now it's time to once again have these meditations in the
                  forest. We'll meet at the parking lot at hembygdsgården in
                  Algutstorp. 516 93 Rångedala.
                </p>

                <p class="my-2">
                  Together we will take a 5 minute walk to a clearing in the
                  forest to have these calming saxophone meditations.
                </p>

                <p class="my-2">
                  My bakery provides a sourdough sandwich and herb tea to "the
                  swedish fika" after the meditation. Therefore registration to
                  the event is required.
                </p>
              </div>

              <p class="mx-auto my-4 max-w-screen-sm italic">
                🤍 "Att använda den egna rösten förstärker upplevelsen av frid
                och lugn vid saxofonmeditationen. /Lars"
              </p>

              <Divider class="my-5" />

              <div class="mx-auto max-w-screen-sm">
                <p class="my-4">
                  <span class="font-bold">When:</span>
                  Upcoming meditations: 31/5, 14/6, 2/8, 23/8, 13/9, 4/10
                </p>
                <p class="my-2">
                  <span class="font-bold">Price:</span>
                  220 SEK
                </p>
                <p class="my-2">
                  <span class="font-bold">Where: </span> Location may vary each
                  meditation. Be sure to check my Instagram
                  <a
                    href={instagramProfileLink}
                    target="_blank"
                    class="text-[#004b47] underline-offset-2 hover:text-[#004b47] hover:underline focus:underline"
                  >
                    @vardamusic44
                  </a>
                  for the latest information.
                </p>
                <p class="my-2">
                  <span class="font-bold">Summertime: </span>
                  Hembygdsgården in Algutstorp. 516 93 Rångedala or at Spången 101,
                  523 99 Hökerum
                </p>
                <p class="my-2">
                  <span class="font-bold">Wintertime: </span> Equmeniakyrkan, Hökerum.
                  Vallvägen 2, 523 74 Hökerum.
                </p>

                <p class="py-2 text-center font-bold">
                  ✨ You are welcome to register by sending me an email:
                </p>
                <div class="flex justify-center text-center">
                  <EncryptedEmail />
                </div>

                <p class="py-2 text-center">
                  You can find updates to the event at my instagram: <a
                    href={instagramProfileLink}
                    target="_blank"
                    class="text-[#004b47] underline-offset-2 hover:text-[#004b47] hover:underline focus:underline"
                    >@vardamusic44</a
                  >
                </p>
              </div>
            </section>

            <Divider />

            <section>
              <h2
                class="mb-4 text-center font-display text-4xl font-bold"
                id={events.saxofonretreat.id}
              >
                Are you ready for a positive change?
              </h2>
              <div class="flex justify-center">
                <p class="my-2 max-w-screen-sm text-2xl">
                  UPCOMING RETREAT the 9th of August 09:30 - 17:30 swedish time
                </p>
              </div>

              <div class="flex justify-center">
                <p class="my-2 max-w-screen-sm">
                  Welcome to an undemanding and magical day where you get the
                  chance to release stress, and begin a journey towards your
                  inner true self.
                </p>
              </div>

              <enhanced:img
                class="mx-auto my-8 mt-8 h-auto w-full max-w-[500px] rounded-md object-cover"
                src={saxophoneRetreat}
                alt="Welcome to a saxophoneretreat"
              />

              <div class="flex justify-center">
                <p class="my-2 max-w-screen-sm">
                  In this one-day retreat you'll get new insights, you will meet
                  other like-minded and if you want, new doors will opens for
                  you and you will grow and feel more aligned.
                </p>
              </div>

              <div class="flex justify-center">
                <p class="my-2 max-w-screen-sm">
                  Maggan Allerth is my name who leads this day. You will take
                  part of my saxophones restful music, crystal bowls gentle
                  healing sound, tuning and slow movement. You will get tools
                  with you that you can use in your everyday life. A yoga class
                  and a gong bath is also included. Yoga instructor Lotta
                  Andersson will lead the class.
                </p>
              </div>

              <div class="mx-auto mb-2 max-w-screen-sm">
                Tuning is like nourishing sound for your voice and body. This
                can provide a deeper healing in your body. I work with the
                archangels and mother Mary.
              </div>

              <div class="mx-auto my-2 max-w-screen-sm">
                <p>
                  Food is included in the price, mention if you have any
                  allergies.
                </p>
                <p>
                  Investment in yourself: 1950 SEK. Book before 3rd of August at
                  20:00.
                </p>
                <p>
                  Early bird price before 15th of June is 1650 SEK. Full payment
                  on the 4th of August is required.
                </p>
              </div>

              <Divider class="my-5" />

              <div class="mx-auto my-2 max-w-screen-sm">
                <p>
                  Send me an email and all details will be sent to you about
                  payment.
                </p>
                <p>You will receive a receipt.</p>
              </div>

              <div class="mx-auto max-w-screen-sm">
                <p class="my-2">
                  <span class="font-bold">Where:</span>
                  Hällstads bygdegård. HÄLLSTAD 142, 523 95 Älmestad.
                </p>

                <p class="my-2">
                  <span class="font-bold">To take with you:</span>
                  Yogamat or sleeping pad, small pillow and soft clothing.
                </p>

                <p class="text-center">
                  Welcome with your registration and any questions to:
                </p>
                <div class="flex justify-center text-center">
                  <EncryptedEmail />
                </div>
              </div>
            </section>
          </article>

          <Divider />

          <enhanced:img
            class="mx-auto my-8 h-auto w-full max-w-[250px] rounded-md object-cover"
            src={magganPlayingSaxophone}
            alt="Maggan playing the saxophone"
          />

          <p class="px-4 text-center font-bold">
            If you live in Sweden I also offer lessions in how to play the
            saxophone. 🎷🎶
          </p>

          <enhanced:img
            class="mx-auto my-8 h-auto w-full max-w-[400px] rounded-md object-cover"
            src={treeOfVardaWithText}
            alt="A picture of a tree that represents Varda, inviting you to send an email"
          />
          <Divider />
          <article class="my-4 w-full px-4 pt-4" id="read-more">
            <h4>Beloved,</h4>
            <p class="pt-2">
              You're so welcome to my sanctuary. It's a home for you and all
              angelic beings. It is a sacred space for those ready to step into
              their own initiation, to move beyond limitations, to connect more
              deeply with their soul wisdom and to start embody their unique
              gifts in the world.
            </p>
            <p class="pt-2">
              If this resonates with you, I am here to guide you and help you
              activate yourself and become fully You.
            </p>
            <p class="pt-2">
              If you choose to contact me you will start your journey to a more
              fullfilled life. I invite you to start the journey for real. Me
              and all the other angels love You.
            </p>
            <h4 class="pt-2">Thank you!</h4>
          </article>
        </div>
      </section>
    </section>
  </section>
</Layout>
