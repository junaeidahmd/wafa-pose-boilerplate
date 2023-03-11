<template>
        <!-- MAIN SECTION END -->
        <div class="main__body">
      <!-- start design here... -->

      <section class="pro-users__section">
        <div class="section__container">
          <div
            class="d-flex align-items-center justify-content-between heading-box"
          >
            <h4 class="mb-0">Add role</h4>
          </div>
        </div>
      </section>

      <section class="add-role__section">
        <div class="section__container">
          <form>
            <div class="role-box">
              <div class="role-box-input">
                <label for="roleName">Role Name:*</label>
                <input
                  class="form-control mt-2"
                  type="text"
                  name="role"
                  placeholder="Role Name"
                />
              </div>
              <h6 class="mt-4">Permission</h6>
              <div class="permission-box">
                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">User</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-users" />
                    <label for="select-users">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="view-user" />
                    <label for="view-user">View User</label><br />

                    <input class="mt-3" type="checkbox" id="add-user" />
                    <label for="add-user">Add User</label><br />

                    <input class="mt-3" type="checkbox" id="edit-user" />
                    <label for="edit-user">Edit User</label><br />

                    <input class="mt-3" type="checkbox" id="delete-user" />
                    <label for="delete-user">Delete User</label>
                  </div>
                </div>

                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">Role</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-roles" />
                    <label for="select-roles">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="role-view-user" />
                    <label for="role-view-user">View User</label><br />

                    <input class="mt-3" type="checkbox" id="role-add-user" />
                    <label for="role-add-user">Add User</label><br />

                    <input class="mt-3" type="checkbox" id="role-edit-user" />
                    <label for="role-edit-user">Edit User</label><br />

                    <input class="mt-3" type="checkbox" id="role-delete-user" />
                    <label for="role-delete-user">Delete User</label>
                  </div>
                </div>

                <div class="permission__item">
                  <div class="left">
                    <p class="mb-0">Customer</p>
                  </div>
                  <div class="middle">
                    <input type="checkbox" id="select-customers" />
                    <label for="select-customers">Select All</label>
                  </div>
                  <div class="right">
                    <input type="checkbox" id="customer-view-user" />
                    <label for="customer-view-user">View User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-add-user"
                    />
                    <label for="customer-add-user">Add User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-edit-user"
                    />
                    <label for="customer-edit-user">Edit User</label><br />

                    <input
                      class="mt-3"
                      type="checkbox"
                      id="customer-delete-user"
                    />
                    <label for="customer-delete-user">Delete User</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-end">
              <button class="permission-save-btn" type="submit">Save</button>
            </div>
          </form>
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
          <h4 class="mb-0">Add User</h4>
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
                <label for="role">Role:</label>
                <input
                  class="form-control"
                  id="role"
                  type="text"
                  placeholder="Role"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 mt-2">
                <label for="user">User Name:</label>
                <input
                  class="form-control"
                  id="user"
                  type="text"
                  placeholder="@username"
                />
              </div>
              <div class="col-lg-6 mt-2">
                <label for="salary">Salary:</label>
                <input
                  class="form-control"
                  id="salary"
                  type="text"
                  placeholder="Role"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-lg-6 mt-2">
                <label for="password">Password:</label>
                <input
                  class="form-control"
                  id="password"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <div class="col-lg-6 mt-2">
                <label for="cpassword">Confirm Password:</label>
                <input
                  class="form-control"
                  id="cpassword"
                  type="text"
                  placeholder="Password"
                />
              </div>

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
  name:'addRole'
}
</script>

<style>

</style>