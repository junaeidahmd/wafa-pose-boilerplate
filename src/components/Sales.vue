<template>

    <div class="main__body">
      <!-- start design here... -->

      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
          >
            <h4 class="mb-0">Sales Commission Agents</h4>
            <button class="user-add-btn" id="user-add-btn">
              <span class="me-1">+</span>Add
            </button>
          </div>
        </div>
      </section>

      <section class="pro-search__section">
        <div class="section__container">
          <div
            class="pro__search d-flex align-items-center justify-content-between flex-wrap gap-2"
          >
            <div class="pro-input-group">
              <form>
                <div class="d-flex align-items-center">
                  <label for="search-user">
                    <i class="uil uil-search"></i>
                  </label>
                  <input id="search-user" type="text" placeholder="Search" />
                </div>

                <button type="submit" style="display: none">Submit</button>
              </form>
            </div>
            <div class="pro-select-box d-flex gap-3">
              <!-- dropdown menu -->
              <div class="drop-menu">
                <div class="drop-btn">
                  <span class="dBtn-text"
                    >Show <b class="mb-0 ms-1">20</b></span
                  >
                  <i class="uil uil-angle-down"></i>
                </div>

                <ul class="d-options">
                  <li class="d-option">
                    <p class="d-option-text mb-0">
                      Show <b class="mb-0 ms-1">30</b>
                    </p>
                  </li>
                  <li class="d-option">
                    <p class="d-option-text mb-0">
                      Show <b class="mb-0 ms-1">20</b>
                    </p>
                  </li>
                  <li class="d-option">
                    <p class="d-option-text mb-0">
                      Show <b class="mb-0 ms-1">15</b>
                    </p>
                  </li>

                  <li class="d-option">
                    <p class="d-option-text mb-0">
                      Show <b class="mb-0 ms-1">10</b>
                    </p>
                  </li>

                  <li class="d-option">
                    <p class="d-option-text mb-0">
                      Show <b class="mb-0 ms-1">5</b>
                    </p>
                  </li>
                </ul>
              </div>

              <!-- select menu -->
              <div class="select-menu">
                <div class="select-btn">
                  <span class="sBtn-text">Export</span>
                  <i class="uil uil-angle-down"></i>
                </div>

                <ul class="options">
                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Copy</p>
                  </li>

                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Export to CSV</p>
                  </li>

                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Export to Excel</p>
                  </li>

                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Export to PDF</p>
                  </li>

                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Print</p>
                  </li>

                  <li class="option">
                    <span class="option-circle"></span>
                    <p class="option-text mb-0">Column Visibility</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pro-table__section">
        <div class="section__container">
          <div class="table__wrapper">
            <div class="table-scrollable">
              <table class="table mt-4" id="user_table">
                <thead>
                  <tr>
                    <th style="border-top-left-radius: 10px">Name</th>
                    <th>Email</th>
                    <th>Contact No</th>
                    <th>Address</th>
                    <th>Sales Commission Percentage(%)</th>
                    <th style="border-top-right-radius: 10px">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>Kamrul Islam</td>
                    <td>example@gmail.com</td>
                    <td>01923872837</td>
                    <td>Chittagong</td>
                    <td>12%</td>
                    <td>
                      <div class="dots-menu">
                        <div class="dots-btn">
                          <i class="uil uil-ellipsis-h"></i>
                        </div>

                        <ul class="t-options">
                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Copy</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">View</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Edit</p>
                          </li>

                          <li class="t-option">
                            <span class="t-option-circle"></span>
                            <p class="t-option-text mb-0">Delete</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>

                  <!-- calc row -->
                  <tr>
                    <td
                      style="
                        background-color: #e1e5e6 !important;
                        border-right: 1px solid #fff !important;
                        border-bottom-left-radius: 10px;
                      "
                      colspan="3"
                    >
                      Total:
                    </td>
                    <td
                      style="
                        background-color: #e1e5e6 !important;
                        border-right: 1px solid #fff !important;
                      "
                    >
                      $23,000
                    </td>
                    <td
                      style="
                        background-color: #e1e5e6 !important;
                        border-bottom-right-radius: 10px !important;
                      "
                      colspan="2"
                    >
                      $3,000
                    </td>
                    <!-- just using for prevent jquery table error! -->
                    <td style="display: none !important"></td>
                    <td style="display: none !important"></td>
                    <td style="display: none !important"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <!-- FOOTER SECTION START -->
      <footer>
        <div class="section__container">
          <div
            class="footer__text d-flex align-items-center justify-content-between py-4 flex-wrap gap-3"
          >
            <div class="copyright">
              <p class="mb-0">
                Alor Pothe - V2.11.2 | Copyright © 2022 All rights reserved.
              </p>
            </div>
            <div class="button__group d-flex align-items-center">
              <button id="zoom-out">A-</button>
              <button id="zoom-reset">A</button>
              <button id="zoom-in">A+</button>
              <button id="zoom-plus">A++</button>
            </div>
          </div>
        </div>
      </footer>
      <!-- FOOTER SECTION START -->
    </div>
    <!-- MAIN SECTION END -->

    <!-- add user popup -->
    <div
      class="add-user__wrapper d-flex align-items-center justify-content-center"
    >
      <div class="add-user__box">
        <div
          class="d-flex align-items-center justify-content-between popup-header"
        >
          <h4 class="mb-0">Add sales commission agent</h4>
          <i class="uil uil-multiply popup-times-btn" id="popup-close"></i>
        </div>

        <div class="popup-form">
          <form>
            <div class="row">
              <div class="col-lg-6 mt-2">
                <label for="fname">First Name: *</label>
                <input
                  class="form-control"
                  id="fname"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="col-lg-6 mt-2">
                <label for="lname">Last Name: *</label>
                <input
                  class="form-control"
                  id="lname"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 mt-2">
                <label for="email">Email:</label>
                <input
                  class="form-control"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div class="col-lg-6 mt-2">
                <label for="contact">Contact No:</label>
                <input
                  class="form-control"
                  id="contact"
                  type="text"
                  placeholder="Role"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-12 mt-2">
                <label for="address">Address:</label>
                <textarea
                  class="form-control"
                  name="address"
                  id="address"
                  rows="4"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 mt-2">
                <label for="sales">Sales Commission Percentage (%):</label>
                <input
                  class="form-control"
                  id="sales"
                  type="text"
                  placeholder="Sales Commission Percentage (%)"
                />
              </div>
            </div>

            <div
              class="d-flex align-items-center justify-content-end pro-form-btn"
            >
              <div class="d-flex gap-3">
                <span class="popup-close-btn" id="popup-close">Close</span>
                <button class="popup-save-btn">Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

</style>