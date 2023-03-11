<template>
    <div class="main__body">
        <!-- start design here... -->
        <section class="pro-users__section">
        <div class="section__container">
            <div
            class="d-flex align-items-center justify-content-between heading-box flex-wrap gap-2"
            >
            <h4 class="mb-0">User</h4>
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
                    <table class="table mt-4 s-table" id="user_table">
                    
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
                        </tr>

                        <tr>
                        <td>Kamrul Islam</td>
                        <td>@kamrul</td>
                        <td>Admin</td>
                        <td>No Parent Unit</td>
                        <td>$1000</td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                            <button class="pro-edit-btn">
                                <i class="uil uil-edit-alt"></i> Edit
                            </button>
                            <button class="pro-delete-btn">
                                <i class="uil uil-trash-alt"></i> Delete
                            </button>
                            </div>
                        </td>
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
    name:'User'
}
</script>

<style>

</style>