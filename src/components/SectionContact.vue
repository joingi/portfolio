<template>
   <section class="section-contact">
        <div class="row">
          <div class="contact">
            <div class="contact__form">
              <form action="#" class="form">
                <div class="u-margin-bottom-medium">
                  <h2 class="heading-secondary">Contact Me</h2>
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
                    <input type="radio" class="form__radio-input" id="small" name="size">
                    <label for="small" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Small
                    </label>
                  </div>

                  <div class="form__radio-group">
                    <input type="radio" class="form__radio-input" id="large" name="size">
                    <label for="large" class="form__radio-label">
                      <span class="form__radio-button"></span>
                      Large
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

   height: 50rem;

   &__form {
     width: 50%;
     padding: 6rem;
   }
}

</style>
