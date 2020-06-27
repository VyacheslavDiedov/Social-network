import React from "react";
import stale from "./users.module.css";


const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && stale.selectedPage}
                             onClick={(e) => {
                                 props.onPageCurrent(p)
                             }}>{p}</span>
            })}
        </div>

}

export default Pagination;