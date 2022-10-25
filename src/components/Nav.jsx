import React from 'react'

function Nav(props) {
  return (
    <header>
        
        <div className="profile" id={props.id[0]}>
            <img src="/img/profile__img.svg" alt="" />
            <div class="text" id={props.id[1]}>
                 Annette Black {/* Lf_tobs */}
            </div>
            <div class="slack" id={props.id[2]}>
                Lf_tobs_slack
            </div>
        </div>
        <div className="share">

            <img src="/img/Icon.svg" alt="" />
            
        </div>
    </header>
  )
}

export default Nav