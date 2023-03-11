<template>
    <!-- HEADER SECTION START -->
    <div class="main" id="main">
        <header class="d-flex align-items-center">
          <div class="menu__bar">
            <img src="../../../public/img/menu-bar.svg" alt="menu" />
          </div>
  
          <div class="search__bar">
            <div class="input__group">
              <form>
                <input type="text" placeholder="Search..." />
                <button type="submit"><i class="uil uil-search"></i></button>
              </form>
            </div>
          </div>
  
          <div class="search__bar-mobile">
            <button type="submit"><i class="uil uil-search"></i></button>
          </div>
          <div class="mobile__input">
            <form>
              <input type="text" placeholder="Search..." />
            </form>
          </div>
  
          <div class="user__info d-flex align-items-center ms-auto">
            <div
              class="user__info-item d-flex align-items-center justify-content-center"
            >
              <img src="../../../public/img/calculator.svg" alt="calculator" />
            </div>
  
            <div
              class="user__info-item d-flex align-items-center justify-content-center"
            >
              <img src="../../../public/img/notification.svg" alt="profile" />
            </div>
  
            <div class="user d-flex align-items-center justify-content-center">
              <!-- <img src="../../../public/img/profile.svg" alt="profile" /> -->
              <p class="mb-0 user__name">Shadin A.</p>
              <div class="user__arrow">
                <img src="../../../public/img/small-right.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </header>
    </div>
    <!-- HEADER SECTION END -->
</template>

<script>
export default {
    name:'theader'
}
</script>

<style>

</style>