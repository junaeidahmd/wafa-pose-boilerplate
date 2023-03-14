<template>
    <div class="main__body">
    <!-- HERO SECTION START -->
    <section class="hero__section">
        <div class="section__container">
        <div
            class="welcome__box d-flex align-items-center justify-content-between flex-wrap"
        >
            <h2 class="mb-0">Welcome Alor Pothe 👋</h2>
            <div
            class="hero__right d-flex align-items-center justify-content-between flex-wrap gap-4"
            >
            <a
                id="day"
                class="text-decoration-none d-inline-block day-active"
                href="#"
                >Today</a
            >
            <a id="week" class="text-decoration-none d-inline-block" href="#"
                >This week</a
            >
            <a id="month" class="text-decoration-none d-inline-block" href="#"
                >This month</a
            >
            <a id="year" class="text-decoration-none d-inline-block" href="#"
                >This year</a
            >
            </div>
        </div>
        </div>
    </section>
    <!-- HERO SECTION END -->

    <div class="day-item">
        <!-- SALES SECTION START -->
        <section class="sales__section">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-one">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Purchase</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-two">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Sales</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-three">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="logo" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-four">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Invoice Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- HERO SECTION END -->

        <!-- CHART SECTION START -->
        <section class="chart__section mt-5">
        <div class="section__container">
            <div class="card border-0 p-4">
            <div class="d-flex justify-content-between mb-4">
                <h4>Sales Details</h4>
                <form>
                <select name="test" class="form-control">
                    <option value="#">Last 30 days</option>
                    <option value="#">Last 15 days</option>
                    <option value="#">Last 7 days</option>
                    <option value="#">Last 3 days</option>
                </select>
                </form>
            </div>
            <div class="chart">
                <canvas id="myChartOne"></canvas>
            </div>
            </div>
        </div>
        </section>
        <!-- CHART SECTION END -->

        <!-- SALES TABLE SECTION START -->
        <section class="sales__table__section mt-4">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">User Data Tables</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>

                <table class="table" id="table_one">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">Purchase Payment Due</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>
                <table class="table" id="table_two">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- SALES TABLE SECTION END -->

        <!-- STOCK SECTION START -->
        <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
            <div class="d-flex align-items-center mb-3">
                <h4 class="mb-0 me-2">Product Stock Alert</h4>
                <img src="../../public/img/alert-circle.svg" alt="logo" />
            </div>

            <table id="table_three">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Location</th>
                    <th>Current Stock</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Weekender Soda</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>2/11/12</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 kg</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section>
        <!-- STOCK SECTION END -->
    </div>

    <div class="week-item">
        <!-- SALES SECTION START -->
        <section class="sales__section">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-one">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Purchase</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$300.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-two">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Sales</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$900.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-three">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$230.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="logo" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-four">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Invoice Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- HERO SECTION END -->

        <!-- CHART SECTION START -->
        <section class="chart__section mt-5">
        <div class="section__container">
            <div class="card border-0 p-4">
            <div class="d-flex justify-content-between mb-4">
                <h4>Sales Details</h4>
                <form>
                <select name="test" class="form-control">
                    <option value="#">Last 30 days</option>
                    <option value="#">Last 15 days</option>
                    <option value="#">Last 7 days</option>
                    <option value="#">Last 3 days</option>
                </select>
                </form>
            </div>
            <div class="chart">
                <canvas id="myChartTwo"></canvas>
            </div>
            </div>
        </div>
        </section>
        <!-- CHART SECTION END -->

        <!-- SALES TABLE SECTION START -->
        <section class="sales__table__section mt-4">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">User Data Tables</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>

                <table class="table" id="table_one">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">Purchase Payment Due</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>
                <table class="table" id="table_two">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- SALES TABLE SECTION END -->

        <!-- STOCK SECTION START -->
        <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
            <div class="d-flex align-items-center mb-3">
                <h4 class="mb-0 me-2">Product Stock Alert</h4>
                <img src="../../public/img/alert-circle.svg" alt="logo" />
            </div>

            <table id="table_three">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Location</th>
                    <th>Current Stock</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Weekender Soda</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>2/11/12</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 kg</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section>
        <!-- STOCK SECTION END -->
    </div>

    <div class="month-item">
        <!-- SALES SECTION START -->
        <section class="sales__section">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-one">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Purchase</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$980.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">5.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-two">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Sales</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$270.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-three">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$700.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="logo" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-four">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Invoice Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$900.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- HERO SECTION END -->

        <!-- CHART SECTION START -->
        <section class="chart__section mt-5">
        <div class="section__container">
            <div class="card border-0 p-4">
            <div class="d-flex justify-content-between mb-4">
                <h4>Sales Details</h4>
                <form>
                <select name="test" class="form-control">
                    <option value="#">Last 30 days</option>
                    <option value="#">Last 15 days</option>
                    <option value="#">Last 7 days</option>
                    <option value="#">Last 3 days</option>
                </select>
                </form>
            </div>

            <div class="chart">
                <canvas id="myChartThree"></canvas>
            </div>
            </div>
        </div>
        </section>
        <!-- CHART SECTION END -->

        <!-- SALES TABLE SECTION START -->
        <section class="sales__table__section mt-4">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">User Data Tables</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>

                <table class="table" id="table_one">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">Purchase Payment Due</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>
                <table class="table" id="table_two">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- SALES TABLE SECTION END -->

        <!-- STOCK SECTION START -->
        <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
            <div class="d-flex align-items-center mb-3">
                <h4 class="mb-0 me-2">Product Stock Alert</h4>
                <img src="../../public/img/alert-circle.svg" alt="logo" />
            </div>

            <table id="table_three">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Location</th>
                    <th>Current Stock</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Weekender Soda</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>2/11/12</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 kg</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section>
        <!-- STOCK SECTION END -->
    </div>

    <div class="year-item">
        <!-- SALES SECTION START -->
        <section class="sales__section">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-one">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Purchase</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$700.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">9.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-two">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Sales</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$500.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">3.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-three">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Total Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$100.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="logo" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-sm-12 mt-3">
                <div class="card border-0 card-four">
                <div
                    class="card__header d-flex align-items-center justify-content-between"
                >
                    <h5 class="mb-0 text-light">Invoice Due</h5>
                    <div class="header__icon">
                    <img src="../../public/img/sales.svg" alt="sales" />
                    </div>
                </div>
                <h2 class="mb-0 text-light mt-3">$200.00</h2>
                <div class="card__footer">
                    <p class="mb-0 text-light mt-2">
                    <img src="../../public/img/sales-2.svg" alt="" />
                    <span class="sales-point mb-0 ms-2">8.5%</span>
                    Up from yesterday
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- HERO SECTION END -->

        <!-- CHART SECTION START -->
        <section class="chart__section mt-5">
        <div class="section__container">
            <div class="card border-0 p-4">
            <div class="d-flex justify-content-between mb-4">
                <h4>Sales Details</h4>
                <form>
                <select name="test" class="form-control">
                    <option value="#">Last 30 days</option>
                    <option value="#">Last 15 days</option>
                    <option value="#">Last 7 days</option>
                    <option value="#">Last 3 days</option>
                </select>
                </form>
            </div>
            <div class="chart">
                <canvas id="myChartFour"></canvas>
            </div>
            </div>
        </div>
        </section>
        <!-- CHART SECTION END -->

        <!-- SALES TABLE SECTION START -->
        <section class="sales__table__section mt-4">
        <div class="section__container">
            <div class="row">
            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">User Data Tables</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>

                <table class="table" id="table_one">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>

            <div class="col-lg-6 col-md-12 mt-3">
                <div class="card border-0 bg-white">
                <div class="d-flex align-items-center mb-3">
                    <h4 class="mb-0 me-2">Purchase Payment Due</h4>
                    <img src="../../public/img/alert-circle.svg" alt="logo" />
                </div>
                <table class="table" id="table_two">
                    <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Invoice No.</th>
                        <th>Due Amount</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td>Darrell Steward</td>
                        <td>10/28/12</td>
                        <td>$351.02</td>
                    </tr>

                    <tr>
                        <td>Esther Howard</td>
                        <td>7/18/17</td>
                        <td>$948.55</td>
                    </tr>

                    <tr>
                        <td>Cody Fisher</td>
                        <td>8/2/19</td>
                        <td>$767.50</td>
                    </tr>

                    <tr>
                        <td>Courtney Henry</td>
                        <td>2/11/12</td>
                        <td>$778.35</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </section>
        <!-- SALES TABLE SECTION END -->

        <!-- STOCK SECTION START -->
        <section class="stock__section mt-5">
        <div class="section__container">
            <div class="card border-0 bg-white p-4">
            <div class="d-flex align-items-center mb-3">
                <h4 class="mb-0 me-2">Product Stock Alert</h4>
                <img src="../../public/img/alert-circle.svg" alt="logo" />
            </div>

            <table id="table_three">
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Location</th>
                    <th>Current Stock</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 pis</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Weekender Soda</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>2/11/12</td>
                    <td><button class="stock-in">In stock</button></td>
                </tr>

                <tr>
                    <td>
                    <span className="stock-img"
                        ><img class="me-2" src="../../public/img/watch.svg" alt="img" />
                        <span className=" d-inline-block"
                        >Feelin' Peachy Socks</span
                        ></span
                    >
                    </td>
                    <td>Alor Pothe</td>
                    <td>0.00 kg</td>
                    <td><button class="stock-out">out of stock</button></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </section>
        <!-- STOCK SECTION END -->
    </div>

    <!-- =========================================== -->

    <!-- ============================================================= -->

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
</template>

<script>
export default {
    mounted(){
    //   $(document).ready(function () {
    //     $('#user_table').DataTable({
    //       searching: false,
    //       lengthChange: false,
    //       responsive: true,
    //     });
    //   });
    // },

    $(document).ready(function () {
    $('#table_one, #table_two, #table_three').DataTable({
      searching: false,
      lengthChange: false,
      responsive: true,
    });
  });
    }
}
</script>

<style>

</style>