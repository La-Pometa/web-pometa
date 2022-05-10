<template>
  <div id="social" class="flex gap-3">
    <a
      href="https://api.whatsapp.com/send?phone=+34649935970&text=!Hola%20Laia!,%20%C2%BFnos%20puedes%20ayudar?"
      target="_blank"
      title="Whatsapp de La Pometa"
      class="no-highlight"
      ><fa :icon="['fab', 'whatsapp']"
    /></a>
    <a
      href="https://www.instagram.com/lapometaagencia/"
      target="_blank"
      title="Instagram La Pometa"
      class="no-highlight"
      ><fa :icon="['fab', 'instagram']"
    /></a>
    <a
      href="http://facebook.com/lapometaagencia/"
      target="_blank"
      title="Facebook La Pometa"
      class="no-highlight"
      ><fa :icon="['fab', 'facebook']"
    /></a>
    <a
      href="https://www.linkedin.com/company/lapometagaagencia/"
      target="_blank"
      title="LinkedIn La Pometa"
      class="no-highlight"
      ><fa :icon="['fab', 'linkedin-in']"
    /></a>
    <a
      href="https://twitter.com/LaPometaAgencia"
      target="_blank"
      title="Twitter La Pometa"
      class="no-highlight"
      ><fa :icon="['fab', 'twitter']"
    /></a>
  </div>
</template>
<style lang="scss">
#social {
  @apply text-lg;
}
</style>
