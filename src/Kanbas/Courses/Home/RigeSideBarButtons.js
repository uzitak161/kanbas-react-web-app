import './index.css';

function RightSideBarButtons() {
    return (
        <div class="float-end d-none d-xxl-block ms-3">
            <div className="w-75 ms-4">
                <h5>Course Status</h5>
                <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                    type="button">Unpublish</button>
                <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                    type="button">Published</button>
                <br />
                <br />

                <ul class="list-group wd-sidebar-btns">
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                type="button">Import Existing Content</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                type="button">Import From Commons</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm"
                                type="button">Choose Home Page</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">View
                                Course Stream</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">New
                                Announcement</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">New
                                Analytics</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm" type="button">View
                                Course Notifications</button>
                        </a>
                    </li>
                </ul>

                <h1>Comming Up</h1>
                <a href="#">View Calendar</a>

                <ul>
                    <li><a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a></li>
                    <li><a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a></li>
                    <li><a href="#">CS5610 06 SP23 LEcture Sep 11 at 6pm</a></li>
                </ul>
            </div>
        </div>
    )
}

export default RightSideBarButtons;