// import React from 'react'
// import style from './Pagination.module.css'
// import rightarr from '../../images/rightarr.svg'
// import leftarr from '../../images/leftarr.svg'


// const Pagenation = ({ goToCurrentPage, prevPage, nextPage, page ,pageLimit}) => {
    
//     const getPaginationGroup = () => {
//         let start = Math.floor((page - 1) / pageLimit) * pageLimit;
//         return new Array(pageLimit).fill().map((ele, index) => start + index + 1);
//     };

//     return (
//         <>
//             <div className={style.buttons}>
//                 <button id={style.prev} onClick={prevPage} disabled={page === 1}>
//                     <img src={leftarr} alt="leftarr" />

//                 </button>
//                 {getPaginationGroup().map((res, ind) => {
//                     return (
//                             <button className={style.button} key={ind} id={page === res ? style.active : ""}
//                                 onClick={() => goToCurrentPage(res)}>
//                                 {res}
//                             </button>

//                     )
//                 })}
//                 <button id={style.next} onClick={nextPage} disabled={page === totalPage}>
//                     <img src={rightarr} alt="rightarr" />

//                 </button>
//             </div>
//         </>
//     )
// }

// export default Pagenation




import React from 'react'
import style from './Pagination.module.css'
import rightarr from '../../images/rightarr.svg'
import leftarr from '../../images/leftarr.svg'


const Pagenation = ({ goToCurrentPage, prevPage, nextPage, page, totalPage, pageLimit }) => {


    const getPaginationGroup = () => {
        let start = Math.floor((page - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, index) => start + index + 1);
    };

    return (
        <>
            <div className={style.buttons}>
                <button id={style.prev} onClick={prevPage} disabled={page === 1}>
                    <img src={leftarr} alt="PreviousIcon" />leftarr
                </button>
                {getPaginationGroup().map((ele, i) => {
                    return (
                        <button className={style.button} key={i} id={page === ele ? style.active : ""}
                            onClick={() => goToCurrentPage(ele)}>
                            {ele}
                        </button>
                    )
                })}
                <button id={style.next} onClick={nextPage} disabled={page === totalPage}>
                    <img src={rightarr} alt="NextIcon" />
                </button>
            </div>
        </>
    )
}

export default Pagenation