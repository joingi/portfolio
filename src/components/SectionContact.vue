<template>
   <section class="section-contact">
        <div class="row">
          <div class="contact">
            <div class="contact__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">Contact Me</h2><br>
                  <small>Leave your name and emai, and I will get back to you</small>
                </div>
                <div class="form__group">
                  <input id="name" type="text" class="form__input" placeholder="Name" required>
                  <label for="name" class="form__label">Name</label>
                </div>

                <div class="form__group">
                  <input id="email" type="email" class="form__input" placeholder="Email" required>
                  <label for="email" class="form__label">Email</label>
                </div>

                <div class="form__group u-margin-bottom-medium">

                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="contact-1" name="size">
                    <label for="contact-1" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Work
                    </label>
                  </div>

                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="contact-2" name="size">
                    <label for="contact-2" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Consulting
                    </label>
                  </div>

                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="contact-3" name="size">
                    <label for="contact-3" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Collaboration
                    </label>
                  </div>

                </div>

                <div class="form-group">
                  <button class="btn btn-primary">Send &rarr; </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
</template>

<script>
export default {
name: 'SectionContact'
}
</script>

<style lang="scss" scoped>

.contact {
   background-image: linear-gradient(105deg,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 50%,
      transparent 50%, rgba(grey, .4) 10%),
    url('../assets/images/contact.jpg');
   background-size: 120%;
   border-radius: 3px;
   box-shadow: 0 1.5rem 4rem rgba($color-black, .15);

   @include respond(tab-land) {
     background-image: linear-gradient(105deg,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 70%,
      transparent 65%, rgba(grey, .4) 10%),
    url('../assets/images/contact.jpg');
    background-size: cover;
   }

   @include respond(tab-port) {
     background-image: linear-gradient(to right,
      rgba($color-white, .9) 0%,
      rgba($color-white, .9) 100%,
      rgba(grey, .4) 10%),
    url('../assets/images/contact.jpg');
   }

   &__form {
     width: 50%;
     padding: 6rem;

     @include respond(tab-land) {
       width: 65%;
     }
     @include respond(tab-port) {
       width: 100%;
     }
   }
}

</style>
