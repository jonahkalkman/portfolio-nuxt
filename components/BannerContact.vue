<template>
  <div class="grid grid-cols-2 grid-rows-1 gap-10 mb-20">
    <div class="bg-blue-700 text-white py-10 px-8 rounded-xl w-full mr-5">
      <h2 class="text-5xl mb-2">Let's work together!</h2>
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
      class="text-black py-10 flex flex-col justify-center items-start rounded-xl w-full mr-5"
    >
      <h2 class="text-5xl mb-4">Find me on...</h2>
      <div class="flex gap-4">
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            />
          </svg>
        </a>
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            />
          </svg>
        </a>
        <a
          href="mailto:jonah@jkagency.nl"
          class="bg-black text-white py-2 px-2 rounded-full flex items-center justify-center gap-2 w-12 h-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 14 14"
          >
            <g fill="none">
              <g clip-path="url(#primeTwitter0)">
                <path
                  fill="currentColor"
                  d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                />
              </g>
              <defs>
                <clipPath id="primeTwitter0">
                  <path fill="#fff" d="M0 0h14v14H0z" />
                </clipPath>
              </defs>
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
