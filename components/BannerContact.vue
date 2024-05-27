<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-0 md:gap-10 md:mb-20"
  >
    <div
      class="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-10 px-8 rounded-xl w-full mr-5"
    >
      <h2 class="text-3xl md:text-5xl mb-2">Let's work together!</h2>
      <p class="mb-4 text-xl">
        Looking for a experienced frontend developer to help you with your next
        project? Let's get in touch!
      </p>
      <Button
        title="E-mail"
        link="mailto:jonah@jkagency.nl"
        classes="bg-white text-black w-fit"
      />
    </div>
    <div
      class="text-black py-10 flex flex-col justify-center items-start rounded-xl w-full md:mr-5"
    >
      <h2 class="text-3xl md:text-5xl mb-4">Find me on...</h2>
      <div class="flex gap-4">
        <a
          href="https://github.com/jonahkalkman"
          target="_blank"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <IconsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jonahkalkman/"
          target="_blank"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <IconsLinkedin />
        </a>
        <a
          href="https://twitter.com/jonahkalkman"
          target="_blank"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <IconsTwitter />
        </a>
      </div>
    </div>
  </div>
</template>
