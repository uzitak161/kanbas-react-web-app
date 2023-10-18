import './index.css';

function RightSideBarButtons() {
    return (
        <div class="float-end d-none d-xl-block ms-3">
            <div className="w-75 ms-4">
                <br />

                <ul class="list-group wd-sidebar-btns">
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded"
                                type="button">Import Existing Content</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded"
                                type="button">Import From Commons</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded"
                                type="button">Choose Home Page</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded" type="button">View
                                Course Stream</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded" type="button">New
                                Announcement</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded" type="button">New
                                Analytics</button>
                        </a>
                    </li>
                    <li class="list-group-item">
                        <a href="#">
                            <button class="btn btn-light btn-outline-dark text-nowrap btn-sm rounded" type="button">View
                                Course Notifications</button>
                        </a>
                    </li>
                </ul>

                <br />
                <h6>ToDo</h6>
                <hr />

                <ul className='wd-todo-list'>
                    <li>Grade HW-1 Rocket Propulsion<p>Sep 11 at 11:45am</p></li>
                    <li>Grade HW-2 Thermodynamics<p>Sep 18 at 11:45am</p></li>
                    <li>Grade HW-3 Build a Rocket<p>Sep 26 at 11:45am</p></li>
                </ul>
            </div>
        </div>
    )
}

export default RightSideBarButtons;